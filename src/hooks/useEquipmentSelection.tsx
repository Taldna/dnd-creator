import { useState, useEffect } from "react"
import type { Equipment } from "../types/data/equipment"

export const useEquipmentSelection = () => {
  const [selectedBackgroundEq, setSelectedBackgroundEq] = useState<
    Equipment[] | null
  >(null)
  const [selectedClassEq, setSelectedClassEq] = useState<Equipment[] | null>(
    null
  )
  const [showShop, setShowShop] = useState(false)
  const [shopPurchases, setShopPurchases] = useState<Equipment[]>([])
  const [selectedEq, setSelectedEq] = useState<Equipment[] | null>(null)

  // Update selectedEq when base equipment or shop purchases change
  useEffect(() => {
    const baseEquipment = [
      ...(selectedBackgroundEq || []),
      ...(selectedClassEq || []),
    ]

    if (baseEquipment.length > 0 || shopPurchases.length > 0) {
      const allEquipment = [...baseEquipment, ...shopPurchases]

      // Convert money to proper denominations
      const moneyItems = allEquipment.filter(
        (item) => item.category === "Argent"
      )
      const nonMoneyItems = allEquipment.filter(
        (item) => item.category !== "Argent"
      )

      if (moneyItems.length > 0) {
        // Calculate total in copper pieces
        const totalInPc = moneyItems.reduce((sum, item) => {
          if (item.category === "Argent") {
            return (
              sum +
              (item.amount.po || 0) * 100 +
              (item.amount.pa || 0) * 10 +
              (item.amount.pc || 0)
            )
          }
          return sum
        }, 0)

        // Convert back to po, pa, pc
        const po = Math.floor(totalInPc / 100)
        const remainingAfterPo = totalInPc % 100
        const pa = Math.floor(remainingAfterPo / 10)
        const pc = remainingAfterPo % 10

        // Create converted money item
        const convertedMoney: Equipment = {
          name: "Or",
          category: "Argent",
          amount: { po, pa, pc },
        }

        setSelectedEq([...nonMoneyItems, convertedMoney])
      } else {
        setSelectedEq(allEquipment)
      }
    } else {
      setSelectedEq(null)
    }
  }, [selectedBackgroundEq, selectedClassEq, shopPurchases])

  const handleBackgroundSelect = (equipment: Equipment[]) => {
    if (shopPurchases.length === 0) {
      setSelectedBackgroundEq(equipment)
    }
  }

  const handleClassSelect = (equipment: Equipment[]) => {
    if (shopPurchases.length === 0) {
      setSelectedClassEq(equipment)
    }
  }

  const handleReset = () => {
    setSelectedBackgroundEq(null)
    setSelectedClassEq(null)
    setShopPurchases([])
  }

  const openShop = () => setShowShop(true)
  const closeShop = () => setShowShop(false)

  const isValid = !(selectedBackgroundEq && selectedClassEq)

  return {
    selectedBackgroundEq,
    selectedClassEq,
    showShop,
    shopPurchases,
    selectedEq,
    setShopPurchases,
    handleBackgroundSelect,
    handleClassSelect,
    handleReset,
    openShop,
    closeShop,
    isValid,
  }
}
