import type { ReactNode } from "react"

export default function SquareBox({
  children,
  text,
  className,
}: {
  children?: ReactNode
  text: string
  className?: string
}) {
  return (
    <div
      className={`relative inline-block flex items-center px-2 justify-center leading-none ${
        className ?? ""
      }`}
    >
      <svg
        className="absolute inset-0 w-full h-full block"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 301 298"
      >
        <g id="Vector">
          <path
            d="M299.5 239.052L299.5 58.9482L242.052 1.49989H58.9486L1.50022 58.9482L1.50021 239.052L58.9485 296.5H242.052L299.5 239.052Z"
            fill="black"
          />
          <path
            d="M299.5 57.9999L299.5 240M58 296.5H243M241.934 296.617L299.94 238.612M58 1.49989H243M241.934 1.38232L299.94 59.3878M1.50022 57.9999L1.50021 240M59.0661 296.617L1.06067 238.612M59.0661 1.38232L1.06067 59.3878"
            stroke="white"
            strokeWidth="3"
          />
        </g>
      </svg>
      <span className="absolute inset-0 flex text-white text-l items-center justify-center pointer-events-none z-[60]">
        {text}
        {children}
      </span>
    </div>
  )
}
