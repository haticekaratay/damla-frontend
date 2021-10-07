import React from "react"

class SignUp extends React.Component{
    state={
        username: "",
        email: "",
        password: ""
    }
    render(){
        return(
            <div>
                <form>
                    <input type="text" name="username" value={this.state.username} placeholder="username"/>
                    <input type="text" name="email" value={this.state.email} placeholder="email"/>
                    <input type="text" name="password" value={this.state.password} placeholder="password"/>
                </form>
            </div>
        )
    }
}
export default SignUp