export default function PrimaryButton({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`w-xs h-fit px-6 py-3 rounded-full bg-primary text-xl font-semibold transition ease-in cursor-pointer relative z-50 ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-red-600 hover:scale-110"
      }`}
    >
      {children}
    </button>
  )
}
