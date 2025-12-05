"use client"

import { useState } from "react"
import type { Background } from "../../types/data/background"
import type { Class } from "../../types/data/class"
import type { Equipment } from "../../types/data/equipment"
import Box from "../atoms/Box"
import RectangleButton from "../atoms/RectangleButton"
import Title from "../atoms/Title"
import PrimaryButton from "../atoms/PrimaryButton"
import EquipmentList from "../molecules/EquipmentList"
import EquipmentCard from "../atoms/Equipment"

export default function EquipmentSelection({
  setEquipment,
  dndClass,
  background,
}: {
  setEquipment: (equipment: Equipment | null) => void
  dndClass: Class
  background: Background
}) {
  const [selectedBackgroundEq, setSelectedBackgroundEq] = useState<
    Equipment[] | null
  >(null)
  const [selectedClassEq, setSelectedClassEq] = useState<Equipment[] | null>(
    null
  )

  const selectedEq =
    selectedBackgroundEq || selectedClassEq
      ? [...(selectedBackgroundEq || []), ...(selectedClassEq || [])]
      : null
  return (
    <main className="h-screen w-screen flex flex-col gap-6 items-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-y-auto overflow-x-hidden relative">
      <Title name="Sélection d'équipement" />
      <div className="relative flex justify-center w-full h-full px-20 overflow-hidden">
        <div className="relative w-[60%]">
          <Box className="flex flex-col gap-4 h-full">
            <div className="overflow-y-auto overflow-x-hidden h-full">
              <div className="flex gap-4">
                {/* Équipement d'historique */}
                <div className="flex-1 bg-gray-800 border-2 border-gray-600 rounded-lg p-4 flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-center border-b-2 border-gray-600 pb-2">
                    Équipement d'historique
                  </h2>
                  <div>
                    <EquipmentList
                      equipmentOptions={background.equipment}
                      onSelect={(equipment) =>
                        setSelectedBackgroundEq(equipment)
                      }
                    />
                  </div>
                </div>

                {/* Équipement de classe */}
                <div className="flex-1 bg-gray-800 border-2 border-gray-600 rounded-lg p-4 flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-center border-b-2 border-gray-600 pb-2">
                    Équipement de classe
                  </h2>
                  <div>
                    <EquipmentList
                      equipmentOptions={dndClass.equipment}
                      onSelect={(equipment) => setSelectedClassEq(equipment)}
                    />
                  </div>
                </div>
              </div>

              {/* Équipement choisi */}
              <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-4 flex flex-col gap-4 mt-4">
                <h2 className="text-xl font-bold text-center border-b-2 border-gray-600 pb-2">
                  Équipement choisi
                </h2>
                <div className="flex-1 bg-gray-800 border-2 border-gray-600 rounded-lg p-4">
                  <EquipmentCard equipment={selectedEq ? selectedEq : []} />
                </div>
              </div>

              <div className="flex justify-center mt-4 pb-4">
                <PrimaryButton
                  onClick={() => {
                    // TODO: Handle equipment submission
                    setEquipment(null)
                  }}
                  disabled={!(selectedBackgroundEq && selectedClassEq)}
                >
                  Valider
                </PrimaryButton>
              </div>
            </div>
          </Box>
          <RectangleButton name="Shop" />
        </div>
      </div>
    </main>
  )
}
