import type { Ability } from "./ability";
import type { ArmorTraining } from "./armorTraining";
import type { Feature } from "./feature";
import type { Skill } from "./skill";
import type { Subclass } from "./subclass";

/**
 * Class (Classe)
 */
export type Class = {
  name: string
  short_desc: string
  description: string[]
  primaryAbility: Ability[]
  hitDice: string
  savingThrows: [Ability, Ability]
  skillProficiencies: Skill[]
  skillProficienciesNumber: number
  weaponProficiencies: string
  armorTraining: ArmorTraining[]
  equipment: [string, string]
  features: Feature[]
  subclasses: Subclass[]
  full_img?: string
  cut_img?: string
}