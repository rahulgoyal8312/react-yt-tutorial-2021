const SidebarListItem = ({ item, onItemClick, active, ...rest }) => {

    const clickHandler = event => {
        event.preventDefault();
        // console.log("Clicked!")
        onItemClick(item.id)
    }

    return (
        <li>
            <a href={item.path} onClick={clickHandler} className={active ? "active" : ""}>
                <span className="material-icons">{item.icon}</span>
                <span>{item.name}</span>
            </a>
        </li>
    )
}

export default SidebarListItem