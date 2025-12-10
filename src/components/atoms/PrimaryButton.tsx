export default function PrimaryButton({
  text,
  onClick,
  disabled,
}: {
  text: string
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <div
      className={`relative inline-block transition-transform duration-200 ease-out ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
      }`}
    >
      <button
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        className={`w-xs h-fit px-6 py-3 text-xl font-semibold cursor-pointer relative z-50`}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 543 169"
        >
          <g clipPath="url(#clip0_74_1963)" id="Group 45">
            <g id="Vector">
              <path
                d="M118.743 145.5H30.7427L1.62133 116.379L1.62133 83.3786L11 73.9999L1.62133 64.6212L1.62133 30.6212L30.7426 1.49993L511.5 1.49989L540.621 30.6212V64.6212L531.243 73.9999L540.621 83.3786V116.379L511.5 145.5H425.5L414.5 156.5L393.121 156.5L382.763 166.5H325.743L315.743 156.5H280.5L271.121 165.879L261.743 156.5H226.5L216.5 166.5L183.121 166.5L181.121 166.5H161.48L151.121 156.5L129.743 156.5L118.743 145.5Z"
                fill="#DC2626"
              />
              <path
                d="M30.1213 145.5H161.121M216.061 166.939L227.061 155.939M414.061 156.939L425.5 145.5M511.061 145.939L541.061 115.939M511.061 1.06055L541.061 31.0605M261.182 155.939L272.182 166.939M181.121 166.5H217.121M226.121 156.5H262.121M512.121 145.5H381.121M512.121 1.49989L30.1213 1.49993M540.621 64.9999V29.9999M540.621 117V82.9999M31.182 145.939L1.18199 115.939M31.182 1.06055L1.18199 31.0605M382.182 167.061L393.121 156.5L415.121 156.5M326.182 166.939L315.182 155.939M281.061 155.939L270.061 166.939M541.182 64.0605L530.182 75.0605M541.182 83.9392L530.182 72.9392M1.62133 64.9999L1.62133 29.9999M1.62133 117L1.62133 82.9999M1.06067 64.0605L12.0607 75.0605M1.06067 83.9392L12.0607 72.9392M325.121 166.5H383.121M130.182 156.939L118.743 145.5M162.061 167.061L151.121 156.5L129.121 156.5M161.121 166.5L183.121 166.5M316.121 156.5H280.121"
                stroke="white"
                strokeWidth="3"
              />
            </g>
            <line
              id="Line 32"
              stroke="var(--stroke-0, white)"
              strokeWidth="3"
              transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 358.061 164.939)"
              x2="31.1127"
              y1="-1.5"
              y2="-1.5"
            />
            <line
              id="Line 26"
              stroke="var(--stroke-0, white)"
              strokeWidth="3"
              x1="181"
              x2="159"
              y1="166"
              y2="144"
            />
            <line
              id="Line 33"
              stroke="var(--stroke-0, white)"
              strokeWidth="3"
              x1="161"
              x2="139"
              y1="166"
              y2="144"
            />
            <line
              id="Line 34"
              stroke="var(--stroke-0, white)"
              strokeWidth="3"
              transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 380.061 164.939)"
              x2="31.1127"
              y1="-1.5"
              y2="-1.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_74_1963">
              <rect fill="white" height="169" width="543" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <span className="absolute inset-0 flex text-white font-semibold text-2xl items-center justify-center pointer-events-none z-[60] pb-2">
        {text}
      </span>
    </div>
  )
}
