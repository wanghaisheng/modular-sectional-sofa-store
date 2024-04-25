import prisma from '@books-about-food/database'
import { inngest } from '../../jobs'
import { Team } from '../../models/team'
import { can } from '../../policies'
import { AuthedService } from '../base'
import { teamIncludes } from '../utils'
import { AppError } from '../utils/errors'
import { createInviteSchema } from './schemas/create-invite'

export const createInvite = new AuthedService(
  createInviteSchema,
  async function ({ teamId, email, role } = {}, user) {
    const team = await prisma.team.findUnique({
      where: { id: teamId, memberships: { some: { userId: user.id } } },
      include: teamIncludes
    })

    if (!team) throw new AppError('NotFound', 'Team not found')
    if (!can(user, new Team(team)).update) {
      throw new AppError(
        'Forbidden',
        'You do not have permission to invite to this team.'
      )
    }

    const invite = await prisma.teamInvitation.create({
      data: {
        teamId,
        email,
        role,
        invitedById: user.id
      },
      include: { team: { select: { name: true } } }
    })

    inngest.send({
      name: 'jobs.email',
      data: {
        key: 'teamInvite',
        props: {
          inviterName: user.name || user.email,
          teamName: invite.team.name
        }
      },
      user: { email }
    })

    return invite
  }
)
