import { useState } from "react"
import type { Equipment as EquipmentType } from "../../types/data/equipment"
import { formatEquipmentArray } from "../../utils/equipmentUtils"
import HoverDescription from "./HoverDescription"

interface EquipmentProps {
  equipment: EquipmentType[]
  className?: string
  onSelect?: (equipment: EquipmentType[]) => void
}

export default function EquipmentCard({
  equipment,
  className,
  onSelect,
}: EquipmentProps) {
  const [hoveredDescription, setHoveredDescription] = useState<string | null>(
    null
  )
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Format equipment for display with quantities
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
      <div
        className={className}
        onClick={() => onSelect && onSelect(equipment)}
      >
        {items.map((item, index) => (
          <div key={index}>
            <span
              onMouseEnter={() => handleMouseEnter(item.description)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              className={item.description ? "cursor-help underline" : ""}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>

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
