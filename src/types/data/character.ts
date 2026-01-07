import type { Ability } from "./ability"
import type { Background } from "./background"
import type { Class } from "./class"
import type { Specie } from "./specie"

export type Character = {
  name?: string
  dndclass?: Class
  background?: Background
  species?: Specie
  abilities?: Ability[]
}
