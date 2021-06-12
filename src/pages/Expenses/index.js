import { useState, useEffect } from "react"
import ExpenseItem from "../../components/ExpenseItem"
import { deleteExpense, fetchExpenses } from "../../services"

const Expenses = () => {

    // let expenseList = [
    //     {
    //         id: 1,
    //         title: "Grocery",
    //         amount: 324.44,
    //         date: new Date(2021, 4, 5),
    //         description: "",
    //         type: 2
    //     },
    //     {
    //         id: 2,
    //         title: "Mobile Bill",
    //         amount: 470,
    //         date: new Date(2021, 4, 10),
    //         description: "",
    //         type: 1
    //     }
    // ]

    const [expenseList, setExpenseList] = useState([])
    const [loading, setLoading] = useState(true)
    const [httpError, setHttpError] = useState()

    useEffect(() => {
        fetchExpenses()
        .then(data => {
            setLoading(false)
            setHttpError();
            setExpenseList(data)
        })
        .catch(error => {
            setLoading(false)
            setHttpError(error.message)
        })
    }, [])

    const deleteHandler = id => {
        let confirmValue = window.confirm("Are you sure?");

        if(confirmValue) {
            setLoading(true)
            deleteExpense(id)
            .then(() => {
                console.log("Item deleted!")
                let data = expenseList
                let filteredList = data.filter(item => item.id !== id)
                
                setLoading(false)
                setExpenseList(filteredList);
            })
            .catch(error => {
                setLoading(false)
                console.log(error.message);
            })
        }
    }

    return (
        <div className="layout-container__wrapper">
            {
                loading &&
                <div className="loader-overlay">
                    <div className="load loader-overlay__animation"></div>
                </div>
            }
            <div className="flexbox flexbox-justify-between flexbox-align-baseline">
                <h3>Expenses</h3>
                <span className="pill info">INR 0.00</span>
            </div>
            <hr />
            {
                httpError && <p>{httpError}</p>
            }
            <div className="layout-container__expenses">
                <ul>
                    {
                        expenseList && expenseList.length ? expenseList.map((item, index) => {
                            return (<ExpenseItem deleteHandler={deleteHandler} item={item} key={index}/>)
                        }) : ""
                    }
                </ul>
            </div>
        </div>
    )
}

export default Expenses