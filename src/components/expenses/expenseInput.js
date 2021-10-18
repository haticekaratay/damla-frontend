import React from "react"
import { Button } from "react-bootstrap"
import { connect } from "react-redux"
import { addExpense } from "../../actions/expenseActions"

class ExpenseInput extends React.Component {
    state = {
        name: "",
        budget: "",
        show : false
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
    toggle = () => {
        this.setState({show :!this.state.show})
    }

    renderForm = () => {
        return(
            <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="expense"/><br />
                    <input onChange={this.handleChange} type="number" name="budget" step="0.01" placeholder="budget"/><br />
                    <input type="submit" onClick={() => {this.toggle()}} value="Save Expense Category" />
             </form>
        )
    }

    render(){
        return(
            <div>
               <Button onClick={() => {this.toggle()}}>ADD</Button>
                {this.state.show ? this.renderForm(): null}
            </div>
        )
    }
}

export default connect(null,{addExpense})(ExpenseInput);