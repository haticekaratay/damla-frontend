import React from "react"
import { connect } from "react-redux"
import {addIncome} from "../../actions/incomeActions"

class IncomeInput extends React.Component {
    state = {
        name: "",
        amount: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(this.state)
        this.props.addIncome({name: this.state.name, amount: parseInt(this.state.amount)})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} autocomplete="off">
                    <input onChange={this.handleChange} type="text" name="name" placeholder="income title"/> 
                    <input onChange={this.handleChange} type="number" name="amount" step="0.01" placeholder="amount"/>
                    <input type="submit" value="Enter Income" style={{backgroundColor: "#abb8fc" ,border: "none", outline: "none"}} size="sm"/>
                </form>
            </div>
            
        )
    }
}

export default connect(null,{addIncome})(IncomeInput);