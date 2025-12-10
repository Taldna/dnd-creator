"use client"

import { SPECIES } from "../../data/species"
import type { Species } from "../../types/data/species"
import Title from "../atoms/Title"

export default function SpeciesSelection({ setSpecies }: { setSpecies: (species: Species) => void }) {
    return (
        <main className="h-screen w-screen flex flex-col items-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-auto">
            <Title name="Sélection de l'espèce" />
            <div>Species selection component - to be implemented</div>
            <button onClick={() => setSpecies(SPECIES[0])}>Mettre une espèce de test</button>
        </main>
    )
}