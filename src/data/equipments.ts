import type { Equipment } from "../types/data/equipment"
import { formatMoney } from "./money"

/**
 * Helper function to format equipment list for display
 * Groups identical items and displays them with quantity
 * Returns array of objects with name, count, and optional description
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
 * Helper function to format equipment list for display as a string
 * Groups identical items and displays them with quantity
 */
export const formatEquipment = (equipment: Equipment[]): string => {
  return formatEquipmentArray(equipment)
    .map((item) => item.name)
    .join(", ")
}
