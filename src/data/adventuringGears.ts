import type { AdventuringGear } from "../types/data/equipment"

const rawAdventuringGear: AdventuringGear[] = [
  {
    name: "Acide (fiole)",
    category: "Équipement d'aventurier",
    price: { po: 25, pa: 0, pc: 0 },
    weight: 0.5,
    description:
      "Au prix d'une action, vous pouvez lancer le contenu de ce flacon sur une créature à 1,50 mètre ou moins de vous, ou jeter le flacon jusqu'à 6 mètres, le brisant à l'impact. Dans les deux cas, faire une attaque à distance contre une créature ou un objet, en considérant l'acide comme une arme improvisée. En cas de succès, la cible reçoit 2d6 dégâts d'acide.",
  },
  {
    name: "Antidote (fiole)",
    category: "Équipement d'aventurier",
    price: { po: 50, pa: 0, pc: 0 },
    weight: 0,
    description:
      "Une créature qui boit cette fiole gagne un avantage aux jets de sauvegarde contre le poison pendant 1 heure. Il ne confère aucun avantage aux morts-vivants et aux artificiels.",
  },
  {
    name: "Balance de marchand",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 1.5,
    description:
      "Cela comprend une petite balance, des plateaux et un assortiment de poids approprié jusqu'à 1 kg. Avec, vous pouvez mesurer le poids exact de petits objets, tels que des métaux précieux ou des biens commerciaux, pour aider à déterminer leur valeur.",
  },
  {
    name: "Bélier portable",
    category: "Équipement d'aventurier",
    price: { po: 4, pa: 0, pc: 0 },
    weight: 17.5,
    description:
      "Vous pouvez utiliser un bélier portable pour enfoncer des portes. Ce faisant, vous gagnez un bonus de +4 au jet de Force. Un autre personnage peut vous aider à utiliser le bélier, ce qui vous donne un avantage à ce jet.",
  },
  {
    name: "Billes (sac de 1000)",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 1,
    description:
      "Au prix d'une action, vous pouvez sortir ces petites billes métalliques de leur poche pour recouvrir une zone de 3 m x 3 m. Une créature se déplaçant à travers la zone recouverte doit réussir un jet de sauvegarde de Dextérité DD 10 ou tomber à terre. Une créature se déplaçant à travers la zone à la moitié de sa vitesse n'a pas besoin de faire le jet de sauvegarde.",
  },
  {
    name: "Boite d'allume-feu",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 5, pc: 0 },
    weight: 0.5,
    description:
      "Cette petite boite contient un silex, des amorces et de l'amadou (généralement des bouts de tissu sec trempés dans de l'huile), soit tout le nécessaire pour allumer un feu. L'utiliser pour allumer une torche, ou autre chose qui contient suffisamment d'huile, prend une action. Allumer tout autre type de feu prend 1 minute.",
  },
  {
    name: "Bougie",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 1 },
    weight: 0,
    description:
      "Une bougie génère une lumière vive dans un rayon de 1,50 mètre et une lumière faible sur 1,50 mètre supplémentaire durant 1 heure.",
  },
  {
    name: "Boulier",
    category: "Équipement d'aventurier",
    price: { po: 2, pa: 0, pc: 0 },
    weight: 1,
  },
  {
    name: "Bouteille en verre",
    category: "Équipement d'aventurier",
    price: { po: 2, pa: 0, pc: 0 },
    weight: 1,
  },
  {
    name: "Cadenas",
    category: "Équipement d'aventurier",
    price: { po: 10, pa: 0, pc: 0 },
    weight: 0.5,
    description:
      "Une clé est fournie avec le cadenas. Sans la clé, une créature qui maîtrise les outils de voleur peut ouvrir le cadenas en réussissant un jet de Dextérité DD 15. Votre MD peut décider que des cadenas de meilleure qualité sont disponibles à des prix plus élevés.",
  },
  {
    name: "Carquois",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 0.5,
    description: "Un carquois peut contenir jusqu'à 20 flèches.",
  },
  {
    name: "Chaîne (3 m)",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 5,
    description:
      "Une chaîne dispose de 10 pv. Elle peut être brisée en réussissant un jet de Force de DD 20.",
  },
  {
    name: "Chausse-trappes (sac de 20)",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 1,
    description:
      "Au prix d'une action, vous pouvez étaler le contenu d'un sac de chausse-trappes pour couvrir une zone de 1,50 m x 1,50 m. Toute créature qui entre dans la zone doit réussir un jet de sauvegarde de Dextérité DD 15 ou mettre fin à son mouvement et prendre 1 point de dégâts perforants. Jusqu'à ce que la créature retrouve au moins 1 point de vie, sa vitesse de marche est réduite de 3 mètres. Une créature se déplaçant à travers la zone à la moitié de sa vitesse n'a pas besoin de faire le jet de sauvegarde.",
  },
  {
    name: "Chevalière",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 0,
  },
  {
    name: "Cire à cacheter",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 5, pc: 0 },
    weight: 0,
  },
  {
    name: "Cloche",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 0,
  },
  {
    name: "Coffre",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 12.5,
  },
  {
    name: "Corde en chanvre (15 m)",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 5,
    description:
      "Une corde, qu'elle soit faite de chanvre ou de soie, possède 2 pv et peut être cassée avec un jet de Force DD 17.",
  },
  {
    name: "Corde en soie (15 m)",
    category: "Équipement d'aventurier",
    price: { po: 10, pa: 0, pc: 0 },
    weight: 2.5,
    description:
      "Une corde, qu'elle soit faite de chanvre ou de soie, possède 2 pv et peut être cassée avec un jet de Force DD 17.",
  },
  {
    name: "Couverture",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 5, pc: 0 },
    weight: 1.5,
  },
  {
    name: "Craie (un morceau)",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 1 },
    weight: 0,
  },
  {
    name: "Cruche ou pichet",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 2 },
    weight: 2,
  },
  {
    name: "Eau bénite (flasque)",
    category: "Équipement d'aventurier",
    price: { po: 25, pa: 0, pc: 0 },
    weight: 0.5,
    description:
      "Au prix d'une action, vous pouvez lancer le contenu de cette flasque sur une créature à 1,50 mètre ou moins de vous, ou jeter le flacon jusqu'à 6 mètres, la brisant à l'impact. Dans les deux cas, faire une attaque à distance contre une créature, en considérant l'eau bénite comme une arme improvisée. Si la cible est un fiélon ou mort-vivant, elle reçoit 2d6 dégâts radiant. Un clerc ou un paladin peut créer de l'eau bénite lors d'un rituel spécial. Le rituel dure 1 heure, consomme pour 25 po de poudre d'argent, et nécessite que le lanceur dépense un emplacement de sort de niveau 1.",
  },
  {
    name: "Échelle (3 m)",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 1, pc: 0 },
    weight: 12.5,
  },
  {
    name: "Encre (bouteille de 30 ml)",
    category: "Équipement d'aventurier",
    price: { po: 10, pa: 0, pc: 0 },
    weight: 0,
  },
  {
    name: "Étui à carreaux",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 0.5,
    description:
      "Cet étui en bois peut contenir jusqu'à vingt carreaux d'arbalète.",
  },
  {
    name: "Étui à cartes ou parchemins",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 0.5,
    description:
      "Cet étui en cuir cylindrique peut contenir jusqu'à dix feuilles de papier enroulées ou cinq feuilles de parchemin enroulées.",
  },
  {
    name: "Feu grégeois (flasque)",
    category: "Équipement d'aventurier",
    price: { po: 50, pa: 0, pc: 0 },
    weight: 0.5,
    description:
      "Ce liquide adhésif et collant s'enflamme lorsqu'il est exposé à l'air. Au prix d'une action, vous pouvez jeter cette flasque jusqu'à 6 mètres, la brisant à l'impact. Faire une attaque à distance contre une créature ou un objet, en considérant le feu grégeois comme une arme improvisée. En cas de succès, la cible reçoit 1d4 dégâts de feu au début de chacun de ses tours. Une créature peut mettre fin à ces dégâts en utilisant son action pour faire un jet de Dextérité DD 10 pour éteindre les flammes.",
  },
  {
    name: "Fiole (10 cl)",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 0,
  },
  {
    name: "Flasque ou chope (50 cl)",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 2 },
    weight: 0.5,
  },
  {
    name: "Focaliseur arcanique - Baguette",
    category: "Équipement d'aventurier",
    price: { po: 10, pa: 0, pc: 0 },
    weight: 0.5,
    description:
      "Un focaliseur arcanique est un objet spécial (orbe, boule de cristal, baguette, bâton, sceptre) conçu pour canaliser la puissance de sorts de la magie des arcanes. Un ensorceleur, un magicien ou un occultiste peut utiliser ce type d'objet comme focaliseur d'incantation.",
  },
  {
    name: "Focaliseur arcanique - Bâton",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 2,
    description:
      "Un focaliseur arcanique est un objet spécial (orbe, boule de cristal, baguette, bâton, sceptre) conçu pour canaliser la puissance de sorts de la magie des arcanes. Un ensorceleur, un magicien ou un occultiste peut utiliser ce type d'objet comme focaliseur d'incantation.",
  },
  {
    name: "Focaliseur arcanique - Boule de cristal",
    category: "Équipement d'aventurier",
    price: { po: 10, pa: 0, pc: 0 },
    weight: 0.5,
    description:
      "Un focaliseur arcanique est un objet spécial (orbe, boule de cristal, baguette, bâton, sceptre) conçu pour canaliser la puissance de sorts de la magie des arcanes. Un ensorceleur, un magicien ou un occultiste peut utiliser ce type d'objet comme focaliseur d'incantation.",
  },
  {
    name: "Focaliseur arcanique - Orbe",
    category: "Équipement d'aventurier",
    price: { po: 20, pa: 0, pc: 0 },
    weight: 1.5,
    description:
      "Un focaliseur arcanique est un objet spécial (orbe, boule de cristal, baguette, bâton, sceptre) conçu pour canaliser la puissance de sorts de la magie des arcanes. Un ensorceleur, un magicien ou un occultiste peut utiliser ce type d'objet comme focaliseur d'incantation.",
  },
  {
    name: "Focaliseur arcanique - Sceptre",
    category: "Équipement d'aventurier",
    price: { po: 10, pa: 0, pc: 0 },
    weight: 1,
    description:
      "Un focaliseur arcanique est un objet spécial (orbe, boule de cristal, baguette, bâton, sceptre) conçu pour canaliser la puissance de sorts de la magie des arcanes. Un ensorceleur, un magicien ou un occultiste peut utiliser ce type d'objet comme focaliseur d'incantation.",
  },
  {
    name: "Focaliseur druidique - Baguette d'if",
    category: "Équipement d'aventurier",
    price: { po: 10, pa: 0, pc: 0 },
    weight: 0.5,
    description:
      "Un focaliseur druidique peut être un brin de gui ou de houx, une baguette ou un sceptre en bois d'if ou autre bois spécial, un bâton pris d'un arbre vivant, ou bien encore un objet totem qui intègre des plumes, de la fourrure, des os ou des dents d'animaux sacrés. Un druide peut utiliser ce type d'objet comme focaliseur d'incantation.",
  },
  {
    name: "Focaliseur druidique - Bâton",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 2,
    description:
      "Un focaliseur druidique peut être un brin de gui ou de houx, une baguette ou un sceptre en bois d'if ou autre bois spécial, un bâton pris d'un arbre vivant, ou bien encore un objet totem qui intègre des plumes, de la fourrure, des os ou des dents d'animaux sacrés. Un druide peut utiliser ce type d'objet comme focaliseur d'incantation.",
  },
  {
    name: "Focaliseur druidique - Branche de gui",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 0,
    description:
      "Un focaliseur druidique peut être un brin de gui ou de houx, une baguette ou un sceptre en bois d'if ou autre bois spécial, un bâton pris d'un arbre vivant, ou bien encore un objet totem qui intègre des plumes, de la fourrure, des os ou des dents d'animaux sacrés. Un druide peut utiliser ce type d'objet comme focaliseur d'incantation.",
  },
  {
    name: "Focaliseur druidique - Totem",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 0,
    description:
      "Un focaliseur druidique peut être un brin de gui ou de houx, une baguette ou un sceptre en bois d'if ou autre bois spécial, un bâton pris d'un arbre vivant, ou bien encore un objet totem qui intègre des plumes, de la fourrure, des os ou des dents d'animaux sacrés. Un druide peut utiliser ce type d'objet comme focaliseur d'incantation.",
  },
  {
    name: "Gamelle",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 2, pc: 0 },
    weight: 0.5,
    description:
      "Cette boîte en étain contient une tasse et des couverts. Faite de deux parties qui s'assemblent, un côté de la boîte peut être utilisé pour cuire des aliments et l'autre comme une assiette ou une petite cuvette.",
  },
  {
    name: "Gourde (pleine)",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 2, pc: 0 },
    weight: 2.5,
  },
  {
    name: "Grappin",
    category: "Équipement d'aventurier",
    price: { po: 2, pa: 0, pc: 0 },
    weight: 2,
  },
  {
    name: "Grimoire",
    category: "Équipement d'aventurier",
    price: { po: 50, pa: 0, pc: 0 },
    weight: 1.5,
    description:
      "Essentiel pour les magiciens, un grimoire est un livre relié en cuir qui contient 100 pages de vélin blanc, et sur lesquelles on peut recopier des sorts.",
  },
  {
    name: "Huile (flasque)",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 1, pc: 0 },
    weight: 0.5,
    description:
      "L'huile vient habituellement dans une flasque d'argile de 50 cl. Au prix d'une action, vous pouvez lancer le contenu de cette flasque sur une créature à 1,50 mètre ou moins de vous, ou jeter la flasque jusqu'à 6 mètres, la brisant à l'impact. Dans les deux cas, faire une attaque à distance contre une créature ou un objet, en considérant l'huile comme une arme improvisée. En cas de succès, la cible est couverte d'huile. Si la cible reçoit des dégâts de feu avant que l'huile ne sèche (après 1 minute), la cible prend 5 points de dégâts de feu supplémentaire dus à l'huile brûlante. Vous pouvez aussi verser une flasque d'huile sur le sol pour couvrir une zone de 1,50 m x 1,50 m, à condition que la surface soit plane. Une fois allumée, l'huile brûle pendant 2 rounds et inflige 5 points de dégâts de feu à toute créature qui pénètre dans la zone ou qui y termine son tour. Une créature ne peut prendre ces dégâts qu'une fois par tour.",
  },
  {
    name: "Kit d'escalade",
    category: "Équipement d'aventurier",
    price: { po: 25, pa: 0, pc: 0 },
    weight: 6,
    description:
      "Ce kit comprend des pitons spéciaux, des pointes pour les chaussures, des gants et un harnais. Vous pouvez utiliser le matériel d'escalade pour vous accrocher au prix d'une action ; une fois fait, vous ne pouvez pas tomber de plus de 7,50 mètres de l'endroit où vous êtes ancré, et ne pouvez pas monter de plus de 7,50 mètres de ce point sans devoir défaire l'ancrage.",
  },
  {
    name: "Lampe",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 5, pc: 0 },
    weight: 0.5,
  },
  {
    name: "Lanterne à capote",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 1,
    description:
      "Une lanterne à capote projette une lumière vive dans un rayon de 9 mètres et une lumière faible sur 9 mètres supplémentaires. Une fois allumée, elle brûle pendant 6 heures tout en consommant une flasque d'huile (50 cl). Au prix d'une action, vous pouvez ajuster la capote, ce qui réduit la lumière à une lumière faible dans un rayon de 1,50 mètre.",
  },
  {
    name: "Lanterne sourde",
    category: "Équipement d'aventurier",
    price: { po: 10, pa: 0, pc: 0 },
    weight: 1,
    description:
      "Une lanterne sourde projette une lumière vive dans un cône de 18 mètres et une lumière faible sur 18 mètres supplémentaires. Une fois allumée, elle brûle pendant 6 heures tout en consommant une flasque d'huile (50 cl).",
  },
  {
    name: "Livre",
    category: "Équipement d'aventurier",
    price: { po: 25, pa: 0, pc: 0 },
    weight: 2.5,
    description:
      "Un livre peut contenir de la poésie, des récits historiques, des informations relatives à un domaine particulier de connaissance, des diagrammes et des notes sur une invention gnome, ou n'importe quoi d'autre qui peut être représenté en utilisant du texte ou des images. Un livre de sorts est un grimoire.",
  },
  {
    name: "Longue-vue",
    category: "Équipement d'aventurier",
    price: { po: 1000, pa: 0, pc: 0 },
    weight: 0.5,
    description:
      "Les objets vus à travers une longue-vue sont amplifiés de deux fois leur taille.",
  },
  {
    name: "Loupe",
    category: "Équipement d'aventurier",
    price: { po: 100, pa: 0, pc: 0 },
    weight: 0,
    description:
      "Ce verre permet un examen plus minutieux des petits objets. Il est également utile comme substitut au silex pour allumer un feu. Allumer un feu avec une loupe nécessite une lumière aussi vive que celle du soleil pour faire prendre l'amadou, et environ 5 minutes pour que le feu prenne. Une loupe donne un avantage aux jets de caractéristique pour évaluer ou inspecter un objet de petite taille ou très détaillé.",
  },
  {
    name: "Marteau",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 1.5,
  },
  {
    name: "Marteau de forgeron",
    category: "Équipement d'aventurier",
    price: { po: 2, pa: 0, pc: 0 },
    weight: 5,
  },
  {
    name: "Matériel de pêche",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 2,
    description:
      "Ce kit comprend une tige en bois, une ligne de soie, des flotteurs en liège, des hameçons en acier, des plombs, des leurres en velours et un petit filet.",
  },
  {
    name: "Menottes",
    category: "Équipement d'aventurier",
    price: { po: 2, pa: 0, pc: 0 },
    weight: 3,
    description:
      "Ces menottes métalliques servent pour une créature de taille Petite ou Moyenne. Se libérer des menottes nécessite un jet de Dextérité DD 20 réussi. Briser les menottes nécessite un jet de Force DD 20 réussi. Chaque paire de menottes est livrée avec une clé. Sans la clé, une créature qui maîtrise les outils de voleur peut ouvrir les menottes en réussissant un jet de Dextérité DD 15. Les menottes ont 15 points de vie.",
  },
  {
    name: "Miroir en acier",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 0.25,
  },
  {
    name: "Munitions - Aiguilles de sarbacane (50)",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 0.5,
  },
  {
    name: "Munitions - Billes de fronde (20)",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 4 },
    weight: 0.75,
  },
  {
    name: "Munitions - Carreaux d'arbalète (20)",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 0.75,
  },
  {
    name: "Munitions - Flèches (20)",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 0.5,
  },
  {
    name: "Palan",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 2.5,
    description:
      "Ensemble de poulies avec un câble et un crochet pour attacher des objets, un palan permet de hisser jusqu'à quatre fois le poids que vous pouvez normalement soulever.",
  },
  {
    name: "Panier",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 4, pc: 0 },
    weight: 1,
  },
  {
    name: "Papier (une feuille)",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 2, pc: 0 },
    weight: 0,
  },
  {
    name: "Parchemin (une feuille)",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 1, pc: 0 },
    weight: 0,
  },
  {
    name: "Parfum (fiole)",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 0,
  },
  {
    name: "Pelle",
    category: "Équipement d'aventurier",
    price: { po: 2, pa: 0, pc: 0 },
    weight: 2.5,
  },
  {
    name: "Perche (3 m)",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 5 },
    weight: 3.5,
  },
  {
    name: "Pied-de-biche",
    category: "Équipement d'aventurier",
    price: { po: 2, pa: 0, pc: 0 },
    weight: 2.5,
    description:
      "Un pied de biche octroie un avantage aux jets de Force lorsque le levier du pied de biche peut être utilisé.",
  },
  {
    name: "Piège à mâchoires",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 12.5,
    description:
      "Lorsque vous utilisez votre action pour l'installer, ce piège forme un anneau d'acier en dents de scie qui se referme lorsqu'une créature marche sur la plaque de pression située au centre. Le piège est fixé par une lourde chaîne à un objet immobile, comme un arbre ou un pic enfoncé dans le sol. Une créature qui marche sur la plaque doit réussir un jet de sauvegarde de Dextérité DD 13 ou prendre 1d4 points de dégâts perforants et devoir s'arrêter de bouger. Par la suite, tant que la créature ne s'échappe pas du piège, son mouvement est limité par la longueur de la chaîne (généralement un mètre de long). Une créature peut utiliser son action pour faire un jet de Force DD 13 pour se libérer ou libérer une autre créature à sa portée en cas de succès. Chaque échec inflige 1 point de dégâts perforants à la créature piégée.",
  },
  {
    name: "Pierre à aiguiser",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 1 },
    weight: 0.5,
  },
  {
    name: "Pioche de mineur",
    category: "Équipement d'aventurier",
    price: { po: 2, pa: 0, pc: 0 },
    weight: 5,
  },
  {
    name: "Piton",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 5 },
    weight: 0.125,
  },
  {
    name: "Plume d'écriture",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 2 },
    weight: 0,
  },
  {
    name: "Pointes en fer (10)",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 2.5,
  },
  {
    name: "Poison (fiole)",
    category: "Équipement d'aventurier",
    price: { po: 100, pa: 0, pc: 0 },
    weight: 0,
    description:
      "Vous pouvez utiliser le poison de cette fiole pour couvrir une arme tranchante ou perforante, ou jusqu'à trois munitions. Appliquer le poison prend une action. Une créature touchée par une arme ou une munition empoisonnée doit réussir un jet de sauvegarde de Constitution DD 10 ou prendre 1d4 points de dégâts de poison. Une fois appliqué, le poison conserve son activité 1 minute avant de sécher.",
  },
  {
    name: "Pot en fer",
    category: "Équipement d'aventurier",
    price: { po: 2, pa: 0, pc: 0 },
    weight: 5,
  },
  {
    name: "Potion de guérison",
    category: "Équipement d'aventurier",
    price: { po: 50, pa: 0, pc: 0 },
    weight: 0.25,
    description:
      "Un personnage qui boit le liquide magique rouge de ce flacon reprend 2d4 + 2 points de vie. Boire ou administrer une potion prend une action.",
  },
  {
    name: "Rations (1 jour)",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 5, pc: 0 },
    weight: 1,
    description:
      "Aliments compacts et secs appropriés pour un voyage prolongé, les rations incluent du bœuf séché, des fruits secs, des biscuits et des noix.",
  },
  {
    name: "Robes",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 2,
  },
  {
    name: "Sablier",
    category: "Équipement d'aventurier",
    price: { po: 25, pa: 0, pc: 0 },
    weight: 0.5,
  },
  {
    name: "Sac",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 1 },
    weight: 0.25,
  },
  {
    name: "Sac à dos",
    category: "Équipement d'aventurier",
    price: { po: 2, pa: 0, pc: 0 },
    weight: 2.5,
  },
  {
    name: "Sac de couchage",
    category: "Équipement d'aventurier",
    price: { po: 1, pa: 0, pc: 0 },
    weight: 3.5,
  },
  {
    name: "Sacoche",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 5, pc: 0 },
    weight: 0.5,
    description:
      "Une sacoche en tissu ou en cuir peut contenir jusqu'à 20 billes de fronde ou 50 aiguilles de sarbacane, entre autres choses. Une sacoche compartimentée pour abriter des composantes de sorts est appelée une sacoche à composantes.",
  },
  {
    name: "Sacoche à composantes",
    category: "Équipement d'aventurier",
    price: { po: 25, pa: 0, pc: 0 },
    weight: 1,
    description:
      "Une sacoche à composantes est une petite sacoche étanche en cuir qui possède des compartiments pour contenir toutes les composantes matérielles et autres éléments spéciaux dont vous avez besoin pour lancer vos sorts, à exception des composantes qui ont un coût spécifique (comme indiqué dans la description des sorts).",
  },
  {
    name: "Savon",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 2 },
    weight: 0,
  },
  {
    name: "Seau",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 5 },
    weight: 1,
  },
  {
    name: "Sifflet",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 5 },
    weight: 0,
  },
  {
    name: "Symbole sacré - Amulette",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 0.5,
    description:
      "Un symbole sacré est une représentation d'un dieu ou d'un panthéon. Cela peut être une amulette avec un symbole représentant une divinité, ce même symbole gravé ou incrusté tel un emblème sur un bouclier, ou une toute petite boîte renfermant le fragment d'une relique sacrée. Un clerc ou paladin peut utiliser un symbole sacré comme focaliseur d'incantation. Pour utiliser le symbole de cette manière, le lanceur doit le porter visiblement, en main ou sur un bouclier.",
  },
  {
    name: "Symbole sacré - Emblème",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 0,
    description:
      "Un symbole sacré est une représentation d'un dieu ou d'un panthéon. Cela peut être une amulette avec un symbole représentant une divinité, ce même symbole gravé ou incrusté tel un emblème sur un bouclier, ou une toute petite boîte renfermant le fragment d'une relique sacrée. Un clerc ou paladin peut utiliser un symbole sacré comme focaliseur d'incantation. Pour utiliser le symbole de cette manière, le lanceur doit le porter visiblement, en main ou sur un bouclier.",
  },
  {
    name: "Symbole sacré - Reliquaire",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 1,
    description:
      "Un symbole sacré est une représentation d'un dieu ou d'un panthéon. Cela peut être une amulette avec un symbole représentant une divinité, ce même symbole gravé ou incrusté tel un emblème sur un bouclier, ou une toute petite boîte renfermant le fragment d'une relique sacrée. Un clerc ou paladin peut utiliser un symbole sacré comme focaliseur d'incantation. Pour utiliser le symbole de cette manière, le lanceur doit le porter visiblement, en main ou sur un bouclier.",
  },
  {
    name: "Tente",
    category: "Équipement d'aventurier",
    price: { po: 2, pa: 0, pc: 0 },
    weight: 10,
    description:
      "Abri de toile simple et portable, une tente peut accueillir deux personnes.",
  },
  {
    name: "Tonneau",
    category: "Équipement d'aventurier",
    price: { po: 2, pa: 0, pc: 0 },
    weight: 35,
  },
  {
    name: "Torche",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 1 },
    weight: 0.5,
    description:
      "Une torche brûle pendant 1 heure, projetant une lumière vive dans un rayon de 6 mètres et une lumière faible sur 6 mètres supplémentaires. Si vous effectuez une attaque au corps à corps avec une torche enflammée et touchez, vous infligez 1 point de dégât de feu.",
  },
  {
    name: "Trousse de soins",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 1.5,
    description:
      "Ce kit est un étui en cuir qui contient des bandages, des pommades et des attelles. Le kit permet dix utilisations. Au prix d'une action, vous pouvez dépenser une utilisation du kit pour stabiliser une créature qui a 0 pv sans avoir à réaliser un jet de Sagesse (Médecine).",
  },
  {
    name: "Vêtements, communs",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 5, pc: 0 },
    weight: 1.5,
  },
  {
    name: "Vêtements, costume",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 2,
  },
  {
    name: "Vêtements, fins",
    category: "Équipement d'aventurier",
    price: { po: 15, pa: 0, pc: 0 },
    weight: 3,
  },
  {
    name: "Vêtements, voyage",
    category: "Équipement d'aventurier",
    price: { po: 2, pa: 0, pc: 0 },
    weight: 2,
  },
  {
    name: "Boîte pour l'aumône",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 0 },
    weight: 0.5,
  },
  {
    name: "Bâtonnet d'encens",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 1 },
    weight: 0,
  },
  {
    name: "Encensoir",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 5, pc: 0 },
    weight: 0.5,
  },
  {
    name: "Habits de cérémonie",
    category: "Équipement d'aventurier",
    price: { po: 5, pa: 0, pc: 0 },
    weight: 2,
  },
  {
    name: "Petit sac de sable",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 1 },
    weight: 0.5,
  },
  {
    name: "Petit couteau",
    category: "Équipement d'aventurier",
    price: { po: 0, pa: 0, pc: 2 },
    weight: 0.25,
  },
  {
    name: "Sac d'explorateur",
    category: "Équipement d'aventurier",
    price: { po: 10, pa: 0, pc: 0 },
    weight: 0,
    description:
      "Sac à dos, Sac de couchage, Gamelle, Boite d'allume-feu, Torche (x10), Rations (1 jour) (x10), Gourde (pleine), Corde en chanvre (15 m)",
  },
  {
    name: "Sac d'artiste",
    category: "Équipement d'aventurier",
    price: { po: 40, pa: 0, pc: 0 },
    weight: 0,
    description:
      "Sac à dos, Sac de couchage, Vêtements, costume (x2), Bougie (x5), Rations (1 jour) (x5), Gourde (pleine), Kit de déguisement",
  },
  {
    name: "Sac d'ecclésiastique",
    category: "Équipement d'aventurier",
    price: { po: 19, pa: 0, pc: 0 },
    weight: 0,
    description:
      "Sac à dos, Couverture, Bougie (x10), Boite d'allume-feu, Boîte pour l'aumône, Bâtonnet d'encens (x2), Encensoir, Habits de cérémonie, Rations (1 jour) (x2), Gourde (pleine)",
  },
  {
    name: "Sac d'exploration souterraine",
    category: "Équipement d'aventurier",
    price: { po: 12, pa: 0, pc: 0 },
    weight: 0,
    description:
      "Sac à dos, Pied-de-biche, Marteau, Piton (x10), Torche (x10), Boite d'allume-feu, Rations (1 jour) (x10), Gourde (pleine), Corde en chanvre (15 m)",
  },
  {
    name: "Sac d'érudit",
    category: "Équipement d'aventurier",
    price: { po: 40, pa: 0, pc: 0 },
    weight: 0,
    description:
      "Sac à dos, Livre, Encre (bouteille de 30 ml), Plume d'écriture, Parchemin (une feuille) (x10), Petit sac de sable, Petit couteau",
  },
  {
    name: "Sac de cambrioleur",
    category: "Équipement d'aventurier",
    price: { po: 16, pa: 0, pc: 0 },
    weight: 0,
    description:
      "Sac à dos, Billes (sac de 1000), Chaîne (3 m), Cloche, Bougie (x5), Pied-de-biche, Marteau, Piton (x10), Lanterne à capote, Huile (flasque) (x2), Rations (1 jour) (x5), Boite d'allume-feu, Gourde (pleine), Corde en chanvre (15 m)",
  },
  {
    name: "Sac de diplomate",
    category: "Équipement d'aventurier",
    price: { po: 39, pa: 0, pc: 0 },
    weight: 0,
    description:
      "Coffre, Étui à cartes ou parchemins (x2), Vêtements, fins, Encre (bouteille de 30 ml), Plume d'écriture, Lampe, Huile (flasque) (x2), Papier (une feuille) (x5), Parfum (fiole), Cire à cacheter, Savon",
  },
]

export const ADVENTURING_GEAR: Record<string, AdventuringGear> = {}

rawAdventuringGear.forEach((gear) => {
  ADVENTURING_GEAR[gear.name] = gear
})
