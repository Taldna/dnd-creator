import type { Class } from "../../types/data/class"
import Box from "../atoms/Box"
import ClassCard from "../atoms/ClassCard"

export default function ClassesGrid({classList, handleSelect}: {classList: Class[], handleSelect: (classItem: Class) => void}) {
    return (
      <Box className="w-4/5 m-auto grid lg:grid-cols-6 bg-black/30 sm:grid-cols-2 overflow-auto">
        {classList.map((item, index) => {
          return (
            <ClassCard
              classItem={item}
              key={index}
              handleSelect={handleSelect}
            />
          )
        })}
      </Box>
    )
}