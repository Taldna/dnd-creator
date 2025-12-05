import { useState } from "react"
import { ADVENTURING_GEAR } from "../../data/adventuringGear"
import { ARMORS } from "../../data/armors"
import { BOATS } from "../../data/boats"
import { MOUNTS } from "../../data/mounts"
import { TOOLS } from "../../data/tools"
import { TRADE_GOODS } from "../../data/tradeGoods"
import { VEHICLE_EQUIPMENT } from "../../data/vehicleEquipment"
import { WEAPONS } from "../../data/weapons"
import type { Money, Equipment } from "../../types/data/equipment"
import Box from "../atoms/Box"
import EquipmentCard from "../atoms/Equipment"

export default function Shop({
  money,
  onClose,
}: {
  money: Money[] | undefined
  onClose: () => void
}) {
  const [selectedEquipment, setSelectedEquipment] = useState<
    Equipment[] | null
  >(null)
  return (
    <Box className="max-w-2xl w-full h-[80%]" backgroundColor="black">
      <div className="h-full overflow-y-auto pr-4">
        <button
          onClick={onClose}
          className="sticky top-0 float-right text-4xl font-bold text-gray-400 hover:text-white transition rotate-45 z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
        >
          +
        </button>

        <h1 className="text-3xl font-bold text-white mb-6">Shop</h1>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Argent Disponible :{" "}
              {money?.reduce((acc, curr) => acc + (curr.amount.po || 0), 0)} Po,{" "}
              {money?.reduce((acc, curr) => acc + (curr.amount.pa || 0), 0)} Pa,{" "}
              {money?.reduce((acc, curr) => acc + (curr.amount.pc || 0), 0)} Pc
            </h3>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Équipement à vendre
            </h3>
            <div className="space-y-2">
              {[
                ...Object.values(ARMORS),
                ...Object.values(WEAPONS),
                ...Object.values(ADVENTURING_GEAR),
                ...Object.values(TOOLS),
                ...Object.values(TRADE_GOODS),
                ...Object.values(MOUNTS),
                ...Object.values(VEHICLE_EQUIPMENT),
                ...Object.values(BOATS),
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setSelectedEquipment([...(selectedEquipment || []), item])
                  }
                  className="cursor-pointer hover:bg-gray-700 p-2 rounded transition"
                >
                  <EquipmentCard equipment={[item]} />
                </div>
              ))}
            </div>
          </div> //ajouter les prix et l'achat de l'equipement

          {selectedEquipment && selectedEquipment.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Équipement sélectionné
              </h3>
              <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-4">
                <EquipmentCard equipment={selectedEquipment} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Box>
  )
}
