import React from "react"
import { ProgressBar} from "react-bootstrap"
import ExpenseAmountEdit from "./expenseAmountEdit"
import { GrAddCircle } from "react-icons/gr"
import { GrSubtractCircle } from "react-icons/gr"
import { Row, Col, Form} from "react-bootstrap"
import { connect } from "react-redux"
import { editExpense } from "../../actions/expenseActions"

class ExpenseProgressBar extends React.Component {
    state= {
        budget: "",
        show: false
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ budget: nextProps.budget });  
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("id",this.props.expense.id)
        
        console.log("submit e.target value",this.state.budget)
        this.props.editExpense({amount: parseInt(this.state.budget)},this.props.expense.id)
        this.toggle()
        console.log("this.props.budget: ", this.props.budget)
        console.log("this.props.amount: ", this.props.amount)
        console.log("now:",(this.props.budget-this.props.amount))
        console.log("max:", this.props.budget)
        console.log("remaining:", this.props.budget-this.props.amount)

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log("handle change budget  " ,this.state.budget)
    }

    toggle = (e) => {
        console.log("toggle budget:", this.state.budget)
        this.setState({show: !this.state.show})
    }

    amountEditForm = () => {
        return(
            <Row >
                <Col>
                </Col>
                <Col >
                    <GrSubtractCircle />
                    <GrAddCircle />
                    {/* <input type = "number" size="8" maxlength="4" step="0.01" ></input> */}
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} type="number" name="budget" step="0.01" /><br />
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
            {this.state.show ? this.amountEditForm() : null}
        </div>
    )
    }
}

export default connect(null,{editExpense})(ExpenseProgressBar);
