import type { Skill } from "../types/data/skill"

const rawSkills: Skill[] = [
  {
    name: "Athlétisme",
    ability: "Force",
    description:
      "Utilisé pour grimper, sauter, nager ou accomplir d'autres exploits physiques qui nécessitent force et endurance.",
    modifier: 0,
    skillField: "skill1",
    masteryField: "sk1",
  },
  {
    name: "Acrobaties",
    ability: "Dextérité",
    description:
      "Permet de garder l'équilibre, faire des figures acrobatiques, se libérer de liens ou se déplacer avec agilité dans des situations périlleuses.",
    modifier: 0,
    skillField: "skill2",
    masteryField: "sk2",
  },
  {
    name: "Discrétion",
    ability: "Dextérité",
    description:
      "Utilisé pour se cacher, se déplacer silencieusement ou passer inaperçu, que ce soit pour éviter la détection ou pour suivre quelqu'un.",
    modifier: 0,
    skillField: "skill3",
    masteryField: "sk3",
  },
  {
    name: "Escamotage",
    ability: "Dextérité",
    description:
      "Permet de réaliser des tours de passe-passe, crocheter des serrures, désamorcer des pièges ou dérober des objets discrètement.",
    modifier: 0,
    skillField: "skill4",
    masteryField: "sk4",
  },
  {
    name: "Arcanes",
    ability: "Intelligence",
    description:
      "Représente vos connaissances en magie, sorts, objets magiques, plans d'existence et créatures magiques. Utilisé pour identifier des effets magiques.",
    modifier: 0,
    skillField: "skill5",
    masteryField: "sk5",
  },
  {
    name: "Histoire",
    ability: "Intelligence",
    description:
      "Permet de se rappeler des événements historiques, légendes, royaumes anciens, guerres passées et personnages historiques importants.",
    modifier: 0,
    skillField: "skill6",
    masteryField: "sk6",
  },
  {
    name: "Investigation",
    ability: "Intelligence",
    description:
      "Utilisé pour rechercher des indices, déduire des informations à partir d'indices, comprendre des énigmes ou analyser une scène méthodiquement.",
    modifier: 0,
    skillField: "skill7",
    masteryField: "sk7",
  },
  {
    name: "Nature",
    ability: "Intelligence",
    description:
      "Couvre vos connaissances sur le terrain, les plantes, les animaux, la météo et les cycles naturels. Permet d'identifier des créatures naturelles.",
    modifier: 0,
    skillField: "skill8",
    masteryField: "sk8",
  },
  {
    name: "Religion",
    ability: "Intelligence",
    description:
      "Représente vos connaissances sur les dieux, rites religieux, hiérarchies ecclésiastiques, symboles sacrés et pratiques des cultes divins.",
    modifier: 0,
    skillField: "skill9",
    masteryField: "sk9",
  },
  {
    name: "Dressage",
    ability: "Sagesse",
    description:
      "Permet de calmer des animaux domestiques, gérer des montures, comprendre le comportement animal ou faire obéir une bête.",
    modifier: 0,
    skillField: "skill10",
    masteryField: "sk10",
  },
  {
    name: "Intuition",
    ability: "Sagesse",
    description:
      "Utilisé pour déterminer les vraies intentions d'une créature, détecter un mensonge, prédire les actions de quelqu'un ou lire le langage corporel.",
    modifier: 0,
    skillField: "skill11",
    masteryField: "sk11",
  },
  {
    name: "Médecine",
    ability: "Sagesse",
    description:
      "Permet de stabiliser un mourant, diagnostiquer une maladie, déterminer la cause d'un décès ou soigner des blessures sans magie.",
    modifier: 0,
    skillField: "skill12",
    masteryField: "sk12",
  },
  {
    name: "Perception",
    ability: "Sagesse",
    description:
      "Utilisé pour repérer, entendre ou détecter quelque chose. Représente votre conscience générale de l'environnement et votre attention aux détails.",
    modifier: 0,
    skillField: "skill13",
    masteryField: "sk13",
  },
  {
    name: "Survie",
    ability: "Sagesse",
    description:
      "Permet de suivre des pistes, chasser du gibier, trouver un abri, prédire la météo ou éviter des dangers naturels comme les sables mouvants.",
    modifier: 0,
    skillField: "skill14",
    masteryField: "sk14",
  },
  {
    name: "Intimidation",
    ability: "Charisme",
    description:
      "Utilisé pour influencer quelqu'un par des menaces, des démonstrations de force ou des actions hostiles afin d'obtenir ce que vous voulez.",
    modifier: 0,
    skillField: "skill15",
    masteryField: "sk15",
  },
  {
    name: "Persuasion",
    ability: "Charisme",
    description:
      "Permet d'influencer quelqu'un par le tact, la grâce sociale ou la bonne nature. Utilisé pour négocier, convaincre ou inspirer confiance.",
    modifier: 0,
    skillField: "skill16",
    masteryField: "sk16",
  },
  {
    name: "Représentation",
    ability: "Charisme",
    description:
      "Détermine votre capacité à divertir un public par la musique, la danse, le théâtre, la narration ou d'autres formes d'art.",
    modifier: 0,
    skillField: "skill17",
    masteryField: "sk17",
  },
  {
    name: "Tromperie",
    ability: "Charisme",
    description:
      "Utilisé pour cacher la vérité par des mots ou des actions. Couvre le mensonge, le déguisement, l'ambiguïté et autres formes de duperie.",
    modifier: 0,
    skillField: "skill18",
    masteryField: "sk18",
  },
]

export const SKILLS: Record<string, Skill> = {
  Athlétisme: rawSkills[0],
  Acrobaties: rawSkills[1],
  Discrétion: rawSkills[2],
  Escamotage: rawSkills[3],
  Arcanes: rawSkills[4],
  Histoire: rawSkills[5],
  Investigation: rawSkills[6],
  Nature: rawSkills[7],
  Religion: rawSkills[8],
  Dressage: rawSkills[9],
  Intuition: rawSkills[10],
  Médecine: rawSkills[11],
  Perception: rawSkills[12],
  Survie: rawSkills[13],
  Intimidation: rawSkills[14],
  Persuasion: rawSkills[15],
  Représentation: rawSkills[16],
  Tromperie: rawSkills[17],
}
