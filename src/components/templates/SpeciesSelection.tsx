"use client";

import type { Species } from "../../types/data/species";

import { SPECIES } from "../../data/species";

import { useState } from "react";

import Box from "../atoms/Box";
import Title from "../atoms/Title";
import PrimaryButton from "../atoms/PrimaryButton";

export default function SpeciesSelection({
  setSpecies,
}: {
  setSpecies: (species: Species) => void;
}) {

  const [selectedSpecies, setSelectedSpecies] = useState<Species>(SPECIES[0]);

  return (
    <main className="h-screen w-screen flex flex-col items-center text-white p-4 bg-[url(/background_scale.png)] bg-cover overflow-auto">
      <Title name="Sélection de l'espèce" />
      <div className="size-9/10 flex flex-row gap-8 justify-center">
        <Box className="w-2/5 flex gap-4 flex-wrap flex-start content-start relative">
          {SPECIES.map((species) => (
            <Box key={species.name} className="size-[5em]">
              <div 
                className="size-full bg-red-500"
                onClick={() => setSelectedSpecies(species)}  
              ></div>
            </Box>
          ))}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <PrimaryButton onClick={() => setSpecies(SPECIES[0])}>
              Choisir cette espèce
            </PrimaryButton>
          </div>
        </Box>
        
        <Box className="w-3/5 flex flex-col gap-4 overflow-auto">
          <img
            src={selectedSpecies.image}
            alt={selectedSpecies.name}
            className="rounded-lg"
          />
            <div>
              <h2 className="text-2xl font-bold mb-2">{selectedSpecies.name}</h2>
              <p>{selectedSpecies.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Traits des {selectedSpecies.name} :</h2>
              <ul className="list-disc list-inside">
                {selectedSpecies.features.map((feature) => (
                  <li key={feature.name} className="mb-2">
                    <strong>{feature.name}:</strong>{" "}
                    {Array.isArray(feature.description)
                      ? feature.description.join(" ")
                      : feature.description}
                  </li>
                ))}
              </ul>
            </div>
        </Box>
      </div>
    </main>
  );
}