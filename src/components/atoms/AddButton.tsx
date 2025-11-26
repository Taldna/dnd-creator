import SecondaryButton from "./SecondaryButton"

export default function AddButton({
  onClick,
  className,
}: {
  onClick: () => void
  className?: string
}) {
  return (
    <SecondaryButton
      name="+"
      onClick={onClick}
      className={`bg-gray-700 border-gray-500 transition ease-in hover:bg-gray-600 hover:scale-90 pb-1.5 ${
        className ?? ""
      }`}
    />
  )
}
