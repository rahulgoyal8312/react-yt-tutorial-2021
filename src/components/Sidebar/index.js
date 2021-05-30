import React from "react"
import SidebarListItem from "./SidebarListItem"

function SidebarComponent() {

    const sidebarList = [
      {
        name: "Expenses",
        path: "/",
        icon: "insights"
      },
      {
        name: "Add Expense",
        path: "/add",
        icon: "note_add"
      },
      {
        name: "Analytics",
        path: "/analytics",
        icon: "analytics"
      }
    ]

    // const sidebarListItems = sidebarList.map((item, index) => (<SidebarListItem item={item}/>))

    return (
        <div className="sidebar-container">
            <div className="sidebar-container__brand">
                Expense Tracker
            </div>
            <div className="sidebar-container__list">
                <ul>
                    {/* <SidebarListItem item={sidebarList[0]}/>
                    <SidebarListItem item={sidebarList[1]}/> */}
                    {/* {sidebarListItems} */}
                    {
                        sidebarList.map((item, index) => {
                            return(
                                <SidebarListItem key={index} item={item}/>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SidebarComponent