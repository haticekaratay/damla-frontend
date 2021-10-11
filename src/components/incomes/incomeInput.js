import React from "react";

class IncomeInput extends React.Component {
    state = {
        name: "",
        amount: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(this.state)
        //post the income to the database.
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>Enter your incomes</h1>
                <button>Add Income</button><br/><p></p>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="income title"/><br />
                    <input onChange={this.handleChange} type="number" name="amount" step="0.01" placeholder="amount"/><br />
                    <input type="submit" value="Enter Income" />
                </form>
            </div>
        )
    }
}

export default IncomeInput;