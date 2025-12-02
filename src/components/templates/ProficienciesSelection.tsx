"use client"

import { TfiArrowCircleLeft } from "react-icons/tfi"
import Title from "../atoms/Title"
import Box from "../atoms/Box"
import type { Background } from "../../types/data/background"
import type { Class } from "../../types/data/class"
import RectangleBox from "../atoms/RectangleBox"
import PrimaryButton from "../atoms/PrimaryButton"
import { useState } from "react"
import type { Skill } from "../../types/data/skill"
import RectangleButton from "../atoms/RectangleButton"
import { useProficienciesSelection } from "../../hooks/useProficienciesSelection"

export default function ProficienciesSelection({
  setProficiencies,
  proficiencies,
  dndClass,
  background,
  isAbilitiesSelectionValid,
  onBack,
  onNext,
}: {
  setProficiencies: (proficiencies: Skill[] | null) => void
  proficiencies: Skill[] | null
  dndClass: Class | null
  background: Background | null
  isAbilitiesSelectionValid: boolean
  onBack: () => void
  onNext: () => void
}) {
  const [showSkilledDetails, setShowSkilledDetails] = useState(false)
  const [showValidationDetails, setShowValidationDetails] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const {
    selectedPf,
    useSkilledForSkills,
    setUseSkilledForSkills,
    maxSelectableSkills,
    selectedFromClass,
    remainingSkills,
    availableSkills,
    addSkill,
    removeSkill,
    isFromBackground,
    getValidationErrors,
    isButtonDisabled,
  } = useProficienciesSelection(
    proficiencies,
    dndClass,
    background,
    isAbilitiesSelectionValid
  )

  return (
    <main className="h-screen w-screen flex flex-col gap-6 items-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-auto relative">
      <Title name="Sélection des Maîtrises" />
      <div className="relative w-full flex justify-center px-20">
        <div className="w-[50%] h-[100%] relative">
          <TfiArrowCircleLeft
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 text-5xl text-gray-500 transition ease-in cursor-pointer drop-shadow-md hover:text-white hover:-translate-x-2 hover:-translate-y-1/2"
            onClick={() => {
              setProficiencies(selectedPf)
              onBack()
            }}
          />
          <Box className="flex flex-col gap-6">
            {/* Contours*/}
            <div className="flex gap-6">
              {/* Section gauche: 70% */}
              <div className="w-[60%] flex flex-col gap-6 items-center">
                {/* 1er Block */}
                <div className="w-full flex flex-col gap-4 items-center">
                  <h2 className="text-xl font-bold">Maîtrises déjà acquises</h2>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {background?.proficiencies.map(
                      (proficiency, index) =>
                        proficiency && (
                          <RectangleBox
                            key={"pf-bg-" + index}
                            text={proficiency.name}
                            className="bg-gray-700 border-2 border-gray-500"
                          />
                        )
                    )}
                  </div>
                </div>
                {/* 2e Block */}
                <div className="w-full flex flex-col gap-4 items-center">
                  <h2 className="text-xl font-bold">Maîtrises à acquérir</h2>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {availableSkills.map((skillProficiency, index) => {
                      const isDisabled = remainingSkills <= 0

                      return (
                        <RectangleButton
                          key={"pf-class-" + index}
                          name={skillProficiency.name}
                          onClick={() => addSkill(skillProficiency)}
                          disabled={isDisabled}
                          className="bg-gray-700 border-2 border-gray-500"
                        />
                      )
                    })}
                  </div>
                  <h2 className="text-xl font-bold">
                    Maîtrises sélectionnées : {selectedFromClass} /{" "}
                    {maxSelectableSkills}
                  </h2>
                </div>
              </div>
              {/* Section droite: 30% */}
              <div className="w-[40%] flex flex-col gap-4 items-center">
                <h2 className="text-xl font-bold">Total des Maîtrises</h2>
                <div className="w-[40%] flex flex-wrap gap-4 justify-center">
                  {selectedPf?.map((proficiency, index) => {
                    return isFromBackground(proficiency) ? (
                      <RectangleBox
                        key={"pf-selected-" + index}
                        text={proficiency.name}
                        className="bg-gray-700 border-2 border-gray-500"
                      />
                    ) : (
                      <RectangleButton
                        key={"pf-selected-" + index}
                        name={proficiency.name}
                        onClick={() => removeSkill(proficiency)}
                        className="bg-gray-700 border-2 border-gray-500"
                      />
                    )
                  })}
                </div>
              </div>
            </div>

            {background?.feat.name === "Doué" && (
              <div
                className="relative flex items-center justify-center gap-3 mt-6 cursor-help"
                onMouseEnter={(e) => {
                  setShowSkilledDetails(true)
                  setMousePosition({ x: e.clientX, y: e.clientY })
                }}
                onMouseMove={(e) => {
                  setMousePosition({ x: e.clientX, y: e.clientY })
                }}
                onMouseLeave={() => setShowSkilledDetails(false)}
              >
                <label
                  htmlFor="skilled-choice"
                  className="text-lg cursor-pointer"
                >
                  Utiliser le don "Doué" pour 3 maîtrises supplémentaires
                </label>
                <input
                  id="skilled-choice"
                  type="checkbox"
                  checked={useSkilledForSkills}
                  onChange={(e) => setUseSkilledForSkills(e.target.checked)}
                  className="w-5 h-5 cursor-pointer accent-primary"
                />
              </div>
            )}

            <div className="flex justify-center mt-6">
              <div
                onMouseEnter={(e) => {
                  if (isButtonDisabled) {
                    setShowValidationDetails(true)
                    setMousePosition({ x: e.clientX, y: e.clientY })
                  }
                }}
                onMouseMove={(e) => {
                  if (isButtonDisabled) {
                    setMousePosition({ x: e.clientX, y: e.clientY })
                  }
                }}
                onMouseLeave={() => setShowValidationDetails(false)}
              >
                <PrimaryButton
                  onClick={() => {
                    setProficiencies(selectedPf)
                    console.log("Proficiencies validated")
                    onNext()
                  }}
                  disabled={isButtonDisabled}
                >
                  Valider
                </PrimaryButton>
              </div>
            </div>
          </Box>
        </div>
      </div>

      {showSkilledDetails && (
        <div
          className="fixed pointer-events-none z-50 max-w-md p-4 bg-black border-2 border-gray-500 rounded-lg text-white text-sm shadow-lg"
          style={{
            left: `${mousePosition.x + 10}px`,
            top: `${mousePosition.y + 10}px`,
          }}
        >
          <p className="text-gray-300">
            Le don "Doué" vous permet de choisir entre :<br />
            <span className="text-white">
              • 3 maîtrises de compétences supplémentaires
            </span>{" "}
            (case cochée)
            <br />
            <span className="text-white">
              • 3 maîtrises d'outils supplémentaires
            </span>{" "}
            (case décochée)
            <br />
            <br />
            Ce choix impactera vos options d'équipement à l'écran suivant.
          </p>
        </div>
      )}

      {showValidationDetails && isButtonDisabled && (
        <div
          className="fixed pointer-events-none z-50 max-w-md p-4 bg-black border-2 border-red-500 rounded-lg text-white text-sm shadow-lg"
          style={{
            left: `${mousePosition.x + 10}px`,
            top: `${mousePosition.y + 10}px`,
          }}
        >
          <p className="font-bold text-red-500 mb-2">Validation impossible :</p>
          <ul className="list-disc list-inside space-y-1">
            {getValidationErrors().map((error, index) => (
              <li key={index} className="text-red-300">
                {error}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  )
}
