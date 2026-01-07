import type { TabItem } from "../../types/utility/TabItem"

/**
 * @name TabNavbar
 * @description Component used inside the Tab component to be used as a navbar to navigate between the tabs
 * @prop items: Array of TabItem type used to define the tabs names
 * @prop activeTab: the index of the current active tab (used to display a specific style)
 * @prop onTabClick: the function describing the action happening when clicking on an element of the navbar
 */
export default function TabNavbar({items, activeTab, onTabClick}: {items: TabItem[], activeTab: number, onTabClick: (nextIndex: number) => void}) {
    return (
      <div id="Tab-navbar" className="w-full flex p-2 gap-4 overflow-hidden">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={
                "p-2 cursor-pointer border-b-3 transition ease-in hover:bg-white/30 hover:scale-110" +
                (activeTab == index ? " border-red-800" : "")
              }
              onClick={() => onTabClick(index)}
            >
              <h4 className="text-xl font-semibold">{item.name}</h4>
            </div>
          )
        })}
      </div>
    )
}