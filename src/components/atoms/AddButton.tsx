import SquareButton from "./DiamondButton"

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
      className={`text-white font-bold text-3xl transition ease-in hover:scale-90 ${
        className ?? ""
      }`}
    />
  )
}
