import type { Ability } from "./ability"
import type { Background } from "./background"
import type { Class } from "./class"
import type { Species } from "./species"

export type Character = {
    name?: string
    dndclass?: Class
    background?: Background
    species?: Species
    abilities?: Ability[]
} 