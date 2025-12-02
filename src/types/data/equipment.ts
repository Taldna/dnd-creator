export type EquipmentCategory =
  | "Armes"
  | "Armures"
  | "Équipement d'aventurier"
  | "Outils"
  | "Montures"
  | "Équipement de véhicule"
  | "Bateaux"
  | "Marchandises"
  | "Or"
  | "Babioles"

export type WeaponType =
  | "Armes courantes de corps à corps"
  | "Armes courantes à distance"
  | "Armes de guerre de corps à corps"
  | "Armes de guerre à distance"

export type ArmorType =
  | "Armures légères"
  | "Armures intermédiaires"
  | "Armures lourdes"
  | "Bouclier"

export type ToolType =
  | "Instruments de musique"
  | "Jeux"
  | "Kits"
  | "Outils d'artisan"
  | "Outils divers"

export type VehicleEquipmentType = "Véhicules" | "Selles" | "Accessoires"

export type Currency = {
  po: number
  pa: number
  pc: number
}

export type Weapon = {
  name: string
  category: "Armes"
  type: WeaponType
  damage: string
  weight: number
  price: Currency
  properties: string[]
}

export type Armor = {
  name: string
  category: "Armures"
  type: ArmorType
  armorClass: string
  strength?: number
  stealth: "Désavantage" | "Normal"
  weight: number
  price: Currency
}

export type AdventuringGear = {
  name: string
  category: "Équipement d'aventurier"
  price: Currency
  weight: number
}

export type Tool = {
  name: string
  category: "Outils"
  type: ToolType
  price: Currency
  weight: number
}

export type Mount = {
  name: string
  category: "Montures"
  price: Currency
  speed: string
  carryingCapacity: number
}

export type VehicleEquipment = {
  name: string
  category: "Équipement de véhicule"
  type: VehicleEquipmentType
  price: Currency
  weight: number
}

export type Boat = {
  name: string
  category: "Bateaux"
  price: Currency
  speed: string
  crew: number
  passengers: number
  notes?: string
}

export type TradeGood = {
  name: string
  category: "Marchandises"
  price: Currency
}

export type Trinket = {
  name: string
  category: "Babioles"
  d100: number
  description: string
}

export type Equipment =
  | Weapon
  | Armor
  | AdventuringGear
  | Tool
  | Mount
  | VehicleEquipment
  | Boat
  | TradeGood
  | Trinket
