import { useState, useEffect } from "react"
import type { Skill } from "../types/data/skill"
import type { Class } from "../types/data/class"
import type { Background } from "../types/data/background"

export function useProficienciesSelection(
  proficiencies: Skill[] | null,
  dndClass: Class | null,
  background: Background | null,
  isAbilitiesSelectionValid: boolean
) {
  const [selectedPf, setSelectedPf] = useState<Skill[]>(
    background?.proficiencies || []
  )
  const [useSkilledForSkills, setUseSkilledForSkills] = useState(true)

  useEffect(() => {
    if (proficiencies) {
      setSelectedPf(proficiencies)
      return
    }
  }, [proficiencies])

  const maxSelectableSkills =
    background?.feat.name === "Doué" && useSkilledForSkills
      ? (dndClass?.skillProficienciesNumber ?? 0) + 3
      : dndClass?.skillProficienciesNumber ?? 0

  const selectedFromClass = selectedPf.filter(
    (skill) => !background?.proficiencies.some((bg) => bg.name === skill.name)
  ).length

  const remainingSkills = maxSelectableSkills - selectedFromClass

  const availableSkills =
    dndClass?.skillProficiencies.filter(
      (skill) => !selectedPf.some((p) => p.name === skill.name)
    ) || []

  const addSkill = (skill: Skill) => {
    if (remainingSkills > 0) {
      setSelectedPf([...selectedPf, skill])
    }
  }

  const removeSkill = (skill: Skill) => {
    const isFromBackground = background?.proficiencies.some(
      (bg) => bg.name === skill.name
    )
    if (!isFromBackground) {
      setSelectedPf(selectedPf.filter((p) => p.name !== skill.name))
    }
  }

  const isFromBackground = (skill: Skill) => {
    return background?.proficiencies.some((bg) => bg.name === skill.name)
  }

  const isValid = remainingSkills === 0

  const getValidationErrors = (): string[] => {
    const errors: string[] = []

    if (!isAbilitiesSelectionValid) {
      errors.push("Les caractéristiques ne sont pas complétées à 100%")
    }

    if (remainingSkills > 0) {
      errors.push(
        `Il vous reste ${remainingSkills} maîtrise${
          remainingSkills > 1 ? "s" : ""
        } à sélectionner`
      )
    }

    if (remainingSkills < 0) {
      errors.push(
        `Vous avez sélectionné ${Math.abs(remainingSkills)} maîtrise${
          Math.abs(remainingSkills) > 1 ? "s" : ""
        } en trop`
      )
    }

    return errors
  }

  const isButtonDisabled = !isAbilitiesSelectionValid || !isValid

  return {
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
    isValid,
    getValidationErrors,
    isButtonDisabled,
  }
}
