import type { Class } from "../types/data/class"
import { ABILITIES } from "./abilities"
import { SKILLS } from "./skills"

/**
 * Raw data. This is what you want to modify to add/correct/delete a class
 */
const rawClasses: Class[] = [
  {
    name: "Barbare",
    short_desc: "Laissez-vous porter par la rage pour déferler dans la mêlée.",
    description: [
      "Les Barbares sont de puissants combattants animés par les forces primitives du multivers, qu'ils manifestent sous la forme de Rage. Cette Rage ne se limite pas à la colère ni une simple émotion, mais incarne la férocité du prédateur, la fureur de la tempête et le tumulte des mers.",
      "Certains Barbares personnifient leur Rage par un esprit féroce ou un ancêtre vénéré. D'autres y voient un lien avec les tourments du monde, comme l'enchevêtrement confus de la magie sauvage ou l'expression de leur identité profonde. Pour chacun d'entre eux, cette Rage alimente non seulement leurs talents martiaux, mais aussi leurs réflexes extraordinaires et leurs sens aiguisés.",
      "Les Barbares sont souvent les protecteurs et meneurs de leur communauté. Ils foncent tête baissée vers les menaces pour épargner cette tâche à celles et ceux qu'ils protègent. Cette témérité les destine à une vie d'aventure.",
    ],
    primaryAbility: [ABILITIES.Force],
    hitDice: "d12",
    savingThrows: [ABILITIES.Force, ABILITIES.Constitution],
    skillProficiencies: [
      SKILLS.Athlétisme,
      SKILLS.Dressage,
      SKILLS.Intimidation,
      SKILLS.Nature,
      SKILLS.Perception,
      SKILLS.Survie,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: "Armes courantes et armes de guerre",
    armorTraining: ["Légères", "Intermédiaires", "Boucliers"],
    equipment: [
      "Hache à deux mains, 4 hachettes, paquetage d'explorateur et 15 po",
      "75 po",
    ],
    features: [
      {
        level: 1,
        name: "Rage",
        description: [
          "PLACEHOLDER: Rage description",
          "Cupcake ipsum dolor sit amet I love. Cupcake soufflé I love I love gingerbread I love jelly beans dragée cotton candy. Pie I love sesame snaps brownie jelly marshmallow cake muffin.",
          "Bonbon jelly-o dragée powder powder carrot cake. Dessert I love topping sweet sweet roll marzipan candy. Pastry cotton candy powder I love powder.",
        ],
      },
      {
        level: 1,
        name: "Botte d'arme",
        description: [
          "PLACEHOLDER: Botte d'arme description",
          "Cupcake ipsum dolor sit amet I love. Cupcake soufflé I love I love gingerbread I love jelly beans dragée cotton candy. Pie I love sesame snaps brownie jelly marshmallow cake muffin.",
          "Bonbon jelly-o dragée powder powder carrot cake. Dessert I love topping sweet sweet roll marzipan candy. Pastry cotton candy powder I love powder.",
        ],
      },
      {
        level: 1,
        name: "Défense sans armure",
        description: [
          "PLACEHOLDER: Défense sans armure description",
          "Cupcake ipsum dolor sit amet I love. Cupcake soufflé I love I love gingerbread I love jelly beans dragée cotton candy. Pie I love sesame snaps brownie jelly marshmallow cake muffin.",
          "Bonbon jelly-o dragée powder powder carrot cake. Dessert I love topping sweet sweet roll marzipan candy. Pastry cotton candy powder I love powder.",
        ],
      },
    ],
    subclasses: [
      { name: "Voie de l'Arbre-Monde" },
      { name: "Voie du Berserker" },
      { name: "Voie du Coeur Sauvage" },
      { name: "Voie du Zélateur" },
    ],
  },
  {
    name: "Barde",
    short_desc:
      "Interprétez des sorts qui inspirent et soignent vos alliés, ou envoûtent vos adversaires.",
    description: [""],
    primaryAbility: [ABILITIES.Charisme],
    hitDice: "d8",
    savingThrows: [ABILITIES.Dextérité, ABILITIES.Charisme],
    skillProficiencies: Object.values(SKILLS),
    skillProficienciesNumber: 3,
    weaponProficiencies: "",
    armorTraining: [],
    equipment: ["", ""],
    features: [],
    subclasses: [],
  },
  {
    name: "Clerc",
    short_desc:
      "Invoquez la magie divine pour soigner, galvaniser ou châtier autrui.",
    description: [""],
    primaryAbility: [ABILITIES.Sagesse],
    hitDice: "d8",
    savingThrows: [ABILITIES.Charisme, ABILITIES.Sagesse],
    skillProficiencies: [
      SKILLS.Histoire,
      SKILLS.Intuition,
      SKILLS.Médecine,
      SKILLS.Persuasion,
      SKILLS.Religion,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: "",
    armorTraining: [],
    equipment: ["", ""],
    features: [],
    subclasses: [],
  },
  {
    name: "Druide",
    short_desc:
      "Canalisez la magie sauvage pour soigner, changer de forme ou contrôler les éléments.",
    description: [""],
    primaryAbility: [ABILITIES.Sagesse],
    hitDice: "d8",
    savingThrows: [ABILITIES.Intelligence, ABILITIES.Sagesse],
    skillProficiencies: [
      SKILLS.Dressage,
      SKILLS.Arcanes,
      SKILLS.Intuition,
      SKILLS.Médecine,
      SKILLS.Nature,
      SKILLS.Perception,
      SKILLS.Religion,
      SKILLS.Survie,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: "",
    armorTraining: [],
    equipment: ["", ""],
    features: [],
    subclasses: [],
  },
  {
    name: "Ensorceleur",
    short_desc:
      "Exploitez votre magie intrinsèque en la façonnant à votre guise.",
    description: [""],
    primaryAbility: [ABILITIES.Charisme],
    hitDice: "d6",
    savingThrows: [ABILITIES.Charisme, ABILITIES.Constitution],
    skillProficiencies: [
      SKILLS.Arcanes,
      SKILLS.Tromperie,
      SKILLS.Intuition,
      SKILLS.Intimidation,
      SKILLS.Persuasion,
      SKILLS.Religion,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: "",
    armorTraining: [],
    equipment: ["", ""],
    features: [],
    subclasses: [],
  },
  {
    name: "Guerrier",
    short_desc: "Maîtrisez toutes les armes et armures.",
    description: [""],
    primaryAbility: [ABILITIES.Force, ABILITIES.Dextérité],
    hitDice: "d10",
    savingThrows: [ABILITIES.Constitution, ABILITIES.Constitution],
    skillProficiencies: [
      SKILLS.Acrobaties,
      SKILLS.Dressage,
      SKILLS.Athlétisme,
      SKILLS.Histoire,
      SKILLS.Intuition,
      SKILLS.Intimidation,
      SKILLS.Perception,
      SKILLS.Survie,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: "",
    armorTraining: [],
    equipment: ["", ""],
    features: [],
    subclasses: [],
  },
  {
    name: "Magicien",
    short_desc:
      "Étudiez la magie arcanique et maîtrisez des sorts en tout genre.",
    description: [""],
    primaryAbility: [ABILITIES.Intelligence],
    hitDice: "d6",
    savingThrows: [ABILITIES.Intelligence, ABILITIES.Sagesse],
    skillProficiencies: [
      SKILLS.Arcanes,
      SKILLS.Histoire,
      SKILLS.Intuition,
      SKILLS.Investigation,
      SKILLS.Médecine,
      SKILLS.Nature,
      SKILLS.Religion,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: "",
    armorTraining: [],
    equipment: ["", ""],
    features: [],
    subclasses: [],
  },
  {
    name: "Moine",
    short_desc:
      "Foncez dans la mêlée en esquivant les coups, pour frapper vite et fort.",
    description: [""],
    primaryAbility: [ABILITIES.Dextérité, ABILITIES.Sagesse],
    hitDice: "d8",
    savingThrows: [ABILITIES.Dextérité, ABILITIES.Force],
    skillProficiencies: [
      SKILLS.Acrobaties,
      SKILLS.Athlétisme,
      SKILLS.Histoire,
      SKILLS.Intuition,
      SKILLS.Religion,
      SKILLS.Discrétion,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: "",
    armorTraining: [],
    equipment: ["", ""],
    features: [],
    subclasses: [],
  },
  {
    name: "Occultiste",
    short_desc: "Lancez des sorts issus d'un savoir occulte.",
    description: [""],
    primaryAbility: [ABILITIES.Charisme],
    hitDice: "d8",
    savingThrows: [ABILITIES.Charisme, ABILITIES.Sagesse],
    skillProficiencies: [
      SKILLS.Arcanes,
      SKILLS.Tromperie,
      SKILLS.Histoire,
      SKILLS.Intimidation,
      SKILLS.Investigation,
      SKILLS.Nature,
      SKILLS.Religion,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: "",
    armorTraining: [],
    equipment: ["", ""],
    features: [],
    subclasses: [],
  },
  {
    name: "Paladin",
    short_desc:
      "Par les armes et le divin, châtiez l'adversaire et protégez vos alliés.",
    description: [""],
    primaryAbility: [ABILITIES.Force, ABILITIES.Charisme],
    hitDice: "d10",
    savingThrows: [ABILITIES.Charisme, ABILITIES.Sagesse],
    skillProficiencies: [
      SKILLS.Athlétisme,
      SKILLS.Intuition,
      SKILLS.Intimidation,
      SKILLS.Médecine,
      SKILLS.Persuasion,
      SKILLS.Religion,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: "",
    armorTraining: [],
    equipment: ["", ""],
    features: [],
    subclasses: [],
  },
  {
    name: "Rôdeur",
    short_desc:
      "Conjuguez l'excellence martiale, la magie sauvage et les facultés de survie.",
    description: [""],
    primaryAbility: [ABILITIES.Dextérité, ABILITIES.Sagesse],
    hitDice: "d10",
    savingThrows: [ABILITIES.Dextérité, ABILITIES.Force],
    skillProficiencies: [
      SKILLS.Dressage,
      SKILLS.Athlétisme,
      SKILLS.Intuition,
      SKILLS.Investigation,
      SKILLS.Nature,
      SKILLS.Perception,
      SKILLS.Discrétion,
      SKILLS.Survie,
    ],
    skillProficienciesNumber: 3,
    weaponProficiencies: "",
    armorTraining: [],
    equipment: ["", ""],
    features: [],
    subclasses: [],
  },
  {
    name: "Roublard",
    short_desc:
      "Assénez de meurtrières attaques sournoises tout en évitant adroitement les coups.",
    description: [""],
    primaryAbility: [ABILITIES.Dextérité],
    hitDice: "d8",
    savingThrows: [ABILITIES.Dextérité, ABILITIES.Intelligence],
    skillProficiencies: [
      SKILLS.Acrobaties,
      SKILLS.Athlétisme,
      SKILLS.Tromperie,
      SKILLS.Intuition,
      SKILLS.Intimidation,
      SKILLS.Investigation,
      SKILLS.Perception,
      SKILLS.Persuasion,
      SKILLS.Escamotage,
      SKILLS.Discrétion,
    ],
    skillProficienciesNumber: 4,
    weaponProficiencies: "",
    armorTraining: [],
    equipment: ["", ""],
    features: [],
    subclasses: [],
  },
]

// Get all images in the "classes" folder
const fullImages = import.meta.glob("../assets/classes/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>

// Get all images in the "recadre" folder
const cutImages = import.meta.glob("../assets/recadre/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>

// Couple images with their name
const fullImageMap: Record<string, string> = {}
const cutImagesMap: Record<string, string> = {}

// Cherche le motif : "/" + #lettres ou espace ou "-" ou "'"# + ".png" #sans rien après#
const regex = /\/((?:\p{L}|\s|-|')+)\.png$/u

for (const path in fullImages) {
  const match = path.match(regex)
  if (match) fullImageMap[match[1]] = fullImages[path]
}

for (const path in cutImages) {
  const match = path.match(regex)
  if (match) cutImagesMap[match[1]] = cutImages[path]
}

// Associate and export classes with their images
export const CLASSES: Class[] = rawClasses.map((cls) => ({
  ...cls,
  full_img: fullImageMap[cls.name],
  cut_img: cutImagesMap[cls.name],
  subclasses: cls.subclasses.map((sub) => ({
    ...sub,
    image: fullImageMap[sub.name],
  })),
}))
