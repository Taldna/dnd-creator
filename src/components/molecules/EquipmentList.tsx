import { useState } from "react"
import type { Equipment } from "../../types/data/equipment"
import { formatEquipmentArray } from "../../data/equipments"
import HoverDescription from "../atoms/HoverDescription"

interface EquipmentListProps {
  equipment: Equipment[]
  className?: string
}

export default function EquipmentList({
  equipment,
  className,
}: EquipmentListProps) {
  const [hoveredDescription, setHoveredDescription] = useState<string | null>(
    null
  )
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const items = formatEquipmentArray(equipment)

  const handleMouseEnter = (description: string | undefined) => {
    if (description) {
      setHoveredDescription(description)
    }
  }

  const handleMouseLeave = () => {
    setHoveredDescription(null)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <>
      <span className={className}>
        {items.map((item, index) => (
          <span key={index}>
            <span
              onMouseEnter={() => handleMouseEnter(item.description)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              className={
                item.description
                  ? "cursor-help underline decoration-dotted"
                  : ""
              }
            >
              {item.name}
            </span>
            {index < items.length - 1 && ", "}
          </span>
        ))}
      </span>

      {hoveredDescription && (
        <HoverDescription
          text={hoveredDescription}
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
        />
      )}
    </>
  )
}
