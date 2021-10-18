const initialState = {
    expenses: []
}
const expenseReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_USER_EXPENSES":
            return {...state, expenses: action.expenses}
        case "ADD_EXPENSE":
            return{...state, expenses: [...state.expenses,action.expense]}
        case "DELETE_EXPENSE":
            return {...state, expenses: state.expenses.filter(expense => expense.id !== action.expenseId)}
        default:
            return state
    }
}

export default expenseReducer