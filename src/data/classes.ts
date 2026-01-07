import type { Class } from "../types/data/class"
import { ABILITIES } from "./abilities"
import { SKILLS } from "./skills"
import { WEAPONS } from "./weapons"
import { ARMORS } from "./armors"
import { ADVENTURING_GEAR } from "./adventuringGears"
import { TOOLS } from "./tools"
import { createGold } from "./money"

/**
 * Raw data. This is what you want to modify to add/correct/delete a class
 */
const rawClasses: Class[] = [
  {
    name: "Barbare",
    short_desc: "Laissez-vous porter par la rage pour déferler dans la mêlée.",
    description: [
      "Les Barbares sont de puissants combattants animés par les forces primitives du multivers, qu'ils manifestent sous la forme de Rage. Cette Rage ne se limite pas à la colère ni une simple émotion, mais incarne la férocité du prédateur, la fureur de la tempête et le tumulte des mers.",
      "Certains Barbares personnifient leur Rage par un esprit féroce ou un ancêtre vénéré. D'autres y voient un lien avec les tourments du monde, comme l'enchevêtrement confus de la magie sauvage ou l'expression de leur identité profonde. Pour chacun d'entre eux, cette Rage alimente non seulement leurs talents martiaux, mais aussi leurs réflexes extraordinaires et leurs sens aiguisés.",
      "Les Barbares sont souvent les protecteurs et meneurs de leur communauté. Ils foncent tête baissée vers les menaces pour épargner cette tâche à celles et ceux qu'ils protègent. Cette témérité les destine à une vie d'aventure.",
    ],
    primaryAbility: [ABILITIES.Force],
    hitDice: "d12",
    savingThrows: [ABILITIES.Force, ABILITIES.Constitution],
    skillProficiencies: [
      SKILLS.Athlétisme,
      SKILLS.Dressage,
      SKILLS.Intimidation,
      SKILLS.Nature,
      SKILLS.Perception,
      SKILLS.Survie,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: ["Armes simples", "Armes de guerre"],
    armorTraining: ["Légères", "Intermédiaires", "Boucliers"],
    toolProficiencies: [],
    equipment: [
      [
        WEAPONS["Hache à deux mains"],
        WEAPONS.Hachette,
        WEAPONS.Hachette,
        WEAPONS.Hachette,
        WEAPONS.Hachette,
        ADVENTURING_GEAR["Sac d'explorateur"],
        createGold(15),
      ],
      [createGold(75)],
    ],
    features: [
      {
        level: 1,
        name: "Rage",
        description: [
          "Activable par une action Bonus, la Rage vous confère une puissance et une résilience extraordinaires. Vous gagnez une Résistance aux dégâts contondants, perforants et tranchants, ainsi qu'un bonus aux dégâts en attaque (Force).",
          "Avantage en Force pour les jets et sauvegardes. Vous ne pouvez pas maintenir votre Concentration ni lancer de sorts. La Rage dure jusqu'à la fin de votre prochain tour et peut être prolongée en effectuant une attaque, forçant une sauvegarde ou renouvelant l'action Bonus. Nombre d'utilisations par Repos court, toutes récupérées au Repos long.",
        ],
      },
      {
        level: 1,
        name: "Botte d'arme",
        description: [
          "Vous maîtrisez l'utilisation de deux types d'armes courantes ou de guerre de votre choix (ex: hache à deux mains, hachette). Au niveau supérieur, cette capacité augmente.",
          "Lors d'un Repos long, vous pouvez vous entraîner et modifier l'une de vos armes choisies pour une autre.",
        ],
      },
      {
        level: 1,
        name: "Défense sans armure",
        description: [
          "Tant que vous ne portez pas d'armure, votre classe d'armure de base est égale à 10 plus vos modificateurs de Dextérité et de Constitution. Vous pouvez utiliser un bouclier et bénéficier de cet avantage.",
        ],
      },
    ],
    subclasses: [
      { name: "Voie de l'Arbre-Monde" },
      { name: "Voie du Berserker" },
      { name: "Voie du Coeur Sauvage" },
      { name: "Voie du Zélateur" },
    ],
  },
  {
    name: "Barde",
    short_desc:
      "Interprétez des sorts qui inspirent et soignent vos alliés, ou envoûtent vos adversaires.",
    description: [
      "Les bardes sont des maîtres de la magie invoquée par la musique, la danse et la poésie, experts dans l'art d'inspirer les autres, apaiser les blessures, décourager les ennemis et créer des illusions. Ils croient que le multivers a été créé par la parole et que la magie bardique exploite les vestiges du Verbe de la Création.",
      "Fascinés par presque tout, les bardes maîtrisent de nombreux domaines, notamment la musique, la magie et la plaisanterie. Leur soif inextinguible de connaissances les pousse à voyager et à recueillir des histoires de tous les coins du monde.",
      "La vie d'un barde se résume à raconter des histoires et à inspirer par l'art. Bien que semblables aux artistes ordinaires qui vivent de la gratitude du public, les bardes se distinguent par la profondeur de leurs connaissances et leur maîtrise authentique de la magie.",
    ],
    primaryAbility: [ABILITIES.Charisme],
    hitDice: "d8",
    savingThrows: [ABILITIES.Dextérité, ABILITIES.Charisme],
    skillProficiencies: Object.values(SKILLS),
    skillProficienciesNumber: 3,
    weaponProficiencies: [
      "Armes simples",
      "Arbalète de poing",
      "Épée courte",
      "Rapière",
      "Épée longue",
    ],
    armorTraining: ["Légères"],
    toolProficiencies: ["3 instruments de musique"],
    equipment: [
      [
        ARMORS.Cuir,
        WEAPONS.Dague,
        WEAPONS.Dague,
        { name: "Instrument de musique au choix", category: "Autre" },
        ADVENTURING_GEAR["Sac d'artiste"],
        createGold(19),
      ],
      [createGold(90)],
    ],
    features: [
      {
        level: 1,
        name: "Inspiration bardique",
        description: [
          "Par une action Bonus, inspirez une créature à portée (18m) que vous voyez ou entendez. Elle gagne un dé d'Inspiration (d6). Une fois dans l'heure, elle peut lancer ce dé et ajouter le résultat à un jet de d20 échoué pour potentiellement le transformer en succès.",
          "Utilisations égales à votre modificateur de Charisme (minimum 1). Le dé augmente avec votre niveau: d8 au niveau 5, d10 au niveau 10, d12 au niveau 15. Toutes les utilisations se récupèrent au Repos long.",
        ],
      },
      {
        level: 1,
        name: "Sorts",
        description: [
          "Vous connaissez 2 sorts mineurs de magicien (modifiables en montant de niveau). Le Charisme est votre caractéristique d'incantation, les instruments de musique servent de focaliseur.",
          "Vous préparez 4 sorts de niveau 1+ de votre choix et avez des emplacements de sort selon votre niveau. Récupérez tous les emplacements au Repos long. Chaque montée de niveau, ajoutez des sorts à votre liste préparée jusqu'à atteindre le nombre indiqué dans la table.",
        ],
      },
    ],
    subclasses: [],
  },
  {
    name: "Clerc",
    short_desc:
      "Invoquez la magie divine pour soigner, galvaniser ou châtier autrui.",
    description: [
      "Les clercs puisent leur pouvoir dans les royaumes des dieux et l'exploitent pour accomplir des miracles. Bénis par une divinité, un panthéon ou autre entité immortelle, ils canalisent la magie divine des plans Extérieurs pour soutenir leur peuple et combattre ses ennemis.",
      "Généralement attachés aux temples dédiés à leur divinité, les clercs apprennent les prières et les rites qui les aident à puiser dans le pouvoir divin. Bien que tous les membres d'un temple ne soient pas des clercs, ceux qui le sont possèdent une connexion authentique et vérifiable au divin.",
      "Rares sont les mortels qui peuvent vraiment maîtriser le pouvoir des dieux comme le fait un clerc. Ces champions du divin canalisent leur foi en actions concrètes, guérissant les blessures et châtiant les ennemis au nom de ce qu'ils servent.",
    ],
    primaryAbility: [ABILITIES.Sagesse],
    hitDice: "d8",
    savingThrows: [ABILITIES.Charisme, ABILITIES.Sagesse],
    skillProficiencies: [
      SKILLS.Histoire,
      SKILLS.Intuition,
      SKILLS.Médecine,
      SKILLS.Persuasion,
      SKILLS.Religion,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: ["Armes simples"],
    armorTraining: ["Légères", "Intermédiaires", "Boucliers"],
    toolProficiencies: [],
    equipment: [
      [
        ARMORS["Chemise de mailles"],
        ARMORS.Bouclier,
        WEAPONS["Masse d'armes"],
        { name: "Symbole sacré au choix", category: "Autre" },
        ADVENTURING_GEAR["Sac d'ecclésiastique"],
        createGold(7),
      ],
      [createGold(110)],
    ],
    features: [
      {
        level: 1,
        name: "Sorts",
        description: [
          "Vous connaissez 3 sorts mineurs de clerc (modifiables en montant de niveau). La Sagesse est votre caractéristique d'incantation, les symboles sacrés servent de focaliseur.",
          "Vous préparez 4 sorts de niveau 1+ de votre choix et avez des emplacements de sort selon votre niveau. Récupérez tous les emplacements au Repos long. Chaque Repos long, modifiez votre liste en remplaçant certains sorts par d'autres.",
        ],
      },
      {
        level: 1,
        name: "Ordre divin",
        description: [
          "Protecteur: Maîtrise des armes de guerre et formation aux armures lourdes. Thaumaturge: Connaissance d'un sort mineur supplémentaire, et bonus à vos jets d'Intelligence (Arcanes ou Religion) égal à votre modificateur de Sagesse (minimum +1).",
        ],
      },
    ],
    subclasses: [],
  },
  {
    name: "Druide",
    short_desc:
      "Canalisez la magie sauvage pour soigner, changer de forme ou contrôler les éléments.",
    description: [
      "Les druides appartiennent à des ordres ancestraux qui invoquent les forces de la nature. Exploitant la magie des animaux, des plantes et des quatre éléments, ils soignent, se transforment en animaux et contrôlent la destruction élémentaire.",
      "Vénérant la nature avant tout, les druides tirent leur magie directement de la nature ou d'une divinité de la nature. Ils s'unissent généralement à d'autres druides pour accomplir les rites sacrés marquant les saisons et les cycles naturels fondamentaux.",
      "Les druides se préoccupent de l'équilibre écologique précaire qui préserve la vie végétale et animale, et de l'harmonie entre les humains et la nature. Ils protègent les sites sacrés et les régions préservées, mais n'hésitent pas à devenir des aventuriers combattants face aux menaces qui pèsent sur le monde naturel.",
    ],
    primaryAbility: [ABILITIES.Sagesse],
    hitDice: "d8",
    savingThrows: [ABILITIES.Intelligence, ABILITIES.Sagesse],
    skillProficiencies: [
      SKILLS.Dressage,
      SKILLS.Arcanes,
      SKILLS.Intuition,
      SKILLS.Médecine,
      SKILLS.Nature,
      SKILLS.Perception,
      SKILLS.Religion,
      SKILLS.Survie,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: [
      "Gourdin",
      "Dague",
      "Javelot",
      "Masse",
      "Bâton",
      "Cimeterre",
      "Serpe",
      "Fronde",
    ],
    armorTraining: ["Légères", "Boucliers"],
    toolProficiencies: ["Kit d'herboriste"],
    equipment: [
      [
        ARMORS.Cuir,
        ARMORS.Bouclier,
        WEAPONS.Serpe,
        ADVENTURING_GEAR["Focaliseur druidique - Bâton"],
        ADVENTURING_GEAR["Sac d'explorateur"],
        TOOLS["Kit d'herboriste"],
        createGold(9),
      ],
      [createGold(50)],
    ],
    features: [
      {
        level: 1,
        name: "Sorts",
        description: [
          "Vous connaissez 2 sorts mineurs de druide (modifiables en montant de niveau). La Sagesse est votre caractéristique d'incantation, les focaliseurs druidiques servent de focaliseur.",
          "Vous préparez 4 sorts de niveau 1+ de votre choix et avez des emplacements de sort selon votre niveau. Récupérez tous les emplacements au Repos long. Chaque Repos long, modifiez votre liste en remplaçant certains sorts par d'autres.",
        ],
      },
      {
        level: 1,
        name: "Druidique",
        description: [
          "Vous connaissez le druidique, la langue secrète des druides. Le sort communication avec les animaux est toujours préparé pour vous.",
          "Vous pouvez laisser des messages cachés en druidique que seuls ceux qui connaissent cette langue détectent automatiquement. D'autres détectent la présence avec un jet d'Intelligence (Investigation) DD 15, mais ne peuvent le déchiffrer sans magie.",
        ],
      },
      {
        level: 1,
        name: "Ordre primitif",
        description: [
          "Mage: Connaissance d'un sort mineur supplémentaire, et bonus à vos jets d'Intelligence (Arcanes ou Nature) égal à votre modificateur de Sagesse (minimum +1). Gardien: Maîtrise des armes de guerre et formation aux armures intermédiaires.",
        ],
      },
    ],
    subclasses: [],
  },
  {
    name: "Ensorceleur",
    short_desc:
      "Exploitez votre magie intrinsèque en la façonnant à votre guise.",
    description: [
      "Les ensorceleurs exercent une magie innée, gravée dans leur être. Cette magie brute est souvent l'héritage d'une bénédiction divine, d'une exposition à la magie d'autres plans, ou d'étranges événements marquant leur histoire personnelle ou familiale. Le résultat laisse une marque indélébile, une magie bouillonnante qui peut se transmettre de génération en génération.",
      "Contrairement aux autres lanceurs de sorts, les ensorceleurs n'apprennent pas la magie; leur pouvoir brut est inné. L'art essentiel consiste à maîtriser et canaliser cette magie innée, découvrant de nouvelles et étonnantes façons de libérer ce pouvoir. À mesure qu'ils progressent, les ensorceleurs se lient davantage à leur origine, développant des capacités distinctes qui reflètent sa source.",
      "Les ensorceleurs sont rares, le pouvoir magique apparaissant souvent de façon spontanée sans ligne familiale établie. Ceux qui possèdent ce don découvrent vite qu'il ne reste pas silencieux longtemps; la magie d'un ensorceleur ne demande qu'à être exercée et libérée dans le monde.",
    ],
    primaryAbility: [ABILITIES.Charisme],
    hitDice: "d6",
    savingThrows: [ABILITIES.Charisme, ABILITIES.Constitution],
    skillProficiencies: [
      SKILLS.Arcanes,
      SKILLS.Tromperie,
      SKILLS.Intuition,
      SKILLS.Intimidation,
      SKILLS.Persuasion,
      SKILLS.Religion,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: ["Dague", "Fronde", "Bâton", "Arbalète légère"],
    armorTraining: [],
    toolProficiencies: [],
    equipment: [
      [
        WEAPONS.Lance,
        WEAPONS.Dague,
        WEAPONS.Dague,
        ADVENTURING_GEAR["Focaliseur arcanique - Boule de cristal"],
        ADVENTURING_GEAR["Sac d'exploration souterraine"],
        createGold(28),
      ],
      [createGold(50)],
    ],
    features: [
      {
        level: 1,
        name: "Sorts",
        description: [
          "Vous connaissez 4 sorts mineurs d'ensorceleur (modifiables en montant de niveau). Le Charisme est votre caractéristique d'incantation, les focaliseurs arcanique servent de focaliseur.",
          "Vous préparez 2 sorts de niveau 1+ de votre choix et avez des emplacements de sort selon votre niveau. Récupérez tous les emplacements au Repos long. Chaque montée de niveau, modifiez votre liste en remplaçant un sort par un autre.",
        ],
      },
      {
        level: 1,
        name: "Sorcellerie innée",
        description: [
          "Par une action Bonus, libérez votre magie innée pendant 1 minute. Pendant ce temps, le DD de sauvegarde de vos sorts augmente de 1, et vous avez Avantage aux jets d'attaque des sorts d'ensorceleur que vous lancez.",
          "Utilisations: 2 par Repos long.",
        ],
      },
    ],
    subclasses: [],
  },
  {
    name: "Guerrier",
    short_desc: "Maîtrisez toutes les armes et armures.",
    description: [
      "Les guerriers dominent sur de nombreux champs de bataille, qu'ils soient chevaliers en quête, champions royaux, soldats d'élite ou mercenaires aguerris. Ils partagent tous une maîtrise inégalée des armes et armures, et connaissent bien la mort, l'ayant donnée et défiée.",
      "Les guerriers maîtrisent diverses armes et techniques, disposant toujours de l'outil adéquat pour chaque situation de combat. Cette connaissance étendue des armes et armures leur permet de s'adapter à n'importe quel défi, et chaque guerrier se spécialise dans un ou plusieurs styles de combat distincts.",
      "Qu'ils se spécialisent dans le tir à l'arc, le combat à deux armes ou l'amélioration de leurs talents martiaux grâce à la magie, cette combinaison de solides compétences fondamentales et de spécialisation poussée fait des guerriers d'excellents combattants, redoutables en toute situation.",
    ],
    primaryAbility: [ABILITIES.Force, ABILITIES.Dextérité],
    hitDice: "d10",
    savingThrows: [ABILITIES.Constitution, ABILITIES.Constitution],
    skillProficiencies: [
      SKILLS.Acrobaties,
      SKILLS.Dressage,
      SKILLS.Athlétisme,
      SKILLS.Histoire,
      SKILLS.Intuition,
      SKILLS.Intimidation,
      SKILLS.Perception,
      SKILLS.Survie,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: ["Armes simples", "Armes de guerre"],
    armorTraining: ["Légères", "Intermédiaires", "Lourdes", "Boucliers"],
    toolProficiencies: [],
    equipment: [
      [
        ARMORS["Cotte de mailles"],
        WEAPONS["Épée à deux mains"],
        WEAPONS["Fléau d'armes"],
        WEAPONS.Javeline,
        WEAPONS.Javeline,
        WEAPONS.Javeline,
        WEAPONS.Javeline,
        WEAPONS.Javeline,
        WEAPONS.Javeline,
        WEAPONS.Javeline,
        WEAPONS.Javeline,
        ADVENTURING_GEAR["Sac d'exploration souterraine"],
        createGold(4),
      ],
      [
        ARMORS["Cuir clouté"],
        WEAPONS.Cimeterre,
        WEAPONS["Épée courte"],
        WEAPONS["Arc long"],
        ADVENTURING_GEAR["Munitions - Flèches (20)"],
        ADVENTURING_GEAR.Carquois,
        ADVENTURING_GEAR["Sac d'exploration souterraine"],
        createGold(11),
      ],
      [createGold(155)],
    ],
    features: [
      {
        level: 1,
        name: "Style de combat",
        description: [
          "Vous avez perfectionné vos prouesses martiales et obtenez un don de Style de combat de votre choix (Défense recommandé). Chaque style accorde des bonus spécifiques au combat.",
          "Lorsque vous gagnez un niveau de guerrier, vous pouvez remplacer le don choisi par un autre don de Style de combat.",
        ],
      },
      {
        level: 1,
        name: "Second souffle",
        description: [
          "Par une action Bonus, vous regagnez des points de vie égaux à 1d10 plus votre niveau de guerrier, puisant dans une réserve limitée d'endurance.",
          "Vous pouvez utiliser cette capacité deux fois. Vous récupérez une utilisation au Repos court, et toutes les utilisations au Repos long.",
        ],
      },
      {
        level: 1,
        name: "Bottes d'arme",
        description: [
          "Votre entraînement vous permet d'utiliser la botte de trois types d'armes courantes ou de guerre de votre choix, augmentant vos dégâts et votre précision.",
          "Lorsque vous terminez un Repos long, vous pouvez vous entraîner et modifier l'une de vos armes choisies.",
        ],
      },
    ],
    subclasses: [],
  },
  {
    name: "Magicien",
    short_desc:
      "Étudiez la magie arcanique et maîtrisez des sorts en tout genre.",
    description: [
      "Les magiciens se distinguent par leur étude approfondie des mécanismes internes de la magie. Ils lancent des sorts de feu explosif, d'éclairs fulgurants, de tromperies subtiles et de transformations spectaculaires. Leur magie invoque des créatures d'autres plans, entrevoit l'avenir, forme des barrières protectrices et ouvre des portails vers d'autres mondes.",
      "La plupart des magiciens partagent une approche érudite de la magie, examinant ses fondements théoriques et les écoles de magie. Leurs études approfondies leur permettent d'inventer des sorts emblématiques utilisés dans tout le multivers, construisant sur les connaissances accumulées au fil des siècles par les grands magiciens.",
      "Bien que beaucoup travaillent comme sages, professeurs ou conseillers, l'attrait du savoir pousse même les magiciens les plus intrépides à quitter la sécurité de leurs bibliothèques pour explorer des ruines et des cités perdues. Convaincus que les civilisations antiques détenaient des secrets de magie oubliés, ils cherchent à découvrir un pouvoir encore plus grand que toute magie actuelle.",
    ],
    primaryAbility: [ABILITIES.Intelligence],
    hitDice: "d6",
    savingThrows: [ABILITIES.Intelligence, ABILITIES.Sagesse],
    skillProficiencies: [
      SKILLS.Arcanes,
      SKILLS.Histoire,
      SKILLS.Intuition,
      SKILLS.Investigation,
      SKILLS.Médecine,
      SKILLS.Nature,
      SKILLS.Religion,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: [
      "Dague",
      "Dard",
      "Fronde",
      "Bâton",
      "Arbalète légère",
    ],
    armorTraining: [],
    toolProficiencies: [],
    equipment: [
      [
        WEAPONS.Dague,
        WEAPONS.Dague,
        ADVENTURING_GEAR["Focaliseur arcanique - Bâton"],
        ADVENTURING_GEAR.Robes,
        ADVENTURING_GEAR.Grimoire,
        ADVENTURING_GEAR["Sac d'érudit"],
        createGold(5),
      ],
      [createGold(55)],
    ],
    features: [
      {
        level: 1,
        name: "Sorts",
        description: [
          "Vous connaissez 3 sorts mineurs de magicien (modifiables au Repos long). L'Intelligence est votre caractéristique d'incantation, les focaliseurs arcanique ou votre grimoire servent de focaliseur.",
          "Votre grimoire contient 6 sorts de niveau 1+ que vous préparez au Repos long. Vous disposez des emplacements de sort indiqués par votre niveau. Tous les emplacements se récupèrent au Repos long. Chaque niveau supérieur, ajoutez 2 sorts à votre grimoire et augmentez vos sorts préparés selon votre niveau.",
        ],
      },
      {
        level: 1,
        name: "Savoir rituel",
        description: [
          "Vous pouvez lancer n'importe quel sort comme Rituel s'il possède l'étiquette Rituel et figure dans votre grimoire, sans avoir besoin de le préparer.",
        ],
      },
      {
        level: 1,
        name: "Restauration magique",
        description: [
          "Lors d'un Repos court, vous pouvez récupérer des emplacements de sort dépensés. Le niveau combiné ne peut pas dépasser la moitié de votre niveau de magicien (arrondi supérieur), et aucun emplacement ne peut être de niveau 6+.",
          "Une fois cette capacité utilisée, vous ne pouvez la réutiliser qu'après un Repos long.",
        ],
      },
    ],
    subclasses: [],
  },
  {
    name: "Moine",
    short_desc:
      "Foncez dans la mêlée en esquivant les coups, pour frapper vite et fort.",
    description: [
      "Les moines utilisent un entraînement au combat rigoureux et une discipline mentale pour s'aligner avec le multivers et puiser dans leur réserve de puissance intérieure. Qu'il soit canalisé dans une démonstration éclatante de prouesse martiale ou par une manifestation plus subtile de défense et de vitesse, ce pouvoir imprègne tout ce qu'un moine fait.",
      "Les moines concentrent leur puissance intérieure pour créer des effets extraordinaires et surnaturels. Ils canalisent une vitesse et une force surhumaines dans leurs attaques, avec ou sans armes. Entre les mains d'un moine, même les armes les plus basiques deviennent des instruments sophistiqués de maîtrise du combat.",
      "Qu'ils suivent une vie ascétique structurée ou s'immergent dans les tumultes du monde, les moines considèrent les aventures comme des tests de leur développement physique et mental. Guidés par le désir d'accomplir une mission transcendant la simple quête de trésor, ils s'efforcent de se transformer en véritables armes vivantes.",
    ],
    primaryAbility: [ABILITIES.Dextérité, ABILITIES.Sagesse],
    hitDice: "d8",
    savingThrows: [ABILITIES.Dextérité, ABILITIES.Force],
    skillProficiencies: [
      SKILLS.Acrobaties,
      SKILLS.Athlétisme,
      SKILLS.Histoire,
      SKILLS.Intuition,
      SKILLS.Religion,
      SKILLS.Discrétion,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: ["Armes simples", "Épée courte"],
    armorTraining: [],
    toolProficiencies: [
      "Un type d'outils d'artisan ou d'instrument de musique",
    ],
    equipment: [
      [
        WEAPONS.Lance,
        WEAPONS.Dague,
        WEAPONS.Dague,
        WEAPONS.Dague,
        WEAPONS.Dague,
        WEAPONS.Dague,
        {
          name: "Outils d'artisan ou instrument de musique au choix",
          category: "Autre",
        },
        ADVENTURING_GEAR["Sac d'explorateur"],
        createGold(11),
      ],
      [createGold(50)],
    ],
    features: [
      {
        level: 1,
        name: "Arts martiaux",
        description: [
          "Vous maîtrisez les arts martiaux utilisant vos Frappes à mains nues et vos armes de moine (armes courantes et armes de guerre légères). Bonus action pour une Frappe à mains nues supplémentaire.",
          "Vous lancez 1d6 pour les dégâts de Frappes à mains nues ou armes de moine. Vous pouvez utiliser votre modificateur de Dextérité au lieu de Force pour les jets d'attaque et de dégâts, ainsi que pour les jets de sauvegarde de Lutte ou Bousculade.",
        ],
      },
      {
        level: 1,
        name: "Défense sans armure",
        description: [
          "Lorsque vous ne portez pas d'armure et ne maniez pas de bouclier, votre classe d'armure est égale à 10 plus vos modificateurs de Dextérité et de Sagesse.",
        ],
      },
    ],
    subclasses: [],
  },
  {
    name: "Occultiste",
    short_desc: "Lancez des sorts issus d'un savoir occulte.",
    description: [
      "Les occultistes sont en quête du savoir caché dans la trame du multivers. Ils commencent souvent leur quête en fouillant dans des livres de savoir interdit, en s'adonnant à des invocations destinées à attirer le pouvoir d'êtres extraplanaires, ou en recherchant des lieux de pouvoir. En un rien de temps, chaque occultiste est lié par un pacte avec un puissant protecteur.",
      "S'appuyant sur le savoir ancestral d'êtres tels que les anges, archifées, démons, diables et entités extraterrestres, les occultistes rassemblent des secrets arcaniques pour renforcer leur propre pouvoir. Ils considèrent leurs protecteurs comme des ressources et des moyens d'acquérir des pouvoirs magiques, les respectant, les servant ou cherchant à les affaiblir selon leur perspective personnelle.",
      "Une fois le pacte conclu, la soif de savoir et de pouvoir d'un occultiste ne peut être étanchée par de simples études. Ils consacrent leurs jours à rechercher un pouvoir accru et un savoir plus approfondi, ce qui implique généralement une forme d'aventure constante à la poursuite de nouveaux secrets.",
    ],
    primaryAbility: [ABILITIES.Charisme],
    hitDice: "d8",
    savingThrows: [ABILITIES.Charisme, ABILITIES.Sagesse],
    skillProficiencies: [
      SKILLS.Arcanes,
      SKILLS.Tromperie,
      SKILLS.Histoire,
      SKILLS.Intimidation,
      SKILLS.Investigation,
      SKILLS.Nature,
      SKILLS.Religion,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: ["Armes simples"],
    armorTraining: [],
    toolProficiencies: [],
    equipment: [
      [
        ARMORS.Cuir,
        WEAPONS.Serpe,
        WEAPONS.Dague,
        WEAPONS.Dague,
        ADVENTURING_GEAR["Focaliseur arcanique - Orbe"],
        ADVENTURING_GEAR.Livre,
        ADVENTURING_GEAR["Sac d'érudit"],
        createGold(15),
      ],
      [createGold(100)],
    ],
    features: [
      {
        level: 1,
        name: "Manifestations occultes",
        description: [
          "Vous avez découvert des Manifestations occultes, fragments de savoir interdit. Vous obtenez une manifestation de votre choix comme Pacte du grimoire.",
          "Chaque fois que vous gagnez un niveau d'occultiste, vous pouvez remplacer l'une de vos manifestations par une autre pour laquelle vous remplissez les conditions.",
        ],
      },
      {
        level: 1,
        name: "Magie de pacte",
        description: [
          "Vous connaissez 2 sorts mineurs d'occultiste (modifiables en montant de niveau). Le Charisme est votre caractéristique d'incantation, les focaliseurs arcanique servent de focaliseur.",
          "Vous préparez 2 sorts de niveau 1+ et avez des emplacements de sort selon votre niveau. Récupérez TOUS les emplacements au Repos court ou long. Chaque niveau, modifiez votre liste en remplaçant un sort par un autre du même niveau.",
        ],
      },
    ],
    subclasses: [],
  },
  {
    name: "Paladin",
    short_desc:
      "Par les armes et le divin, châtiez l'adversaire et protégez vos alliés.",
    description: [
      "Les paladins sont unis par leur serment pour lutter contre les forces de l'annihilation et de la corruption. Qu'il soit prêté devant un autel divin, dans une clairière sacrée ou dans un moment de désespoir avec les morts pour témoins, le serment d'un paladin est un lien puissant qui transforme un combattant dévoué en un véritable champion béni.",
      "Les paladins s'entraînent au combat et maîtrisent une variété d'armes et d'armures avec excellence. Pourtant, leurs compétences martiales ne sont que le fondement de leur véritable pouvoir : leurs capacités magiques qui leur permettent de guérir les blessés, de frapper les ennemis et de protéger les faibles et leurs alliés.",
      "Par définition, la vie d'un paladin est une vie d'aventurier, car chaque paladin vit en première ligne de la lutte cosmique contre l'annihilation. Quand ils reçoivent cet appel sacré, ces êtres bénis abandonnent leurs anciennes occupations pour prendre les armes et utiliser la magie divine au service de leur serment.",
    ],
    primaryAbility: [ABILITIES.Force, ABILITIES.Charisme],
    hitDice: "d10",
    savingThrows: [ABILITIES.Charisme, ABILITIES.Sagesse],
    skillProficiencies: [
      SKILLS.Athlétisme,
      SKILLS.Intuition,
      SKILLS.Intimidation,
      SKILLS.Médecine,
      SKILLS.Persuasion,
      SKILLS.Religion,
    ],
    skillProficienciesNumber: 2,
    weaponProficiencies: ["Armes simples", "Armes de guerre"],
    armorTraining: ["Légères", "Intermédiaires", "Lourdes", "Boucliers"],
    toolProficiencies: [],
    equipment: [
      [
        ARMORS["Cotte de mailles"],
        ARMORS.Bouclier,
        WEAPONS["Épée longue"],
        WEAPONS.Javeline,
        WEAPONS.Javeline,
        WEAPONS.Javeline,
        WEAPONS.Javeline,
        WEAPONS.Javeline,
        WEAPONS.Javeline,
        { name: "Symbole sacré au choix", category: "Autre" },
        ADVENTURING_GEAR["Sac d'ecclésiastique"],
        createGold(9),
      ],
      [createGold(150)],
    ],
    features: [
      {
        level: 1,
        name: "Imposition des mains",
        description: [
          "Vous disposez d'une réserve de pouvoir de guérison égale à 5 fois votre niveau de paladin. Par une action Bonus, touchez une créature et restaurez des points de vie de cette réserve.",
          "Vous pouvez dépenser 5 points pour supprimer l'état Empoisonné d'une créature (sans restaurer de PV). La réserve se reconstitue au Repos long.",
        ],
      },
      {
        level: 1,
        name: "Sorts",
        description: [
          "Vous préparez 2 sorts de niveau 1+ de votre choix. Le Charisme est votre caractéristique d'incantation, les symboles sacrés servent de focaliseur.",
          "Vous avez des emplacements de sort selon votre niveau, tous récupérés au Repos long. Chaque Repos long, modifiez votre liste en remplaçant un sort par un autre du même niveau.",
        ],
      },
      {
        level: 1,
        name: "Bottes d'arme",
        description: [
          "Votre entraînement vous permet d'utiliser les propriétés Bottes de deux types d'armes de votre choix que vous maîtrisez.",
          "Lorsque vous terminez un Repos long, vous pouvez changer les types d'armes choisis.",
        ],
      },
    ],
    subclasses: [],
  },
  {
    name: "Rôdeur",
    short_desc:
      "Conjuguez l'excellence martiale, la magie sauvage et les facultés de survie.",
    description: [
      "Loin des villes animées, au cœur de forêts impénétrables ou de vastes plaines, les rôdeurs exercent une surveillance constante sur la nature. Ils traquent leur proie comme le ferait un prédateur, se déplaçant furtivement dans les étendues sauvages et se cachant dans les broussailles et les décombres.",
      "Grâce à leur connexion authentique avec la nature, les rôdeurs canalisent la magie primitive et maîtrisent des talents martiaux affinés avec une précision redoutable. Cette union unique de compétences de combat et de pouvoirs naturels en fait des guerriers polyvalents du monde sauvage.",
      "Consacrés à la protection du monde des ravages des monstres et des tyrans, les rôdeurs mènent une existence d'aventuriers errants. Leur vigilance constante et leur dévouement envers la nature naturelle les conduisent à parcourir les terres frontières où d'autres ne s'aventurent pas.",
    ],
    primaryAbility: [ABILITIES.Dextérité, ABILITIES.Sagesse],
    hitDice: "d10",
    savingThrows: [ABILITIES.Dextérité, ABILITIES.Force],
    skillProficiencies: [
      SKILLS.Dressage,
      SKILLS.Athlétisme,
      SKILLS.Intuition,
      SKILLS.Investigation,
      SKILLS.Nature,
      SKILLS.Perception,
      SKILLS.Discrétion,
      SKILLS.Survie,
    ],
    skillProficienciesNumber: 3,
    weaponProficiencies: ["Armes simples", "Armes de guerre"],
    armorTraining: ["Légères", "Intermédiaires", "Boucliers"],
    toolProficiencies: [],
    equipment: [
      [
        ARMORS["Cuir clouté"],
        WEAPONS.Cimeterre,
        WEAPONS["Épée courte"],
        WEAPONS["Arc long"],
        ADVENTURING_GEAR["Munitions - Flèches (20)"],
        ADVENTURING_GEAR.Carquois,
        ADVENTURING_GEAR["Focaliseur druidique - Branche de gui"],
        ADVENTURING_GEAR["Sac d'explorateur"],
        createGold(7),
      ],
      [createGold(150)],
    ],
    features: [
      {
        level: 1,
        name: "Sorts",
        description: [
          "Vous préparez 2 sorts de niveau 1+ de votre choix. La Sagesse est votre caractéristique d'incantation, les focaliseurs druidiques servent de focaliseur.",
          "Vous avez des emplacements de sort selon votre niveau, tous récupérés au Repos long. Chaque Repos long, modifiez votre liste en remplaçant un sort par un autre du même niveau.",
        ],
      },
      {
        level: 1,
        name: "Ennemi juré",
        description: [
          "Le sort marque du chasseur est toujours préparé pour vous. Vous pouvez le lancer 2 fois sans dépenser d'emplacement de sort.",
          "Toutes les utilisations se récupèrent au Repos long. Le nombre augmente avec votre niveau de rôdeur.",
        ],
      },
      {
        level: 1,
        name: "Bottes d'arme",
        description: [
          "Votre entraînement vous permet d'utiliser les propriétés Bottes de deux types d'armes que vous maîtrisez.",
          "Lorsque vous terminez un Repos long, vous pouvez changer les types d'armes choisis.",
        ],
      },
    ],
    subclasses: [],
  },
  {
    name: "Roublard",
    short_desc:
      "Assénez de meurtrières attaques sournoises tout en évitant adroitement les coups.",
    description: [
      "Les roublards comptent sur leur ruse, leur discrétion et les vulnérabilités de leurs ennemis pour prendre le dessus en toute situation. Experts dans la résolution de problèmes, certains apprennent même des tours de magie pour compléter leurs capacités exceptionnelles et leur intelligence vive.",
      "Au combat, les roublards privilégient les coups subtils et précis à la force brute. Se concentrant sur la discrétion et la tromperie, ils perfectionnent leurs compétences—escalade, recherche et désamorçage de pièges, crochetage de serrures—portant des coups calculés plutôt que d'épuiser leurs adversaires sous un déluge de coups.",
      "Certains roublards ont débuté leur carrière en tant que criminels, tandis que d'autres ont utilisé leur ruse pour combattre le crime. Quel que soit leur rapport à la loi, aucun criminel ou représentant de la loi ne peut égaler l'intelligence subtile et la capacité d'adaptation des plus grands roublards.",
    ],
    primaryAbility: [ABILITIES.Dextérité],
    hitDice: "d8",
    savingThrows: [ABILITIES.Dextérité, ABILITIES.Intelligence],
    skillProficiencies: [
      SKILLS.Acrobaties,
      SKILLS.Athlétisme,
      SKILLS.Tromperie,
      SKILLS.Intuition,
      SKILLS.Intimidation,
      SKILLS.Investigation,
      SKILLS.Perception,
      SKILLS.Persuasion,
      SKILLS.Escamotage,
      SKILLS.Discrétion,
    ],
    skillProficienciesNumber: 4,
    weaponProficiencies: [
      "Arbalète de poing",
      "Arbalète légère",
      "Arc court",
      "Dague",
      "Épée courte",
      "Rapière",
    ],
    armorTraining: ["Légères"],
    toolProficiencies: ["Outils de voleur"],
    equipment: [
      [
        ARMORS.Cuir,
        WEAPONS.Dague,
        WEAPONS.Dague,
        WEAPONS["Épée courte"],
        WEAPONS["Arc court"],
        ADVENTURING_GEAR["Munitions - Flèches (20)"],
        ADVENTURING_GEAR.Carquois,
        TOOLS["Outils de voleur"],
        ADVENTURING_GEAR["Sac de cambrioleur"],
        createGold(8),
      ],
      [createGold(100)],
    ],
    features: [
      {
        level: 1,
        name: "Expertise",
        description: [
          "Vous gagnez l'Expertise dans deux de vos maîtrises de compétences de votre choix (Escamotage et Discrétion recommandées).",
          "Au niveau 6 de roublard, vous gagnez l'Expertise dans deux autres de vos maîtrises de compétences.",
        ],
      },
      {
        level: 1,
        name: "Attaque sournoise",
        description: [
          "Une fois par tour, vous infligez 1d6 points de dégâts supplémentaires avec un jet d'attaque (Finesse ou À distance) si vous avez Avantage, OU si un allié est à 1,5m de la cible (pas Incapable d'agir) et vous n'avez pas Désavantage.",
          "Les dégâts supplémentaires augmentent avec votre niveau de roublard.",
        ],
      },
      {
        level: 1,
        name: "Argot des voleurs",
        description: [
          "Vous connaissez l'argot des voleurs et une autre langue de votre choix.",
          "Vous pouvez laisser des messages cachés en argot que seuls les roublards et autres maîtres de l'argot comprennent.",
        ],
      },
      {
        level: 1,
        name: "Bottes d'arme",
        description: [
          "Votre entraînement vous permet d'utiliser les propriétés Bottes de deux types d'armes que vous maîtrisez.",
          "Lorsque vous terminez un Repos long, vous pouvez changer les types d'armes choisis.",
        ],
      },
    ],
    subclasses: [],
  },
]

// Get all images in the "classes" folder
const fullImages = import.meta.glob("../assets/classes/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>

// Get all images in the "recadre" folder
const cutImages = import.meta.glob("../assets/recadre/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>

// Couple images with their name
const fullImageMap: Record<string, string> = {}
const cutImagesMap: Record<string, string> = {}

// Cherche le motif : "/" + #lettres ou espace ou "-" ou "'"# + ".png" #sans rien après#
const regex = /\/((?:\p{L}|\s|-|')+)\.png$/u

for (const path in fullImages) {
  const match = path.match(regex)
  if (match) fullImageMap[match[1]] = fullImages[path]
}

for (const path in cutImages) {
  const match = path.match(regex)
  if (match) cutImagesMap[match[1]] = cutImages[path]
}

// Associate and export classes with their images
export const CLASSES: Class[] = rawClasses.map((cls) => ({
  ...cls,
  full_img: fullImageMap[cls.name],
  cut_img: cutImagesMap[cls.name],
  subclasses: cls.subclasses.map((sub) => ({
    ...sub,
    image: fullImageMap[sub.name],
  })),
}))
