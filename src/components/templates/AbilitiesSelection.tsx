"use client"

import SquareButton from "../atoms/SquareButton"
import Box from "../atoms/Box"
import PrimaryButton from "../atoms/PrimaryButton"
import SquareBox from "../atoms/SquareBox"
import Title from "../atoms/Title"
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
  } = useAbilitiesSelection(abilities, dndClass, background)

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
                        <SquareBox
                          text={`${ability.rawValue}`}
                          className="bg-gray-700 border-2 border-gray-500 text-white text-2xl font-bold"
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
                        <SquareBox
                          text={`${ability.historyBonus}`}
                          className={`bg-gray-700 border-2 border-gray-500 text-white text-2xl font-bold ${
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
                        <SquareBox
                          text={`${ability.finalValue}`}
                          className="text-white text-2xl font-bold"
                        />
                      </div>
                      <div className="mx-auto relative w-fit h-fit">
                        <img
                          src="/dice.png"
                          alt="Modificateur"
                          className="w-14 h-auto object-contain"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <SquareBox
                            text={`${
                              ability.modifier >= 0
                                ? `+${ability.modifier}`
                                : ability.modifier
                            }`}
                            className="text-white text-2xl font-bold"
                          />
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
                <PrimaryButton
                  onClick={() => {
                    setAbilities(selectedAb)
                    console.log(selectedAb)
                    onNext()
                  }}
                  disabled={!isValid}
                >
                  Valider
                </PrimaryButton>
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
