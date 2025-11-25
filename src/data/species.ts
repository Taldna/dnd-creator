import type { Species } from "../types/data/species";

let rawSpecies: Species[] = [
  {
    name: "Aasimar",
    description: [
      "Les Aasimars (prononcer \"AH-zi-mar\") sont des mortels dont l'âme contient une étincelle des plans supérieurs. Qu'ils décendent d'un être angélique ou soient investis d'un pouvoir céleste, ils peuvent attiser cette étincelle pour apporter la lumière, la guérison et la fureur des cieux.",
      "Toute population mortelle peut engendrer des aasimars. Ils ressemblent à leurs parents, mais vivent jusqu'à 160 ans et manifestent des traits qui rapellent leur ascendance céleste : tâches de rousseur métalliques, yeux lumineux, auréole ou couleur de peau d'un ange (soit argent, vert opalescent ou rouge cuivré). Ces aspects, de prime abord subtils, deviennent plus manifestes lorsque l'aasimar apprend à révéler sa pleine nature céleste."
    ],
    features: [],
  },

  {
    name: "Drakéide",
    description: [],
    features: [],
  },

  {
    name: "Elfe",
    description: [],
    features: [],
    lineage: [],
  },

  {
    name: "Gnome",
    description: [],
    features: [],
    lineage: [],
  },

  {
    name: "Goliath",
    description: [],
    features: [],
  },

  {
    name: "Halfelin",
    description: [],
    features: [],
  },

  {
    name: "Humain",
    description: [
      "Les humains sont une espèce adaptable et ambitieuse, connue pour leur diversité culturelle et leur capacité à prospérer dans divers environnements."
    ],
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

  {
    name: "Nain",
    description: [],
    features: [],
  },

  {
    name: "Orc",
    description: [],
    features: [],
  },

  {
    name: "Tieffelin",
    description: [],
    features: [],
    lineage: [],
  }
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
