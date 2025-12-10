import type { Class } from "../../types/data/class"

import { RxCross2 } from "react-icons/rx"
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi"

import { CLASSES } from "../../data/classes"

import P from "../atoms/P"
import Tab from "./Tab"
import Box from "../atoms/Box"
import EquipmentList from "../molecules/EquipmentList"

export default function ClassDetails({
  dndClass,
  handleClick,
}: {
  dndClass: Class
  handleClick: (classItem: Class | null) => void
}) {
  return (
    <div
      id="Class-details"
      className="w-full h-full flex items-center relative"
    >
      <TfiArrowCircleLeft
        className="m-auto text-5xl text-gray-500 cursor-pointer drop-shadow-md hover:text-white"
        onClick={() => {
          let index = CLASSES.findIndex((e) => e === dndClass)
          index = (index - 1 + CLASSES.length) % CLASSES.length
          handleClick(CLASSES[index])
        }}
      />

      <Box className="w-4/5 h-full">
        <div className="flex gap-6 h-full">
          <div
            onClick={() => handleClick(null)}
            className="absolute top-5 right-10 p-2 text-xl transition ease-in hover:scale-150 z-20"
          >
            <RxCross2 className="text-white" />
          </div>

          <div className="w-2/5 flex-shrink-0">
            <img
              src={dndClass.full_img}
              className="block w-auto h-full max-h-full object-contain sticky top-0"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4 overflow-hidden">
            <h1 className="text-4xl font-bold border-l-6 border-l-red-800 pl-4">
              {dndClass.name}
            </h1>

            <Tab
              items={[
                {
                  name: "Général",
                  isRow: false,
                  content: (
                    <>
                      <P>{dndClass.short_desc}</P>
                      <P>
                        <b>Caractéristique(s) principale(s) :</b>{" "}
                        {dndClass.primaryAbility.map(
                          (item, index, array) =>
                            item.name + (index + 1 < array.length ? " et " : "")
                        )}
                      </P>
                      <P>
                        <b>Dé de vie :</b> {dndClass.hitDice} par niveau de{" "}
                        {dndClass.name}
                      </P>
                      <P>
                        <b>Jets de sauvegarde :</b>{" "}
                        {`${dndClass.savingThrows[0].name} et ${dndClass.savingThrows[1].name}`}
                      </P>
                      <P>
                        <b>Maîtrises de compétence :</b>{" "}
                        <span className="italic">2 au choix parmi :</span>{" "}
                        {dndClass.skillProficiencies.map(
                          (item, index, array) =>
                            item.name + (index + 1 < array.length ? ", " : "")
                        )}
                      </P>
                      <P>
                        <b>Maîtrises d'arme :</b> {dndClass.weaponProficiencies}
                      </P>
                      <P>
                        <b>Formation aux armures :</b>{" "}
                        {dndClass.armorTraining.map(
                          (item, index, array) =>
                            item + (index + 1 < array.length ? ", " : "")
                        )}
                      </P>
                      <div className="pl-4">
                        <b>Équipement de départ :</b>{" "}
                        <EquipmentList equipmentOptions={dndClass.equipment} />
                      </div>
                    </>
                  ),
                },

                {
                  name: "Description",
                  isRow: false,
                  content: (
                    <>
                      {dndClass.description.map((item, index) => (
                        <P key={index}>{item}</P>
                      ))}
                    </>
                  ),
                },

                {
                  name: "Aptitudes",
                  isRow: false,
                  content: (
                    <>
                      <ul className="list-disc pl-6">
                        {dndClass.features.map((item, index) => (
                          <li className="py-1" key={index}>
                            <b>
                              Niveau {item.level} - {item.name} :
                            </b>{" "}
                            {item.description.map((desc, i) => (
                              <P key={i}>{desc}</P>
                            ))}
                          </li>
                        ))}
                      </ul>
                    </>
                  ),
                },

                {
                  name: "Sous-classes",
                  isRow: true,
                  content: (
                    <>
                      {dndClass.subclasses.map((sub, index) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center relative flex-none max-w-1/4"
                          >
                            <img
                              src={sub.image}
                              alt={sub.name}
                              className="block h-9/10 w-auto"
                            />
                            <div className="absolute bg-black/50 -bottom-2 flex p-2 border-2 border-gray-500 rounded-lg text-center">
                              <h1 className="text-xl font-semibold text-white">
                                {sub.name}
                              </h1>
                            </div>
                          </div>
                        )
                      })}
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </Box>

      <TfiArrowCircleRight
        className="m-auto text-5xl text-gray-500 cursor-pointer drop-shadow-md hover:text-white"
        onClick={() => {
          let index = CLASSES.findIndex((e) => e === dndClass)
          index = (index + 1) % CLASSES.length
          handleClick(CLASSES[index])
        }}
      />
    </div>
  )
}
