export default function RectangleButton({
  name,
  onClick,
  className,
  disabled,
}: {
  name: string
  onClick?: () => void
  className?: string
  disabled?: boolean
}) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`h-8 rounded-2xl bg-gray-700 border-2 border-gray-500 cursor-pointer flex items-center justify-center leading-none pr-2 pl-2 ${
        disabled ? "opacity-30 cursor-not-allowed" : ""
      } ${className ?? ""}`}
    >
      {name}
    </button>
  )
}
