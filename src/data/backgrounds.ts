import type { Background } from "../types/data/background"
import type { Feat } from "../types/data/feat"

import { FEATS } from "./feats"

/**
 * Find a specific feat by its name and return it with a new name
 * 
 * @param feats 
 * @param name 
 * @param newName 
 * @returns 
 */
function findAndModifyFeat(feats: Feat[], name: string, newName: string): Feat  {
    const feat: Feat = feats.find((e) => e.name == name)!
    return {...feat, name: newName}
}

const rawBackgrounds: Background[] = [
    {
        name: "Acolyte",
        abilityScore: ["Intelligence", "Sagesse", "Charisme"],
        feat: findAndModifyFeat(FEATS, "Initié à la magie", "Initié à la magie (Clerc)"),
        proficiencies: ["Intuition", "Religion"],
        toolProficiency: "Matériel de calligraphe",
        equipment: ["Matériel de calligraphe, livre de prières, symbole sacré, parchemin (10 feuilles), robe, 8 po", "50 po"],
        description: "Vous étiez au service d'un temple, situé en ville ou isolé dans quelques bosquet sacré. Vous y accomplissiez des rites religieux en l'honneur d'une divinité ou d'un panthéon. Vous avez servi sous la tutelle d'un prêtre et étudié la religion. Grâce à l'instruction prodiguée par ce prêtre et à votre propre dévotion, vous avez également appris à canaliser un minimum de puissance divine au service de votre lieu de culte et des fidèles qui venaient y prier.",
    },
    {
        name: "Artisan",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: FEATS.find((e) => e.name == "Façonneur")!,
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    },
    {
        name: "Artiste",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: FEATS.find((e) => e.name == "Musicien")!,
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    },
    {
        name: "Charlatan",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: FEATS.find((e) => e.name == "Doué")!,
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    },
    {
        name: "Criminel",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: FEATS.find((e) => e.name == "Vigilant")!,
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    },
    {
        name: "Ermite",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: FEATS.find((e) => e.name == "Guérisseur")!,
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    },
    {
        name: "Fermier",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: FEATS.find((e) => e.name == "Robuste")!,
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    },
    {
        name: "Garde",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: FEATS.find((e) => e.name == "Vigilant")!,
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    },
    {
        name: "Guide",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: findAndModifyFeat(FEATS, "Initié à la magie", "Initié à la magie (Druide)"),
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    },
    {
        name: "Marchand",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: FEATS.find((e) => e.name == "Chanceux")!,
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    },
    {
        name: "Marin",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: FEATS.find((e) => e.name == "Bagarreur de tavernes")!,
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    },
    {
        name: "Noble",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: FEATS.find((e) => e.name == "Doué")!,
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    },
    {
        name: "Sage",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: findAndModifyFeat(FEATS, "Initié à la magie", "Initié à la magie (Magicien)"),
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    },
    {
        name: "Scribe",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: FEATS.find((e) => e.name == "Doué")!,
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    },
    {
        name: "Soldat",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: FEATS.find((e) => e.name == "Sauvagerie martiale")!,
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    },
    {
        name: "Voyageur",
        abilityScore: [],
        description: "Cupcake ipsum dolor sit amet. Tiramisu chupa chups halvah brownie gingerbread. Jelly beans tart ice cream donut marzipan cheesecake. Pie cake chupa chups lemon drops sweet roll pastry sweet caramels. Lollipop tiramisu sweet roll I love cotton candy marzipan. Wafer muffin gummi bears bonbon sugar plum cake soufflé cake. Gingerbread biscuit pastry jelly beans pie. Topping I love gummi bears chocolate I love sesame snaps cookie cotton candy.",
        feat: FEATS.find((e) => e.name == "Chanceux")!,
        proficiencies: [],
        toolProficiency: "",
        equipment: []
    }
]

const images = import.meta.glob("../assets/backgrounds/*.jpg", { eager: true, import: 'default' }) as Record<string, string>
const imagesMap : Record<string, string> = {}
const regex = /\/((?:\p{L}|\s|-|')+)\.jpg$/u

for (const path in images) {
    const match = path.match(regex)
    if (match) imagesMap[match[1]] = images[path]
}

export const BACKGROUNDS: Background[] = rawBackgrounds.map(bg => ({
    ...bg,
    image: imagesMap[bg.name]
}))