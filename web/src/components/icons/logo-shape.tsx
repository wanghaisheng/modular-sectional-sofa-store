type LogoShapeProps = {
  text?: boolean
} & React.SVGProps<SVGSVGElement>

export const LogoShape = ({ text = false, ...props }: LogoShapeProps) => (
  <svg
    width="180"
    height="195"
    viewBox="0 0 180 195"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2618_8725)">
      <path
        d="M180 54.5106C180 48.9222 178.717 45.1702 175.29 40.9294C169.549 33.8349 159.957 29.6601 149.837 28.9599L149.863 22.0504C149.863 22.0504 149.863 22.1296 149.863 22.1693C149.903 18.1794 148.527 14.1368 145.577 10.4904C137.189 0.145959 119.343 -3.10403 105.69 3.25062L0 52.4761V122.589L58.6197 195L162.418 146.66C163 146.422 163.569 146.184 164.125 145.933C164.707 145.656 165.276 145.378 165.831 145.074C166.003 144.982 166.175 144.876 166.347 144.784C166.718 144.572 167.101 144.361 167.458 144.15C167.644 144.031 167.842 143.912 168.027 143.793C168.371 143.581 168.702 143.357 169.033 143.132C169.205 143.013 169.377 142.894 169.549 142.776C169.628 142.723 169.721 142.657 169.8 142.604C169.959 142.485 170.091 142.366 170.237 142.26C170.567 142.009 170.885 141.758 171.202 141.507C171.414 141.336 171.626 141.151 171.824 140.966C172.115 140.715 172.406 140.45 172.684 140.186C172.883 140.001 173.068 139.816 173.266 139.618C173.531 139.354 173.795 139.076 174.047 138.799C174.219 138.601 174.404 138.416 174.563 138.218C174.814 137.927 175.052 137.623 175.29 137.333C175.396 137.2 175.515 137.055 175.621 136.923C175.661 136.87 175.687 136.83 175.727 136.778C176.058 136.328 176.375 135.866 176.666 135.404C176.706 135.338 176.759 135.285 176.785 135.219C177.116 134.69 177.42 134.149 177.698 133.607C177.777 133.435 177.857 133.277 177.936 133.105C178.121 132.722 178.293 132.325 178.465 131.942C178.545 131.731 178.624 131.533 178.704 131.321C178.836 130.951 178.968 130.595 179.074 130.225C179.114 130.106 179.167 129.987 179.193 129.868C179.233 129.723 179.259 129.577 179.299 129.445C179.339 129.3 179.378 129.155 179.405 129.009C179.497 128.613 179.59 128.217 179.656 127.834C179.669 127.754 179.683 127.675 179.696 127.609C179.775 127.147 179.828 126.671 179.881 126.195C179.881 126.063 179.894 125.944 179.907 125.812C179.921 125.601 179.947 125.389 179.947 125.178C179.947 124.953 179.96 124.716 179.96 124.491C179.96 124.491 179.987 54.4446 179.987 54.537L180 54.5106Z"
        fill="#1D1D1B"
      />
      {text && (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.023 87H58.9709C64.1149 87 67.307 89.5491 67.307 92.7871C67.307 94.8539 66.0669 96.4614 64.0231 97.38C66.7099 98.4363 68.3175 100.388 68.3175 102.754C68.3175 106.336 64.8728 109 59.8435 109H42V87.023L42.023 87ZM57.7997 95.4739C59.4302 95.4739 60.2569 95.0376 60.2569 93.7745C60.2569 92.6033 59.4302 92.167 57.7997 92.167H49.3946V95.4739H57.7997ZM58.259 103.787C60.0272 103.787 60.9688 103.121 60.9688 101.881C60.9688 100.526 60.0272 99.8601 58.259 99.8601H49.3946V103.787H58.259ZM86.0691 87H94.7038L106.576 108.977H98.8144L96.7476 105.073H83.9563L81.8895 108.977H74.1734L86.0461 87H86.0691ZM93.9459 99.7453L90.3864 92.9937L86.8269 99.7453H93.9459ZM137.533 87H113.213V108.977H120.585V101.123H135.512V95.7954H120.585V92.6493H137.533V87Z"
          fill="white"
        />
      )}
    </g>
    <defs>
      <clipPath id="clip0_2618_8725">
        <rect width="180" height="195" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
