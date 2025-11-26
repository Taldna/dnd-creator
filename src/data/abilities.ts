import type { Ability } from "../types/data/ability"

const rawAbilities: Ability[] = [
  { name: "Force", rawValue: 0, historyBonus: 0, finalValue: 0, modifier: 0 },
  { name: "Dextérité", rawValue: 0, historyBonus: 0, finalValue: 0, modifier: 0 },
  {
    name: "Constitution",
    rawValue: 0,
    historyBonus: 0,
    finalValue: 0,
    modifier: 0,
  },
  {
    name: "Intelligence",
    rawValue: 0,
    historyBonus: 0,
    finalValue: 0,
    modifier: 0,
  },
  { name: "Sagesse", rawValue: 0, historyBonus: 0, finalValue: 0, modifier: 0 },
  { name: "Charisme", rawValue: 0, historyBonus: 0, finalValue: 0, modifier: 0 },
]

// Archétypes de caractéristiques par classe
export const CLASS_ABILITY_ARCHETYPES: Record<string, Record<string, number>> = {
  Barbare: { Force: 15, Dextérité: 13, Constitution: 14, Intelligence: 10, Sagesse: 12, Charisme: 8 },
  Barde: { Force: 8, Dextérité: 14, Constitution: 12, Intelligence: 13, Sagesse: 10, Charisme: 15 },
  Clerc: { Force: 14, Dextérité: 8, Constitution: 13, Intelligence: 10, Sagesse: 15, Charisme: 12 },
  Druide: { Force: 8, Dextérité: 12, Constitution: 14, Intelligence: 13, Sagesse: 15, Charisme: 10 },
  Guerrier: { Force: 15, Dextérité: 14, Constitution: 13, Intelligence: 8, Sagesse: 10, Charisme: 12 },
  Moine: { Force: 12, Dextérité: 15, Constitution: 13, Intelligence: 10, Sagesse: 14, Charisme: 8 },
  Paladin: { Force: 15, Dextérité: 10, Constitution: 13, Intelligence: 8, Sagesse: 12, Charisme: 14 },
  Rôdeur: { Force: 12, Dextérité: 15, Constitution: 13, Intelligence: 8, Sagesse: 14, Charisme: 10 },
  Roublard: { Force: 12, Dextérité: 15, Constitution: 13, Intelligence: 14, Sagesse: 10, Charisme: 8 },
  Ensorceleur: { Force: 10, Dextérité: 13, Constitution: 14, Intelligence: 8, Sagesse: 12, Charisme: 15 },
  Occultiste: { Force: 8, Dextérité: 14, Constitution: 13, Intelligence: 12, Sagesse: 10, Charisme: 15 },
  Magicien: { Force: 8, Dextérité: 12, Constitution: 13, Intelligence: 15, Sagesse: 14, Charisme: 10 }
}

export const ABILITIES: Record<string, Ability> = {
  Force: rawAbilities[0],
  Dextérité: rawAbilities[1],
  Constitution: rawAbilities[2],
  Intelligence: rawAbilities[3],
  Sagesse: rawAbilities[4],
  Charisme: rawAbilities[5]
}
