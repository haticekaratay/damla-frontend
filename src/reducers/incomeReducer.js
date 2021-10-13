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
        default:
            return state
    }
}

export default incomeReducer;