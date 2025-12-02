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

export const TRADE_GOODS: Record<string, TradeGood> = {
  "500 g de blé": rawTradeGoods[0],
  "500 g de farine": rawTradeGoods[1],
  "1 poulet": rawTradeGoods[2],
  "500 g de sel": rawTradeGoods[3],
  "500 g de fer": rawTradeGoods[4],
  "1 m² de toile": rawTradeGoods[5],
  "500 g de cuivre": rawTradeGoods[6],
  "1 m² de tissu en coton": rawTradeGoods[7],
  "500 g de gingembre": rawTradeGoods[8],
  "1 chèvre": rawTradeGoods[9],
  "500 g de cannelle": rawTradeGoods[10],
  "500 g de poivre": rawTradeGoods[11],
  "1 mouton": rawTradeGoods[12],
  "500 g de clous de girofle": rawTradeGoods[13],
  "1 cochon": rawTradeGoods[14],
  "500 g d'argent": rawTradeGoods[15],
  "1 m² de lin": rawTradeGoods[16],
  "1 m² de soie": rawTradeGoods[17],
  "1 vache": rawTradeGoods[18],
  "500 g de safran": rawTradeGoods[19],
  "1 boeuf": rawTradeGoods[20],
  "500 g d'or": rawTradeGoods[21],
  "500 g de platine": rawTradeGoods[22],
}
