"use client"

import { ABILITIES, CLASS_ABILITY_ARCHETYPES } from "../../data/abilities"
import type { Ability } from "../../types/data/ability"
import SecondaryButton from "../atoms/SecondaryButton"
import Box from "../atoms/Box"
import PrimaryButton from "../atoms/PrimaryButton"
import SquareBox from "../atoms/SquareBox"
import Title from "../atoms/Title"
import type { Background } from "../../types/data/background"
import type { Class } from "../../types/data/class"
import { useState, useEffect } from "react"
import { TfiArrowCircleRight } from "react-icons/tfi"

const calculateAbilityValues = (
  abilities: Record<string, Ability>
): Record<string, Ability> => {
  const calculated: Record<string, Ability> = {}
  Object.entries(abilities).forEach(([key, ability]) => {
    const finalValue = ability.rawValue + ability.historyBonus
    const modifier = Math.floor((finalValue - 10) / 2)

    calculated[key] = {
      ...ability,
      finalValue,
      modifier,
    }
  })
  return calculated
}

const POINT_BUY_COSTS: Record<number, number> = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9,
}

const calculatePointCost = (score: number): number => {
  return POINT_BUY_COSTS[score] ?? 0
}

const calculateTotalPointCost = (
  abilities: Record<string, Ability>
): number => {
  return Object.values(abilities).reduce(
    (sum, ability) => sum + calculatePointCost(ability.rawValue),
    0
  )
}

