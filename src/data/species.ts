import type { Specie } from "../types/data/specie"

const rawSpecies: Specie[] = [
  {
    name: "Aasimar",
    description: [
      "Les Aasimars (prononcer \"AH-zi-mar\") sont des mortels dont l'âme contient une étincelle des plans supérieurs. Qu'ils décendent d'un être angélique ou soient investis d'un pouvoir céleste, ils peuvent attiser cette étincelle pour apporter la lumière, la guérison et la fureur des cieux.",
      "Toute population mortelle peut engendrer des aasimars. Ils ressemblent à leurs parents, mais vivent jusqu'à 160 ans et manifestent des traits qui rapellent leur ascendance céleste : tâches de rousseur métalliques, yeux lumineux, auréole ou couleur de peau d'un ange (soit argent, vert opalescent ou rouge cuivré). Ces aspects, de prime abord subtils, deviennent plus manifestes lorsque l'aasimar apprend à révéler sa pleine nature céleste.",
    ],
    features: [],
    speed: 6,
    height: { min: 1.5, max: 2.0 },
  },

  {
    name: "Drakéide",
    description: [],
    features: [],
    speed: 6,
    height: { min: 1.5, max: 2.15 },
  },

  {
    name: "Elfe",
    description: [],
    features: [],
    lineage: [],
    speed: 6,
    height: { min: 1.5, max: 1.85 },
  },

  {
    name: "Gnome",
    description: [],
    features: [],
    lineage: [],
    speed: 6,
    height: { min: 0.9, max: 1.2 },
  },

  {
    name: "Goliath",
    description: [],
    features: [],
    speed: 7,
    height: { min: 2.15, max: 2.45 },
  },

  {
    name: "Halfelin",
    description: [],
    features: [],
    speed: 6,
    height: { min: 0.6, max: 0.9 },
  },

  {
    name: "Humain",
    description: [
      "Les humains sont une espèce adaptable et ambitieuse, connue pour leur diversité culturelle et leur capacité à prospérer dans divers environnements.",
    ],
    features: [
      {
        name: "Compétent",
        description:
          "Vous recevez la maîtrise d'une compétence de votre choix.",
      },
      {
        name: "Ingénieux",
        description:
          "Vous recevez l'inspiration héroïque chaque fois que vous terminez un repos long.",
      },
      {
        name: "Polyvalent",
        description:
          'Vous recevez le don d\'origine de votre choix (le don "Doué" est recommandé).',
      },
    ],
    speed: 6,
    height: { min: 0.6, max: 2.15 },
  },

  {
    name: "Nain",
    description: [],
    features: [],
    speed: 6,
    height: { min: 1.2, max: 1.5 },
  },

  {
    name: "Orc",
    description: [],
    features: [],
    speed: 6,
    height: { min: 1.8, max: 2.15 },
  },

  {
    name: "Tieffelin",
    description: [],
    features: [],
    lineage: [],
    speed: 6,
    height: { min: 0.9, max: 2.15 },
  },
]

const fullImages = import.meta.glob("../assets/species/*.{png,jpg}", {
  eager: true,
  import: "default",
}) as Record<string, string>

const iconImages = import.meta.glob(
  "../assets/species/icons/*.{png,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>

const speciesImages: Record<string, string> = {}
const speciesIcons: Record<string, string> = {}

const regex = /\/((?:\p{L}|\s|-|')+)\.(png|jpg|jpeg)$/u

for (const path in fullImages) {
  const match = path.match(regex)
  if (match) speciesImages[match[1]] = fullImages[path]
}

for (const path in iconImages) {
  const match = path.match(regex)
  if (match) speciesIcons[match[1]] = iconImages[path]
}

export const SPECIES = rawSpecies.map((species) => ({
  ...species,
  fullImage: speciesImages[species.name],
  icon: speciesIcons[species.name],
}))
