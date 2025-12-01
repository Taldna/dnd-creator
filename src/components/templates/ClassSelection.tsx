"use client"
import { useState } from "react"

import type { Class } from "../../types/data/class"

import { CLASSES } from "../../data/classes"

import Title from "../atoms/Title"
import ClassesGrid from "../molecules/ClassesGrid"
import ClassDetails from "../organisms/ClassDetails"
import PrimaryButton from "../atoms/PrimaryButton"

export default function ClassSelection({
  setDndClass,
}: {
  setDndClass: (dndClass: Class | null) => void
}) {
  const [selectedClass, setSelectedClass] = useState<Class | null>(null)

  return (
    <main className="h-screen w-screen flex flex-col items-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-hidden">
      <Title name="Sélection de la Classe" />

      {selectedClass === null ? (
        <ClassesGrid handleSelect={setSelectedClass} classList={CLASSES} />
      ) : (
        <>
          <ClassDetails
            dndClass={selectedClass!}
            handleClick={setSelectedClass}
          />
          <div className="absolute bottom-6">
            <PrimaryButton
              onClick={() => {
                console.info(`Classe "${selectedClass!.name}" sélectionnée !`)
                setDndClass(selectedClass)
              }}
            >
              Choisir
            </PrimaryButton>
          </div>
        </>
      )}
    </main>
  )
}
