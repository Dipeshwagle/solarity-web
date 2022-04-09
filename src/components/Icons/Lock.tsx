import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={15} cy={15} r={15} fill="#fff" fillOpacity={0.4} />
    </g>
    <path
      d="M15 18.5a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"
      fill="#fff"
    />
    <path
      d="M19.396 13.271v-.875C19.396 10.506 18.941 8 15 8s-4.396 2.506-4.396 4.396v.875C8.644 13.516 8 14.51 8 16.953v1.302C8 21.125 8.875 22 11.745 22h6.51c2.87 0 3.745-.875 3.745-3.745v-1.302c0-2.443-.644-3.437-2.604-3.682ZM15 19.718a2.117 2.117 0 0 1-2.114-2.114c0-1.169.952-2.114 2.114-2.114s2.114.952 2.114 2.114A2.112 2.112 0 0 1 15 19.718Zm-3.255-6.51h-.161v-.812c0-2.051.581-3.416 3.416-3.416s3.416 1.365 3.416 3.416v.819H11.745v-.007Z"
      fill="#fff"
    />
    <defs>
      <filter
        id="a"
        x={-5}
        y={-5}
        width={40}
        height={40}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation={2.5} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1009_1127"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1009_1127"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default SvgComponent
