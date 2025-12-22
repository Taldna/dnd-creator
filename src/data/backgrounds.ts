import type { Background } from "../types/data/background"
import { ABILITIES } from "./abilities"
import { FEATS } from "./feats"
import { SKILLS } from "./skills"
import { WEAPONS } from "./weapons"
import { ADVENTURING_GEAR } from "./adventuringGears"
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
    toolProficiencies: [TOOLS["Matériel de calligraphe"].name],
    equipment: [
      [
        TOOLS["Matériel de calligraphe"],
        ADVENTURING_GEAR.Livre,
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
    abilityScore: [
      ABILITIES.Force,
      ABILITIES.Dextérité,
      ABILITIES.Intelligence,
    ],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Façonneur,
    proficiencies: [SKILLS.Investigation, SKILLS.Persuasion],
    toolProficiencies: ["Choisir un outil d'artisan"],
    equipment: [
      [
        { name: "Outillage artisanal au choix", category: "Autre" },
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
    abilityScore: [ABILITIES.Force, ABILITIES.Dextérité, ABILITIES.Charisme],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Musicien,
    proficiencies: [SKILLS.Acrobaties, SKILLS["Art dramatique"]],
    toolProficiencies: ["Choisir un instrument de musique"],
    equipment: [
      [
        { name: "Instrument de musique au choix", category: "Autre" },
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
    abilityScore: [
      ABILITIES.Dextérité,
      ABILITIES.Constitution,
      ABILITIES.Charisme,
    ],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Doué,
    proficiencies: [SKILLS.Tromperie, SKILLS.Discrétion],
    toolProficiencies: [TOOLS["Kit de contrefaçon"].name],
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
    abilityScore: [
      ABILITIES.Dextérité,
      ABILITIES.Constitution,
      ABILITIES.Intelligence,
    ],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Vigilant,
    proficiencies: [SKILLS.Discrétion, SKILLS.Discrétion],
    toolProficiencies: [TOOLS["Outils de voleur"].name],
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
    abilityScore: [
      ABILITIES.Constitution,
      ABILITIES.Sagesse,
      ABILITIES.Charisme,
    ],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Guérisseur,
    proficiencies: [SKILLS.Médecine, SKILLS.Religion],
    toolProficiencies: [TOOLS["Kit d'herboriste"].name],
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
    abilityScore: [ABILITIES.Force, ABILITIES.Constitution, ABILITIES.Sagesse],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Robuste,
    proficiencies: [SKILLS["Dressage d'animaux"], SKILLS.Nature],
    toolProficiencies: ["Outils de charpentier"],
    equipment: [
      [
        { name: "Outillage artisanal au choix", category: "Autre" },
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(20),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Garde",
    abilityScore: [ABILITIES.Force, ABILITIES.Intelligence, ABILITIES.Sagesse],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Vigilant,
    proficiencies: [SKILLS.Athlétisme, SKILLS.Perception],
    toolProficiencies: [],
    equipment: [
      [WEAPONS.Lance, ADVENTURING_GEAR["Vêtements, voyage"], createGold(18)],
      [createGold(50)],
    ],
  },
  {
    name: "Guide",
    abilityScore: [
      ABILITIES.Dextérité,
      ABILITIES.Constitution,
      ABILITIES.Sagesse,
    ],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS["Initié à la magie"],
    proficiencies: [SKILLS.Discrétion, SKILLS.Survie],
    toolProficiencies: ["Outils de cartographe"],
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
    abilityScore: [
      ABILITIES.Constitution,
      ABILITIES.Intelligence,
      ABILITIES.Charisme,
    ],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Chanceux,
    proficiencies: [SKILLS["Dressage d'animaux"], SKILLS.Persuasion],
    toolProficiencies: [TOOLS["Outils de navigateur"].name],
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
    abilityScore: [ABILITIES.Force, ABILITIES.Dextérité, ABILITIES.Sagesse],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS["Bagarreur de tavernes"],
    proficiencies: [SKILLS.Acrobaties, SKILLS.Perception],
    toolProficiencies: [TOOLS["Outils de navigateur"].name],
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
    abilityScore: [ABILITIES.Force, ABILITIES.Intelligence, ABILITIES.Charisme],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Doué,
    proficiencies: [SKILLS.Histoire, SKILLS.Persuasion],
    toolProficiencies: ["Choisir un jeu de société"],
    equipment: [
      [
        { name: "Jeu au choix", category: "Autre" },
        ADVENTURING_GEAR["Vêtements, fins"],
        ADVENTURING_GEAR["Parfum (fiole)"],
        createGold(29),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Sage",
    abilityScore: [
      ABILITIES.Constitution,
      ABILITIES.Intelligence,
      ABILITIES.Sagesse,
    ],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS["Initié à la magie"],
    proficiencies: [SKILLS.Arcanes, SKILLS.Histoire],
    toolProficiencies: [TOOLS["Matériel de calligraphe"].name],
    equipment: [
      [
        WEAPONS.Bâton,
        TOOLS["Matériel de calligraphe"],
        ADVENTURING_GEAR.Livre,
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
    toolProficiencies: ["Choisir un jeu de société"],
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
    abilityScore: [
      ABILITIES.Force,
      ABILITIES.Dextérité,
      ABILITIES.Constitution,
    ],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS["Sauvagerie martiale"],
    proficiencies: [SKILLS.Athlétisme, SKILLS.Intimidation],
    toolProficiencies: ["Choisir un jeu de société"],
    equipment: [
      [
        WEAPONS.Lance,
        WEAPONS["Arc court"],
        ADVENTURING_GEAR["Munitions - Flèches (20)"],
        { name: "Jeu au choix", category: "Autre" },
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
    abilityScore: [ABILITIES.Dextérité, ABILITIES.Sagesse, ABILITIES.Charisme],
    description:
      "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
    feat: FEATS.Chanceux,
    proficiencies: [SKILLS.Perspicacité, SKILLS.Discrétion],
    toolProficiencies: [TOOLS["Outils de voleur"].name],
    equipment: [
      [
        WEAPONS.Dague,
        WEAPONS.Dague,
        TOOLS["Outils de voleur"],
        { name: "Jeu au choix", category: "Autre" },
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
