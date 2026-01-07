# DND Creator - Character Builder

Une application web interactive pour créer des personnages Dungeons & Dragons, basée sur les règles DND 5e 2024.

## Description du Projet

L'application propose une expérience étape par étape avec sélection des caractéristiques, équipements, compétences et personnalisation du personnage.

---

## Fonctionnalités

### Écrans du Character Builder

#### 1. Accueil

L'écran d'accueil contient un titre et un bouton permettant de lancer la création du personnage.

#### 2. Sélection des Classes

La sélection de classe propose une liste des classes disponibles à sélectionner. Une fois sélectionnée, on a accès aux détails de chaque classe :

- Informations générales
- Description
- Aptitudes
- Sous-classes
- Un bouton de choix qui fait passer à l'étape suivante

#### 3. Sélection des Espèces

La sélection d'espèce contient une liste avec la description et les traits de chaque espèce. Lorsqu'on sélectionne une espèce, les détails s'affichent et un bouton permet de confirmer le choix de l'espèce.

#### 4. Sélection de l'Historique

La sélection des historiques propose une liste déroulante et un bouton de sélection. Un bouton de détail permet de voir les caractéristiques générales de chaque historique avant de faire son choix.

#### 5. Sélection des Caractéristiques

La sélection des caractéristiques permet de placer les points de valeurs brutes et bonus d'historique selon les 6 caractéristiques :

- Force
- Dextérité
- Constitution
- Intelligence
- Sagesse
- Charisme

Pour chaque caractéristique, on peut voir :

- La valeur finale
- Le modificateur résultant

#### 6. Sélection des Maîtrises

La sélection des maîtrises permet de voir :

- Les maîtrises acquises
- Les maîtrises disponibles à sélectionner
- Les maîtrises totales une fois sélectionnées

#### 7. Sélection de l'Équipement

La sélection d'équipement permet de choisir selon les options d'historique et de classe choisis. Il est possible d'acheter une partie de l'équipement dans le shop pour le compléter. Cet écran possède aussi une partie de sélection des armures et boucliers.

#### 8. Personnalisation du Personnage

La personnalisation permet de choisir :

- Le nom du personnage
- L'apparence physique
- La taille (selon l'espèce)
- Le passé du personnage avec des propositions de passé préfaites
- L'alignement
- Les langues parlées

#### 9. Téléchargement du PDF

La page téléchargement du PDF contient :

- Un bouton retour à l'accueil
- L'exécution du téléchargement en fond

---

## Architecture du Projet

### Structure des Dossiers

```
src/
├── components/
│   ├── atoms/          # Composants de base réutilisables
│   ├── molecules/      # Composants composés
│   ├── organisms/      # Composants complexes
│   └── templates/      # Templates de pages
├── data/               # Données statiques et constantes
├── hooks/              # Custom React hooks
├── pages/              # Pages principales de l'application
├── types/              # Définitions TypeScript
│   ├── data/           # Types pour les données
│   └── utility/        # Types utilitaires
└── styles/             # Styles CSS global
```

### Composants Clés

- **Atoms** : D20, Buttons (Primary, Rectangle, Diamond, Add), Box (Square, Rectangle, Diamond), Cards (ClassCard, EquipmentCard), HoverDescription, P, PageLink, Title
- **Molecules** : ClassesGrid, EquipmentList, TabNavbar, TabContent
- **Organisms** : ClassDetails, BackgroundDetails, Shop, Tab
- **Templates** : Character builder steps (ClassSelection, SpeciesSelection, BackgroundSelection, AbilitiesSelection, EquipmentSelection, ProficienciesSelection, DownloadPDF)

### Hooks Personnalisés

- `useAbilitiesSelection` - Gestion de la sélection des compétences
- `useEquipmentSelection` - Gestion de l'équipement sélectionné
- `useProficienciesSelection` - Gestion des proficiencies
- `useShop` - Gestion du système de shop

---

## Technologies Utilisées

- **Framework** : React 18+
- **Langage** : TypeScript
- **Build Tool** : Vite
- **Styling** : SCSS/CSS Modules
- **Linting** : ESLint

---

## Installation et Démarrage

### Prérequis

- Node.js (v18+)
- npm (gestionnaire de paquets)

### Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

---

**Dernier mise à jour** : Janvier 2026
