import type { Feature } from "./feature"

export type Specie = {
  name: string
  description: string[]
  features: Feature[]
  fullImage?: string
  icon?: string
  lineage?: string[] // eg: "Drow", "High Elf", "Wood Elf"
  speed: number
  height: { min: number; max: number }
}
