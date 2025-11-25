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

export default function CharacterBuilder() {
    const [dndClass, setDndClass] = useState<Class | null>(null)
    const [background, setBackground] = useState<Background | null>(null)
    const [species, setSpecies] = useState<Species | null>(null)
    const [abilities, setAbilities] = useState<Ability | null>(null)

    if (dndClass === null) {
        return( <ClassSelection setDndClass={setDndClass} />)
    } else if (background === null) {
        return( <BackgroundSelection setBackground={setBackground} />)
    } else if (species === null) {
        return( <SpeciesSelection setSpecies={setSpecies} />)
    } else if( abilities === null) {
        return( <AbilitiesSelection setAbilities={setAbilities} />)
    }

    return (
        <div className="text-black">Class selected: {dndClass.name}, Background selected: {background.name}, Species selected: {species.name}</div>
    )
}

