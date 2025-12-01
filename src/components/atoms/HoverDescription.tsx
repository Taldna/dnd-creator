export default function HoverDescription({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  return (
    <div
      className={`w-12 h-12 rounded-lg text-2xl text-white font-bold flex items-center justify-center leading-none pb-1 bg-black border-2 border-gray-500 ${
        className ?? ""
      }`}
    >
      {text}
    </div>
  )
}
