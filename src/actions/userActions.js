import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

export const createUser = (userDataFromLocalState, history) =>{
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
            if(data.message){
             
                alertify.set('notifier','position', 'top-right')
                alertify.error(data.message)
            }else{
                const {username,email, jwt} = data
        
                localStorage.setItem("token",jwt)
                dispatch({ type: 'CREATE_USER', user: {username: username, email:email}})
                history.push("/budgets")
            }
        }).catch(console.log)
    }
}

export const loginUser = (userDataFromLocalState, history) =>{
    return dispatch => {
        fetch("http://localhost:3001/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDataFromLocalState)
         }).then(resp =>resp.json())
        .then(data =>{
            console.log("login fetch data:",JSON.stringify(data,null,2))
            if(data.message){
                alertify.set('notifier','position', 'top-right');
                alertify.error(data.message)
            }else{
                const {username,email, jwt} = data
                
                localStorage.setItem("token",jwt)
                dispatch({ type: "LOGIN_USER", user: {username: username, email:email}})
                history.push("/budgets")
            }
        }).catch(console.log)
    }
}
export const autoLogin = () => {
    return (dispatch) => {
        const token = localStorage.token
        console.log("token:", token)
        if(token){
            fetch("http://localhost:3001/get_current_user",{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept" : "application/json",
                    'Authorization': `${ token }`
                }
            })
            .then(resp => resp.json())
            .then(currentUserData => {
                if(currentUserData.error){
                    console.log("response from autologin error:")
                    localStorage.removeItem("token")
                }else{
                console.log("in autoLogin:",currentUserData)
                const {username, email} = currentUserData
                dispatch({type: "LOGIN_USER", user: {username: username, email:email}})
                }
            }).catch(console.log)
        }
        else{
            console.log("no token")
        }
    }
}

export const logout = () =>{
    return (dispatch) => {
        console.log("in logout dispatch")
        dispatch({type:"LOGOUT_USER"})
    }
}

