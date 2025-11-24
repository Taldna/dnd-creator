import type { Benefit } from "./benefit"

/**
 * Feats (Dons)
 */
export type Feat = {
    name: string
    category: string
    description: string
    benefits: Benefit[]
}