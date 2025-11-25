import type { Background } from "../../types/data/background"
import Box from "./Box"

export default function BackgroundDetails({
  backgroundItem,
  onClose,
}: {
  backgroundItem: Background
  onClose: () => void
}) {
  return (
    <Box className="max-w-2xl w-full max-h-[80vh] bg-black overflow-auto relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-4xl font-bold text-gray-400 hover:text-white transition rotate-45"
      >
        +
      </button>

      <h1 className="text-3xl font-bold text-white mb-6">
        {backgroundItem.name}
      </h1>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-red-400 mb-2">
            Scores de Caractéristique
          </h3>
          <div className="flex gap-2 flex-wrap">
            {backgroundItem.abilityScore
              .filter(Boolean)
              .map((ability, index) => (
                <span
                  key={index}
                  className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {ability}
                </span>
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-red-400 mb-2">Don</h3>
          <p className="text-gray-300">{backgroundItem.feat.name}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-red-400 mb-2">
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
                  {skill}
                </span>
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-red-400 mb-2">
            Maîtrise d'Outil
          </h3>
          <p className="text-gray-300">{backgroundItem.toolProficiency}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-red-400 mb-2">
            Équipement
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {backgroundItem.equipment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Box>
  )
}
