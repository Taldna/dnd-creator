"use client"

import { useState } from "react"
import type { Personalization } from "../../types/data/personalization"
import Box from "../atoms/Box"
import Title from "../atoms/Title"
import PrimaryButton from "../atoms/PrimaryButton"

export default function PersonalizationCompletion({ setPersonalization }: { setPersonalization?: (value: Personalization) => void }) {
  const [characterName, setCharacterName] = useState("")
  const [appearance, setAppearance] = useState("")
  const [backstory, setBackstory] = useState("")
  const [height, setHeight] = useState(1.75)
  const [heightInput, setHeightInput] = useState("1.75")

  const handleSubmit = () => {
    if (characterName && appearance && backstory) {
      setPersonalization?.({
        characterName,
        appearance,
        height,
        backstory,
      })
    }
  }

  const getHeightCategory = (h: number): string => {
    if (h <= 0.6) return "Minuscule"
    if (h <= 1.2) return "Petit"
    if (h <= 2.4) return "Moyen"
    if (h <= 4.9) return "Grand"
    if (h <= 9.8) return "Énorme"
    return "Colossal"
  }

  // Convertit la valeur du slider (0-100) en hauteur réelle avec une échelle non linéaire
  const sliderToHeight = (sliderValue: number): number => {
    // Pour 0-60 du slider : hauteur 0-3m (précis)
    if (sliderValue <= 60) {
      return (sliderValue / 60) * 3
    }
    // Pour 60-100 du slider : hauteur 3-20m (moins précis)
    return 3 + ((sliderValue - 60) / 40) * 17
  }

  // Convertit la hauteur réelle en valeur du slider
  const heightToSlider = (heightValue: number): number => {
    if (heightValue <= 3) {
      return (heightValue / 3) * 60
    }
    return 60 + ((heightValue - 3) / 17) * 40
  }

  return (
    <main className="h-screen w-screen flex flex-col gap-6 items-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-auto relative">
      <Title name="Personnalisation du Personnage" />
      <Box className="h-auto w-5/10 flex flex-col gap-6 p-6">
        <div className="flex flex-col pb-4 gap-2 items-center">
          <label htmlFor="characterName" className="text-2xl font-semibold">Nom</label>
          <input
            id="characterName"
            type="text"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            placeholder="Entrez le nom du personnage"
            className="px-4 py-2 text-white text-center text-xl border-b border-white focus:outline-none w-1/2"
          />
        </div>

        <div className="flex flex-col pb-4 gap-2">
          <label htmlFor="appearance" className="text-2xl font-semibold text-center">Apparence</label>
          <textarea
            id="appearance"
            value={appearance}
            onChange={(e) => setAppearance(e.target.value)}
            placeholder="Décrivez l'apparence de votre personnage"
            className="py-2 px-4 text-white text-center border border-white rounded h-24 resize-none"
          />
        </div>

        <div className="flex flex-col pb-4 items-center gap-2">
          <label htmlFor="height" className="text-2xl font-semibold text-center">Taille</label>
          <input
            id="height"
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={heightToSlider(height)}
            onChange={(e) => {
              const newHeight = sliderToHeight(Number(e.target.value))
              setHeight(newHeight)
              setHeightInput(newHeight.toFixed(2))
            }}
            className="w-[50%] accent-primary"
          />
          <div className="flex items-center gap-0">
            <input
              type="number"
              min="0"
              max="20"
              step="0.01"
              value={heightInput}
              onChange={(e) => {
                setHeightInput(e.target.value)
                const val = parseFloat(e.target.value)
                if (!isNaN(val) && val >= 0 && val <= 20) {
                  setHeight(val)
                }
              }}
              onBlur={() => setHeightInput(height.toFixed(2))}
              className="text-white text-xl text-right w-12 bg-transparent hover:bg-gray-800 border-none focus:outline-none p-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className="text-white text-xl">m - {getHeightCategory(height)}</span>
          </div>
        </div>

        <div className="flex flex-col pb-4 gap-2">
          <textarea
            id="backstory"
            value={backstory}
            onChange={(e) => setBackstory(e.target.value)}
            placeholder="Racontez l'histoire de votre personnage"
            className="py-2 px-4 text-white text-center border border-white h-32 resize-none"
          />
        </div>

        <div className="flex justify-center">
          <PrimaryButton
            onClick={handleSubmit}
            disabled={!characterName || !appearance || !backstory}
            text="Valider"
          />
        </div>
      </Box>
    </main>
  )
}
