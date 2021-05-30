const SidebarListItem = ({ item, ...rest }) => (
    <li>
        <a href={item.path}>
            <span className="material-icons">{item.icon}</span>
            <span>{item.name}</span>
        </a>
    </li>
)

export default SidebarListItem