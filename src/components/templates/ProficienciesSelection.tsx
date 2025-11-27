"use client"

import { TfiArrowCircleLeft } from "react-icons/tfi"
import type { Ability } from "../../types/data/ability"
import Title from "../atoms/Title"
import Box from "../atoms/Box"

export default function ProficienciesSelection({
  setProficiency,
  selectedAb,
  onBack,
}: {
  setProficiency: () => void
  selectedAb: Record<string, Ability>
  onBack: () => void
}) {
  //const [selectedPf, setSelectedPf] = useState<>()

  return (
    <main className="h-screen w-screen flex flex-col gap-6 items-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-auto relative">
      <Title name="Sélection des Maîtrises" />
      <div className="relative">
        <div className="relative flex justify-center w-full">
          <Box className="flex gap-6 bg-black/30">
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">Titre Section 1</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-700/50 p-4 rounded">Item 1</div>
                  <div className="bg-gray-700/50 p-4 rounded">Item 2</div>
                  <div className="bg-gray-700/50 p-4 rounded">Item 3</div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">Titre Section 2</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-700/50 p-4 rounded">Item 1</div>
                  <div className="bg-gray-700/50 p-4 rounded">Item 2</div>
                  <div className="bg-gray-700/50 p-4 rounded">Item 3</div>
                </div>
              </div>
            </div>

            <div className="w-80 flex flex-col gap-4">
              <h2 className="text-xl font-bold">Titre Section 3</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-700/50 p-4 rounded">Item 1</div>
                <div className="bg-gray-700/50 p-4 rounded">Item 2</div>
                <div className="bg-gray-700/50 p-4 rounded">Item 3</div>
              </div>
            </div>
          </Box>
        </div>
        <TfiArrowCircleLeft
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 text-5xl text-gray-500 transition ease-in cursor-pointer drop-shadow-md hover:text-white hover:-translate-x-2 hover:-translate-y-1/2"
          onClick={() => {
            setProficiency()
            onBack()
          }}
        />
      </div>
    </main>
  )
}
