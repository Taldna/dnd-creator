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
      <Title className="h-1/10" name="Sélection des Maîtrises" />
      <div className="relative flex justify-center w-full">
        <Box className="flex flex-col gap-2 bg-black/30"></Box>
      </div>
      <TfiArrowCircleLeft
        className="absolute left-100 top-1/2 text-5xl text-gray-500 transition ease-in cursor-pointer drop-shadow-md hover:text-white hover:-translate-x-2"
        onClick={onBack}
      />
    </main>
  )
}
