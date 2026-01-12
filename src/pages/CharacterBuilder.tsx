"use client"

import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

import type { Class } from "../types/data/class"
import type { Background } from "../types/data/background"
import type { Specie } from "../types/data/specie"

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
  const navigate = useNavigate()
  const location = useLocation()

  const [dndClass, setDndClass] = useState<Class | null>(null)
  const [background, setBackground] = useState<Background | null>(null)
  const [specie, setSpecie] = useState<Specie | null>(null)
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

  // Obtenir la page actuelle à partir de l'URL
  const currentPath = location.pathname.replace('/builder/', '')

  // Naviguer vers classselection si on est sur /builder
  useEffect(() => {
    if (location.pathname === '/builder' || location.pathname === '/builder/') {
      navigate('/builder/classselection')
    }
  }, [location.pathname, navigate])

  const handleReturnToHome = () => {
    setDndClass(null)
    setBackground(null)
    setSpecie(null)
    setAbilities(null)
    setEquipment(null)
    setProficiencies(null)
    setPersonalization(null)
    setShowProficiencies(false)
    setShowEquipment(false)
    setIsAbilitiesSelectionValid(false)
    navigate('/')
  }

  // ClassSelection step
  if (dndClass === null || currentPath === 'classselection') {
    return (
      <ClassSelection
        setDndClass={(selectedClass) => {
          setDndClass(selectedClass)
          navigate('/builder/backgroundselection')
        }}
      />
    )
  }

  // BackgroundSelection step
  if (background === null || currentPath === 'backgroundselection') {
    return (
      <BackgroundSelection
        setBackground={(selectedBackground) => {
          setBackground(selectedBackground)
          navigate('/builder/speciesselection')
        }}
      />
    )
  }

  // SpeciesSelection step
  if (specie === null || currentPath === 'speciesselection') {
    return (
      <SpeciesSelection
        setSpecies={(selectedSpecie) => {
          setSpecie(selectedSpecie)
          navigate('/builder/abilitiesselection')
        }}
      />
    )
  }

  // AbilitiesSelection step
  if (abilities === null || !showProficiencies || currentPath === 'abilitiesselection') {
    return (
      <AbilitiesSelection
        setAbilities={(selectedAbilities) => {
          setAbilities(selectedAbilities)
          setShowProficiencies(true)
          navigate('/builder/proficienciesselection')
        }}
        abilities={abilities}
        dndClass={dndClass}
        background={background}
        onNext={() => {
          setShowProficiencies(true)
          navigate('/builder/proficienciesselection')
        }}
        setIsAbilitiesSelectionValid={setIsAbilitiesSelectionValid}
      />
    )
  }

  // ProficienciesSelection step
  if (showProficiencies && !showEquipment && equipment === null || currentPath === 'proficienciesselection') {
    return (
      <ProficienciesSelection
        setProficiencies={(selectedProficiencies) => {
          setProficiencies(selectedProficiencies)
          setShowEquipment(true)
          navigate('/builder/equipmentselection')
        }}
        proficiencies={proficiencies}
        dndClass={dndClass}
        background={background}
        isAbilitiesSelectionValid={isAbilitiesSelectionValid}
        onBack={() => {
          setShowProficiencies(false)
          navigate('/builder/abilitiesselection')
        }}
        onNext={() => {
          setShowEquipment(true)
          navigate('/builder/equipmentselection')
        }}
      />
    )
  }

  // EquipmentSelection step
  if (showEquipment && equipment === null || currentPath === 'equipmentselection') {
    return (
      <EquipmentSelection
        dndClass={dndClass}
        background={background}
        setEquipment={(selectedEquipment) => {
          setEquipment(selectedEquipment)
          navigate('/builder/personalization')
        }}
      />
    )
  }

  // PersonalizationCompletion step
  if (equipment !== null && personalization === null || currentPath === 'personalization') {
    return (
      <PersonalizationCompletion
        setPersonalization={(selectedPersonalization) => {
          setPersonalization(selectedPersonalization)
          navigate('/builder/download')
        }}
        specie={specie}
      />
    )
  }

  // DownloadPDF step
  if (personalization !== null || currentPath === 'download') {
    return (
      <DownloadPDF
        dndClass={dndClass}
        background={background}
        species={specie}
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
      <div>Class selected: {dndClass?.name}</div>
      <div>Background selected: {background?.name}</div>
      <div>Species selected: {specie?.name}</div>
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