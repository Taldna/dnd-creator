/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react"
import type { Ability } from "../../types/data/ability"
import type { Background } from "../../types/data/background"
import type { Class } from "../../types/data/class"
import type { Equipment } from "../../types/data/equipment"
import type { Personalization } from "../../types/data/personalization"
import type { Skill } from "../../types/data/skill"
import type { Species } from "../../types/data/species"
import D20 from "../atoms/D20"
import PrimaryButton from "../atoms/PrimaryButton"
import { PDFDocument } from "pdf-lib"
import { formatEquipmentToString } from "../../types/utility/equipmentUtils"

type DownloadPDFType = {
  dndClass: Class | null
  background: Background | null
  species: Species | null
  abilities: Record<string, Ability> | null
  equipment: Equipment[] | null
  proficiencies: Skill[] | null
  personalization: Personalization | null
  onReturn?: () => void
}

export default function DownloadPDF({
  dndClass,
  background,
  species,
  abilities,
  equipment,
  proficiencies,
  personalization,
  onReturn,
}: DownloadPDFType) {
  const [downloaded, setDownloaded] = useState(false)
  const hasDownloaded = useRef(false)

  async function fillDndPdf({
    pdfUrl,
    dndClass,
    background,
    species,
    abilities,
    proficiencies,
    equipment,
    personalization,
  }: { pdfUrl: string } & DownloadPDFType) {
    try {
      const bytes = await fetch(pdfUrl).then((r) => r.arrayBuffer())
      const pdfDoc = await PDFDocument.load(bytes)
      const form = pdfDoc.getForm()

      const set = (name: string, value: string | number | undefined | null) => {
        try {
          if (value !== undefined && value !== null) {
            form.getTextField(name).setText(String(value))
          }
        } catch (e) {
          console.warn(`Field "${name}" not found in the PDF form. ${e}`)
        }
      }

      //champs relatifs à la class
      set("class", dndClass?.name)
      set("subclass", dndClass?.subclasses[0]?.name) // à séléctionner
      set("level", 1)
      set("xp", 0)
      set("hd-max", dndClass?.hitDice)
      set("hp-max", 10) // à rajouter sur le type de la class
      set("hp-temp", 0)
      set("hd-spent", 0)
      set("hp-current", 10)
      // champs à vérifier
      // savingThrows: [Ability, Ability]
      // weaponProficiencies: string
      // armorTraining: ArmorTraining[]
      // features: Feature[]

      //champs relatifs au background
      set("background", background?.name)
      set("feats", background?.feat.name)
      //champs à vérifier
      // set("alignment", )
      // set("languages", )

      //champs relatifs à l'espèce
      set("species", species?.name)

      //champs relatifs aux caractéristiques
      set("str", abilities?.["Force"].finalValue)
      set("dex", abilities?.["Dextérité"].finalValue)
      set("con", abilities?.["Constitution"].finalValue)
      set("int", abilities?.["Intelligence"].finalValue)
      set("wis", abilities?.["Sagesse"].finalValue)
      set("cha", abilities?.["Charisme"].finalValue)

      set("modstr", abilities?.["Force"].modifier)
      set("moddex", abilities?.["Dextérité"].modifier)
      set("modcon", abilities?.["Constitution"].modifier)
      set("modint", abilities?.["Intelligence"].modifier)
      set("modwis", abilities?.["Sagesse"].modifier)
      set("modcha", abilities?.["Charisme"].modifier)

      //champs relatifs aux maîtrises
      if (proficiencies) {
        proficiencies.forEach((skill) => {
          const abilityModifier = abilities?.[skill.ability]?.modifier ?? 0
          const skillValue = abilityModifier + skill.modifier     // calculer le modifier selon les choix faits

          set(skill.skillField, skillValue)
          set(skill.masteryField, "✓") // ne marche pas
        })
      }

      //champs relatifs à l'équipement
      if (equipment) {
        const equipmentNames = formatEquipmentToString(equipment)
        set("equipment", equipmentNames)

        const moneyItem = equipment.find((item) => item.category === "Argent")
        if (moneyItem && "amount" in moneyItem) {
          set("cp", moneyItem.amount.pc)
          set("sp", moneyItem.amount.pa)
          set("gp", moneyItem.amount.po)
        } else {
          set("cp", 0)
          set("sp", 0)
          set("gp", 0)
        }
      } else {
        set("cp", 0)
        set("sp", 0)
        set("gp", 0)
      }
      set("ep", 0)
      set("pp", 0)

      //champs relatifs aux sorts

      //champs relatifs à la personnalisation
      set("appearance", personalization?.appearance)
      set("size", personalization?.height + " m")     // ne s'affiche plus ?
      set("charactername", personalization?.characterName)
      set("backstory", personalization?.backstory)

      const out = await pdfDoc.save()
      const blob = new Blob([out as BlobPart], { type: "application/pdf" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "dnd_2024_filled.pdf"
      a.click()
      URL.revokeObjectURL(url)

      console.info("PDF généré et téléchargé avec succès !")
      setDownloaded(true)
    } catch (error) {
      console.error("Erreur lors de la génération du PDF :", error)
    }
  }

  // Télécharger le PDF une seule fois au montage du composant
  useEffect(() => {
    if (hasDownloaded.current) return

    hasDownloaded.current = true
    fillDndPdf({
      pdfUrl: "/dnd-creator/dnd_2024_editable.pdf",
      dndClass,
      background,
      species,
      abilities,
      equipment,
      proficiencies,
      personalization,
    })
  }, [])
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-y-auto overflow-x-hidden relative">
      {!downloaded ? (
        <>
          <D20 autoRoll={true} />
          <p className="mt-8 text-2xl font-bold text-white">Génération du PDF...</p>
        </>
      ) : (
        <>
          <D20 autoRoll={false} rollTo={20} />
          <div className="flex flex-col items-center gap-6 mt-8">
            <p className="text-2xl font-bold text-white">PDF téléchargé avec succès</p>
            {onReturn && (
              <PrimaryButton
                text="Retour au menu"
                onClick={onReturn}
              />
            )}
          </div>
        </>
      )}
    </main>
  )
}
