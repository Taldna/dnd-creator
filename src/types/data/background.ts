import type { Ability } from "./ability"
import type { Equipment } from "./equipment"
import type { Feat } from "./feat"
import type { Skill } from "./skill"

/**
 * Background (Historique)
 */
export type Background = {
  name: string
  abilityScore: [Ability?, Ability?, Ability?]
  feat: Feat
  proficiencies: Skill[]
  toolProficiencies: string[]
  equipment: Equipment[][]
  description: string
  image?: string
}
