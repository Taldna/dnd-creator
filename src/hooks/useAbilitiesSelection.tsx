import { useState, useEffect } from "react"
import { ABILITIES, CLASS_ABILITY_ARCHETYPES } from "../data/abilities"
import type { Ability } from "../types/data/ability"
import type { Class } from "../types/data/class"
import type { Background } from "../types/data/background"

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

const calculateAbilitiesValues = (
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

export function useAbilitiesSelection(
  abilities: Record<string, Ability> | null,
  dndClass: Class | null,
  background: Background | null,
  setIsAbilitiesSelectionValid?: (isValid: boolean) => void
) {
  const [selectedAb, setSelectedAb] =
    useState<Record<string, Ability>>(ABILITIES)

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

    setSelectedAb(calculateAbilitiesValues(updatedAbilities))
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

  const updateAbility = (abilityName: string, updates: Partial<Ability>) => {
    setSelectedAb(
      calculateAbilitiesValues({
        ...selectedAb,
        [abilityName]: {
          ...selectedAb[abilityName],
          ...updates,
        },
      })
    )
  }

  const canIncreaseRawValue = (ability: Ability) => {
    return !(
      ability.rawValue >= 15 ||
      totalPointCost -
        calculatePointCost(ability.rawValue) +
        calculatePointCost(ability.rawValue + 1) >
        27
    )
  }

  const canDecreaseRawValue = (ability: Ability) => {
    return ability.rawValue > 8
  }

  const canIncreaseHistoryBonus = (ability: Ability) => {
    return !(
      totalHistoryBonus >= 3 ||
      !isAbilityAllowed(ability.name) ||
      ability.historyBonus >= 2
    )
  }

  const canDecreaseHistoryBonus = (ability: Ability) => {
    return ability.historyBonus > 0 && isAbilityAllowed(ability.name)
  }

  const isValid = totalHistoryBonus === 3 && totalPointCost === 27

  // Synchroniser isAbilitiesSelectionValid en temps réel
  useEffect(() => {
    if (setIsAbilitiesSelectionValid) {
      setIsAbilitiesSelectionValid(isValid)
    }
  }, [isValid, setIsAbilitiesSelectionValid])

  return {
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
  }
}
