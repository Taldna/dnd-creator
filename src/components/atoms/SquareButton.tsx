export default function SquareButton({
  children,
  onClick,
  className,
  disabled,
  image,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  image?: string
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
      className={`relative inline-flex cursor-pointer items-center px-2 justify-center leading-none ${
        disabled ? "opacity-30 cursor-not-allowed" : ""
      } ${className ?? ""}`}
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
      <span className="relative flex flex-col text-white text-l z-[60]">
        {image && <img src={image} />}
        {children}
      </span>
    </button>
  )
}
