const initialState = {
    expenses: []
}
const expenseReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_USER_EXPENSES":
            return {...state, expenses: action.expenses}
        default:
            return state
    }
}

export default expenseReducer