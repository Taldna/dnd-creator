import type { Mount } from "../types/data/equipment"

const rawMounts: Mount[] = [
  {
    name: "Âne ou mule",
    category: "Montures",
    price: { po: 8, pa: 0, pc: 0 },
    speed: "12 m",
    carryingCapacity: 210,
  },
  {
    name: "Chameau",
    category: "Montures",
    price: { po: 50, pa: 0, pc: 0 },
    speed: "15 m",
    carryingCapacity: 240,
  },
  {
    name: "Cheval de guerre",
    category: "Montures",
    price: { po: 400, pa: 0, pc: 0 },
    speed: "18 m",
    carryingCapacity: 270,
  },
  {
    name: "Cheval de selle",
    category: "Montures",
    price: { po: 75, pa: 0, pc: 0 },
    speed: "18 m",
    carryingCapacity: 240,
  },
  {
    name: "Cheval de trait",
    category: "Montures",
    price: { po: 50, pa: 0, pc: 0 },
    speed: "12 m",
    carryingCapacity: 270,
  },
  {
    name: "Éléphant",
    category: "Montures",
    price: { po: 200, pa: 0, pc: 0 },
    speed: "12 m",
    carryingCapacity: 660,
  },
  {
    name: "Molosse",
    category: "Montures",
    price: { po: 25, pa: 0, pc: 0 },
    speed: "12 m",
    carryingCapacity: 95,
  },
  {
    name: "Poney",
    category: "Montures",
    price: { po: 30, pa: 0, pc: 0 },
    speed: "12 m",
    carryingCapacity: 115,
  },
]

export const MOUNTS: Record<string, Mount> = {}

rawMounts.forEach((mount) => {
  MOUNTS[mount.name] = mount
})
