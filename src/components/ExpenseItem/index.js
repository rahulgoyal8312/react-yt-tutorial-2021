import { useHistory } from "react-router-dom"

const ExpenseItem = ({ item, deleteHandler, ...rest }) => {
    const history = useHistory()

    const getMonthName = m => {
        let month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return month[m]
    }

    // Add Event Listeners for Delete and Edit

    const navigateTo = () => {
        history.push(`/edit/${item.id}`)
    }

    return (
        <li className="flexbox flexbox-justify-between">
            <div className="flexbox">
                <div className="flexbox flexbox-column flexbox-align-center date">
                    <div className="month">{getMonthName(item.date.getMonth())}</div>
                    <div className="day">{item.date.getDate()}</div>
                </div>
                <h3 className="title">{item.title}</h3>
            </div>
            <div className="flexbox flexbox-align-center">
                <div className="pill">{item.amount} INR</div>
                <button onClick={navigateTo} className="actions">
                    <span className="material-icons edit">edit</span>
                </button>
                <button onClick={() => deleteHandler(item.id)} className="actions">
                    <span className="material-icons delete">delete</span>
                </button>
            </div>
        </li>
    )
}

export default ExpenseItem