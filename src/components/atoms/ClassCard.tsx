import type { Class } from "../../types/data/class";

export default function ClassCard({classItem, handleSelect}: {classItem: Class, handleSelect: (classItem: Class) => void}) {
    return(
        <div className='max-w-md flex flex-col items-center rounded-xl p-3 relative transition ease-in-out hover:scale-110 hover:z-1' onClick={() => handleSelect(classItem)}>
            <img src={classItem.cut_img}  className='block rounded-lg'></img>
            
            <div className="absolute bg-black/50 -bottom-2 flex p-2 border-2 border-gray-500 rounded-lg">    
                <h1 className="text-2xl font-semibold text-white">{classItem.name}</h1>
            </div>
        </div>
    )
}