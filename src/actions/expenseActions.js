export const fetchExpenses = () => {
    return (dispatch) => {
        const token = localStorage.token
        fetch("http://localhost:3001/expenses",{
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