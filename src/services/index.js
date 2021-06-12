export const fetchExpenses = async () => {

    const response = await fetch("https://react-tutorial-2021-default-rtdb.firebaseio.com/expense-tracker.json")

    const data = await response.json()

    if(!response.ok) {
        throw new Error("Something went wrong!");
    }

    let transformedData = []
    for(const key in data) {
        transformedData.push({
            ...data[key],
            id: key,
            date: new Date(data[key]['date'])
        })
    }

    return transformedData
}

export const deleteExpense = async (id) => {
    const response = await fetch(`https://react-tutorial-2021-default-rtdb.firebaseio.com/expense-tracker/${id}.json`, {
        method: "DELETE"
    })

    if(response.ok) {
        return true;
    }
    throw new Error("Something went wrong!");
}

export const postExpense = async (payload) => {
    const response = await fetch(`https://react-tutorial-2021-default-rtdb.firebaseio.com/expense-tracker.json`, {
        method: "POST",
        body: JSON.stringify(payload)
    })

    if(response.ok) {
        return true;
    }
    throw new Error("Something went wrong!");
}