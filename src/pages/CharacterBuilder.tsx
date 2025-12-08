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
import { SPECIES } from "../data/species"
import type { Skill } from "../types/data/skill"
import EquipmentSelection from "../components/templates/EquipmentSelection"
import type { Equipment } from "../types/data/equipment"

export default function CharacterBuilder() {
  const [dndClass, setDndClass] = useState<Class | null>(null)
  const [background, setBackground] = useState<Background | null>(null)
  const [species, setSpecies] = useState<Species | null>(null)
  const [abilities, setAbilities] = useState<Record<string, Ability> | null>(
    null
  )
  const [equipment, setEquipment] = useState<Equipment[] | null>(null)
  const [proficiencies, setProficiencies] = useState<Skill[] | null>(null)
  const [showProficiencies, setShowProficiencies] = useState(false)
  const [showEquipment, setShowEquipment] = useState(false)
  const [isAbilitiesSelectionValid, setIsAbilitiesSelectionValid] =
    useState(true)// à mettre à false

  if (dndClass === null) {
    return <ClassSelection setDndClass={setDndClass} />
  } else if (background === null) {
    return <BackgroundSelection setBackground={setBackground} />
  } else if (species === null) {
    setSpecies(SPECIES[0])
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
  } else if (showEquipment && proficiencies !== null) {
    return (
      <EquipmentSelection
        dndClass={dndClass}
        background={background}
        setEquipment={setEquipment}
      />
    )
  } else if (showProficiencies) {
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
  } else if (equipment !== null) {
    // page des sorts
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
