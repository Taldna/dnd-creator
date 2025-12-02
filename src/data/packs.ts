import type { Equipment } from "../types/data/equipment"
import { ADVENTURING_GEAR } from "./adventuringGear"

/**
 * Paquetages d'équipement prédéfinis pour les classes
 */

export const PACK_EXPLORATEUR: Equipment[] = [
  ADVENTURING_GEAR["Sac d'explorateur"],
]

export const PACK_ARTISTE: Equipment[] = [ADVENTURING_GEAR["Sac d'artiste"]]

export const PACK_ECCLESIASTIQUE: Equipment[] = [
  ADVENTURING_GEAR["Sac d'ecclésiastique"],
]

export const PACK_EXPLORATION_SOUTERRAINE: Equipment[] = [
  ADVENTURING_GEAR["Sac d'exploration souterraine"],
]

export const PACK_ERUDIT: Equipment[] = [ADVENTURING_GEAR["Sac d'érudit"]]

export const PACK_CAMBRIOLEUR: Equipment[] = [
  ADVENTURING_GEAR["Sac de cambrioleur"],
]

export const PACK_DIPLOMATE: Equipment[] = [
  ADVENTURING_GEAR["Sac de diplomate"],
]
