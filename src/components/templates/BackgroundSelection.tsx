"use client"

import { useState } from "react"

import { BACKGROUNDS } from "../../data/backgrounds"

import Box from "../atoms/Box"
import Title from "../atoms/Title"
import PageLink from "../atoms/PageLink"
import type { Background } from "../../types/data/background"
import PrimaryButton from "../atoms/PrimaryButton"
import AddButton from "../atoms/AddButton"
import BackgroundDetails from "../organisms/BackgroundDetails"

export default function BackgroundSelection({
  setBackground,
}: {
  setBackground: (background: Background) => void
}) {
  const [selectedBg, setSelectedBg] = useState(-1)
  const [detailsBackground, setDetailsBackground] = useState<Background | null>(
    null
  )

  return (
    <main className="h-screen w-screen flex flex-col gap-6 items-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-auto relative">
      <Title name="Sélection des Historiques" />
      <Box className="size-9/10">
        <div className="flex flex-row gap-2 w-full h-full">
          <div className="basis-1/6 bg-black/30 gap-2 flex flex-col overflow-auto rounded-lg border-3 border-gray-500/30 p-2">
            {BACKGROUNDS.map((background, index) => {
              return (
                <PageLink
                  key={"bg-link-" + index}
                  href={"#" + background.name}
                  className={`rounded-lg p-2 cursor-pointer ${
                    selectedBg === index
                      ? "bg-red-500/30 hover:bg-red-500/60"
                      : "bg-gray-500/30 hover:bg-gray-500/60"
                  }`}
                >
                  {background.name}
                </PageLink>
              )
            })}
          </div>

          <div className="basis-5/6 flex bg-black/30 flex-col items-center overflow-auto gap-2 pb-4 rounded-lg border-3 border-gray-500/30 p-2">
            {BACKGROUNDS.map((background, index) => {
              return (
                <div
                  key={"bg-" + index}
                  id={background.name}
                  onClick={() => setSelectedBg(index)}
                  className={`flex flex-row rounded-lg bg-gray-500/30 border-2 cursor-pointer relative ${
                    selectedBg === index
                      ? "border-red-800/60 text-red-800"
                      : "border-gray-500/30 text-white"
                  }`}
                >
                  <div className="w-1/2 flex flex-col p-2">
                    <h3
                      className={"text-3xl font-bold mb-6"}
                      key={"bg-name-" + index}
                    >
                      {background.name}
                    </h3>
                    <p className="text-white" key={"bg-desc-" + index}>
                      {background.description}
                    </p>
                  </div>

                  <img
                    key={"bg-img-" + index}
                    src={background.image}
                    alt={background.name}
                    className="w-1/2 object-cover object-center rounded-r-lg"
                  />
                  <div className="absolute top-1 right-1">
                    <AddButton
                      onClick={() => setDetailsBackground(background)}
                    />
                  </div>
                </div>
              )
            })}
            {selectedBg !== -1 && (
            <div className="absolute bottom-10">
              <PrimaryButton
                onClick={() => {
                  console.info(
                    `Historique "${BACKGROUNDS[selectedBg].name}" sélectionné !`
                  )
                  setBackground(BACKGROUNDS[selectedBg])
                }}
              >
                Choisir
              </PrimaryButton>
            </div>
            )}
          </div>
        </div>
      </Box>

      {detailsBackground && (
        <>
          <div
            className="fixed inset-0 bg-black/70 z-40"
            onClick={() => setDetailsBackground(null)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <BackgroundDetails
              backgroundItem={detailsBackground}
              onClose={() => setDetailsBackground(null)}
            />
          </div>
        </>
      )}
    </main>
  )
}
