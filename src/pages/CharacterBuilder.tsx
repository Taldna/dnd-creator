"use client"

import { useState } from "react"

import type { Class } from "../types/data/class"
import type { Background } from "../types/data/background"
import type { Species } from "../types/data/species"

import ClassSelection from "../components/templates/ClassSelection"
import BackgroundSelection from "../components/templates/BackgroundSelection"
import SpeciesSelection from "../components/templates/SpeciesSelection"
import type { Ability } from "../types/data/ability"
import AbilitiesSelection from "../components/templates/AbilitiesSelection"
import ProficienciesSelection from "../components/templates/ProficienciesSelection"
import type { Skill } from "../types/data/skill"
import EquipmentSelection from "../components/templates/EquipmentSelection"
import type { Equipment } from "../types/data/equipment"
import PersonalizationCompletion from "../components/templates/PersonalizationCompletion"
import type { Personalization } from "../types/data/personalization"
import DownloadPDF from "../components/templates/DownloadPDF"

export default function CharacterBuilder() {
  const [dndClass, setDndClass] = useState<Class | null>(null)
  const [background, setBackground] = useState<Background | null>(null)
  const [species, setSpecies] = useState<Species | null>(null)
  const [abilities, setAbilities] = useState<Record<string, Ability> | null>(
    null
  )
  const [equipment, setEquipment] = useState<Equipment[] | null>(null)
  const [proficiencies, setProficiencies] = useState<Skill[] | null>(null)
  const [personalization, setPersonalization] = useState<Personalization | null>(null)

  const [showProficiencies, setShowProficiencies] = useState(false)
  const [showEquipment, setShowEquipment] = useState(false)
  const [isAbilitiesSelectionValid, setIsAbilitiesSelectionValid] =
    useState(false)

  const handleReturnToHome = () => {
    setDndClass(null)
    setBackground(null)
    setSpecies(null)
    setAbilities(null)
    setEquipment(null)
    setProficiencies(null)
    setPersonalization(null)
    setShowProficiencies(false)
    setShowEquipment(false)
    setIsAbilitiesSelectionValid(false)
  }

  if (dndClass === null) {
    return <ClassSelection setDndClass={setDndClass} />
  } else if (background === null) {
    return <BackgroundSelection setBackground={setBackground} />
  } else if (species === null) {
    // setSpecies(SPECIES[0])
    return <SpeciesSelection setSpecies={setSpecies} />
  } else if (abilities === null || !showProficiencies) {
    return (
      <AbilitiesSelection
        setAbilities={setAbilities}
        abilities={abilities}
        dndClass={dndClass}
        background={background}
        onNext={() => setShowProficiencies(true)}
        setIsAbilitiesSelectionValid={setIsAbilitiesSelectionValid}
      />
    )
  } else if (showProficiencies && !showEquipment && equipment === null) {
    return (
      <ProficienciesSelection
        setProficiencies={setProficiencies}
        proficiencies={proficiencies}
        dndClass={dndClass}
        background={background}
        isAbilitiesSelectionValid={isAbilitiesSelectionValid}
        onBack={() => setShowProficiencies(false)}
        onNext={() => setShowEquipment(true)}
      />
    )
  } else if (showEquipment && equipment === null && proficiencies !== null) {
    return (
      <EquipmentSelection
        dndClass={dndClass}
        background={background}
        setEquipment={setEquipment}
      />
    )
  } else if (equipment !== null && personalization === null) {
    return (
      <PersonalizationCompletion setPersonalization={setPersonalization} />
    )
  } else if (personalization !== null) {
    return (
      <DownloadPDF
        dndClass={dndClass}
        background={background}
        species={species}
        abilities={abilities}
        equipment={equipment}
        proficiencies={proficiencies}
        personalization={personalization}
        onReturn={handleReturnToHome}
      />
    )
  }

  return (
    <div className="text-black">
      <div>Class selected: {dndClass.name}</div>
      <div>Background selected: {background.name}</div>
      <div>Species selected: {species.name}</div>
      <div>Abilities selected:</div>
      {abilities &&
        Object.values(abilities).map((ability, index) => (
          <div key={index}>
            <div>- {ability.name}</div>
            <div> Raw Value: {ability.rawValue}</div>
            <div> History Bonus: {ability.historyBonus}</div>
            <div> Final Value: {ability.finalValue}</div>
            <div> Modifier: {ability.modifier}</div>
          </div>
        ))}
    </div>
  )
}