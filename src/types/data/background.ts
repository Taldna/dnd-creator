import type { Ability } from "./ability"
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
    toolProficiency: string
    equipment: string[]
    description: string
    image?: string
}