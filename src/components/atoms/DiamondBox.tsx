export default function SquarBox({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  return (
    <div
      className={`w-12 h-12 flex items-center justify-center leading-none relative ${
        className ?? ""
      }`}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 385 385"
      >
        <g clipPath="url(#clip0_70_1845)" id="Group 5">
          <g id="Vector">
            <path
              d="M76.6213 76.7428V97.4999L1.62133 172.5L1.62133 211.743L76.6213 286.743V307.743H97.6216L172.5 382.621H211.743L286.621 307.743H307.621V286.742L382.621 211.743V172.5L307.621 97.4999V76.7428H286.864L211.743 1.62121L172.5 1.62121L97.3784 76.7428H76.6213Z"
              fill="black"
            />
            <path
              d="M76.6213 98.2428V75.2428M1.62133 212.121L1.62133 172.121M1.06067 173.061L77.0607 97.0605M97.0607 77.0605L173.061 1.06055M211.182 1.06055L287.182 77.0605M307.182 97.0605L383.182 173.061M1.06067 211.182L77.0607 287.182M97.0607 307.182L173.061 383.182M211.182 383.182L287.182 307.182M307.182 287.182L383.182 211.182M382.621 212.121V172.121M172.121 1.62121L212.121 1.62121M172.121 382.621H212.121M75.1213 76.7428H98.1213M307.621 98.2428V75.2428M309.121 76.7428H286.121M76.6213 286.243V309.243M75.1213 307.743H98.1213M307.621 286.243V309.243M309.121 307.743H286.121"
              stroke="white"
              strokeWidth="3"
            />
          </g>
          <line
            id="Line 46"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            x1="42.0049"
            x2="152.005"
            y1="151.994"
            y2="42.995"
          />
          <line
            id="Line 47"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            transform="matrix(-0.710333 -0.703866 -0.703866 0.710333 339.061 153.059)"
            x2="154.857"
            y1="-1.5"
            y2="-1.5"
          />
          <line
            id="Line 48"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            transform="matrix(0.710333 0.703866 0.703866 -0.710333 43.0607 230.061)"
            x2="154.857"
            y1="-1.5"
            y2="-1.5"
          />
          <line
            id="Line 49"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            x1="340.116"
            x2="230.116"
            y1="231.126"
            y2="340.125"
          />
          <line
            id="Line 50"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            x1="382.121"
            x2="210.121"
            y1="210.121"
            y2="382.121"
          />
          <line
            id="Line 51"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            x1="172"
            x2="2.0411e-05"
            y1="382.121"
            y2="210.121"
          />
          <line
            id="Line 52"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 381.061 173.061)"
            x2="243.245"
            y1="-1.5"
            y2="-1.5"
          />
          <line
            id="Line 53"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            transform="matrix(-0.707107 0.707107 0.707107 0.707107 173.061 1.06055)"
            x2="243.245"
            y1="-1.5"
            y2="-1.5"
          />
          <line
            id="Line 38"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            x1="20.0607"
            x2="43.0607"
            y1="151.561"
            y2="151.561"
          />
          <line
            id="Line 39"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            x1="21.0607"
            x2="43.0607"
            y1="231.561"
            y2="231.561"
          />
          <line
            id="Line 40"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            x1="339.061"
            x2="361.061"
            y1="151.561"
            y2="151.561"
          />
          <line
            id="Line 41"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            x1="339.061"
            x2="361.061"
            y1="231.561"
            y2="231.561"
          />
          <line
            id="Line 42"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            x1="230.561"
            x2="230.561"
            y1="339.061"
            y2="362.061"
          />
          <line
            id="Line 43"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            x1="151.561"
            x2="151.561"
            y1="339.061"
            y2="362.061"
          />
          <line
            id="Line 44"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            x1="230.561"
            x2="230.561"
            y1="21.0605"
            y2="44.0605"
          />
          <line
            id="Line 45"
            stroke="var(--stroke-0, white)"
            strokeWidth="3"
            x1="151.561"
            x2="151.561"
            y1="21.0605"
            y2="44.0605"
          />
        </g>
        <defs>
          <clipPath id="clip0_70_1845">
            <rect fill="white" height="385" width="385" />
          </clipPath>
        </defs>
      </svg>
      <span className={`absolute inset-0 flex text-white items-center justify-center pointer-events-none z-[60] ${text.length === 2 ? "pr-1" : ""}`}>
        {text}
      </span>
    </div>
  )
}
