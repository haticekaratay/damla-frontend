const initialState = {
    expenses: []
}
const expenseReducer = (state = initialState, action) => {
    let index
    switch(action.type){
        case "GET_USER_EXPENSES":
            return {...state, expenses: action.expenses}
        case "ADD_EXPENSE":
            return{...state, expenses: [...state.expenses,action.expense]}
        case "DELETE_EXPENSE":
            return {...state, expenses: state.expenses.filter(expense => expense.id !== action.expenseId)}
        case "EDIT_EXPENSE":
            index = state.expenses.findIndex(expense => expense.id === action.expense.id)
            return {...state, expenses: [...state.expenses.slice(0,index), action.expense, ...state.expenses.slice(index)]}
        default:
            return state
    }
}

export default expenseReducer