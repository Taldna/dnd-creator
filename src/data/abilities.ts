import type { Ability } from "../types/data/ability"

const rawAbilities: Ability[] = [
  {
    name: "Force",
    rawValue: 0,
    historyBonus: 0,
    finalValue: 0,
    modifier: 0,
    description:
      "La Force mesure la puissance physique, la capacité athlétique et la force brute. Elle affecte les attaques au corps à corps, les jets de dégâts avec des armes de mêlée, et détermine le poids que vous pouvez porter. Utilisée pour escalader, sauter, nager, pousser, tirer et briser des objets.",
  },
  {
    name: "Dextérité",
    rawValue: 0,
    historyBonus: 0,
    finalValue: 0,
    modifier: 0,
    description:
      "La Dextérité mesure l'agilité, les réflexes et l'équilibre. Elle détermine votre Classe d'Armure (CA), votre initiative en combat, et affecte les attaques à distance. Essentielle pour l'acrobatie, la discrétion, l'escamotage et la manipulation d'objets délicats.",
  },
  {
    name: "Constitution",
    rawValue: 0,
    historyBonus: 0,
    finalValue: 0,
    modifier: 0,
    description:
      "La Constitution représente la santé, l'endurance et la force vitale. Elle détermine vos Points de Vie (PV) à chaque niveau, votre résistance aux poisons et aux maladies, et votre capacité à endurer des efforts prolongés. Cruciale pour la survie en combat.",
  },
  {
    name: "Intelligence",
    rawValue: 0,
    historyBonus: 0,
    finalValue: 0,
    modifier: 0,
    description:
      "L'Intelligence mesure l'acuité mentale, la mémoire et la capacité de raisonnement. Elle affecte les compétences académiques comme l'Arcanes, l'Histoire, l'Investigation et la Nature. Essentielle pour les lanceurs de sorts comme les Magiciens, qui utilisent l'Intelligence pour leurs sorts.",
  },
  {
    name: "Sagesse",
    rawValue: 0,
    historyBonus: 0,
    finalValue: 0,
    modifier: 0,
    description:
      "La Sagesse reflète la perception, l'intuition et l'attention au monde environnant. Elle détermine votre capacité à remarquer des détails (Perception), à comprendre les intentions (Intuition), à survivre en milieu naturel, et à soigner. Utilisée par les Clercs et Druides pour lancer des sorts.",
  },
  {
    name: "Charisme",
    rawValue: 0,
    historyBonus: 0,
    finalValue: 0,
    modifier: 0,
    description:
      "Le Charisme mesure la force de personnalité, l'éloquence, le leadership et la présence. Il affecte la Persuasion, la Tromperie, l'Intimidation et la Représentation. Essentiel pour les Bardes, Ensorceleurs, Paladins et Occultistes qui canalisent leur magie à travers leur personnalité.",
  },
]

// Archétypes de caractéristiques par classe
export const CLASS_ABILITY_ARCHETYPES: Record<
  string,
  Record<string, number>
> = {
  Barbare: {
    Force: 15,
    Dextérité: 13,
    Constitution: 14,
    Intelligence: 10,
    Sagesse: 12,
    Charisme: 8,
  },
  Barde: {
    Force: 8,
    Dextérité: 14,
    Constitution: 12,
    Intelligence: 13,
    Sagesse: 10,
    Charisme: 15,
  },
  Clerc: {
    Force: 14,
    Dextérité: 8,
    Constitution: 13,
    Intelligence: 10,
    Sagesse: 15,
    Charisme: 12,
  },
  Druide: {
    Force: 8,
    Dextérité: 12,
    Constitution: 14,
    Intelligence: 13,
    Sagesse: 15,
    Charisme: 10,
  },
  Guerrier: {
    Force: 15,
    Dextérité: 14,
    Constitution: 13,
    Intelligence: 8,
    Sagesse: 10,
    Charisme: 12,
  },
  Moine: {
    Force: 12,
    Dextérité: 15,
    Constitution: 13,
    Intelligence: 10,
    Sagesse: 14,
    Charisme: 8,
  },
  Paladin: {
    Force: 15,
    Dextérité: 10,
    Constitution: 13,
    Intelligence: 8,
    Sagesse: 12,
    Charisme: 14,
  },
  Rôdeur: {
    Force: 12,
    Dextérité: 15,
    Constitution: 13,
    Intelligence: 8,
    Sagesse: 14,
    Charisme: 10,
  },
  Roublard: {
    Force: 12,
    Dextérité: 15,
    Constitution: 13,
    Intelligence: 14,
    Sagesse: 10,
    Charisme: 8,
  },
  Ensorceleur: {
    Force: 10,
    Dextérité: 13,
    Constitution: 14,
    Intelligence: 8,
    Sagesse: 12,
    Charisme: 15,
  },
  Occultiste: {
    Force: 8,
    Dextérité: 14,
    Constitution: 13,
    Intelligence: 12,
    Sagesse: 10,
    Charisme: 15,
  },
  Magicien: {
    Force: 8,
    Dextérité: 12,
    Constitution: 13,
    Intelligence: 15,
    Sagesse: 14,
    Charisme: 10,
  },
}

export const ABILITIES: Record<string, Ability> = {
  Force: rawAbilities[0],
  Dextérité: rawAbilities[1],
  Constitution: rawAbilities[2],
  Intelligence: rawAbilities[3],
  Sagesse: rawAbilities[4],
  Charisme: rawAbilities[5],
}
