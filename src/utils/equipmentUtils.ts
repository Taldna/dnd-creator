import type { Equipment } from "../types/data/equipment"
import { formatMoney } from "../data/money"

/**
 * Formate le tableau d'équipement pour l'affichage
 * Groupe les items identiques et affiche avec quantité
 */
export const formatEquipmentArray = (
  equipment: Equipment[]
): Array<{ name: string; count: number; description?: string }> => {
  // Count occurrences of each item
  const itemCounts = new Map<
    string,
    { item: Equipment; count: number; description?: string }
  >()

  equipment.forEach((item) => {
    const key = item.category === "Argent" ? formatMoney(item) : item.name

    if (itemCounts.has(key)) {
      itemCounts.get(key)!.count++
    } else {
      const description =
        item.category === "Équipement d'aventurier"
          ? item.description
          : undefined
      itemCounts.set(key, { item, count: 1, description })
    }
  })

  // Format items with their counts
  return Array.from(itemCounts.values()).map(({ item, count, description }) => {
    const name = item.category === "Argent" ? formatMoney(item) : item.name
    const displayName = count > 1 ? `${name} (x${count})` : name
    return { name: displayName, count, description }
  })
}

/**
 * Formate l'équipement en string lisible (sans argent)
 */
export const formatEquipmentToString = (equipment: Equipment[]): string => {
  const filtered = equipment.filter((item) => item.category !== "Argent")
  const formatted = formatEquipmentArray(filtered)
  return formatted.map((item) => item.name).join(", ")
}

/**
 * Formate l'équipement en string lisible (avec argent)
 */
export const formatEquipment = (equipment: Equipment[]): string => {
  const formatted = formatEquipmentArray(equipment)
  return formatted.map((item) => item.name).join(", ")
}

/**
 * Fusionne l'argent dans le tableau d'équipement (combine les Money items)
 */
export const mergeMoneyInEquipment = (equipment: Equipment[]): Equipment[] => {
  const moneyItems = equipment.filter((item) => item.category === "Argent")
  const nonMoneyItems = equipment.filter((item) => item.category !== "Argent")

  if (moneyItems.length <= 1) {
    return equipment
  }

  // Sum all money
  const totalCurrency = moneyItems.reduce(
    (sum, item) => {
      if (item.category === "Argent" && "amount" in item) {
        return {
          po: sum.po + item.amount.po,
          pa: sum.pa + item.amount.pa,
          pc: sum.pc + item.amount.pc,
        }
      }
      return sum
    },
    { po: 0, pa: 0, pc: 0 }
  )

  // Create merged money item
  const mergedMoney: Equipment = {
    name: formatMoney({ name: "", category: "Argent", amount: totalCurrency }),
    category: "Argent",
    amount: totalCurrency,
  } as Equipment

  return [...nonMoneyItems, mergedMoney]
}
