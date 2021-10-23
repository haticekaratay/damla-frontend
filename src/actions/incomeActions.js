import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

export const userIncomes = () => {
    return (dispatch) => {
        const token = localStorage.token
        fetch("http://localhost:3001/incomes",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json",
                'Authorization': `${ token }`
            }
        })
        .then(resp => {
            return resp.json()
        })
        .then(incomeData => {
            if(incomeData.message){
                console.log("response from autologin error:")
            }else{
            console.log("in incomeData:", incomeData)
            dispatch({type: "GET_USER_INCOMES", incomes: incomeData})
            }
        }).catch(console.log)
    }
}

export const addIncome = (income) => {
    return (dispatch) => {
        const token = localStorage.token
        console.log("addIncome fetch token:")
        fetch("http://localhost:3001/incomes",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json",
                'Authorization': `${ token }`
            },
            body: JSON.stringify(income)
        })
        .then(resp => {
             return resp.json()
        })
        .then(incomeData => {
            if(incomeData.message){
                console.log("response from incomeActopns error:")
                alertify.set('notifier','position', 'top-right')
                alertify.error(incomeData.message)
            }else{
            dispatch({type: "ADD_INCOME", income: incomeData, })
            }
        }).catch(console.log)
    }
}

export const deleteIncome = (incomeId) =>{
    return (dispatch) => {
        const token = localStorage.token
        console.log("deleteIncome fetch :")
        fetch(`http://localhost:3001/incomes/${incomeId}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json",
                'Authorization': `${ token }`
            },
        })
        .then(resp => resp.json())
        .then(incomeData => {
            if(incomeData.error){
                console.log("response from incomeActopns error:")
            }else{
                dispatch({type: "DELETE_INCOME", incomeId: incomeData})
            }
        }).catch(console.log)
    }
} 

