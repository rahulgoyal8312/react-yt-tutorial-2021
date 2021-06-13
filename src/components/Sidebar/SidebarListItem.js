import { NavLink } from "react-router-dom";

const SidebarListItem = ({ item, ...rest }) => {

    return (
        <li>
            <NavLink to={item.path} activeClassName={"active"} exact>
                <span className="material-icons">{item.icon}</span>
                <span>{item.name}</span>
            </NavLink>
        </li>
    )
}

export default SidebarListItem