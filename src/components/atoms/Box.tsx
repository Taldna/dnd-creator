import type { ReactNode } from "react"

export default function Box({
  children,
  className,
  id,
  backgroundColor
}: {
  children?: ReactNode
  className?: string
  id?: string
  backgroundColor?: string
}) {
  return (
    <div className={"Box relative " + (className ?? "")} id={id}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1031 538"
      >
        <path
          d="M987.521 1.50004L1007.62 20.6429V248.379L1028.24 269L1007.62 289.618V517.357L987.521 536.5L42.7212 536.5L22.6211 517.357V289.621L1.9999 269L22.6211 248.382V20.643L42.7211 1.50007L987.521 1.50004Z"
          fill={backgroundColor ?? "none"}
        />
        <path
          d="M1008.09 21.0862L987.087 1.08624M43.1556 1.08624L22.1556 21.0863M42.1211 1.50007L988.121 1.50004M348.182 1.93938L362.182 15.9394M668.06 15.9394L682.06 1.93938M514.06 24.9394L523.253 15.747M506.989 15.747L516.182 24.9394M361.121 15.4966L669.121 15.5M22.6211 249V20M1007.62 20V249M1007.18 247.941L1029.18 269.939M1.06055 269.939L23.0605 247.942M1029.18 268.061L1007.18 290.058M23.059 290.059L1.06057 268.061M22.6211 518V289M1007.62 289V518M523.253 522.253L514.06 513.061M516.182 513.061L506.989 522.253M22.1556 516.914L43.1556 536.914M987.087 536.914L1008.09 516.914M669.121 522.503L361.121 522.5M682.06 536.061L668.06 522.061M362.182 522.061L348.182 536.061M988.121 536.5L42.1211 536.5"
          stroke="white"
          strokeWidth="3"
        />
      </svg>
      <div className="relative h-full z-10 p-12">{children}</div>
    </div>
  )
}