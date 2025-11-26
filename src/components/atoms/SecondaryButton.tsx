export default function SecondaryButton({
  name,
  onClick,
  className,
  disabled,
}: {
  name: string
  onClick: () => void
  className?: string
  disabled?: boolean
}) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`w-12 h-12 rounded-lg bg-gray-700 border-2 border-gray-500 text-3xl text-white font-bold cursor-pointer flex items-center justify-center leading-none ${
        className ?? ""
      }`}
    >
      {name}
    </button>
  )
}
