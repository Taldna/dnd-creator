export default function RectangleButton({
  name,
  onClick,
  className,
  disabled,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
}: {
  name: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  onMouseMove?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`w-50 cursor-pointer flex flex-col items-center text-2xl justify-center leading-none px-2 gap-2 ${
        disabled ? "opacity-30 cursor-not-allowed" : ""
      } ${className ?? ""}`}
    >
      <div className="rotate-180">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 306 23"
        >
          <g clipPath="url(#clip0_80_2028)" id="Group 46">
            <g id="Vector">
              <path
                d="M158.759 14.5123H214.759L227.768 1.50407H77.3746L90.3828 14.5123H147.383L153.071 20.2004L158.759 14.5123Z"
                fill="black"
              />
              <path
                d="M215 14.5123H155M151 14.5123H90M146.939 14.0688L154.01 21.1399M159.132 14.1396L152.061 21.2107M228.203 1.06885L214.061 15.211M76.9393 1.06885L91.0815 15.211M0 1.50407H306"
                stroke="white"
                strokeWidth="3.00824"
              />
            </g>
            <line
              id="Line 42"
              stroke="var(--stroke-0, white)"
              strokeWidth="3.00824"
              x1="306"
              x2="227"
              y1="1.50412"
              y2="1.50412"
            />
            <line
              id="Line 44"
              stroke="var(--stroke-0, white)"
              strokeWidth="3.00824"
              x1="79"
              y1="1.50412"
              y2="1.50412"
            />
            <line
              id="Line 27"
              stroke="var(--stroke-0, white)"
              strokeWidth="3.00824"
              transform="matrix(-1 0 0 1 215 16)"
              x2="125"
              y1="-1.50412"
              y2="-1.50412"
            />
            <line
              id="Line 31"
              stroke="var(--stroke-0, white)"
              strokeWidth="3"
              x1="219.203"
              x2="205.061"
              y1="1.06066"
              y2="15.2028"
            />
            <line
              id="Line 33"
              stroke="var(--stroke-0, white)"
              strokeWidth="3"
              transform="matrix(0.707107 0.707107 0.707107 -0.707107 87 0)"
              x2="20"
              y1="-1.5"
              y2="-1.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_80_2028">
              <rect fill="white" height="23" width="306" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {name}
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 306 23"
      >
        <g clipPath="url(#clip0_80_2028)" id="Group 46">
          <g id="Vector">
            <path
              d="M158.759 14.5123H214.759L227.768 1.50407H77.3746L90.3828 14.5123H147.383L153.071 20.2004L158.759 14.5123Z"
              fill="black"
            />
            <path
              d="M215 14.5123H155M151 14.5123H90M146.939 14.0688L154.01 21.1399M159.132 14.1396L152.061 21.2107M228.203 1.06885L214.061 15.211M76.9393 1.06885L91.0815 15.211M0 1.50407H306"
              stroke="white"
              strokeWidth="3.00824"
            />
          </g>
          <line
            id="Line 42"
            stroke="var(--stroke-0, white)"
            strokeWidth="3.00824"
            x1="306"
            x2="227"
            y1="1.50412"
            y2="1.50412"
          />
          <line
            id="Line 44"
            stroke="var(--stroke-0, white)"
            strokeWidth="3.00824"
            x1="79"
            y1="1.50412"
            y2="1.50412"
          />
          <line
            id="Line 27"
            stroke="var(--stroke-0, white)"
            strokeWidth="3.00824"
            transform="matrix(-1 0 0 1 215 16)"
            x2="125"
            y1="-1.50412"
            y2="-1.50412"
          />
          <line
            id="Line 31"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            x1="219.203"
            x2="205.061"
            y1="1.06066"
            y2="15.2028"
          />
          <line
            id="Line 33"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            transform="matrix(0.707107 0.707107 0.707107 -0.707107 87 0)"
            x2="20"
            y1="-1.5"
            y2="-1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_80_2028">
            <rect fill="white" height="23" width="306" />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}
