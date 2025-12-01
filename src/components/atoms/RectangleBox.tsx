export default function RectangleBox({ text, className }: { text: string; className?: string }) {
  return (
    <div
      className={`h-8 rounded-2xl flex items-center pr-2 pl-2 justify-center leading-none ${
        className ?? ""
      }`}
    >
      {text}
    </div>
  )
}
