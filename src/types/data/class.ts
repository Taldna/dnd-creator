import type { Ability } from "./ability"
import type { ArmorTraining } from "./armorTraining"
import type { Equipment } from "./equipment"
import type { Feature } from "./feature"
import type { Skill } from "./skill"
import type { Subclass } from "./subclass"
import type { weaponProficiency } from "./weaponProficiency"

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
  weaponProficiencies: weaponProficiency[]
  armorTraining: ArmorTraining[]
  toolProficiencies: string[]
  equipment: Equipment[][] 
  features: Feature[]
  subclasses: Subclass[]
  full_img?: string
  cut_img?: string
}
