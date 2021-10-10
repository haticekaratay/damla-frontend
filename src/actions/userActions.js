
export const createUser = (userDataFromLocalState) =>{
    return dispatch => {
        fetch("http://localhost:3001/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userDataFromLocalState)
    }).then(resp =>resp.json())
    .then(data =>{
        console.log(JSON.stringify(data,null,2))
       const {username,email, jwt} = data
       localStorage.setItem("token",jwt)
       dispatch({ type: 'CREATE_USER', user: {username: username, email:email}})
       
    }).catch(console.log)
}
}
