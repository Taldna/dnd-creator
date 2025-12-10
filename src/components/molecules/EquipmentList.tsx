import type { Equipment } from "../../types/data/equipment"
import EquipmentCard from "../atoms/Equipment"
import SquareButton from "../atoms/SquareButton"

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
          <SquareButton
            key={index}
            className="mb-4 p-4 self-start cursor-pointer"
            onClick={() => onSelect?.(option)}
          >
            <div className="font-semibold mb-1">
              Option {String.fromCharCode(65 + index)}
            </div>
            <EquipmentCard equipment={option} />
          </SquareButton>
        ))}
      </div>
    </div>
  )
}
