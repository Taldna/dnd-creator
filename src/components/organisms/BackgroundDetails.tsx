import type { Background } from "../../types/data/background"
import Box from "../atoms/Box"
import EquipmentList from "../molecules/EquipmentList"

export default function BackgroundDetails({
  backgroundItem,
  onClose,
}: {
  backgroundItem: Background
  onClose: () => void
}) {
  return (
    <Box className="max-w-2xl w-full h-[50%]" backgroundColor="black">
      <div className="h-full overflow-y-auto pr-4">
        <button
          onClick={onClose}
          className="sticky top-0 float-right text-4xl font-bold text-gray-400 hover:text-white transition rotate-45 z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
        >
          +
        </button>

        <h1 className="text-3xl font-bold text-white mb-6">
          {backgroundItem.name}
        </h1>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Valeurs de Caractéristique
            </h3>
            <div className="flex gap-2 flex-wrap">
              {backgroundItem.abilityScore
                .filter(Boolean)
                .map((ability, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {ability?.name}
                  </span>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Don</h3>
            <p className="text-gray-300">{backgroundItem.feat.name}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Compétences
            </h3>
            <div className="flex gap-2 flex-wrap">
              {backgroundItem.proficiencies
                .filter(Boolean)
                .map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Maîtrise d'Outil
            </h3>
            <p className="text-gray-300">{backgroundItem.toolProficiencies}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Équipement
            </h3>
            <EquipmentList equipmentOptions={backgroundItem.equipment} />
          </div>
        </div>
      </div>
    </Box>
  )
}
