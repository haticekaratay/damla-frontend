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
        if(data.error){
            //alert(data.error)
            const error = data.error.join("\r\n")
            alertify.set('notifier','position', 'top-right');
            alertify.error(error)
        }else{
            const {username,email, jwt} = data
       
            localStorage.setItem("token",jwt)
            dispatch({ type: 'CREATE_USER', user: {username: username, email:email}})
            history.push("/")
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
        console.log(JSON.stringify(data,null,2))
        if(data.error){
            //alert(data.error)
            // const error = data.error.join("\r\n")
            alertify.set('notifier','position', 'top-right');
            alertify.error(data.error)
        }else{
            const {username,email, jwt} = data
       
            localStorage.setItem("token",jwt)
            dispatch({ type: 'LOGIN_USER', user: {username: username, email:email}})
            history.push("/")
        }
    }).catch(console.log)
}
}
