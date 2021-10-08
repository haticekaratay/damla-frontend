import React from "react";

class Login extends React.Component{
    state={
        username: "",
        password: ""
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // need to submit the user data to backend 
        console.log("submit: ", this.state)
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="username" placeholder="username"/><br />
                    <input onChange={this.handleChange} type="text" name="password" placeholder="password"/><br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }

}

export default Login