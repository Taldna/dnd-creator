import type { Boat } from "../types/data/equipment"

const rawBoats: Boat[] = [
  {
    name: "Barque",
    category: "Bateaux",
    price: { po: 50, pa: 0, pc: 0 },
    speed: "2,25 km/h",
    crew: 1,
    passengers: 3,
    notes: "Rames uniquement",
  },
  {
    name: "Bateau à fond plat",
    category: "Bateaux",
    price: { po: 3000, pa: 0, pc: 0 },
    speed: "1,5 km/h",
    crew: 1,
    passengers: 6,
    notes: "Voiles uniquement",
  },
  {
    name: "Bateau à voiles",
    category: "Bateaux",
    price: { po: 10000, pa: 0, pc: 0 },
    speed: "3 km/h",
    crew: 20,
    passengers: 20,
    notes: "Voiles uniquement",
  },
  {
    name: "Drakkar",
    category: "Bateaux",
    price: { po: 10000, pa: 0, pc: 0 },
    speed: "4,5 km/h",
    crew: 40,
    passengers: 150,
    notes: "Rames et voiles",
  },
  {
    name: "Galère",
    category: "Bateaux",
    price: { po: 30000, pa: 0, pc: 0 },
    speed: "6 km/h",
    crew: 80,
    passengers: 0,
    notes: "Rames et voiles",
  },
  {
    name: "Navire de guerre",
    category: "Bateaux",
    price: { po: 25000, pa: 0, pc: 0 },
    speed: "3,75 km/h",
    crew: 60,
    passengers: 60,
    notes: "Rames et voiles",
  },
]

export const BOATS: Record<string, Boat> = {
  Barque: rawBoats[0],
  "Bateau à fond plat": rawBoats[1],
  "Bateau à voiles": rawBoats[2],
  Drakkar: rawBoats[3],
  Galère: rawBoats[4],
  "Navire de guerre": rawBoats[5],
}
