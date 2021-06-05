import React from "react"
import SidebarListItem from "./SidebarListItem"

function SidebarComponent({ sidebarList, activeItem, itemClick }) {
    // const sidebarListItems = sidebarList.map((item, index) => (<SidebarListItem item={item}/>))
    const itemClickHandler = id => {
        // console.log(`Clicked Id: ${id}`)
        itemClick(id);
    }

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
                                <SidebarListItem 
                                active={activeItem === item.id}
                                onItemClick={itemClickHandler} 
                                key={index} item={item}/>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SidebarComponent