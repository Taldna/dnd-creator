"use client"

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center text-white p-6 bg-[url(/background_scale.png)] bg-cover">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-12 drop-shadow-lg">
          Dongeons & Dragons Créateur de personnages
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 mx-8">
          Crée ton héros sur mesure pour partir à l’aventure : choisis une race, une classe, des caractéristiques et bien plus.
        </p>

        <Link
          to="/builder"
          className="inline-block px-6 py-3 bg-red-600 hover:bg-red-800 rounded-xl text-2xl font-semibold font-medium transition"
        >
          Commencer la création
        </Link>
      </div>
    </main>
  )
}
