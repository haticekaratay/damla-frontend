import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

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
            return resp.json()
        })
        .then(expensesData => {
            if(expensesData.message){
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
                console.log("response from addExpense error:", expenseData.message)
                alertify.set('notifier','position', 'top-right');
                alertify.error(expenseData.error)
            }else{
            console.log("in fetchExpenses:", expenseData)
            dispatch({type: "ADD_EXPENSE", expense: expenseData})
            }
        }).catch(console.log)
    }
}

export const editExpense = (expense, expenseId) => {
    return (dispatch) => {
        const token = localStorage.token
        console.log("in edit expense action token", token)
        console.log("expense to edit:",expense)
        fetch(`http://localhost:3001/expenses/${expenseId}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept" :"application/json",
                "Authorization": `${ token }`
            },
            body: JSON.stringify(expense)
        })
        .then(resp => resp.json())
        .then(expenseData => {
            if(expenseData.message){
                console.log("error from path expense", expenseData.message)
                alertify.set('notifier','position', 'top-right');
                alertify.error(expenseData.message)

            }else{
                console.log("in edit dispatch", expenseData)
                dispatch({type: "EDIT_EXPENSE", expense: expenseData})
            }
        }).catch(console.log)
    }
}

export const deleteExpense = (expenseId) =>{
    return (dispatch) => {
        const token = localStorage.token
        console.log("deleteIncome fetch :")
        fetch(`http://localhost:3001/expenses/${expenseId}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json",
                'Authorization': `${ token }`
            },
        })
        .then(resp => resp.json())
        .then(expenseData => {
            if(expenseData.message){
                console.log("response from expenseDelete, error:", expenseData.message)
                alertify.set('notifier','position', 'top-right');
                alertify.error(expenseData.message)
            }else{
                dispatch({type: "DELETE_EXPENSE", expenseId: expenseData})
            }
        }).catch(console.log)
    }
} 





