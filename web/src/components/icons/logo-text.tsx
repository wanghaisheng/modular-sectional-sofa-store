'use client'
import { SVGMotionProps, motion } from 'framer-motion'

export const LogoText = (props: SVGMotionProps<SVGElement>) => (
  <motion.svg
    width="96"
    height="52"
    viewBox="0 0 96 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.7821 6.54635C36.7821 2.7717 33.7271 0.113281 28.1752 0.113281C22.5793 0.113281 19.4949 2.75701 19.4949 6.54635C19.4949 10.3357 22.6233 12.9794 28.1752 12.9794C33.7271 12.9794 36.7821 10.321 36.7821 6.54635ZM32.6402 6.54635C32.6402 8.57321 31.098 9.80695 28.1752 9.80695C25.1936 9.80695 23.6368 8.57321 23.6368 6.54635C23.6368 4.5195 25.2524 3.28575 28.1752 3.28575C31.098 3.28575 32.6402 4.5195 32.6402 6.54635ZM11.0202 0.378672H1.50269V12.7161H11.5196C14.3543 12.7161 16.2783 11.218 16.2783 9.20578C16.2783 7.88392 15.3824 6.79705 13.8696 6.19487C15.0005 5.68081 15.7055 4.78488 15.7055 3.62458C15.7055 1.80335 13.899 0.378672 11.0202 0.378672ZM11.7399 4.1827C11.7399 4.8877 11.2846 5.13738 10.3593 5.13738H5.62988V3.28677H10.3593C11.2846 3.28677 11.7399 3.53646 11.7399 4.1827ZM12.1511 8.73579C12.1511 9.44078 11.6224 9.80796 10.6236 9.80796H5.64457V7.60486H10.6236C11.6224 7.60486 12.1511 7.97204 12.1511 8.73579ZM48.7377 0.113281C54.2896 0.113281 57.3446 2.7717 57.3446 6.54635C57.3446 10.321 54.2896 12.9794 48.7377 12.9794C43.1858 12.9794 40.0574 10.3357 40.0574 6.54635C40.0574 2.75701 43.1418 0.113281 48.7377 0.113281ZM48.7377 9.80695C51.6605 9.80695 53.2027 8.57321 53.2027 6.54635C53.2027 4.5195 51.6605 3.28575 48.7377 3.28575C45.8149 3.28575 44.1993 4.5195 44.1993 6.54635C44.1993 8.57321 45.7562 9.80695 48.7377 9.80695ZM65.1291 0.378672H61.0019V12.7161H65.1291V9.17641L66.6713 8.08954L71.7091 12.7161H77.4079L69.8732 5.84238L77.6282 0.378672H71.4301L65.1291 4.79957V0.378672ZM84.3991 8.53079L84.3999 8.54548H80.2866C80.2866 11.2773 83.136 12.9957 87.6891 12.9957C92.2422 12.9957 95.4001 11.8208 95.4001 8.92735C95.4001 6.29831 93.1235 5.03519 88.1297 4.75613C85.3391 4.59457 84.5607 4.35957 84.5607 3.87489C84.5607 3.1699 85.7504 2.89083 87.5863 2.89083C89.3341 2.89083 90.6413 3.43427 90.7147 4.15395H94.9007C94.9007 1.83334 91.8898 0.144297 87.5863 0.144297C83.2829 0.144297 80.3013 1.39272 80.3013 3.9777C80.3013 6.56268 82.7835 7.78173 87.5276 8.06079C90.2594 8.22235 91.0526 8.44266 91.0526 9.13297C91.0526 9.98484 89.8776 10.2786 87.8947 10.2786C85.7028 10.2786 84.4558 9.50801 84.3999 8.54548H84.4138L84.3991 8.53079ZM12.1364 19.4761H7.28951H7.27483L0.606689 31.8135H4.93951L6.09982 29.6251H13.282L14.4423 31.8135H18.8045L12.1364 19.4761ZM9.72764 22.8395L11.7251 26.6289H7.73013L9.72764 22.8395ZM21.9915 19.4761H31.509C34.3878 19.4761 36.1943 20.9008 36.1943 22.722C36.1943 23.8823 35.4893 24.7783 34.3584 25.2923C35.8712 25.8945 36.7671 26.9814 36.7671 28.3032C36.7671 30.3154 34.8431 31.8135 32.0084 31.8135H21.9915V19.4761ZM30.8481 24.2348C31.7734 24.2348 32.2287 23.9851 32.2287 23.2802C32.2287 22.6339 31.7734 22.3842 30.8481 22.3842H26.1187V24.2348H30.8481ZM31.0977 28.9054C32.0965 28.9054 32.6253 28.5382 32.6253 27.8332C32.6253 27.0695 32.0965 26.7023 31.0977 26.7023H26.1187V28.9054H31.0977ZM57.2711 25.6399C57.2711 21.8652 54.2161 19.2068 48.6642 19.2068C43.0683 19.2068 39.9839 21.8505 39.9839 25.6399C39.9839 29.4292 43.1123 32.0729 48.6642 32.0729C54.2161 32.0729 57.2711 29.4145 57.2711 25.6399ZM53.1292 25.6399C53.1292 27.6667 51.587 28.9005 48.6642 28.9005C45.6826 28.9005 44.1258 27.6667 44.1258 25.6399C44.1258 23.613 45.7414 22.3793 48.6642 22.3793C51.587 22.3793 53.1292 23.613 53.1292 25.6399ZM60.8256 19.4761H64.9822V25.9533C64.9822 27.7011 66.2747 28.9201 68.566 28.9201C70.8572 28.9201 72.1204 27.7157 72.1204 25.9533V19.4761H76.2475V26.2617C76.2475 29.772 73.2366 32.0926 68.566 32.0926C63.8953 32.0926 60.8256 29.772 60.8256 26.2617V19.4761ZM94.5774 19.4761H79.4346V22.6486H84.9424V31.8135H89.0696V22.6486H94.5774V19.4761ZM1.51737 38.5633H15.1621V41.7358H5.64457V43.4983H14.0311V46.4945H5.64457V50.9007H1.51737V38.5633ZM35.6657 44.7353C35.6657 40.9606 32.6107 38.3022 27.0588 38.3022C21.4628 38.3022 18.3785 40.9459 18.3785 44.7353C18.3785 48.5246 21.5069 51.1683 27.0588 51.1683C32.6107 51.1683 35.6657 48.5099 35.6657 44.7353ZM31.5238 44.7353C31.5238 46.7621 29.9816 47.9959 27.0588 47.9959C24.0772 47.9959 22.5203 46.7621 22.5203 44.7353C22.5203 42.7084 24.136 41.4747 27.0588 41.4747C29.9816 41.4747 31.5238 42.7084 31.5238 44.7353ZM47.6215 38.3022C53.1734 38.3022 56.2284 40.9606 56.2284 44.7353C56.2284 48.5099 53.1734 51.1683 47.6215 51.1683C42.0696 51.1683 38.9411 48.5246 38.9411 44.7353C38.9411 40.9459 42.0255 38.3022 47.6215 38.3022ZM47.6215 47.9959C50.5443 47.9959 52.0865 46.7621 52.0865 44.7353C52.0865 42.7084 50.5443 41.4747 47.6215 41.4747C44.6987 41.4747 43.083 42.7084 43.083 44.7353C43.083 46.7621 44.6399 47.9959 47.6215 47.9959ZM67.8757 38.5633H59.8857V50.9007H67.8757C73.0163 50.9007 75.7042 48.1982 75.7042 44.7467C75.7042 41.2952 73.0163 38.5633 67.8757 38.5633ZM71.577 44.7467C71.577 46.4798 70.4166 47.7282 67.8316 47.7282H64.0276V41.7358H67.8316C70.4166 41.7358 71.577 43.0136 71.577 44.7467Z"
      fill="currentColor"
    />
  </motion.svg>
)