import { useState } from "react"
import type { Money, Equipment } from "../types/data/equipment"

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
            po: acc.po + Math.abs(item.amount.po || 0),
            pa: acc.pa + Math.abs(item.amount.pa || 0),
            pc: acc.pc + Math.abs(item.amount.pc || 0),
          }
        }
        return acc
      },
      { po: 0, pa: 0, pc: 0 }
    ) || { po: 0, pa: 0, pc: 0 }

    // Convert everything to copper pieces for accurate calculation
    const totalAvailableInPc =
      initialMoney.po * 100 + initialMoney.pa * 10 + initialMoney.pc
    const totalCostInPc = cartCost.po * 100 + cartCost.pa * 10 + cartCost.pc

    let remainingInPc = totalAvailableInPc - totalCostInPc

    // Convert back to po, pa, pc
    const remainingPo = Math.floor(remainingInPc / 100)
    remainingInPc = remainingInPc % 100
    const remainingPa = Math.floor(remainingInPc / 10)
    const remainingPc = remainingInPc % 10

    return {
      po: remainingPo,
      pa: remainingPa,
      pc: remainingPc,
    }
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
