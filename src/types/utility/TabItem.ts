import type { ReactNode } from "react"

/**
 * @name TabItem
 * @description Used to describe the name and content of a single tab in a tabs navigation bar 
 */
export type TabItem = {
    name: string
    isRow: boolean    
    content: ReactNode
}