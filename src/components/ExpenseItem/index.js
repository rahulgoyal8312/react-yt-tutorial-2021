const ExpenseItem = ({ item, ...rest }) => {

    const getMonthName = m => {
        let month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return month[m]
    }

    return (
        <li className="flexbox flexbox-justify-between">
            <div className="flexbox">
                <div className="flexbox flexbox-column flexbox-align-center date">
                    <div className="month">{getMonthName(item.date.getMonth())}</div>
                    <div className="day">{item.date.getDate()}</div>
                </div>
                <h3 className="title">{item.name}</h3>
            </div>
            <div className="flexbox flexbox-align-center">
                <div className="pill">{item.amount} INR</div>
            </div>
        </li>
    )
}

export default ExpenseItem