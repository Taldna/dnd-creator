export type Personalization = {
  characterName: string
  appearance: string
  height: number
  backstory: string
  alignment: Alignment
  languages: Language[]
}

export type Alignment = {
  name: string
  description: string
}

export type Backstory = {
  name: string
  description: string
}

export type Language =
  | "Commun"
  | "Elfique"
  | "Nain"
  | "Orc"
  | "Géant"
  | "Draconique"
  | "Sylvestre"
  | "Gobelin"
  | "Gnome"
  | "Halfelin"
  | "Abyssal"
  | "Céleste"
  | "Commun des profondeurs"
  | "Infernal"
  | "Primordial"
  | "Profond"
