import { useState } from "react"
import type { Money, Equipment } from "../types/data/equipment"
import { normalizeCurrency } from "../types/utility/equipmentUtils"

export const useShop = (money: Money[] | undefined) => {
  const [selectedEq, setSelectedEq] = useState<Equipment[] | null>(null)
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean
  }>({
    Weapons: false,
    Armors: false,
    AdventuringGear: false,
    Tools: false,
    Mounts: false,
    VehicleEquipment: false,
    Boats: false,
    TradeGoods: false,
  })

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  // Calculate available money including cart purchases
  const calculateAvailableMoney = () => {
    const initialMoney = {
      po: money?.reduce((acc, curr) => acc + (curr.amount.po || 0), 0) || 0,
      pa: money?.reduce((acc, curr) => acc + (curr.amount.pa || 0), 0) || 0,
      pc: money?.reduce((acc, curr) => acc + (curr.amount.pc || 0), 0) || 0,
    }

    // Calculate total cart cost
    const cartCost = selectedEq?.reduce(
      (acc, item) => {
        if (item.category === "Argent") {
          return {
            po: acc.po + (item.amount.po || 0),
            pa: acc.pa + (item.amount.pa || 0),
            pc: acc.pc + (item.amount.pc || 0),
          }
        }
        return acc
      },
      { po: 0, pa: 0, pc: 0 }
    ) || { po: 0, pa: 0, pc: 0 }

    // Calculate remaining money and normalize it
    const remaining = {
      po: initialMoney.po + cartCost.po,
      pa: initialMoney.pa + cartCost.pa,
      pc: initialMoney.pc + cartCost.pc,
    }

    return normalizeCurrency(remaining)
  }

  // Check if item is affordable
  const canAfford = (itemPrice: { po: number; pa: number; pc: number }) => {
    const available = calculateAvailableMoney()

    // Convert everything to copper pieces for comparison
    const availableInPc = available.po * 100 + available.pa * 10 + available.pc
    const priceInPc =
      (itemPrice.po || 0) * 100 + (itemPrice.pa || 0) * 10 + (itemPrice.pc || 0)

    return availableInPc >= priceInPc
  }

  // Add item to cart
  const addItemToCart = (item: Equipment) => {
    const affordable = "price" in item ? canAfford(item.price) : true
    if (!affordable) return

    if ("price" in item) {
      const negativeGold: Money = {
        name: "Or",
        category: "Argent",
        amount: {
          po: -(item.price.po || 0),
          pa: -(item.price.pa || 0),
          pc: -(item.price.pc || 0),
        },
      }
      setSelectedEq((prevEq) => [...(prevEq || []), item, negativeGold])
    } else {
      setSelectedEq((prevEq) => [...(prevEq || []), item])
    }
  }

  const availableMoney = calculateAvailableMoney()

  return {
    selectedEq,
    expandedCategories,
    availableMoney,
    toggleCategory,
    canAfford,
    addItemToCart,
  }
}
