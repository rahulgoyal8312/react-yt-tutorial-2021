import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ExpenseForm from "../../components/ExpenseForm"
import { fetchExpenseById, postExpense, updateExpenseById } from "../../services"

const AddExpense = () => {

    const params = useParams();

    const [expenseData, setExpenseData] = useState({
        title: "",
        amount: "",
        description: "",
        type: "",
        date: ""
    })
    const [formProcessing, setFormProcessing] = useState(false)
    const [isValidForm, setIsValidForm] = useState(true);
    const [operation, setOperation] = useState("add")
    const [notFound, setNotFound] = useState(false)

    const inputHandler = event => {
        setExpenseData({
            ...expenseData,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        setFormProcessing(true)

        if(operation === "edit") {
            updateExpenseById(params.id, expenseData)
            .then(() => {
                console.log("Data updated!")
                setFormProcessing(false)
            })
            .catch(error => {
                console.log(error);
            })
        }
        else {


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

    useEffect(() => {
        if(params.operation === "edit") {
            setOperation(params.operation)
            setFormProcessing(true)
            fetchExpenseById(params.id)
            .then(data => {
                setExpenseData(data)
                setFormProcessing(false)
            })
            .catch(error => {
                console.log(error.message)
                setNotFound(true)
            })
        }
        
        return () => {
            setOperation("add")
            setFormProcessing(false)
            setIsValidForm(true)
            setExpenseData({
                title: "",
                amount: "",
                description: "",
                type: "",
                date: ""
            })
            setNotFound(false)
        }
    }, [params])

    if(notFound) {
        return <p>ID Not found!</p>;
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
                <h3>{operation.toUpperCase()} Expense Log</h3>
            </div>
            <hr />
            <ExpenseForm
                data={expenseData}
                inputHandler={inputHandler}
                submitHandler={submitHandler}
                isValidForm={isValidForm}
                operation={operation}
            />
        </div>
    )
}

export default AddExpense