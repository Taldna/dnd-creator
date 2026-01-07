import type { ReactNode } from "react";


export default function P({className, children}: {className?: string, children:ReactNode}) {
    return(<p className={`indent-4 ${className}`}>{children}</p>)
}