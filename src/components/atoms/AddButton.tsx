import SquareButton from "./SquareButton"

export default function AddButton({
  onClick,
  className,
}: {
  onClick: () => void
  className?: string
}) {
  return (
    <SquareButton
      name="+"
      onClick={onClick}
      className={`bg-gray-700 border-gray-500 text-white font-bold text-3xl transition ease-in hover:bg-gray-600 hover:scale-90 pb-1.5 ${
        className ?? ""
      }`}
    />
  )
}
