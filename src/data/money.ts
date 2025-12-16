import type { Money } from "../types/data/equipment"

/**
 * Fonction helper pour créer de la monnaie comme équipement
 */
export const createMoney = (
  po: number = 0,
  pa: number = 0,
  pc: number = 0
): Money => {
  const parts: string[] = []
  if (po > 0) parts.push(`${po} po`)
  if (pa > 0) parts.push(`${pa} pa`)
  if (pc > 0) parts.push(`${pc} pc`)

  return {
    name: parts.join(", ") || "0 po",
    category: "Argent",
    amount: { po, pa, pc },
  }
}

/**
 * Fonction helper pour créer de l'or rapidement (rétrocompatibilité)
 */
export const createGold = (amount: number): Money => createMoney(amount, 0, 0)

/**
 * Fonction helper pour formater l'affichage de la monnaie
 */
export const formatMoney = (money: Money): string => {
  const parts: string[] = []
  if (money.amount.po > 0) parts.push(`${money.amount.po} po`)
  if (money.amount.pa > 0) parts.push(`${money.amount.pa} pa`)
  if (money.amount.pc > 0) parts.push(`${money.amount.pc} pc`)
  return parts.join(", ") || "0 po"
}
