import { useState } from "react"
import type { Money, Equipment } from "../types/data/equipment"
import { normalizeCurrency } from "../types/utility/equipmentUtils"

export const useShop = (baseEquipment: Equipment[], previousPurchases: Equipment[] = []) => {
  const [selectedEq, setSelectedEq] = useState<Equipment[] | null>(
    previousPurchases.length > 0 ? previousPurchases : null
  )
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

  // Calculate available money based on base equipment minus shop purchases
  const calculateAvailableMoney = () => {
    // Get ALL money items from base equipment and sum them
    const baseMoneyItems = baseEquipment.filter((item) => item.category === "Argent")
    const initialMoney = baseMoneyItems.reduce(
      (sum, item) => {
        if ("amount" in item) {
          return {
            po: sum.po + (item.amount.po || 0),
            pa: sum.pa + (item.amount.pa || 0),
            pc: sum.pc + (item.amount.pc || 0),
          }
        }
        return sum
      },
      { po: 0, pa: 0, pc: 0 }
    )

    // Calculate total cost of items currently in shop cart (only non-Money items)
    const cartCost = (selectedEq || [])
      .filter((item) => item.category !== "Argent")
      .reduce(
        (sum, item) => {
          if ("price" in item) {
            return {
              po: sum.po + (item.price.po || 0),
              pa: sum.pa + (item.price.pa || 0),
              pc: sum.pc + (item.price.pc || 0),
            }
          }
          return sum
        },
        { po: 0, pa: 0, pc: 0 }
      )

    // Available money = initial money - cart cost
    const available = {
      po: initialMoney.po - cartCost.po,
      pa: initialMoney.pa - cartCost.pa,
      pc: initialMoney.pc - cartCost.pc,
    }

    return normalizeCurrency(available)
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
