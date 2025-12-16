import type { Background } from "../types/data/background"
import { ABILITIES } from "./abilities"
import { FEATS } from "./feats"
import { SKILLS } from "./skills"
import { WEAPONS } from "./weapons"
import { ADVENTURING_GEAR } from "./adventuringGear"
import { TOOLS } from "./tools"
import { createGold } from "./money"

const rawBackgrounds: Background[] = [
  {
    name: "Acolyte",
    abilityScore: [
      ABILITIES.Intelligence,
      ABILITIES.Sagesse,
      ABILITIES.Charisme,
    ],
    feat: FEATS["Initié à la magie"],
    proficiencies: [SKILLS.Intuition, SKILLS.Religion],
    toolProficiency: "Matériel de calligraphe",
    equipment: [
      [
        TOOLS["Matériel de calligraphe"],
        ADVENTURING_GEAR.Livre, // Livre (prières)
        ADVENTURING_GEAR["Symbole sacré - Amulette"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR.Robes,
        createGold(8),
      ],
      [createGold(50)],
    ],
    description:
      "Vous étiez au service d'un temple, situé en ville ou isolé dans quelques bosquet sacré. Vous y accomplissiez des rites religieux en l'honneur d'une divinité ou d'un panthéon. Vous avez servi sous la tutelle d'un prêtre et étudié la religion. Grâce à l'instruction prodiguée par ce prêtre et à votre propre dévotion, vous avez également appris à canaliser un minimum de puissance divine au service de votre lieu de culte et des fidèles qui venaient y prier.",
  },
  {
    name: "Artisan",
    abilityScore: [],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Façonneur,
    proficiencies: [],
    toolProficiency: "",
    equipment: [
      [
        TOOLS["Outils de forgeron"], // Outillage artisanal au choix
        ADVENTURING_GEAR.Sacoche,
        ADVENTURING_GEAR.Sacoche,
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(32),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Artiste",
    abilityScore: [],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Musicien,
    proficiencies: [],
    toolProficiency: "",
    equipment: [
      [
        TOOLS.Luth, // Instrument de musique au choix
        ADVENTURING_GEAR["Vêtements, costume"],
        ADVENTURING_GEAR["Vêtements, costume"],
        ADVENTURING_GEAR["Miroir en acier"],
        ADVENTURING_GEAR["Parfum (fiole)"],
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(11),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Charlatan",
    abilityScore: [],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Doué,
    proficiencies: [],
    toolProficiency: "",
    equipment: [
      [
        TOOLS["Kit de contrefaçon"],
        TOOLS["Kit de déguisement"],
        ADVENTURING_GEAR["Vêtements, fins"],
        createGold(15),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Criminel",
    abilityScore: [],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Vigilant,
    proficiencies: [],
    toolProficiency: "",
    equipment: [
      [
        WEAPONS.Dague,
        WEAPONS.Dague,
        TOOLS["Outils de voleur"],
        ADVENTURING_GEAR["Pied-de-biche"],
        ADVENTURING_GEAR.Sacoche,
        ADVENTURING_GEAR.Sacoche,
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(16),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Ermite",
    abilityScore: [],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Guérisseur,
    proficiencies: [],
    toolProficiency: "",
    equipment: [
      [
        TOOLS["Kit d'herboriste"],
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(16),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Fermier",
    abilityScore: [],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Robuste,
    proficiencies: [],
    toolProficiency: "",
    equipment: [
      [
        TOOLS["Outils de charpentier"], // Outils artisanaux au choix
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(20),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Garde",
    abilityScore: [],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Vigilant,
    proficiencies: [],
    toolProficiency: "",
    equipment: [
      [WEAPONS.Lance, ADVENTURING_GEAR["Vêtements, voyage"], createGold(18)],
      [createGold(50)],
    ],
  },
  {
    name: "Guide",
    abilityScore: [],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS["Initié à la magie"],
    proficiencies: [],
    toolProficiency: "",
    equipment: [
      [
        TOOLS["Outils de cartographe"],
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(20),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Marchand",
    abilityScore: [],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Chanceux,
    proficiencies: [],
    toolProficiency: "",
    equipment: [
      [
        TOOLS["Outils de navigateur"],
        ADVENTURING_GEAR.Sacoche,
        ADVENTURING_GEAR.Sacoche,
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(22),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Marin",
    abilityScore: [],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS["Bagarreur de tavernes"],
    proficiencies: [],
    toolProficiency: "",
    equipment: [
      [
        WEAPONS.Dague,
        TOOLS["Outils de navigateur"],
        ADVENTURING_GEAR["Corde en chanvre (15 m)"],
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(20),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Noble",
    abilityScore: [],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Doué,
    proficiencies: [],
    toolProficiency: "",
    equipment: [
      [
        TOOLS["Jeu de cartes"], // Jeu au choix
        ADVENTURING_GEAR["Vêtements, fins"],
        ADVENTURING_GEAR["Parfum (fiole)"],
        createGold(29),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Sage",
    abilityScore: [],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS["Initié à la magie"],
    proficiencies: [],
    toolProficiency: "",
    equipment: [
      [
        WEAPONS.Bâton,
        TOOLS["Matériel de calligraphe"],
        ADVENTURING_GEAR.Livre, // Livre d'histoire
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR.Robes,
        createGold(8),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Scribe",
    abilityScore: [
      ABILITIES.Dextérité,
      ABILITIES.Intelligence,
      ABILITIES.Sagesse,
    ],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Doué,
    proficiencies: [SKILLS.Investigation, SKILLS.Perception],
    toolProficiency: "",
    equipment: [
      [
        TOOLS["Matériel de calligraphe"],
        ADVENTURING_GEAR["Vêtements, fins"],
        ADVENTURING_GEAR.Lampe,
        ADVENTURING_GEAR["Huile (flasque)"],
        ADVENTURING_GEAR["Huile (flasque)"],
        ADVENTURING_GEAR["Huile (flasque)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        createGold(23),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Soldat",
    abilityScore: [],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS["Sauvagerie martiale"],
    proficiencies: [],
    toolProficiency: "",
    equipment: [
      [
        WEAPONS.Lance,
        WEAPONS["Arc court"],
        ADVENTURING_GEAR["Munitions - Flèches (20)"],
        TOOLS["Jeu de cartes"], // Jeu au choix
        ADVENTURING_GEAR["Trousse de soins"],
        ADVENTURING_GEAR.Carquois,
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(14),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Voyageur",
    abilityScore: [],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Chanceux,
    proficiencies: [],
    toolProficiency: "",
    equipment: [
      [
        WEAPONS.Dague,
        WEAPONS.Dague,
        TOOLS["Outils de voleur"],
        TOOLS["Jeu de cartes"], // Jeu au choix
        ADVENTURING_GEAR["Sac à dos"],
        createGold(16),
      ],
      [createGold(50)],
    ],
  },
]

const images = import.meta.glob("../assets/backgrounds/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>
const imagesMap: Record<string, string> = {}
const regex = /\/((?:\p{L}|\s|-|')+)\.jpg$/u

for (const path in images) {
  const match = path.match(regex)
  if (match) imagesMap[match[1]] = images[path]
}

export const BACKGROUNDS: Background[] = rawBackgrounds.map((bg) => ({
  ...bg,
  image: imagesMap[bg.name],
}))
