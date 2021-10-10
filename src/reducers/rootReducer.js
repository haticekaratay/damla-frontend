const userReducer = (state = {
    currentUser: null,
}, action) => {
    switch(action.type){
        case "CREATE_USER":
            return {...state, currentUser: action.user}
        case "LOGIN_USER":
            return {...state,currentUser: action.user}
        default:
            return state
    }
}

export default userReducer