"use client"

import { useState } from "react"
import { type Alignment, type Language, type Personalization } from "../../types/data/personalization"
import Box from "../atoms/Box"
import Title from "../atoms/Title"
import PrimaryButton from "../atoms/PrimaryButton"
import { ALIGNMENTS } from "../../data/alignments"
import { BACKSTORIES } from "../../data/backstories"
import HoverDescription from "../atoms/HoverDescription"
import type { Specie } from "../../types/data/specie"

const ALL_LANGUAGES: Language[] = [
  "Commun",
  "Elfique",
  "Nain",
  "Orc",
  "Géant",
  "Draconique",
  "Sylvestre",
  "Gobelin",
  "Gnome",
  "Halfelin",
  "Abyssal",
  "Céleste",
  "Commun des profondeurs",
  "Infernal",
  "Primordial",
  "Profond",
]

export default function PersonalizationCompletion({ setPersonalization, specie }: { setPersonalization?: (value: Personalization) => void, specie?: Specie }) {
  const [characterName, setCharacterName] = useState("")
  const [appearance, setAppearance] = useState("")
  const [backstory, setBackstory] = useState("")
  const [alignment, setAlignment] = useState<Alignment | null>(null)
  const [languages, setLanguages] = useState<Language[]>(["Commun"])
  const [height, setHeight] = useState(1.75)
  const [heightInput, setHeightInput] = useState("1.75")
  const [hoveredAlignment, setHoveredAlignment] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleSubmit = () => {
    if (characterName && appearance && backstory && alignment) {
      setPersonalization?.({
        characterName,
        appearance,
        height,
        backstory,
        alignment,
        languages,
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

  return (
    <main className="h-screen w-screen flex flex-col gap-6 items-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-y-auto overflow-x-hidden relative">
      <Title name="Personnalisation du Personnage" />
      <div className="relative flex justify-center w-full h-full px-20 overflow-hidden">
        <div className="relative">
          <Box className="flex flex-col gap-2 h-full">
            <div className="overflow-y-auto overflow-x-hidden h-full">
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
                  min={`${specie?.height.min ?? 0}`}
                  max={`${specie?.height.max ?? 20}`}
                  step="0.01"
                  value={height}
                  onChange={(e) => {
                    const newHeight = Number(e.target.value)
                    setHeight(newHeight)
                    setHeightInput(newHeight.toFixed(2))
                  }}
                  className="w-[50%] accent-primary"
                />
                <div className="flex items-center gap-0">
                  <input
                    type="number"
                    min={`${specie?.height.min ?? 0}`}
                    max={`${specie?.height.max ?? 20}`}
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
                    className="text-white text-xl w-17 bg-transparent hover:bg-gray-800 border border-white focus:outline-none p-1 text-left"
                  />
                  <span className="text-white text-xl pl-2">m - {getHeightCategory(height)}</span>
                </div>
              </div>

              <div className="flex flex-col pb-4 gap-2">
                <label htmlFor="backstory" className="text-2xl font-semibold text-center">Backstory</label>
                <textarea
                  id="backstory"
                  value={backstory}
                  onChange={(e) => setBackstory(e.target.value)}
                  placeholder="Racontez l'histoire de votre personnage"
                  className="py-2 px-4 text-white text-center border border-white h-32 resize-none"
                />
                <div className="flex flex-wrap gap-2 justify-center max-h-64 overflow-y-auto">
                  {Object.values(BACKSTORIES).map((backstory) => (
                    <button
                      key={backstory.name}
                      onClick={() => {
                        setBackstory(backstory.description)
                      }}
                      className="px-3 py-1 text-sm border border-primary text-primary hover:bg-primary hover:text-black transition-all rounded"
                    >
                      {backstory.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col pb-4 gap-2">
                <label className="text-2xl font-semibold text-center">Alignement</label>
                <div className="flex flex-wrap gap-2 justify-center">
                  {Object.values(ALIGNMENTS).map((align) => (
                    <button
                      key={align.name}
                      onClick={() => setAlignment(align)}
                      onMouseEnter={() => setHoveredAlignment(align.name)}
                      onMouseLeave={() => setHoveredAlignment(null)}
                      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
                      className={`px-4 py-2 rounded border-2 transition-all ${alignment?.name === align.name
                        ? "border-primary bg-primary text-black"
                        : "border-gray-600 hover:border-primary"
                        }`}
                    >
                      {align.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col pb-4 gap-2">
                <label className="text-2xl font-semibold text-center">Langues</label>
                <div className="grid grid-cols-2 gap-2 items-center mx-auto w-3/5 pl-[15%]">
                  {ALL_LANGUAGES.map((lang) => (
                    <label key={lang} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={languages.includes(lang)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setLanguages([...languages, lang])
                          } else {
                            // Empêcher de décocher "Commun"
                            if (lang !== "Commun") {
                              setLanguages(languages.filter((l) => l !== lang))
                            }
                          }
                        }}
                        disabled={lang === "Commun"}
                        className="w-4 h-4 accent-primary disabled:opacity-50"
                      />
                      <span className={lang === "Commun" ? "text-gray-400" : "text-white"}>{lang}</span>
                    </label>
                  ))}
                </div>
                <p className="text-sm text-gray-400 text-center">
                  {languages.length} langue{languages.length > 1 ? "s" : ""} sélectionnée{languages.length > 1 ? "s" : ""}
                </p>
              </div>

              <div className="flex justify-center">
                <PrimaryButton
                  onClick={handleSubmit}
                  disabled={!characterName || !appearance || !backstory || !alignment}
                  text="Valider"
                />
              </div>
            </div>
          </Box>
        </div>
      </div>

      {hoveredAlignment && (
        <HoverDescription
          text={Object.values(ALIGNMENTS).find((a) => a.name === hoveredAlignment)?.description || ""}
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
        />
      )}
    </main>
  )
}
