"use client"

import type { Background } from "../../types/data/background"
import type { Class } from "../../types/data/class"
import type { Equipment } from "../../types/data/equipment"
import Box from "../atoms/Box"
import RectangleButton from "../atoms/RectangleButton"
import Title from "../atoms/Title"
import PrimaryButton from "../atoms/PrimaryButton"
import EquipmentList from "../molecules/EquipmentList"
import EquipmentCard from "../atoms/Equipment"
import Shop from "../organisms/Shop"
import { useEquipmentSelection } from "../../hooks/useEquipmentSelection"
import { useState } from "react"
import HoverDescription from "../atoms/HoverDescription"
import ShopButton from "../atoms/ShopButton"

export default function EquipmentSelection({
  setEquipment,
  dndClass,
  background,
}: {
  setEquipment: (equipment: Equipment[] | null) => void
  dndClass: Class
  background: Background
}) {
  const [hoveredRestart, setHoveredRestart] = useState<boolean>(false)
  const [showValidationDetails, setShowValidationDetails] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const {
    selectedBackgroundEq,
    selectedClassEq,
    showShop,
    shopPurchases,
    selectedEq,
    setShopPurchases,
    handleBackgroundSelect,
    handleClassSelect,
    handleReset,
    openShop,
    closeShop,
    isValid,
  } = useEquipmentSelection()

  return (
    <main className="h-screen w-screen flex flex-col gap-6 items-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-y-auto overflow-x-hidden relative">
      <Title name="Sélection d'équipement" />
      <div className="relative flex justify-center w-full h-full px-20 overflow-hidden">
        <div className="relative w-[60%]">
          <Box className="flex flex-col gap-4 h-full">
            <div className="overflow-y-auto overflow-x-hidden h-full">
              <div className="flex gap-4">
                {/* Équipement d'historique */}
                <div
                  className={`flex-1 bg-gray-800 border-2 border-gray-600 rounded-lg p-4 flex flex-col gap-4 ${
                    shopPurchases.length > 0
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }`}
                >
                  <h2 className="text-xl font-bold text-center border-b-2 border-gray-600 pb-2">
                    Équipement d'historique
                    {shopPurchases.length > 0 && (
                      <span className="text-sm text-red-400 block mt-1">
                        (Achats effectués)
                      </span>
                    )}
                  </h2>
                  <div>
                    <EquipmentList
                      equipmentOptions={background.equipment}
                      onSelect={handleBackgroundSelect}
                    />
                  </div>
                </div>

                {/* Équipement de classe */}
                <div
                  className={`flex-1 bg-gray-800 border-2 border-gray-600 rounded-lg p-4 flex flex-col gap-4 ${
                    shopPurchases.length > 0
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }`}
                >
                  <h2 className="text-xl font-bold text-center border-b-2 border-gray-600 pb-2">
                    Équipement de classe
                    {shopPurchases.length > 0 && (
                      <span className="text-sm text-red-400 block mt-1">
                        (Achats effectués)
                      </span>
                    )}
                  </h2>
                  <div>
                    <EquipmentList
                      equipmentOptions={dndClass.equipment}
                      onSelect={handleClassSelect}
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

              <div className="flex items-center z-50 justify-center mt-4 pb-4">
                <div
                  onMouseEnter={() => {
                    setShowValidationDetails(true)
                  }}
                  onMouseLeave={() => {
                    setShowValidationDetails(false)
                  }}
                  onMouseMove={(
                    e: React.MouseEvent<HTMLDivElement, MouseEvent>
                  ) => {
                    setMousePosition({ x: e.clientX, y: e.clientY })
                  }}
                >
                  <PrimaryButton
                    onClick={() => {
                      setEquipment(selectedEq ? selectedEq : null)
                      console.info("Équipement sélectionné : ", selectedEq)
                    }}
                    disabled={!(selectedBackgroundEq && selectedClassEq)}
                    text="Valider"
                  />
                </div>
                <ShopButton
                  name="Shop"
                  className="ms-4"
                  onClick={openShop}
                />
                <RectangleButton
                  name=""
                  image="/src/assets/equipments/restart.png"
                  className="ms-4"
                  disabled={shopPurchases.length === 0}
                  onClick={handleReset}
                  onMouseEnter={() => setHoveredRestart(true)}
                  onMouseLeave={() => setHoveredRestart(false)}
                  onMouseMove={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    setMousePosition({ x: e.clientX, y: e.clientY })
                  }}
                />
              </div>
            </div>
          </Box>
        </div>
      </div>

      {showShop && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Shop
            money={selectedEq?.filter((item) => item.category === "Argent")}
            setShopPurchases={setShopPurchases}
            onClose={closeShop}
          />
        </div>
      )}

      {hoveredRestart && (
        <HoverDescription
          text={"Achats effectués, cliquez pour réinitialiser la sélection"}
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
        />
      )}

      {showValidationDetails && isValid && (
        <HoverDescription
          text={
            "Validation impossible : les deux options ne sont pas sélectionnées."
          }
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
        />
      )}
    </main>
  )
}
