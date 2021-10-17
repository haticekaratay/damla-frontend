import React from "react"
import { Button } from "react-bootstrap"
import { connect } from "react-redux"
import { addExpense } from "../../actions/expenseActions"

class ExpenseInput extends React.Component {
    state = {
        name: "",
        budget: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(this.state)
        this.props.addExpense({name: this.state.name, budget: parseInt(this.state.budget)})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
               <Button>ADD</Button>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="expense"/><br />
                    <input onChange={this.handleChange} type="number" name="budget" step="0.01" placeholder="budget"/><br />
                    <input type="submit" value="Save Expense Category" />
                </form>
            </div>
        )
    }
}

export default connect(null,{addExpense})(ExpenseInput);