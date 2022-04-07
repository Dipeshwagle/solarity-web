import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={24}
      cy={24}
      r={23}
      fill="#fff"
      fillOpacity={0.35}
      stroke="#fff"
      strokeWidth={2}
    />
    <path d="m32 24-12 6.928V17.072L32 24Z" fill="#fff" />
  </svg>
)

export default SvgComponent
