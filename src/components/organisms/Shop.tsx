import { ADVENTURING_GEAR } from "../../data/adventuringGear"
import { ARMORS } from "../../data/armors"
import { BOATS } from "../../data/boats"
import { MOUNTS } from "../../data/mounts"
import { TOOLS } from "../../data/tools"
import { TRADE_GOODS } from "../../data/tradeGoods"
import { VEHICLE_EQUIPMENT } from "../../data/vehicleEquipment"
import { WEAPONS } from "../../data/weapons"
import type { Money, Equipment } from "../../types/data/equipment"
import Box from "../atoms/Box"
import EquipmentCard from "../atoms/EquipmentCard"
import PrimaryButton from "../atoms/PrimaryButton"
import { useShop } from "../../hooks/useShop"

export default function Shop({
  money,
  setShopPurchases,
  onClose,
}: {
  money: Money[] | undefined
  setShopPurchases: (purchases: Equipment[]) => void
  onClose: () => void
}) {
  const {
    selectedEq,
    expandedCategories,
    availableMoney,
    toggleCategory,
    canAfford,
    addItemToCart,
  } = useShop(money)

  const categories = [
    { key: "Weapons", label: "Armes", items: Object.values(WEAPONS) },
    { key: "Armors", label: "Armures", items: Object.values(ARMORS) },
    {
      key: "AdventuringGear",
      label: "Équipement d'aventurier",
      items: Object.values(ADVENTURING_GEAR),
    },
    { key: "Tools", label: "Outils", items: Object.values(TOOLS) },
    { key: "Mounts", label: "Montures", items: Object.values(MOUNTS) },
    {
      key: "VehicleEquipment",
      label: "Équipement de véhicule",
      items: Object.values(VEHICLE_EQUIPMENT),
    },
    { key: "Boats", label: "Bateaux", items: Object.values(BOATS) },
    {
      key: "TradeGoods",
      label: "Marchandises",
      items: Object.values(TRADE_GOODS),
    },
  ]

  const renderItem = (item: Equipment, index: number) => {
    const affordable = "price" in item ? canAfford(item.price) : true
    return (
      <div
        key={index}
        onClick={() => addItemToCart(item)}
        className={`px-2 transition flex justify-between items-center ${affordable
            ? "cursor-pointer hover:bg-gray-700"
            : "opacity-50 cursor-not-allowed"
          }`}
      >
        <EquipmentCard equipment={[item]} />
        {"price" in item && (
          <span
            className={`font-semibold ml-4 whitespace-nowrap ${!affordable
                ? "text-red-500"
                : (item.price.po > 0 ? 1 : 0) +
                  (item.price.pa > 0 ? 1 : 0) +
                  (item.price.pc > 0 ? 1 : 0) >
                  1
                  ? "text-white"
                  : item.price.po > 0
                    ? "text-yellow-500"
                    : item.price.pa > 0
                      ? "text-gray-400"
                      : "text-orange-400"
              }`}
          >
            {item.price.po > 0 && `${item.price.po} po `}
            {item.price.pa > 0 && `${item.price.pa} pa `}
            {item.price.pc > 0 && `${item.price.pc} pc`}
          </span>
        )}
      </div>
    )
  }

  return (
    <Box className="max-w-2xl w-full h-[80%]" backgroundColor="black">
      <div className="h-full overflow-y-auto pr-4">
        <button
          onClick={onClose}
          className="sticky top-0 float-right text-4xl font-bold text-gray-400 hover:text-white transition rotate-45 z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
        >
          +
        </button>

        <h1 className="text-3xl font-bold text-white mb-6">Shop</h1>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Argent Disponible :{" "}
              <span
                className={
                  availableMoney.po < 0 ||
                    availableMoney.pa < 0 ||
                    availableMoney.pc < 0
                    ? "text-red-500"
                    : "text-green-500"
                }
              >
                {availableMoney.po} Po, {availableMoney.pa} Pa,{" "}
                {availableMoney.pc} Pc
              </span>
            </h3>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Panier :</h3>
            <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-4">
              {selectedEq && selectedEq.length > 0 && (
                <EquipmentCard equipment={selectedEq} />
              )}
            </div>
            <div className="mt-4 flex justify-center">
              <PrimaryButton
                onClick={() => {
                  setShopPurchases(selectedEq || [])
                  onClose()
                }}
                disabled={!selectedEq || selectedEq.length === 0}
                text="Valider"
              >
              </PrimaryButton>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Équipement à vendre
            </h3>
            <div className="space-y-0">
              {categories.map((category, categoryIndex) => (
                <div key={category.key}>
                  {/* Separator between categories */}
                  {categoryIndex > 0 && (
                    <div className="border-t-2 border-gray-600 my-1" />
                  )}

                  <div className="overflow-hidden">
                    {/* Category Header */}
                    <button
                      onClick={() => toggleCategory(category.key)}
                      className="w-full cursor-pointer flex items-center justify-between px-3 hover:bg-gray-600 transition"
                    >
                      <span className="text-lg font-semibold text-white">
                        {category.label}
                      </span>
                      <span
                        className={`text-xs text-white transition-transform duration-300 ease-out ${expandedCategories[category.key]
                            ? "rotate-0"
                            : "-rotate-180"
                          }`}
                      >
                        ▼
                      </span>
                    </button>

                    {/* Category Items */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${expandedCategories[category.key]
                          ? "max-h-[2000px] opacity-100"
                          : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="px-2">
                        {category.items.map((item, index) => (
                          <div key={index}>
                            {index > 0 && (
                              <div className="border-t border-gray-700" />
                            )}
                            {renderItem(item, index)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}
