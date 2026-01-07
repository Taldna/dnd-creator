import type { Feat } from "../types/data/feat"

// TODO: declare a new function allowing to select a specific feat with specific parameters (ex: "Initié à la magie" but only for Cleric spells)

const rawFeats: Feat[] = [
  {
    name: "Bagarreur de tavernes",
    category: "Don d'origines",
    description: "Vous recevez les bénéfices suivants :",
    benefits: [
      {
        name: "Attaque à main nues améliorée",
        description:
          "Lorsque vous touchez avec votre attaque à mains nues et infligez des dégâts, vous pouvez infliger un total de dégâts contondants égal à 1d4 + votre modificateur de Force à la place des dégâts normaux d'attaque à mains nues.",
      },
      {
        name: "Relancer des dégâts",
        description:
          "Chaque fois que vous jouez un dé de dégâts pour votre attaque à mains nues, vous pouvez relancer le dé si le résultat est un 1, le nouveau jet s'appliquant alors.",
      },
      {
        name: "Armement improvisé",
        description: "Vous avez la maîtrise des armes improvisées.",
      },
      {
        name: "Bourrade",
        description:
          "Lorsque vous touchez une créature avec une attaque à mains nues dans le cadre de votre action Attaque à votre tour, vous pouvez infliger les dégâts de l'attaque à la cible et la repousser de 1,50 m. Vous ne pouvez recourir à ce bénéfice qu'une seule fois par tour.",
      },
    ],
  },
  {
    name: "Chanceux",
    category: "Don d'origines",
    description: "Vous recevez les bénéfices suivants",
    benefits: [
      {
        name: "Points de chance",
        description:
          "Vous disposez d'un nombre de points de chance égal à votre bonus de maîtrise et pouvez les dépenser pour obtenir les bénéfices suivants. Vous récupérez les points de chance dépensés en terminant un Repos long.",
      },
      {
        name: "Avantage",
        description:
          "Lorsque vous jouez un d20 dans le cadre d'un Test d20, vous pouvez dépenser 1 point de chance pour vous octroyer l'Avantage à ce jet.",
      },
      {
        name: "Désavantage",
        description:
          "Lorsqu'une créature joue un d20 dans le cadre d'un jet d'attaque contre vous, vous pouvez dépenser 1 point de chance pour lui imposer le Désavantage à ce jet.",
      },
    ],
  },
  {
    name: "Doué",
    category: "Don d'origines",
    description:
      "Vous recevez la maîtrise d'une combinaison au choix de trois compétences ou outils.",
    benefits: [
      {
        name: " Répétable",
        description: "Vous pouvez sélectionner ce don plus d'une fois",
      },
    ],
  },
  {
    name: "Façonneur",
    category: "Don d'origines",
    description: "Vous recevez les bénéfices suivants.",
    benefits: [
      {
        name: "Maîtrise d'outils",
        description:
          "Vous recevez la maîtrise de trois outils d'artisan choisis dans la table Façonnage rapide (Bricoleur, Charpentier, Forgeron, Maçon, Menuisier, Potier, Tanneur, Tisserand).",
      },
      {
        name: "Ristourne",
        description:
          "Chaque fois que vous achetez un objet non magique, vous bénéficiez d'une réduction de 20%.",
      },
      {
        name: "Façonnage rapide",
        description:
          "Lorsque vous terminez un Repos long, vous pouvez fabriquer une pièce d'équipement de la table Façonnage rapide, à condition de disposer des outils d'artisan associés à cet objet et d'en avoir la maîtrise. L'objet dure jusqu'à ce que vous terminiez un autre Repos long, après quoi il se désagrège.",
      },
    ],
  },
  {
    name: "Guérisseur",
    category: "Don d'origines",
    description: "Vous recevez les bénéfices suivants",
    benefits: [
      {
        name: "Soigneur de bataille",
        description:
          "Si vous disposez d'une trousse de soins, vous pouvez en dépenser une utilisation pour soigner une créature dans un rayon de 1,50 m par une action Utilisation. La créature soignée peut dépenser l'un de ses dés de vie, et c'est vous qui lancez ce dé. La créature récupère autant de points de vie que le total obtenu + votre bonus de maîtrise.",
      },
      {
        name: "Retirage des soins",
        description:
          "Chaque fois que vous lancez un dé pour déterminer le nombre de points de vie que vous faites récupérer avec un sort ou le bénéfice Soigneur de bataille de ce don, vous pouvez relancer le dé si le résultat est un 1, le nouveau jet s'appliquant alors.",
      },
    ],
  },
  {
    name: "Initié à la magie",
    category: "Don d'origines",
    description: "Vous recevez les bénéfices suivants",
    benefits: [
      {
        name: "Deux sorts mineurs",
        description:
          "Vous apprenez deux sorts mineurs de votre choix issus de la liste de sorts du Clerc, du Druide ou du Magicien. L'Intelligence, la Sagesse ou le Charisme est votre caractéristique d'incantation pour les sorts de ce don (décidez laquelle à l'acquisition du don).",
      },
      {
        name: "Sort de niveau 1",
        description:
          "Choisissez un sort de niveau 1 dans la même liste de sorts où vous avez choisi les sorts mineurs de ce don. Ce sort est toujours considéré comme préparé pour vous. Vous pouvez le lancer une fois sans dépenser d'emplacement de sort et récupérez cette aptitude en terminant un Repos long. Vous pouvez aussi lancer ce même sort avec vos éventuels emplacements de sort.",
      },
      {
        name: "Changement de sort",
        description:
          "Chaque fois que vous gagnez un niveau, vous pouvez remplacer l'un des sorts choisis dans le cadre de ce don par un autre sort du même niveau figurant dans la liste de sorts choisie.",
      },
      {
        name: "Répétable",
        description:
          "Vous pouvez sélectionner ce don plus d'une fois, mais devez choisir une liste de sorts différente à chaque fois",
      },
    ],
  },
  {
    name: "Musicien",
    category: "Don d'origines",
    description: "Vous recevez les bénéfices suivants",
    benefits: [
      {
        name: "Formation aux instruments",
        description:
          "Vous recevez la maîtrise de trois instruments de musique de votre choix.",
      },
      {
        name: "Chant d'encouragement",
        description:
          "À la fin d'un Repos court ou long, vous pouvez jouer un morceau sur l'un des instruments de musique dont vous avez la maîtrise et octroyer l'Inspiration héroïque aux alliés qui l'entendent. Vous pouvez affecter de cette manière un nombre d'alliés égal à votre bonus de maîtrise.",
      },
    ],
  },
  {
    name: "Robuste",
    category: "Don d'origines",
    description:
      "Votre maximum de points de vie augmente d'un montant égal au double de votre niveau de personnage quand vous recevez ce don. Chaque fois que vous gagnez un niveau de personnage par la suite, votre maximum de points de vie augmente de 2 pv supplémentaires.",
    benefits: [],
  },
  {
    name: "Sauvagerie martiale",
    category: "Don d'origines",
    description:
      "Vous êtes formé à porter des coups dévastateurs. Une fois par tour, lorsque vous touchez une cible avec une arme, vous pouvez lancer deux fois les dés de dégâts de l'arme et utiliser l'un ou l'autre résultat contre la cible.",
    benefits: [],
  },
  {
    name: "Vigilant",
    category: "Don d'origines",
    description: "Vous recevez les bénéfices suivants",
    benefits: [
      {
        name: "Maîtrise de l'Initiative",
        description:
          "Lorsque vous jouez l'Initiative, ajoutez votre bonus de maîtrise au jet.",
      },
      {
        name: "Échange d'Initiative",
        description:
          "Aussitôt après avoir joué l'Initiative, vous pouvez échanger votre Initiative avec celle d'un allié volontaire pour le combat à venir. Un tel échange est impossible si vous-même ou l'allié désigné subissez l'état Neutralisé.",
      },
    ],
  },
]

export const FEATS: Record<string, Feat> = {}

rawFeats.forEach((feat) => {
  FEATS[feat.name] = feat
})
