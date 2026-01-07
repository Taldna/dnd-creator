import type { Background } from "../types/data/background"
import { ABILITIES } from "./abilities"
import { FEATS } from "./feats"
import { SKILLS } from "./skills"
import { WEAPONS } from "./weapons"
import { ADVENTURING_GEAR } from "./adventuringGears"
import { TOOLS } from "./tools"
import { createGold } from "./money"

const rawBackgrounds: Background[] = [
  {
    name: "Acolyte",
    abilityScore: [
      ABILITIES.Intelligence,
      ABILITIES.Sagesse,
      ABILITIES.Charisme,
    ],
    feat: FEATS["Initié à la magie"],
    proficiencies: [SKILLS.Intuition, SKILLS.Religion],
    toolProficiencies: [TOOLS["Matériel de calligraphe"].name],
    equipment: [
      [
        TOOLS["Matériel de calligraphe"],
        ADVENTURING_GEAR.Livre,
        ADVENTURING_GEAR["Symbole sacré - Amulette"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR.Robes,
        createGold(8),
      ],
      [createGold(50)],
    ],
    description:
      "Vous étiez au service d'un temple, en ville ou retiré dans un bosquet sacré. Vous y avez accompli des rites en l'honneur d'un dieu ou d'un panthéon. Vous avez servi un prêtre et étudié la religion. Grâce à l'instruction de ce prêtre et à votre propre dévotion, vous avez également appris à canaliser un peu de puissance divine au service de votre lieu de culte et de ceux qui y priaient.",
  },
  {
    name: "Artisan",
    abilityScore: [
      ABILITIES.Force,
      ABILITIES.Dextérité,
      ABILITIES.Intelligence,
    ],
    description:
      "Depuis l'enfance, vous avez travaillé dans l'atelier d'un artisan maître. Vous avez d'abord effectué les tâches les plus simples, puis progressivement appris les secrets du métier et créé vos propres ouvrages. En gérant les clients exigeants et en réalisant des travaux minutieux pendant des années, vous avez développé un oeil aiguisé pour les détails qui distingue les maîtres artisans des apprentis.",
    feat: FEATS.Façonneur,
    proficiencies: [SKILLS.Investigation, SKILLS.Persuasion],
    toolProficiencies: ["Choisir un outil d'artisan"],
    equipment: [
      [
        { name: "Outillage artisanal au choix", category: "Autre" },
        ADVENTURING_GEAR.Sacoche,
        ADVENTURING_GEAR.Sacoche,
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(32),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Artiste",
    abilityScore: [ABILITIES.Force, ABILITIES.Dextérité, ABILITIES.Charisme],
    description:
      "Vous avez passé votre jeunesse à suivre les foires et les carnavals itinérants, accomplissant diverses tâches pour les musiciens et acrobates en échange de leçons. Vous avez appris à marcher sur un fil, à jouer du luth dans un style distinctif, ou à réciter de la poésie avec une diction impeccable. Jusqu'à ce jour, vous vous épanouissez sous les applaudissements et rêvez de monter sur scène.",
    feat: FEATS.Musicien,
    proficiencies: [SKILLS.Acrobaties, SKILLS["Art dramatique"]],
    toolProficiencies: ["Choisir un instrument de musique"],
    equipment: [
      [
        { name: "Instrument de musique au choix", category: "Autre" },
        ADVENTURING_GEAR["Vêtements, costume"],
        ADVENTURING_GEAR["Vêtements, costume"],
        ADVENTURING_GEAR["Miroir en acier"],
        ADVENTURING_GEAR["Parfum (fiole)"],
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(11),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Charlatan",
    abilityScore: [
      ABILITIES.Dextérité,
      ABILITIES.Constitution,
      ABILITIES.Charisme,
    ],
    description:
      "Depuis votre adolescence, vous fréquentez les tavernes de votre région, et vous y êtes rapidement devenu un habitué reconnu. En voyageant de taverme en taverne, vous avez appris à exploiter les malheureux en quête d'un mensonge réconfortant. Vous êtes devenu expert dans la vente de fausses potions, de documents contrefaits et d'autres arnaques lucratves.",
    feat: FEATS.Doué,
    proficiencies: [SKILLS.Tromperie, SKILLS.Discrétion],
    toolProficiencies: [TOOLS["Kit de contrefaçon"].name],
    equipment: [
      [
        TOOLS["Kit de contrefaçon"],
        TOOLS["Kit de déguisement"],
        ADVENTURING_GEAR["Vêtements, fins"],
        createGold(15),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Criminel",
    abilityScore: [
      ABILITIES.Dextérité,
      ABILITIES.Constitution,
      ABILITIES.Intelligence,
    ],
    description:
      "Vous gagniez péniblement votre vie dans de sombres ruelles, coupant des bourses ou cambriolant des boutiques. Peut-être faisiez-vous partie d'une petite bande de malfrats partageant les mêmes idées et se protégeant les uns les autres. Ou peut-être étiez-vous un loup solitaire, luttant seul contre une guilde des voleurs locale ou d'autres criminels encore plus redoutables.",
    feat: FEATS.Vigilant,
    proficiencies: [SKILLS.Discrétion, SKILLS.Discrétion],
    toolProficiencies: [TOOLS["Outils de voleur"].name],
    equipment: [
      [
        WEAPONS.Dague,
        WEAPONS.Dague,
        TOOLS["Outils de voleur"],
        ADVENTURING_GEAR["Pied-de-biche"],
        ADVENTURING_GEAR.Sacoche,
        ADVENTURING_GEAR.Sacoche,
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(16),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Ermite",
    abilityScore: [
      ABILITIES.Constitution,
      ABILITIES.Sagesse,
      ABILITIES.Charisme,
    ],
    description:
      "Vous avez passé vos premières années en réclusion dans une cabane ou un monastère, loin de toute civilisation. Pour seule compagnie, vous aviez les créatures de la forêt et les rares visiteurs qui venaient apporter des nouvelles du monde extérieur. Cette solitude vous a permis de passer de longues heures à contempler les mystères de la création et à méditer sur les grands secrets de l'univers.",
    feat: FEATS.Guérisseur,
    proficiencies: [SKILLS.Médecine, SKILLS.Religion],
    toolProficiencies: [TOOLS["Kit d'herboriste"].name],
    equipment: [
      [
        TOOLS["Kit d'herboriste"],
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(16),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Fermier",
    abilityScore: [ABILITIES.Force, ABILITIES.Constitution, ABILITIES.Sagesse],
    description:
      "Vous avez grandi au plus proche de la terre. Des années à soigner les animaux et cultiver la terre vous ont apporté la patience et une bonne santé. Vous avez un profond respect pour les richesses de la nature, accompagné d'une saine crainte de sa fureur.",
    feat: FEATS.Robuste,
    proficiencies: [SKILLS["Dressage d'animaux"], SKILLS.Nature],
    toolProficiencies: ["Outils de charpentier"],
    equipment: [
      [
        { name: "Outillage artisanal au choix", category: "Autre" },
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(20),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Garde",
    abilityScore: [ABILITIES.Force, ABILITIES.Intelligence, ABILITIES.Sagesse],
    description:
      "Vos pieds vous font mal quand vous vous souvenez des innombrables heures passées à votre poste dans la tour. On vous a entraîné à garder un œil tourné vers l'extérieur des murs, guettant les maraudeurs sortant de la forêt voisine, et l'autre vers l'intérieur, cherchant les pickpockets et les fauteurs de troubles.",
    feat: FEATS.Vigilant,
    proficiencies: [SKILLS.Athlétisme, SKILLS.Perception],
    toolProficiencies: [],
    equipment: [
      [WEAPONS.Lance, ADVENTURING_GEAR["Vêtements, voyage"], createGold(18)],
      [createGold(50)],
    ],
  },
  {
    name: "Guide",
    abilityScore: [
      ABILITIES.Dextérité,
      ABILITIES.Constitution,
      ABILITIES.Sagesse,
    ],
    description:
      "Vous avez grandi en plein air, loin des terres civilisées. Votre foyer était partout où vous décidiez de dérouler votre couverture. Il existe des merveilles dans la nature sauvage : des créatures étranges, des forêts et des ruisseaux vierges, les ruines envahies de grands halls autrefois foulés par les géants. Vous avez appris à vous débrouiller seul en explorant ces terres. De temps en temps, vous guidiez des prêtres de la nature bienveillants qui vous enseignaient les principes de la canalisation de la magie sauvage.",
    feat: FEATS["Initié à la magie"],
    proficiencies: [SKILLS.Discrétion, SKILLS.Survie],
    toolProficiencies: ["Outils de cartographe"],
    equipment: [
      [
        TOOLS["Outils de cartographe"],
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(20),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Marchand",
    abilityScore: [
      ABILITIES.Constitution,
      ABILITIES.Intelligence,
      ABILITIES.Charisme,
    ],
    description:
      "Vous avez été apprenti auprès d'un marchand, d'un maître de caravane ou d'un commerçant, apprenant les fondamentaux du commerce. Vous avez voyagé largement, gagnant votre vie en achetant et vendant les matières premières dont les artisans ont besoin pour exercer leur métier, ou les œuvres finies de ces créateurs. Vous avez peut-être transporté des marchandises d'un endroit à un autre par bateau, charriot ou caravane, ou les avez achetées aux marchands ambulants pour les revendre dans votre propre boutique.",
    feat: FEATS.Chanceux,
    proficiencies: [SKILLS["Dressage d'animaux"], SKILLS.Persuasion],
    toolProficiencies: [TOOLS["Outils de navigateur"].name],
    equipment: [
      [
        TOOLS["Outils de navigateur"],
        ADVENTURING_GEAR.Sacoche,
        ADVENTURING_GEAR.Sacoche,
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(22),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Marin",
    abilityScore: [ABILITIES.Force, ABILITIES.Dextérité, ABILITIES.Sagesse],
    description:
      "Vous avez vécu comme marin, le vent dans le dos et les ponts oscillants sous vos pieds. Vous avez fréquenté les tavernes de plus de ports que vous ne pouvez vous en souvenir, affronté de terribles tempêtes et échangé des histoires avec des créatures vivant sous les vagues. La vie en mer coule dans vos veines.",
    feat: FEATS["Bagarreur de tavernes"],
    proficiencies: [SKILLS.Acrobaties, SKILLS.Perception],
    toolProficiencies: [TOOLS["Outils de navigateur"].name],
    equipment: [
      [
        WEAPONS.Dague,
        TOOLS["Outils de navigateur"],
        ADVENTURING_GEAR["Corde en chanvre (15 m)"],
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(20),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Noble",
    abilityScore: [ABILITIES.Force, ABILITIES.Intelligence, ABILITIES.Charisme],
    description:
      "Vous avez grandi dans un château, entouré de richesses, de pouvoir et de privilèges. Votre famille de petits aristocrates a veillé à ce que vous receviez une éducation de première classe, dont vous avez apprécié certains aspects et d'autres que vous avez ressentis avec amertume. Votre temps passé au château, en particulier les nombreuses heures consacrées à observer votre famille à la cour, vous a également enseigné beaucoup sur la nature du pouvoir et du leadership.",
    feat: FEATS.Doué,
    proficiencies: [SKILLS.Histoire, SKILLS.Persuasion],
    toolProficiencies: ["Choisir un jeu de société"],
    equipment: [
      [
        { name: "Jeu au choix", category: "Autre" },
        ADVENTURING_GEAR["Vêtements, fins"],
        ADVENTURING_GEAR["Parfum (fiole)"],
        createGold(29),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Sage",
    abilityScore: [
      ABILITIES.Constitution,
      ABILITIES.Intelligence,
      ABILITIES.Sagesse,
    ],
    description:
      "Vous avez passé des années à voyager entre manoirs et monastères, effectuant divers petits travaux et services en échange d'un accès à leurs bibliothèques. Vous avez ainsi passé de longues soirées à étudier des livres et des parchemins, à engranger des connaissances sur le multivers et à acquérir des rudiments de magie. Votre esprit aspire maintenant à plus.",
    feat: FEATS["Initié à la magie"],
    proficiencies: [SKILLS.Arcanes, SKILLS.Histoire],
    toolProficiencies: [TOOLS["Matériel de calligraphe"].name],
    equipment: [
      [
        WEAPONS.Bâton,
        TOOLS["Matériel de calligraphe"],
        ADVENTURING_GEAR.Livre,
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR.Robes,
        createGold(8),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Scribe",
    abilityScore: [
      ABILITIES.Dextérité,
      ABILITIES.Intelligence,
      ABILITIES.Sagesse,
    ],
    description:
      "Vous avez passé vos années formatives dans un scriptorium, un monastère voué à la préservation des connaissances, ou une agence gouvernementale, où vous avez appris à écrire d'une main claire et à produire des textes finement exécutés. Vous avez peut-être transcrit des documents gouvernementaux ou recopié des tomes de littérature. Vous possédez certaines compétences en poésie, en narration ou en recherche savante. Surtout, vous avez une attention minutieuse aux détails, ce qui vous aide à éviter d'introduire des erreurs dans les documents que vous copiez et créez.",
    feat: FEATS.Doué,
    proficiencies: [SKILLS.Investigation, SKILLS.Perception],
    toolProficiencies: ["Choisir un jeu de société"],
    equipment: [
      [
        TOOLS["Matériel de calligraphe"],
        ADVENTURING_GEAR["Vêtements, fins"],
        ADVENTURING_GEAR.Lampe,
        ADVENTURING_GEAR["Huile (flasque)"],
        ADVENTURING_GEAR["Huile (flasque)"],
        ADVENTURING_GEAR["Huile (flasque)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        ADVENTURING_GEAR["Parchemin (une feuille)"],
        createGold(23),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Soldat",
    abilityScore: [
      ABILITIES.Force,
      ABILITIES.Dextérité,
      ABILITIES.Constitution,
    ],
    description:
      "Vous vous êtes entraîné à la guerre dès l'âge adulte et n'avez que peu de précieux souvenirs de votre vie avant de prendre les armes. Le combat est dans votre sang. Parfois, vous vous surprenez à exécuter par réflexe vos premiers exercices de combat. Au final, vous avez mis cet entraînement en pratique sur le champ de bataille, en faisant la guerre pour protéger le royaume.",
    feat: FEATS["Sauvagerie martiale"],
    proficiencies: [SKILLS.Athlétisme, SKILLS.Intimidation],
    toolProficiencies: ["Choisir un jeu de société"],
    equipment: [
      [
        WEAPONS.Lance,
        WEAPONS["Arc court"],
        ADVENTURING_GEAR["Munitions - Flèches (20)"],
        { name: "Jeu au choix", category: "Autre" },
        ADVENTURING_GEAR["Trousse de soins"],
        ADVENTURING_GEAR.Carquois,
        ADVENTURING_GEAR["Vêtements, voyage"],
        createGold(14),
      ],
      [createGold(50)],
    ],
  },
  {
    name: "Voyageur",
    abilityScore: [ABILITIES.Dextérité, ABILITIES.Sagesse, ABILITIES.Charisme],
    description:
      "Vous avez grandi dans les rues, entouré de malheureux comme vous, certains devenant vos amis et d'autres vos rivaux. Vous dormiez où vous le pouviez et faisiez des petits boulots pour vous nourrir. Par moments, quand la faim devenait insupportable, vous aviez recours au vol. Pourtant, vous n'avez jamais perdu votre fierté et n'avez jamais abandonné l'espoir. Le destin n'en a pas fini avec vous.",
    feat: FEATS.Chanceux,
    proficiencies: [SKILLS.Perspicacité, SKILLS.Discrétion],
    toolProficiencies: [TOOLS["Outils de voleur"].name],
    equipment: [
      [
        WEAPONS.Dague,
        WEAPONS.Dague,
        TOOLS["Outils de voleur"],
        { name: "Jeu au choix", category: "Autre" },
        ADVENTURING_GEAR["Sac à dos"],
        createGold(16),
      ],
      [createGold(50)],
    ],
  },
]

const images = import.meta.glob("../assets/backgrounds/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>
const imagesMap: Record<string, string> = {}
const regex = /\/((?:\p{L}|\s|-|')+)\.jpg$/u

for (const path in images) {
  const match = path.match(regex)
  if (match) imagesMap[match[1]] = images[path]
}

export const BACKGROUNDS: Background[] = rawBackgrounds.map((bg) => ({
  ...bg,
  image: imagesMap[bg.name],
}))
