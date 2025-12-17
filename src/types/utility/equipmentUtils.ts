import type { Equipment, Money } from "../data/equipment"

/**
 * Formate le tableau d'équipement pour l'affichage
 * Groupe les items identiques et affiche avec quantité
 * Fusionne automatiquement les items d'argent
 */
export const formatEquipmentArray = (
  equipment: Equipment[]
): Array<{ name: string; count: number; description?: string }> => {
  // First, merge all money items
  const mergedEquipment = mergeMoneyInEquipment(equipment)

  // Count occurrences of each item
  const itemCounts = new Map<
    string,
    { item: Equipment; count: number; description?: string }
  >()

  mergedEquipment.forEach((item) => {
    const key = item.name

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
    const displayName = count > 1 ? `${item.name} (x${count})` : item.name
    return { name: displayName, count, description }
  })
}

/**
 * Formate l'équipement en string lisible (SANS argent)
 */
export const formatEquipmentToString = (equipment: Equipment[]): string => {
  const filtered = equipment.filter((item) => item.category !== "Argent")
  const formatted = formatEquipmentArray(filtered)
  return formatted.map((item) => item.name).join(", ")
}

/**
 * Formate l'équipement en string lisible (AVEC argent détaillé)
 */
export const formatEquipment = (equipment: Equipment[]): string => {
  const formatted = formatEquipmentArray(equipment)
  const equipmentList = formatted.map((item) => item.name).join(", ")

  // Add money details if available
  const moneyDetails = getMoneyDetails(equipment)

  return moneyDetails
    ? `${equipmentList}${equipmentList ? ", " : ""}${moneyDetails}`
    : equipmentList
}

/**
 * Normalise l'argent en convertissant tout en pièces de cuivre puis reconvertit
 * Cela gère correctement les valeurs négatives et s'assure que tout est positif
 */
export const normalizeCurrency = (amount: {
  po: number
  pa: number
  pc: number
}): { po: number; pa: number; pc: number } => {
  // Convert everything to copper pieces for accurate calculation
  let totalInPc = amount.po * 100 + amount.pa * 10 + amount.pc

  // Ensure it's not negative
  if (totalInPc < 0) {
    return { po: 0, pa: 0, pc: 0 }
  }

  // Convert back to po, pa, pc
  const po = Math.floor(totalInPc / 100)
  totalInPc = totalInPc % 100
  const pa = Math.floor(totalInPc / 10)
  const pc = totalInPc % 10

  return { po, pa, pc }
}

/**
 * Formate l'argent en string avec construction po/pa/pc
 */
const formatMoneyString = (amount: {
  po: number
  pa: number
  pc: number
}): string => {
  const normalized = normalizeCurrency(amount)
  const parts: string[] = []
  if (normalized.po > 0) parts.push(`${normalized.po}po`)
  if (normalized.pa > 0) parts.push(`${normalized.pa}pa`)
  if (normalized.pc > 0) parts.push(`${normalized.pc}pc`)
  return parts.join(", ") || "0po"
}

/**
 * Extrait et formate l'argent de manière détaillée (20po, 5pa, 3pc)
 */
export const getMoneyDetails = (equipment: Equipment[]): string => {
  const moneyItem = equipment.find((item) => item.category === "Argent")

  if (!moneyItem || !("amount" in moneyItem)) {
    return ""
  }

  return formatMoneyString(moneyItem.amount)
}

/**
 * Fusionne l'argent dans le tableau d'équipement (combine les Money items)
 * Normalise les valeurs pour s'assurer qu'elles sont toutes positives
 */
export const mergeMoneyInEquipment = (equipment: Equipment[]): Equipment[] => {
  const moneyItems = equipment.filter((item) => item.category === "Argent")
  const nonMoneyItems = equipment.filter((item) => item.category !== "Argent")

  // If no money or only one money item already merged, return as is
  if (moneyItems.length === 0) {
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

  // Normalize the currency
  const normalizedCurrency = normalizeCurrency(totalCurrency)

  // Create merged money item with proper Money type
  const mergedMoney: Money = {
    name: formatMoneyString(normalizedCurrency),
    category: "Argent",
    amount: normalizedCurrency,
  }

  return [...nonMoneyItems, mergedMoney as Equipment]
}
