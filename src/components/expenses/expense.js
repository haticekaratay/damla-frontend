import React from "react"
import { Button } from "react-bootstrap"
import { GoPencil } from "react-icons/go"
import { MdDelete } from "react-icons/md"
import { connect } from "react-redux"
import { editExpense} from "../../actions/expenseActions"
import { deleteExpense} from "../../actions/expenseActions"
import  ExpenseProgressBar from "./expenseProgressBar"

class Expense extends React.Component {
    
    state= {
        name: "",
        budget: "",
        show: false,
    }
    
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.editExpense({name: this.state.name},this.props.expense.id)
        this.toggle()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toggle = (e) => {
        this.setState({show: !this.state.show})
    }

    renderForm = () => {
        return(
            <form onSubmit={(e)=> this.handleSubmit(e)}>
                    <input onChange={this.handleChange} type="text" name="name" placeholder={this.props.expense.name}/>
                    <input type="submit" value="Update" />
             </form>
        )
    }

    handleDelete = () => {
        this.props.deleteExpense(this.props.expense.id)
    }

    render(){
        return(
            <div className="expence-container ">
                {this.state.show ? this.renderForm() : this.props.expense.name}
                <Button variant="secondary" style={{backgroundColor: "#abb8fc" ,border: "none", outline: "none"}} size="sm" onClick={()=>this.toggle()}><GoPencil/></Button>
                <Button variant="secondary" style={{backgroundColor: "#abb8fc" ,border: "none", outline: "none"}} size="sm" onClick={()=>this.handleDelete()}><MdDelete /></Button>
             
                <div>
                    <ExpenseProgressBar  budget={this.props.expense.budget} amount={this.props.expense.amount} expense={this.props.expense}/>
                </div>
            </div>
        )
    }
}

export default connect(null, {editExpense,deleteExpense})(Expense);
