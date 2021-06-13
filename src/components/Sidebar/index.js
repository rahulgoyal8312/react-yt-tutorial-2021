import React from "react"
import SidebarListItem from "./SidebarListItem"

function SidebarComponent({ sidebarList }) {

    return (
        <div className="sidebar-container">
            <div className="sidebar-container__brand">
                Expense Tracker
            </div>
            <div className="sidebar-container__list">
                <ul>
                    {
                        sidebarList.map((item, index) => {
                            return(
                                <SidebarListItem
                                key={index} 
                                item={item}/>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SidebarComponent