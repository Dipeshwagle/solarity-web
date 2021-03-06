import * as React from "react"
import { SVGProps } from "react"

const VR = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.54 3.144c-.309 0-.59.084-.814.253A3.964 3.964 0 0 0 17.796 0H6.176c-1.994 0-3.65 1.488-3.93 3.397a1.337 1.337 0 0 0-.814-.253C.646 3.144 0 3.79 0 4.576v3.873c0 .786.646 1.432 1.432 1.432.308 0 .59-.084.813-.253a3.964 3.964 0 0 0 3.93 3.397h11.65c1.992 0 3.649-1.488 3.93-3.397.224.169.504.253.813.253.786 0 1.432-.646 1.432-1.432V4.576c-.028-.786-.674-1.432-1.46-1.432Zm-1.88 5.923a2.827 2.827 0 0 1-2.836 2.835H6.175A2.827 2.827 0 0 1 3.34 9.067V3.958a2.827 2.827 0 0 1 2.835-2.835h11.65a2.827 2.827 0 0 1 2.834 2.835v5.109Z"
      fill="#fff"
    />
    <path
      d="M6.512 3.228a.814.814 0 1 1-1.628 0 .814.814 0 0 1 1.628 0ZM19.087 3.144a.814.814 0 1 1-1.627 0 .814.814 0 0 1 1.627 0ZM6.512 9.88a.814.814 0 1 1-1.629 0 .814.814 0 0 1 1.629 0ZM19.087 9.797a.814.814 0 1 1-1.628 0 .814.814 0 0 1 1.628 0Z"
      fill="#fff"
    />
  </svg>
)

export default VR
