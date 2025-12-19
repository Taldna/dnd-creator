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
import { PDFDocument, StandardFonts } from "pdf-lib"
import { calculateArmorClass, formatEquipmentToString } from "../../types/utility/equipmentUtils"
import { SKILLS } from "../../data/skills"

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

      // Charger une police pour les champs de texte
      const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)

      const set = (name: string, value: string | number | boolean | undefined | null, fontSize?: number) => {
        try {
          if (value !== undefined && value !== null) {
            try {
              // Essayer d'abord comme un TextField
              const field = form.getTextField(name)
              field.setText(String(value))
              // Adapter la taille de police si spécifiée
              if (fontSize) {
                field.setFontSize(fontSize)
              }
              field.updateAppearances(helvetica)
            } catch (textFieldError) {
              // Si ce n'est pas un TextField, essayer comme checkbox
              try {
                const checkboxField = form.getCheckBox(name)
                if (value === true) {
                  checkboxField.check()
                } else {
                  checkboxField.uncheck()
                }
              } catch (checkboxError) {
                console.warn(`Field "${name}" not found in the PDF form. ${textFieldError} ${checkboxError}`)
              }
            }
          }
        } catch (e) {
          console.warn(`Field "${name}" could not be set. ${e}`)
        }
      }

      //champs relatifs à la class
      set("class", dndClass?.name)
      set("subclass", dndClass?.subclasses[0]?.name, 11) // à séléctionner

      // Vérifier si un bouclier équipé est détecté
      const hasEquippedShield = equipment?.some(
        (item) =>
          item.category === "Armures" &&
          "armorClass" in item &&
          item.armorClass.type === "shield" &&
          "isEquipped" in item &&
          item.isEquipped
      ) ?? false

      set("shield", hasEquippedShield)
      set("level", 1)
      set("xp", 0)
      set("ac", calculateArmorClass(abilities, dndClass, equipment))
      set("hd-max", "1" + dndClass?.hitDice)

      const hpMax = parseInt(dndClass?.hitDice?.match(/\d+/)?.[0] ?? "0") + (abilities?.["Constitution"].modifier ?? 0)
      set("hp-max", hpMax)
      set("hp-temp", 0)
      set("hd-spent", 0)
      set("hp-current", hpMax)
      // champs à vérifier
      // weaponProficiencies: string
      // armorTraining: ArmorTraining[]

      // features
      let featureText = ""

      dndClass?.features.map((feature) => {
        if (feature.level === 1 || feature.level === undefined) {
          featureText += "- " + feature.name + ": " + (Array.isArray(feature.description) ? feature.description.join(" ") : feature.description) + "\n\n"
        }
      })

      // Diviser en 2 si dépasse 50 * 17 = 850 caractères
      const maxCharsPerField = 50 * 17
      let features1Text = ""
      let features2Text = ""

      if (featureText.length > maxCharsPerField) {
        let cutIndex = maxCharsPerField
        const lastSpaceIndex = featureText.lastIndexOf(' ', maxCharsPerField)
        if (lastSpaceIndex > maxCharsPerField - 50) {
          cutIndex = lastSpaceIndex
        }

        features1Text = featureText.substring(0, cutIndex).trim()
        features2Text = featureText.substring(cutIndex).trim()
      } else {
        features1Text = featureText
      }

      set("features1", features1Text)
      set("features2", features2Text)

      set("weapons",
        dndClass?.weaponProficiencies && dndClass.weaponProficiencies.length > 0
          ? dndClass.weaponProficiencies.join(", ")
          : "aucune"
      )

      dndClass?.armorTraining.map((armor) => {
        switch (armor) {
          case "Légères":
            set("armor1", true)
            break
          case "Intermédiaires":
            set("armor2", true)
            break
          case "Lourdes":
            set("armor3", true)
            break
          case "Boucliers":
            set("armor4", true)
            break
        }
      })

      //champs relatifs au background
      set("background", background?.name)
      set("feats", background?.feat.name)

      const backgroundTools = background?.toolProficiencies && background.toolProficiencies.length > 0
        ? background.toolProficiencies
        : []
      const classTools = dndClass?.toolProficiencies && dndClass.toolProficiencies.length > 0
        ? dndClass.toolProficiencies
        : []
      const allTools = [...backgroundTools, ...classTools]

      set("tools", allTools.length > 0 ? allTools.join(", ") : "aucune")

      //champs relatifs à l'espèce
      set("species", species?.name)

      //champs relatifs aux caractéristiques
      set("str", abilities?.["Force"].finalValue)
      set("dex", abilities?.["Dextérité"].finalValue)
      set("con", abilities?.["Constitution"].finalValue)
      set("int", abilities?.["Intelligence"].finalValue)
      set("wis", abilities?.["Sagesse"].finalValue)
      set("cha", abilities?.["Charisme"].finalValue)

      set("modstr", (abilities?.["Force"]?.modifier ?? 0) > 0 ? "+" + (abilities?.["Force"]?.modifier ?? 0) : (abilities?.["Force"]?.modifier ?? 0))
      set("moddex", (abilities?.["Dextérité"]?.modifier ?? 0) > 0 ? "+" + (abilities?.["Dextérité"]?.modifier ?? 0) : (abilities?.["Dextérité"]?.modifier ?? 0))
      set("modcon", (abilities?.["Constitution"]?.modifier ?? 0) > 0 ? "+" + (abilities?.["Constitution"]?.modifier ?? 0) : (abilities?.["Constitution"]?.modifier ?? 0))
      set("modint", (abilities?.["Intelligence"]?.modifier ?? 0) > 0 ? "+" + (abilities?.["Intelligence"]?.modifier ?? 0) : (abilities?.["Intelligence"]?.modifier ?? 0))
      set("modwis", (abilities?.["Sagesse"]?.modifier ?? 0) > 0 ? "+" + (abilities?.["Sagesse"]?.modifier ?? 0) : (abilities?.["Sagesse"]?.modifier ?? 0))
      set("modcha", (abilities?.["Charisme"]?.modifier ?? 0) > 0 ? "+" + (abilities?.["Charisme"]?.modifier ?? 0) : (abilities?.["Charisme"]?.modifier ?? 0))

      set("pb", 2)

      // Créer un Map des compétences maîtrisées pour accès rapide
      const masteredSkillsMap = new Map(proficiencies?.map(skill => [skill.name, skill]) ?? [])

      // Remplir toutes les compétences
      let modPer = 0
      Object.values(SKILLS).forEach((skill) => {
        const abilityModifier = abilities?.[skill.ability]?.modifier ?? 0
        const isMastered = masteredSkillsMap.has(skill.name)
        const skillValue = isMastered ? abilityModifier + skill.modifier + 2 : abilityModifier + skill.modifier

        set(skill.skillField, skillValue > 0 ? "+" + skillValue : skillValue)
        if (isMastered) {
          set(skill.masteryField, true)
        }

        // Calculer le modificateur de Perception pour la perception passive
        if (skill.name === "Perception") {
          modPer = skillValue
        }
      })

      const abilityFieldMap: Record<string, number> = {
        "Force": 1,
        "Dextérité": 2,
        "Constitution": 3,
        "Intelligence": 4,
        "Sagesse": 5,
        "Charisme": 6,
      }

      // Créer un Map des saving throws maîtrisés pour accès rapide
      const masteredSavingThrowsMap = new Map(dndClass?.savingThrows.map(st => [st.name, st]) ?? [])

      // Remplir tous les saving throws
      Object.entries(abilityFieldMap).forEach(([abilityName, fieldIndex]) => {
        const abilityModifier = abilities?.[abilityName]?.modifier ?? 0
        const isMastered = masteredSavingThrowsMap.has(abilityName)
        const modifier = isMastered ? abilityModifier + 2 : abilityModifier

        set(`save${fieldIndex}`, modifier > 0 ? "+" + modifier : modifier)
        if (isMastered) {
          set(`s${fieldIndex}`, true)
        }
      })

      set("init", abilities?.["Dextérité"]?.modifier ?? 0)
      set("speed", (species?.speed ?? 0) + "m")
      set("passive", 10 + modPer) // Perception passive = 10 + modificateur de Perception

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

        const weapons = equipment.filter((item): item is typeof equipment[number] & { category: "Armes" } => item.category === "Armes")

        // Compter les armes identiques
        const weaponCounts = new Map<string, { weapon: typeof weapons[number]; count: number }>()
        weapons.forEach(weapon => {
          const key = weapon.name
          if (weaponCounts.has(key)) {
            weaponCounts.get(key)!.count++
          } else {
            weaponCounts.set(key, { weapon, count: 1 })
          }
        })

        // Convertir en array et limiter à 6
        const uniqueWeapons = Array.from(weaponCounts.values()).slice(0, 6)

        uniqueWeapons.forEach((item, index) => {
          const row = index + 1
          const displayName = item.count > 1 ? `${item.weapon.name} (x${item.count})` : item.weapon.name

          // Colonne 1: Nom de l'arme avec quantité
          set(`weapons${row}1`, displayName)

          // Colonne 2: Bonus d'attaque 
          set(`weapons${row}2`, "+0")

          // Colonne 3: Dégats & Type
          set(`weapons${row}3`, item.weapon.damage)

          // Colonne 4: Notes (properties)
          const notes = item.weapon.properties?.join(", ") ?? ""
          set(`weapons${row}4`, notes)
        })

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
      set("size", personalization?.height.toFixed(2) + "m")
      set("charactername", personalization?.characterName, 14)
      set("backstory", personalization?.backstory)
      set("alignment", personalization?.alignment.name)
      set("languages", personalization?.languages.join(", "))

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
