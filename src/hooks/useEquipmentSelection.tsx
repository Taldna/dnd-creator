import { useState, useEffect } from "react"
import type { Equipment } from "../types/data/equipment"
import { mergeMoneyInEquipment } from "../utils/equipmentUtils"

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
      const mergedEquipment = mergeMoneyInEquipment(allEquipment)
      setSelectedEq(mergedEquipment.length > 0 ? mergedEquipment : null)
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
