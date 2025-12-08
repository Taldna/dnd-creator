import { useState } from "react"
import type { Equipment as EquipmentType } from "../../types/data/equipment"
import { formatEquipmentArray } from "../../data/equipments"
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

  // Merge gold amounts before formatting
  const mergedEquipment = (() => {
    const goldItems = equipment.filter((item) => item.category === "Argent")
    const nonGoldItems = equipment.filter((item) => item.category !== "Argent")

    if (goldItems.length > 0) {
      // Sum all currency amounts
      const totalCurrency = goldItems.reduce(
        (sum, item) => {
          if (item.category === "Argent") {
            return {
              po: sum.po + (item.amount.po || 0),
              pa: sum.pa + (item.amount.pa || 0),
              pc: sum.pc + (item.amount.pc || 0),
            }
          }
          return sum
        },
        { po: 0, pa: 0, pc: 0 }
      )

      // Create a single merged gold item only if there's any positive currency
      // (exclude if all values are 0 or negative)
      if (
        totalCurrency.po > 0 ||
        totalCurrency.pa > 0 ||
        totalCurrency.pc > 0
      ) {
        const mergedGold: EquipmentType = {
          name: "Or",
          category: "Argent",
          amount: totalCurrency,
        }
        return [...nonGoldItems, mergedGold]
      }
      // If total is 0 or negative, return only non-gold items
      return nonGoldItems
    }

    return equipment
  })()

  const items = formatEquipmentArray(mergedEquipment)

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
