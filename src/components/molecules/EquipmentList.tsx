import type { Equipment } from "../../types/data/equipment"
import EquipmentCard from "../atoms/Equipment"

interface EquipmentListProps {
  equipmentOptions: Equipment[][]
  className?: string
  onSelect?: (equipment: Equipment[]) => void
}

export default function EquipmentList({
  equipmentOptions,
  className,
  onSelect,
}: EquipmentListProps) {
  return (
    <div className={className}>
      <div className="flex-row flex mb-2">
        Choisissez {equipmentOptions.length === 3 ? "A, B ou C" : "A ou B"} :
      </div>
      <div className="flex gap-4 pl-4">
        {equipmentOptions.map((option, index) => (
          <div
            key={index}
            className="bg-gray-800 border-2 border-gray-600 mb-4 rounded-2xl p-4 self-start cursor-pointer hover:border-gray-400 transition-colors"
            onClick={() => onSelect?.(option)}
          >
            <div className="font-semibold mb-1">
              Option {String.fromCharCode(65 + index)}
            </div>
            <EquipmentCard equipment={option} />
          </div>
        ))}
      </div>
    </div>
  )
}
