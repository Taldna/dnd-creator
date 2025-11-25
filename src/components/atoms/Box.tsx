import type { ReactNode } from "react";

export default function Box({children, className, id}: {children?: ReactNode, className?: string, id?: string}) {
    return(
        <div className={"Box " + className + " border-3 border-gray-500 rounded-xl p-4"} id={id}>
            {children}
        </div>
    )
}