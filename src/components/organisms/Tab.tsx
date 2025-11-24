import { useState } from "react"
import type { TabItem } from "../../types/utility/TabItem"

import TabNavbar from "../molecules/TabNavbar"
import TabContent from "../molecules/TabContent"

/**
 * @name Tab
 * @description Component used to display a tabbed interface with multiple items.
 * @prop items: Array of TabItem types describing the content and name of the tabs
 * @returns A React component that renders a tabbed interface with navigation and content.
 */
export default function Tab({items}: {items: TabItem[]}) {

    const [activeTab, setActiveTab] = useState(0)

    const handleSelectedTab = (nextTab: number) => {
        setActiveTab(nextTab)
    }

    return(
        <div id="Tab" className="flex flex-1 flex-col overflow-hidden">
            
            {/* Tab */}
            <TabNavbar items={items} activeTab={activeTab} onTabClick={handleSelectedTab} />
            
            {/* Content */}
            <TabContent items={items} activeTab={activeTab} />
        </div>
    )
}