export default function AbilitiesSelection({
  setAbilities,
  abilities,
  dndClass,
  background,
  onNext,
}: {
  setAbilities: (abilities: Record<string, Ability>) => void
  abilities: Record<string, Ability> | null
  dndClass: Class | null
  background: Background | null
  onNext: () => void
}) {
  const [selectedAb, setSelectedAb] =
    useState<Record<string, Ability>>(ABILITIES)
  const [hoveredAbility, setHoveredAbility] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (abilities) {
      setSelectedAb(abilities)
      return
    }

    if (!dndClass) {
      setSelectedAb(ABILITIES)
      return
    }

    const archetype = CLASS_ABILITY_ARCHETYPES[dndClass.name]
    if (!archetype) {
      setSelectedAb(ABILITIES)
      return
    }

    const updatedAbilities: Record<string, Ability> = {}
    Object.entries(ABILITIES).forEach(([key, ability]) => {
      const rawValue = archetype[ability.name] || 0

      updatedAbilities[key] = {
        ...ability,
        rawValue,
        finalValue: 0,
        modifier: 0,
      }
    })

    setSelectedAb(calculateAbilityValues(updatedAbilities))
  }, [dndClass, abilities])

  const totalHistoryBonus = Object.values(selectedAb).reduce(
    (sum, ability) => sum + ability.historyBonus,
    0
  )

  const totalPointCost = calculateTotalPointCost(selectedAb)

  const allowedAbilities =
    background?.abilityScore.map((ab) => ab?.name).filter(Boolean) || []
  const isAbilityAllowed = (abilityName: string) =>
    allowedAbilities.includes(abilityName)

  return (
    <main className="h-screen w-screen flex flex-col gap-6 items-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-auto relative">
      <Title className="h-1/10" name="Sélection des Caractéristiques" />
      <div className="relative flex justify-center w-full px-20">
        <div className="relative">
          <Box className="flex flex-col gap-2 bg-black/30">
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
                      <SecondaryButton
                        name="-"
                        onClick={() =>
                          setSelectedAb(
                            calculateAbilityValues({
                              ...selectedAb,
                              [ability.name]: {
                                ...selectedAb[ability.name],
                                rawValue: ability.rawValue - 1,
                              },
                            })
                          )
                        }
                        className={`scale-50 transition ease-in hover:scale-60 pb-1.5 ${
                          ability.rawValue <= 8
                            ? "opacity-30 cursor-not-allowed"
                            : ""
                        }`}
                        disabled={ability.rawValue <= 8}
                      />
                      <SquareBox
                        text={`${ability.rawValue}`}
                        className="bg-gray-700 border-2 border-gray-500"
                      />
                      <SecondaryButton
                        name="+"
                        onClick={() =>
                          setSelectedAb(
                            calculateAbilityValues({
                              ...selectedAb,
                              [ability.name]: {
                                ...selectedAb[ability.name],
                                rawValue: ability.rawValue + 1,
                              },
                            })
                          )
                        }
                        className={`scale-50 transition ease-in hover:scale-60 pb-1.5 ${
                          ability.rawValue >= 15 ||
                          totalPointCost -
                            calculatePointCost(ability.rawValue) +
                            calculatePointCost(ability.rawValue + 1) >
                            27
                            ? "opacity-30 cursor-not-allowed"
                            : ""
                        }`}
                        disabled={
                          ability.rawValue >= 15 ||
                          totalPointCost -
                            calculatePointCost(ability.rawValue) +
                            calculatePointCost(ability.rawValue + 1) >
                            27
                        }
                      />
                    </div>

                    <div className="flex justify-center items-center">
                      <SecondaryButton
                        name="-"
                        onClick={() =>
                          setSelectedAb(
                            calculateAbilityValues({
                              ...selectedAb,
                              [ability.name]: {
                                ...selectedAb[ability.name],
                                historyBonus: ability.historyBonus - 1,
                              },
                            })
                          )
                        }
                        className={`scale-50 transition ease-in hover:scale-60 pb-1.5 ${
                          ability.historyBonus <= 0 ||
                          !isAbilityAllowed(ability.name)
                            ? "opacity-30 cursor-not-allowed"
                            : ""
                        }`}
                        disabled={
                          ability.historyBonus <= 0 ||
                          !isAbilityAllowed(ability.name)
                        }
                      />
                      <SquareBox
                        text={`${ability.historyBonus}`}
                        className={`bg-gray-700 border-2 border-gray-500 ${
                          !isAbilityAllowed(ability.name) ? "opacity-30" : ""
                        }`}
                      />
                      <SecondaryButton
                        name="+"
                        onClick={() =>
                          setSelectedAb(
                            calculateAbilityValues({
                              ...selectedAb,
                              [ability.name]: {
                                ...selectedAb[ability.name],
                                historyBonus: ability.historyBonus + 1,
                              },
                            })
                          )
                        }
                        className={`scale-50 transition ease-in hover:scale-60 pb-1.5 ${
                          totalHistoryBonus >= 3 ||
                          !isAbilityAllowed(ability.name) ||
                          ability.historyBonus >= 2
                            ? "opacity-30 cursor-not-allowed"
                            : ""
                        }`}
                        disabled={
                          totalHistoryBonus >= 3 ||
                          !isAbilityAllowed(ability.name) ||
                          ability.historyBonus >= 2
                        }
                      />
                    </div>

                    <div className="mx-auto">
                      <SquareBox text={`${ability.finalValue}`} />
                    </div>
                    <div className="mx-auto">
                      <SquareBox text={`${ability.modifier}`} />
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

            <div className="flex justify-center mt-6">
              <PrimaryButton
                onClick={() => {
                  setAbilities(selectedAb)
                  console.log(selectedAb)
                }}
                disabled={totalHistoryBonus < 3 || totalPointCost < 27}
              >
                Valider
              </PrimaryButton>
            </div>
          </Box>

          <TfiArrowCircleRight
            className="absolute left-full ml-4 top-1/2 -translate-y-1/2 text-5xl text-gray-500 transition ease-in cursor-pointer drop-shadow-md hover:text-white hover:translate-x-2 hover:-translate-y-1/2"
            onClick={() => {
              setAbilities(selectedAb)
              onNext()
            }}
          />
        </div>
      </div>

      {hoveredAbility && (
        <div
          className="fixed pointer-events-none z-50 max-w-xs p-4 bg-black border-2 border-gray-500 rounded-lg text-white text-sm shadow-lg"
          style={{
            left: `${mousePosition.x + 10}px`,
            top: `${mousePosition.y + 10}px`,
          }}
        >
          <div className="font-bold mb-2">{hoveredAbility}</div>
          <div>{selectedAb[hoveredAbility]?.description}</div>
        </div>
      )}
    </main>
  )
}
