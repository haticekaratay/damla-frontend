const initialState = {
    incomes: []
}
const incomeReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_USER_INCOMES":
            return {...state, incomes: action.incomes}
        case "ADD_INCOME":
            console.log("add Income:", action.income)
            return {...state, incomes: [...state.incomes,action.income]}
        case "DELETE_INCOME":
            console.log("deleted item id:", action.incomeId)
            console.log("after deletion state:", {...state, incomes: state.incomes.filter(income => income.id !== action.incomeId)})
            debugger
            return {...state, incomes: state.incomes.filter(income => income.id !== action.incomeId)}
        default:
            return state
    }
}

export default incomeReducer;