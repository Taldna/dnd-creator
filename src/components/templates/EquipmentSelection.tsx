"use client"

import Box from "../atoms/Box"
import RectangleBox from "../atoms/RectangleBox"
import RectangleButton from "../atoms/RectangleButton"
import Title from "../atoms/Title"

export default function EquipmentSelection() {
  return (
    <main className="h-screen w-screen flex flex-col gap-6 items-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-y-auto overflow-x-hidden relative">
      <Title name="Sélection d'équipement" />
      <div className="relative flex justify-center w-full h-full px-20 overflow-hidden">
        <div className="relative">
          <Box className="flex raw-2 gap-4 h-full">
            <div className="flex flex-col gap-4 cols-2">
              <RectangleBox
                text=""
                className="bg-gray-700 border-2 border-gray-500"
              >
                <Title name="Équipement d'historique" />
              </RectangleBox>
              <RectangleBox
                text=""
                className="bg-gray-700 border-2 border-gray-500"
              >
                <Title name="Équipement de classe" />
              </RectangleBox>
            </div>
            <RectangleBox
              text=""
              className="bg-gray-700 border-2 border-gray-500 flex flex-col col-2"
            >
              <Title name="Équipement choisi" />
              <RectangleBox
                text="matos final"
                className="bg-gray-700 border-2 border-gray-500"
              />
            </RectangleBox>
          </Box>
          <RectangleButton name="Shop" />
        </div>
      </div>
    </main>
  )
}
