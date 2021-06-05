import ExpenseItem from "../../components/ExpenseItem"

const Expenses = () => {

    let expenseList = [
        {
            id: 1,
            title: "Grocery",
            amount: 324.44,
            date: new Date(2021, 4, 5),
            description: "",
            type: 2
        },
        {
            id: 2,
            title: "Mobile Bill",
            amount: 470,
            date: new Date(2021, 4, 10),
            description: "",
            type: 1
        }
    ]

    return (
        <div className="layout-container__wrapper">
            <div className="flexbox flexbox-justify-between flexbox-align-baseline">
                <h3>Expenses</h3>
                <span className="pill info">INR 0.00</span>
            </div>
            <hr />
            <div className="layout-container__expenses">
                <ul>
                    {
                        expenseList && expenseList.length && expenseList.map((item, index) => {
                            return (<ExpenseItem item={item} key={index}/>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Expenses