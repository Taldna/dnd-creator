export default function RectangleButton({
  name,
  onClick,
  className,
  disabled,
  image,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
}: {
  name: string
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
      className={`h-8 relative inline-flex cursor-pointer items-center px-2 justify-center leading-none ${
        disabled ? "opacity-30 cursor-not-allowed" : ""
      } ${className ?? ""}`}
    >
      <svg
        className="absolute inset-0 w-full h-full block"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 246 87"
      >
        <g id="Vector">
          <path
            d="M227.547 1.50295L18.3727 2.50378L1.62133 19.2552L1.62133 67.8202L18.6959 84.8948L227.222 83.8971L244.299 66.8202V18.2552L227.547 1.50295Z"
            fill="black"
          />
          <path
            d="M18.1165 2.505L228.116 1.50022M18.1165 84.8976L228.116 83.8928M18.7383 84.9372L1.06066 67.2596M1.62133 19.1988L1.62133 68.1988M18.7383 2.13818L1.06066 19.8159M227.182 83.9372L244.86 66.2596M244.299 18.1988V67.1988M227.182 1.13818L244.86 18.8159"
            stroke="white"
            strokeWidth="3"
          />
        </g>
      </svg>
      <span className="relative flex text-white text-l items-center justify-center z-[60]">
        {image && <img src={image} alt={name} />}
        {name}
      </span>
    </button>
  )
}
