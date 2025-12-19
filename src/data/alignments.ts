import type { Alignment } from "../types/data/personalization"

const rawAlignments: Alignment[] = [
  {
    name: "Loyal Bon",
    description:
      "On peut compter sur ces créatures pour faire le bien dans le sens où la société l'entend. Les dragons d'or et les paladins sont souvent d'alignement loyal bon.",
  },
  {
    name: "Neutre Bon",
    description:
      "Ces personnes font du mieux qu'elles peuvent pour aider les autres, en fonction de leurs besoins toutefois. Beaucoup des créatures célestes sont neutre bon.",
  },
  {
    name: "Chaotique Bon",
    description:
      "Ces créatures agissent selon leur conscience, et ont peu d'égard pour ce que les autres attendent. Les dragons de cuivre et les licornes sont souvent d'alignement chaotique bon.",
  },
  {
    name: "Loyal Neutre",
    description:
      "Ces individus agissent conformément à la loi, aux traditions ou suivants des codes personnels. Les modrons et beaucoup de magiciens et de moines sont d'alignement loyal neutre.",
  },
  {
    name: "Neutre",
    description:
      "Est l'alignement de ceux qui préfèrent rester à l'écart des questions morales et ne prennent pas parti, faisant ce qui leur semble le mieux à un moment donné. La plupart des druides et des villageois sont neutres.",
  },
  {
    name: "Chaotique Neutre",
    description:
      "Ces créatures suivent leurs caprices, pensant à leur liberté personnelle avant tout. Beaucoup de roublards et de bardes sont d'alignement chaotique neutre.",
  },
  {
    name: "Loyal Mauvais",
    description:
      "Ces créatures font méthodiquement ce qu'elles veulent, dans les limites d'un code de tradition, de la loyauté ou d'un ordre. Les diables et les dragons bleus sont souvent d'alignement loyal mauvais.",
  },
  {
    name: "Neutre Mauvais",
    description:
      "Est l'alignement de ceux qui font ce qu'ils veulent, sans aucune compassion ni aucun scrupule. Les yugoloths sont généralement d'alignement neutre mauvais.",
  },
  {
    name: "Chaotique Mauvais",
    description:
      "Ces créatures agissent avec une violence arbitraire, stimulées par la cupidité, la haine ou la soif de sang. Les démons et les dragons rouges sont souvent d'alignement chaotique mauvais.",
  },
]

export const ALIGNMENTS: Record<string, Alignment> = {}

rawAlignments.forEach((alignment) => {
  ALIGNMENTS[alignment.name] = alignment
})
