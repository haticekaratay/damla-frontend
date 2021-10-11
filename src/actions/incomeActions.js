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
            // console.log("resp from autologin: ", resp.json())
            return resp.json()
        })
        .then(incomeData => {
            if(incomeData.error){
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
            // console.log("resp from addIncome: ", resp.json())
             return resp.json()
        })
        .then(incomeData => {
            if(incomeData.error){
                console.log("response from autologin error:")
            }else{
            console.log("in incomeData:", incomeData)
            //dispatch({type: "ADD_INCOME", income: incomeData})
            }
        }).catch(console.log)
    }
}

