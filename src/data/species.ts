import type { Species } from "../types/data/species";

let rawSpecies: Species[] = [
  {
    name: "Humain",
    description:
      "Les humains sont une espèce adaptable et ambitieuse, connue pour leur diversité culturelle et leur capacité à prospérer dans divers environnements.",
    features: [
      {
        name: "Compétent",
        description: "Vous recevez la maîtrise d'une compétence de votre choix.",
      },
      {
        name: "Ingénieux",
        description: "Vous recevez l'inspiration héroïque chaque fois que vous terminez un repos long.",
      },
      {
        name: "Polyvalent",
        description: "Vous recevez le don d'origine de votre choix (le don \"Doué\" est recommandé).",
      }
    ],
  },
];

const images = import.meta.glob("../assets/species/*.{png,jpg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const speciesImages: Record<string, string> = {};

const regex = /\/((?:\p{L}|\s|-|')+)\.(png|jpg)$/u;

for (const path in images) {
  const match = path.match(regex);
  if (match) speciesImages[match[1]] = images[path];
}

export const SPECIES: (Species & { image?: string })[] = rawSpecies.map(
  (species) => ({
    ...species,
    image: speciesImages[species.name],
  })
);
