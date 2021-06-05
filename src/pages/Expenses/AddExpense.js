import { useState } from "react"

const AddExpense = ({ onSubmitHandler }) => {

    // const [ title, setTitle ] = useState("") 
    // const [ amount, setAmount ] = useState("") 

    const [expenseData, setExpenseData] = useState({
        title: "",
        amount: "",
        description: "",
        type: "",
        date: ""
    })
    const [formProcessing, setFormProcessing] = useState(false)

    const inputHandler = event => {
        console.log(event)
        // setTitle(event.target.value);
        setExpenseData({
            ...expenseData,
            [event.target.name]: event.target.value
        })

    }

    // const updateAmountHandler = e => {
    //     // setAmount(e.target.value)
    // }

    const submitHandler = e => {
        e.preventDefault();
        // console.log({ title, amount })
        setFormProcessing(true)
        setTimeout(() => {
            // setTitle("")
            // setAmount("")

            onSubmitHandler(expenseData)
            setExpenseData({
                title: "",
                amount: "",
                description: "",
                type: "",
                date: ""
            })
            setFormProcessing(false)
        }, 1000);
    }

    return (
        <div className="layout-container__wrapper">
            {
                formProcessing &&
                <div className="loader-overlay">
                    <div className="load loader-overlay__animation"></div>
                </div>
            }
            <div className="heading">
                <h3>Add Expense Log</h3>
            </div>
            <hr />
            <form autoComplete={"off"} onSubmit={submitHandler}>
                <div className="form-wrap">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        placeholder="Enter title"
                        name="title"
                        className="form-input"
                        onChange={inputHandler}
                        value={expenseData.title}
                        required
                    />
                </div>
                <div className="form-wrap">
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        onChange={inputHandler}
                        className="form-textarea"
                        value={expenseData.description}
                        placeholder="Enter Description"
                    ></textarea>
                </div>

                <div className="form-wrap">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        placeholder="Enter Amount"
                        name="amount"
                        className="form-input"
                        onChange={inputHandler}
                        value={expenseData.amount}
                        min="0"
                        required
                    />
                </div>
                <div className="flexbox flexbox-reverse">
                    <button className="btn" type="submit">
                        <span>Add Expense</span>
                    </button>
                    <button className="btn mr-5" type="reset">
                        <span>Clear</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddExpense