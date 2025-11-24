import type { TabItem } from "../../types/utility/TabItem"

/**
 * @name TabContent
 * @description Component used inside the Tab component to dislay the actual content of the tabs
 * @prop items: Array of TabItem types describing the content of the tabs
 * @prop activeTab: the index of the current active tab to hide the others
 */
export default function TabContent({items, activeTab}: {items: TabItem[], activeTab: number}) {
    return(
        <div id="Tab-content" className="flex-1 p-3 overflow-scroll">
            <div className={"size-full flex" + ((items[activeTab].isRow)? " flex-row" : " flex-col")}>
                {items[activeTab].content}
            </div>
        </div>
    )
}