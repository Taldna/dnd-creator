export default function SquareBox({ text, className }: { text: string; className?: string }) {
  return (
    <div
      className={`w-12 h-12 rounded-lg flex items-center justify-center leading-none ${className ?? ""}`}
    >
      {text}
    </div>
  )
}
