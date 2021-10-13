const initialState = {
    currentUser: null
}
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "CREATE_USER":
            return {...state, currentUser: action.user}
        case "LOGIN_USER":
            console.log("Dispatch user: ",action.user)
            return {...state,currentUser: action.user}
        default:
            return state
    }
}

export default userReducer