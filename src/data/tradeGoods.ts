import type { TradeGood } from "../types/data/equipment"

const rawTradeGoods: TradeGood[] = [
  {
    name: "500 g de blé",
    category: "Marchandises",
    price: { po: 0, pa: 0, pc: 1 },
  },
  {
    name: "500 g de farine",
    category: "Marchandises",
    price: { po: 0, pa: 0, pc: 2 },
  },
  {
    name: "1 poulet",
    category: "Marchandises",
    price: { po: 0, pa: 0, pc: 2 },
  },
  {
    name: "500 g de sel",
    category: "Marchandises",
    price: { po: 0, pa: 0, pc: 5 },
  },
  {
    name: "500 g de fer",
    category: "Marchandises",
    price: { po: 0, pa: 1, pc: 0 },
  },
  {
    name: "1 m² de toile",
    category: "Marchandises",
    price: { po: 0, pa: 1, pc: 0 },
  },
  {
    name: "500 g de cuivre",
    category: "Marchandises",
    price: { po: 0, pa: 5, pc: 0 },
  },
  {
    name: "1 m² de tissu en coton",
    category: "Marchandises",
    price: { po: 0, pa: 5, pc: 0 },
  },
  {
    name: "500 g de gingembre",
    category: "Marchandises",
    price: { po: 1, pa: 0, pc: 0 },
  },
  {
    name: "1 chèvre",
    category: "Marchandises",
    price: { po: 1, pa: 0, pc: 0 },
  },
  {
    name: "500 g de cannelle",
    category: "Marchandises",
    price: { po: 2, pa: 0, pc: 0 },
  },
  {
    name: "500 g de poivre",
    category: "Marchandises",
    price: { po: 2, pa: 0, pc: 0 },
  },
  {
    name: "1 mouton",
    category: "Marchandises",
    price: { po: 2, pa: 0, pc: 0 },
  },
  {
    name: "500 g de clous de girofle",
    category: "Marchandises",
    price: { po: 3, pa: 0, pc: 0 },
  },
  {
    name: "1 cochon",
    category: "Marchandises",
    price: { po: 3, pa: 0, pc: 0 },
  },
  {
    name: "500 g d'argent",
    category: "Marchandises",
    price: { po: 5, pa: 0, pc: 0 },
  },
  {
    name: "1 m² de lin",
    category: "Marchandises",
    price: { po: 5, pa: 0, pc: 0 },
  },
  {
    name: "1 m² de soie",
    category: "Marchandises",
    price: { po: 10, pa: 0, pc: 0 },
  },
  {
    name: "1 vache",
    category: "Marchandises",
    price: { po: 10, pa: 0, pc: 0 },
  },
  {
    name: "500 g de safran",
    category: "Marchandises",
    price: { po: 15, pa: 0, pc: 0 },
  },
  {
    name: "1 boeuf",
    category: "Marchandises",
    price: { po: 15, pa: 0, pc: 0 },
  },
  {
    name: "500 g d'or",
    category: "Marchandises",
    price: { po: 50, pa: 0, pc: 0 },
  },
  {
    name: "500 g de platine",
    category: "Marchandises",
    price: { po: 500, pa: 0, pc: 0 },
  },
]

export const TRADE_GOODS: Record<string, TradeGood> = {}

rawTradeGoods.forEach((good) => {
  TRADE_GOODS[good.name] = good
})
