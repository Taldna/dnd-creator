"use client"

import type { Species } from "../../types/data/species"
import Title from "../atoms/Title"

export default function SpeciesSelection({ setSpecies }: { setSpecies: (species: Species) => void }) {
    return (
        <main className="h-screen w-screen flex flex-col items-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-auto">
            <Title name="Sélection de l'espèce" />
            <div>Species selection component - to be implemented</div>
        </main>
    )
}