"use client"

import { useState } from "react"

import { BACKGROUNDS } from "../../data/backgrounds"

import Box from "../atoms/Box"
import Title from "../atoms/Title"
import PageLink from "../atoms/PageLink"
import type { Background } from "../../types/data/background"

export default function BackgroundSelection({setBackground}: {setBackground: (background: Background) => void}) {
    var [selectedBg, setSelectedBg] = useState(-1);

    return(
        <main className="h-screen w-screen flex flex-col gap-6 items-center text-white p-6 bg-[url(/background_scale.png)] bg-cover overflow-auto">
            <Title className="h-1/10" name="Sélection des Origines" />
            <div className="size-9/10 flex flex-row gap-2">
                <Box className="basis-1/6 h-full gap-2 flex flex-col overflow-auto">
                    {BACKGROUNDS.map((background, index) => { return (
                        <>
                            <PageLink 
                                key={"bg-link-" + index} 
                                href={"#" + background.name} 
                                className={`rounded-lg p-2 cursor-pointer ${selectedBg === index ? "bg-red-500/30 hover:bg-red-500/60" : "bg-gray-500/30 hover:bg-gray-500/60"}`}
                            >{background.name}</PageLink>
                        </>
                    )})}                
                </Box>

                <Box className="basis-5/6 flex flex-col items-center overflow-auto gap-2">
                    {
                        BACKGROUNDS.map((background, index) => {
                            return (
                                <>
                                    <div 
                                        key={"bg-" + index} 
                                        id={background.name} 
                                        onClick={() => setSelectedBg(index)}
                                        onDoubleClick={() => {
                                            console.info(`Origine "${background.name}" sélectionnée !`)
                                            setBackground(background)
                                        }}
                                        className={`flex flex-row rounded-lg bg-gray-500/30 border-2 cursor-pointer ${selectedBg === index ? "border-red-500/30" : "border-gray-500/30"}`}
                                    >
                                        <div className="w-1/2 flex flex-col p-2">
                                            <h3 key={"bg-name-" + index}>{background.name}</h3>
                                            <p key={"bg-desc-" + index}>{background.description}</p>
                                        </div>

                                        <img key={"bg-img-" + index} src={background.image} alt={background.name} className="w-1/2 object-cover object-center rounded-r-lg" />
                                    </div>
                                </>
                            )
                        })
                    }
                </Box>
            </div>
        </main>
    )
}