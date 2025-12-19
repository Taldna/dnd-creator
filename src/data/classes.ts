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
    description: [""],
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
    description: [""],
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
    description: [""],
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
    description: [""],
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
    description: [""],
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
    description: [""],
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
    description: [""],
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
        { name: "Outils d'artisan ou instrument de musique au choix", category: "Autre" },
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
    description: [""],
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
    description: [""],
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
    description: [""],
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
    description: [""],
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
