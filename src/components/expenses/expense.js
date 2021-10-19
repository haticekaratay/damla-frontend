import React from "react"
import { ProgressBar, Button } from "react-bootstrap"
import { GoPencil } from "react-icons/go"
import { MdDelete } from "react-icons/md"
import { connect } from "react-redux"
import { editExpense} from "../../actions/expenseActions"
import { deleteExpense} from "../../actions/expenseActions"

class Expense extends React.Component {
    state= {
        name: "",
        budget: "",
        show: false,
    }
    
   
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.props.expense.id)
        
        console.log("submit e.target value",this.state.name)
      this.props.editExpense({name: this.state.name},this.props.expense.id)
      this.toggle()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log("handle change name  " ,this.state.name)
    }

    toggle = (e) => {
        console.log("this.props.expense.name:", this.props.expense.name)
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
        console.log("delete button is clicked")
        this.props.deleteExpense(this.props.expense.id)
    }

    now = parseInt((this.props.expense.amount/this.props.expense.budget)*100)
    render(){
        return(
            <div className="expence-container">
                {/* {props.expense.name}------{props.expense.amount}---{props.expense.budget} */}
                {this.state.show ? this.renderForm() : this.props.expense.name}
                <Button style={{backgroundColor: "pink"}} size="sm" onClick={()=>this.toggle()}><GoPencil/></Button>
                <Button style={{backgroundColor: "pink"}} size="sm" onClick={()=>this.handleDelete()}><MdDelete /></Button>
                <div>
                    <ProgressBar style={{height:"20%"}}>
                        <ProgressBar  striped variant="bar-graph" now={this.now}  label={`$${this.props.expense.amount}`}/>
                        <ProgressBar  striped variant="base" now={(this.props.expense.budget-this.props.expense.amount)} max={this.props.expense.budget}label={`$${this.props.expense.budget-this.props.expense.amount}`}/>
                    </ProgressBar>
                </div>
            </div>
        )
    }
}


export default connect(null, {editExpense,deleteExpense})(Expense);
