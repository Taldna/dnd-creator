import { useEffect, useState } from "react"

interface HoverDescriptionProps {
  text: string
  mouseX: number
  mouseY: number
}

export default function HoverDescription({
  text,
  mouseX,
  mouseY,
}: HoverDescriptionProps) {
  const [position, setPosition] = useState({ x: mouseX, y: mouseY })

  useEffect(() => {
    setPosition({ x: mouseX, y: mouseY })
  }, [mouseX, mouseY])

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        left: `${position.x + 15}px`,
        top: `${position.y + 15}px`,
        maxWidth: `calc(100vw - ${position.x + 30}px)`,
      }}
    >
      <div className="bg-gray-900 border-2 border-gray-600 rounded-lg px-4 py-3 shadow-xl">
        <p className="text-sm text-gray-200 whitespace-pre-line">{text}</p>
      </div>
    </div>
  )
}
