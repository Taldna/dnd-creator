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
      <Title name="Sélection de l'espèce" className="pb-5"/>
      <div className="size-9/10 flex flex-row gap-8 justify-center box-border">
        <Box className="w-2/5 relative">
          <div className="w-full grid grid-cols-4 gap-4">
            {SPECIES.map((species) => (
              <div key={species.name} className="cursor-pointer hover:scale-105 transition-transform hover:border-4 border-red-800 p-2 rounded-lg">
                <img
                  src={species.icon}
                  alt={species.name}
                  className="rounded-lg"
                  onClick={() => setSelectedSpecies(species)}
                />
                <div className="text-center mt-2">{species.name}</div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <PrimaryButton onClick={() => setSpecies(SPECIES[0])}>
              Choisir cette espèce
            </PrimaryButton>
          </div>
        </Box>
        
        <Box className="w-3/5 flex flex-col gap-4 overflow-hidden">
          <div className="size-full overflow-auto rounded-lg">
            <img
              src={selectedSpecies.fullImage}
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
          </div>
        </Box>
      </div>
    </main>
  );
}