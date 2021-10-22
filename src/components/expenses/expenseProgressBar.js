import React from "react"
import { ProgressBar } from "react-bootstrap"
import { GrAddCircle } from "react-icons/gr"
import { GrSubtractCircle } from "react-icons/gr"
import { Row, Col } from "react-bootstrap"
import { connect } from "react-redux"
import { editExpense } from "../../actions/expenseActions"
import ExpenseIncrementDecrement from "./expenseAmountEdit"

class ExpenseProgressBar extends React.Component {
    state= {
        amount: "",
        show: false
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ amount: nextProps.budget });  
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        
        this.props.editExpense({amount: parseInt(this.state.amount)},this.props.expense.id)
        this.toggle()


    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toggle = (e) => {
        console.log("toggle budget:", this.state.amount)
        this.setState({show: !this.state.show})
    }

    amountEditForm = () => {
        return(
            <Row >
                <Col>
                </Col>
                <Col >
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} type="number" name="amount" step="0.01" defaultValue={this.state.amount}/><br />
                        <input type="submit" value="Save" />
                    </form>
                </Col>
            </Row>
        )
    }

    render(){
       let now = parseInt((this.props.expense.amount/this.props.expense.budget)*100)
       console.log("now in render", now)
    return(
        <div>
            <ProgressBar onClick={()=>this.toggle()} style={{height:"20%"}}>
                <ProgressBar  variant="bar-graph" now={now}  label={`$${this.props.amount}`}/>
                <ProgressBar variant="base" now={(this.props.budget-this.props.amount)} max={this.props.budget}label={`$${this.props.budget-this.props.amount}`}/>
            </ProgressBar>
            {/* <ExpenseIncrementDecrement expense = {this.props.expense}/> */}
            <br></br>
            {this.state.show ? this.amountEditForm() : null}
        </div>
    )
    }
}

export default connect(null,{editExpense})(ExpenseProgressBar);
