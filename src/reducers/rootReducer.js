const initialState = {
    currentUser: null,
    expenses: [],
    incomes: []
}
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "CREATE_USER":
            return {...state, currentUser: action.user}
        case "LOGIN_USER":
            console.log("Dispatch user: ",action.user)
            return {...state,currentUser: action.user}
        case "GET_USER_INCOMES":
            return {...state, incomes: action.incomes}
        case "ADD_INCOME":
            console.log("add Income:", action.income)
            return {...state, incomes: [...state.incomes,action.income]}
        case "GET_USER_EXPENSES":
            return {...state, expenses: action.expenses}
        default:
            return state
    }
}

export default userReducer