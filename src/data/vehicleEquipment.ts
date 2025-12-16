import type { VehicleEquipment } from "../types/data/equipment"

const rawVehicleEquipment: VehicleEquipment[] = [
  // Véhicules
  {
    name: "Barde",
    category: "Équipement de véhicule",
    type: "Véhicules",
    price: { po: 0, pa: 0, pc: 0 }, // x4 du prix de l'armure
    weight: 0, // x2 du poids de l'armure
  },
  {
    name: "Carrosse",
    category: "Équipement de véhicule",
    type: "Véhicules",
    price: { po: 100, pa: 0, pc: 0 },
    weight: 300,
  },
  {
    name: "Char",
    category: "Équipement de véhicule",
    type: "Véhicules",
    price: { po: 250, pa: 0, pc: 0 },
    weight: 50,
  },
  {
    name: "Chariot",
    category: "Équipement de véhicule",
    type: "Véhicules",
    price: { po: 35, pa: 0, pc: 0 },
    weight: 200,
  },
  {
    name: "Charrette",
    category: "Équipement de véhicule",
    type: "Véhicules",
    price: { po: 15, pa: 0, pc: 0 },
    weight: 100,
  },
  {
    name: "Traîneau",
    category: "Équipement de véhicule",
    type: "Véhicules",
    price: { po: 20, pa: 0, pc: 0 },
    weight: 150,
  },
  // Selles
  {
    name: "Selle d'équitation",
    category: "Équipement de véhicule",
    type: "Selles",
    price: { po: 10, pa: 0, pc: 0 },
    weight: 12.5,
  },
  {
    name: "Selle de bât",
    category: "Équipement de véhicule",
    type: "Selles",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 7.5,
  },
  {
    name: "Selle exotique",
    category: "Équipement de véhicule",
    type: "Selles",
    price: { po: 60, pa: 0, pc: 0 },
    weight: 20,
  },
  {
    name: "Selle militaire",
    category: "Équipement de véhicule",
    type: "Selles",
    price: { po: 20, pa: 0, pc: 0 },
    weight: 15,
  },
  // Accessoires
  {
    name: "Écurie (par jour)",
    category: "Équipement de véhicule",
    type: "Accessoires",
    price: { po: 0, pa: 5, pc: 0 },
    weight: 0,
  },
  {
    name: "Fontes",
    category: "Équipement de véhicule",
    type: "Accessoires",
    price: { po: 4, pa: 0, pc: 0 },
    weight: 4,
  },
  {
    name: "Fourrage (par jour)",
    category: "Équipement de véhicule",
    type: "Accessoires",
    price: { po: 0, pa: 0, pc: 5 },
    weight: 5,
  },
  {
    name: "Mors et bride",
    category: "Équipement de véhicule",
    type: "Accessoires",
    price: { po: 2, pa: 0, pc: 0 },
    weight: 0.5,
  },
]

export const VEHICLE_EQUIPMENT: Record<string, VehicleEquipment> = {
  Barde: rawVehicleEquipment[0],
  Carrosse: rawVehicleEquipment[1],
  Char: rawVehicleEquipment[2],
  Chariot: rawVehicleEquipment[3],
  Charrette: rawVehicleEquipment[4],
  Traîneau: rawVehicleEquipment[5],
  "Selle d'équitation": rawVehicleEquipment[6],
  "Selle de bât": rawVehicleEquipment[7],
  "Selle exotique": rawVehicleEquipment[8],
  "Selle militaire": rawVehicleEquipment[9],
  "Écurie (par jour)": rawVehicleEquipment[10],
  Fontes: rawVehicleEquipment[11],
  "Fourrage (par jour)": rawVehicleEquipment[12],
  "Mors et bride": rawVehicleEquipment[13],
}
