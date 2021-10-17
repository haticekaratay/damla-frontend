export const fetchExpenses = () => {
    return (dispatch) => {
        const token = localStorage.token
        fetch("http://localhost:3001/expenses",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json",
                "Authorization": `${ token }`
            }
        })
        .then(resp => {
            // console.log("resp from autologin: ", resp.json())
            return resp.json()
        })
        .then(expensesData => {
            if(expensesData.error){
                console.log("response from fetchExpenses error:")
            }else{
            console.log("in fetchExpenses:", expensesData)
            dispatch({type: "GET_USER_EXPENSES", expenses: expensesData})
            }
        }).catch(console.log)
    }
}

export const addExpense = (expenseData) => {
    return (dispatch) => {
        const token = localStorage.token
        fetch("http://localhost:3001/expenses",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${ token }`
            },
            body: JSON.stringify(expenseData)
        })
        .then(resp => resp.json())
        .then(expenseData => {
            if(expenseData.error){
                console.log("response from addExpense error:")
            }else{
            console.log("in fetchExpenses:", expenseData)
            dispatch({type: "ADD_EXPENSE", expense: expenseData})
            }
        }).catch(console.log)
    }
}

