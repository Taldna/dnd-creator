"use client"

import SquareButton from "../atoms/DiamondButton"
import Box from "../atoms/Box"
import PrimaryButton from "../atoms/PrimaryButton"
import SquarBox from "../atoms/DiamondBox"
import Title from "../atoms/Title"
import HoverDescription from "../atoms/HoverDescription"
import type { Background } from "../../types/data/background"
import type { Class } from "../../types/data/class"
import type { Ability } from "../../types/data/ability"
import { useState } from "react"
import { TfiArrowCircleRight } from "react-icons/tfi"
import { useAbilitiesSelection } from "../../hooks/useAbilitiesSelection"
import { ABILITIES } from "../../data/abilities"

export default function AbilitiesSelection({
  setAbilities,
  abilities,
  dndClass,
  background,
  onNext,
  setIsAbilitiesSelectionValid,
}: {
  setAbilities: (abilities: Record<string, Ability>) => void
  abilities: Record<string, Ability> | null
  dndClass: Class | null
  background: Background | null
  onNext: () => void
  setIsAbilitiesSelectionValid: (isValid: boolean) => void
}) {
  const [hoveredAbility, setHoveredAbility] = useState<string | null>(null)
  const [showValidationDetails, setShowValidationDetails] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const {
    selectedAb,
    totalHistoryBonus,
    totalPointCost,
    isAbilityAllowed,
    updateAbility,
    canIncreaseRawValue,
    canDecreaseRawValue,
    canIncreaseHistoryBonus,
    canDecreaseHistoryBonus,
    isValid,
  } = useAbilitiesSelection(
    abilities,
    dndClass,
    background,
    setIsAbilitiesSelectionValid
  )

  const getValidationErrors = (): string[] => {
    const errors: string[] = []

    if (totalPointCost !== 27) {
      errors.push(
        `Points de caractéristiques : ${totalPointCost}/27 (doivent être à 27/27)`
      )
    }

    if (totalHistoryBonus !== 3) {
      errors.push(
        `Bonus d'historique : ${totalHistoryBonus}/3 (doivent être à 3/3)`
      )
    }

    return errors
  }

  return (
    <main className="h-screen w-screen flex flex-col gap-6 items-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-y-auto overflow-x-hidden relative">
      <Title name="Sélection des Caractéristiques" />
      <div className="relative flex justify-center w-full h-full px-20 overflow-hidden">
        <div className="relative">
          <Box className="flex flex-col gap-2 h-full">
            <div className="overflow-y-auto overflow-x-hidden h-full">
              <div className="grid grid-cols-5 gap-y-4 text-center text-lg font-bold">
                <div></div>
                <div>Valeur brute</div>
                <div>Bonus d'historique</div>
                <div>Valeur finale</div>
                <div>Modificateur</div>
              </div>

              <div className="mt-4 space-y-4">
                {Object.values(selectedAb).map((ability, index) => (
                  <div key={ability.name}>
                    <div className="grid grid-cols-5 items-center text-center">
                      <div
                        className="text-left text-lg font-bold cursor-help"
                        onMouseEnter={(e) => {
                          setHoveredAbility(ability.name)
                          setMousePosition({ x: e.clientX, y: e.clientY })
                        }}
                        onMouseMove={(e) => {
                          setMousePosition({ x: e.clientX, y: e.clientY })
                        }}
                        onMouseLeave={() => setHoveredAbility(null)}
                      >
                        {ability.name}
                      </div>

                      <div className="flex justify-center items-center">
                        <SquareButton
                          name="-"
                          onClick={() =>
                            updateAbility(ability.name, {
                              rawValue: ability.rawValue - 1,
                            })
                          }
                          className="scale-50 text-white font-bold text-3xl transition ease-in hover:scale-60 pb-1.5"
                          disabled={!canDecreaseRawValue(ability)}
                        />
                        <SquarBox
                          text={`${ability.rawValue}`}
                          className="text-white text-2xl font-bold"
                        />
                        <SquareButton
                          name="+"
                          onClick={() =>
                            updateAbility(ability.name, {
                              rawValue: ability.rawValue + 1,
                            })
                          }
                          className="scale-50 text-white font-bold text-3xl transition ease-in hover:scale-60 pb-1.5"
                          disabled={!canIncreaseRawValue(ability)}
                        />
                      </div>

                      <div className="flex justify-center items-center">
                        <SquareButton
                          name="-"
                          onClick={() =>
                            updateAbility(ability.name, {
                              historyBonus: ability.historyBonus - 1,
                            })
                          }
                          className="scale-50 text-white font-bold text-3xl transition ease-in hover:scale-60 pb-1.5"
                          disabled={!canDecreaseHistoryBonus(ability)}
                        />
                        <SquarBox
                          text={`${ability.historyBonus}`}
                          className={`text-white text-2xl font-bold ${
                            !isAbilityAllowed(ability.name) ? "opacity-30" : ""
                          }`}
                        />
                        <SquareButton
                          name="+"
                          onClick={() =>
                            updateAbility(ability.name, {
                              historyBonus: ability.historyBonus + 1,
                            })
                          }
                          className="scale-50 text-white font-bold text-3xl transition ease-in hover:scale-60 pb-1.5"
                          disabled={!canIncreaseHistoryBonus(ability)}
                        />
                      </div>

                      <div className="mx-auto">
                        <div
                          className={`w-12 h-12 flex text-white text-2xl font-bold items-center justify-center leading-none relative`}
                        >
                          {`${ability.finalValue}`}
                        </div>
                      </div>
                      <div className="mx-auto relative w-fit h-fit">
                        <img
                          src="/dice.png"
                          alt="Modificateur"
                          className="w-14 h-auto object-contain"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className={`w-12 h-12 flex text-white text-2xl font-bold items-center justify-center leading-none relative`}
                          >
                            {`${
                              ability.modifier >= 0
                                ? `+${ability.modifier}`
                                : ability.modifier
                            }`}
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < Object.values(ABILITIES).length - 1 && (
                      <hr className="border-gray-500/50 mt-3" />
                    )}
                  </div>
                ))}
              </div>

              <hr className="border-gray-500/50 mt-3" />

              <div className="grid grid-cols-5 items-center text-center mt-4 text-lg font-bold">
                <span className="text-left">Coût total</span>
                <span>{totalPointCost}/27</span>
                <span>{totalHistoryBonus}/3</span>
              </div>

              <div className="flex justify-center mt-6 pb-4">
                <div
                  onMouseEnter={() => {
                    if (!isValid) {
                      setShowValidationDetails(true)
                    }
                  }}
                  onMouseMove={(e) => {
                    if (!isValid) {
                      setMousePosition({ x: e.clientX, y: e.clientY })
                    }
                  }}
                  onMouseLeave={() => setShowValidationDetails(false)}
                >
                  <PrimaryButton
                    onClick={() => {
                      setAbilities(selectedAb)
                      console.log(selectedAb)
                      onNext()
                    }}
                    disabled={!isValid}
                    text="Valider"
                  ></PrimaryButton>
                </div>
              </div>
            </div>
          </Box>

          <TfiArrowCircleRight
            className="absolute left-full ml-4 top-1/2 -translate-y-1/2 text-5xl text-gray-500 transition ease-in cursor-pointer drop-shadow-md hover:text-white hover:translate-x-2 hover:-translate-y-1/2"
            onClick={() => {
              setAbilities(selectedAb)
              setIsAbilitiesSelectionValid(isValid)
              onNext()
            }}
          />
        </div>
      </div>

      {hoveredAbility && (
        <HoverDescription
          text={`${hoveredAbility}\n\n${selectedAb[hoveredAbility]?.description}`}
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
        />
      )}

      {showValidationDetails && !isValid && (
        <HoverDescription
          text={`Validation impossible :\n\n${getValidationErrors()
            .map((error) => `• ${error}`)
            .join("\n")}`}
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
        />
      )}
    </main>
  )
}
