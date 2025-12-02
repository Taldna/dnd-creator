import type { ReactNode } from "react"

export default function Box({
  children,
  className,
  id,
}: {
  children?: ReactNode
  className?: string
  id?: string
}) {
  return (
    <div className={"Box relative " + (className ?? "")} id={id}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1031 538"
      >
        <g id="Frame 1">
            <line id="Line 94" stroke="var(--stroke-0, white)" strokeWidth="3" x1="1008.09" x2="987.087" y1="21.0862" y2="1.08621" />
            <line id="Line 95" stroke="var(--stroke-0, white)" strokeWidth="3" x1="43.1557" x2="22.1557" y1="1.08621" y2="21.0863" />
            <line id="Line 100" stroke="var(--stroke-0, white)" strokeWidth="3" x1="515.121" x2="42.1212" y1="1.5" y2="1.50003" />
            <line id="Line 101" stroke="var(--stroke-0, white)" strokeWidth="3" x1="988.121" x2="515.121" y1="1.5" y2="1.5" />
            <line id="Line 97" stroke="var(--stroke-0, white)" strokeWidth="3" x1="348.182" x2="362.182" y1="1.93934" y2="15.9393" />
            <line id="Line 98" stroke="var(--stroke-0, white)" strokeWidth="3" x1="668.061" x2="682.061" y1="15.9393" y2="1.93934" />
            <line id="Line 93" stroke="var(--stroke-0, white)" strokeWidth="3" x1="514.061" x2="523.253" y1="24.9393" y2="15.747" />
            <line id="Line 92" stroke="var(--stroke-0, white)" strokeWidth="3" x1="506.99" x2="516.182" y1="15.747" y2="24.9393" />
            <line id="Line 96" stroke="var(--stroke-0, white)" strokeWidth="3" x1="361.121" x2="669.121" y1="15.4966" y2="15.5" />
            <line id="Line 91" stroke="var(--stroke-0, white)" strokeWidth="3" x1="22.6212" x2="22.6212" y1="249" y2="20" />
            <line id="Line 90" stroke="var(--stroke-0, white)" strokeWidth="3" x1="1007.62" x2="1007.62" y1="20" y2="249" />
            <line id="Line 84" stroke="var(--stroke-0, white)" strokeWidth="3" x1="1007.18" x2="1029.18" y1="247.941" y2="269.939" />
            <line id="Line 83" stroke="var(--stroke-0, white)" strokeWidth="3" x1="1.06064" x2="23.0605" y1="269.939" y2="247.942" />
            <line id="Line 79" stroke="var(--stroke-0, white)" strokeWidth="3" x1="1029.18" x2="1007.18" y1="268.061" y2="290.058" />
            <line id="Line 82" stroke="var(--stroke-0, white)" strokeWidth="3" x1="23.0591" x2="1.06066" y1="290.059" y2="268.061" />
            <line id="Line 2" stroke="var(--stroke-0, white)" strokeWidth="3" x1="22.6212" x2="22.6212" y1="518" y2="289" />
            <line id="Line 17" stroke="var(--stroke-0, white)" strokeWidth="3" x1="1007.62" x2="1007.62" y1="289" y2="518" />
            <line id="Line 53" stroke="var(--stroke-0, white)" strokeWidth="3" x1="523.253" x2="514.061" y1="522.253" y2="513.061" />
            <line id="Line 74" stroke="var(--stroke-0, white)" strokeWidth="3" x1="516.182" x2="506.99" y1="513.061" y2="522.253" />
            <line id="Line 40" stroke="var(--stroke-0, white)" strokeWidth="3" x1="22.1557" x2="43.1557" y1="516.914" y2="536.914" />
            <line id="Line 34" stroke="var(--stroke-0, white)" strokeWidth="3" x1="987.087" x2="1008.09" y1="536.914" y2="516.914" />
            <line id="Line 54" stroke="var(--stroke-0, white)" strokeWidth="3" x1="669.121" x2="361.121" y1="522.503" y2="522.5" />
            <line id="Line 47" stroke="var(--stroke-0, white)" strokeWidth="3" x1="682.061" x2="668.061" y1="536.061" y2="522.061" />
            <line id="Line 55" stroke="var(--stroke-0, white)" strokeWidth="3" x1="362.182" x2="348.182" y1="522.061" y2="536.061" />
            <line id="Line 35" stroke="var(--stroke-0, white)" strokeWidth="3" x1="515.121" x2="988.121" y1="536.5" y2="536.5" />
            <line id="Line 39" stroke="var(--stroke-0, white)" strokeWidth="3" x1="42.1212" x2="515.121" y1="536.5" y2="536.5" />
          </g>
      </svg>
      <div className="relative h-full z-10 p-12">{children}</div>
    </div>
  )
}
