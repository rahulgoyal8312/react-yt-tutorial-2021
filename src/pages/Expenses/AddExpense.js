import { useEffect, useState } from "react"
import ExpenseForm from "../../components/ExpenseForm"
import { postExpense } from "../../services"

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
    const [isValidForm, setIsValidForm] = useState(true);

    const inputHandler = event => {
        // console.log(event)
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
        // setTimeout(() => {
        //     // setTitle("")
        //     // setAmount("")

        //     onSubmitHandler(expenseData)
        //     setExpenseData({
        //         title: "",
        //         amount: "",
        //         description: "",
        //         type: "",
        //         date: ""
        //     })
        //     setFormProcessing(false)
        // }, 1000);

        postExpense(expenseData)
        .then(() => {
            console.log("Data saved!")
            setExpenseData({
                title: "",
                amount: "",
                description: "",
                type: "",
                date: ""
            })
            setFormProcessing(false)
        })
        .catch(error => {
            console.log(error.message);
            setFormProcessing(false)
        })
    }

    useEffect(() => {
        if(new Date(expenseData.date) > new Date()) {
            alert("Date cannot be greater than current date");
            setIsValidForm(false);
        }
        else {
            setIsValidForm(true);
        }
    }, [expenseData.date])

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
            <ExpenseForm
                data={expenseData}
                inputHandler={inputHandler}
                submitHandler={submitHandler}
                isValidForm={isValidForm}
            />
        </div>
    )
}

export default AddExpense