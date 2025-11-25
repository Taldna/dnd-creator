"use client";

import type { Species } from "../../types/data/species";

import { SPECIES } from "../../data/species";

import Box from "../atoms/Box";
import Title from "../atoms/Title";

const SPECIES2 = [...SPECIES, ...SPECIES, ...SPECIES, ...SPECIES, ...SPECIES, ...SPECIES, ...SPECIES, ...SPECIES, ...SPECIES, ...SPECIES];

export default function SpeciesSelection({
  setSpecies,
}: {
  setSpecies: (species: Species) => void;
}) {
  return (
    <main className="h-screen w-screen flex flex-col items-center text-white p-4 bg-[url(/background_scale.png)] bg-cover overflow-auto">
      <Title name="Sélection de l'espèce" />
      <div className="size-9/10 flex flex-row gap-8 justify-center">
        <Box className="w-2/5 flex gap-4 flex-wrap flex-start content-start">
          {SPECIES2.map((species) => (
            <Box key={species.name} className="size-[5em]">
              
            </Box>
          ))}
        </Box>
        
        <Box className="w-3/5 flex flex-col gap-4 overflow-auto">
          <img
            src={SPECIES[0].image}
            alt={SPECIES[0].name}
            className="rounded-lg"
          />
        
            <div>
              <h2 className="text-2xl font-bold mb-2">{SPECIES[0].name}</h2>
              <p>{SPECIES[0].description}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Traits des {SPECIES[0].name} :</h2>
              <ul className="list-disc list-inside">
                {SPECIES[0].features.map((feature) => (
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
