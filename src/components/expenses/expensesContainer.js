import React from "react"
import {connect} from "react-redux"
import Expense from "./expense"
import {fetchExpenses} from "../../actions/expenseActions"
import ExpensesDonutGraph from "./expensesDonutGraph"
import { Col, Row, Card , Button} from "react-bootstrap"
import ExpenseInput from "./expenseInput"
import IncomeVsExpenseBarGraph from "../budgets/incomeVsExpenseBarGraph"

class ExpensesContainer extends React.Component{
    state = {
        sortByAmount: false
    }

    componentDidMount(){
        this.props.fetchExpenses()
    }

    changeState = () =>{
        this.setState({sortByAmount: !this.state.sortByAmount})
    }

    sortedByAmount = () => {
        return [...this.props.expenses].sort((a,b)=>b.amount-a.amount).map(expense => <Expense expense={expense} key={expense.id}/>)
    }

    alphabeticallySorted = () => {
       return  this.props.expenses.map(expense => <Expense expense={expense} key={expense.id}/>)
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Card>
                            <Button variant="secondary" style={{width: "auto", backgroundColor: "#b9c3f8" ,border: "none",outline: "none"}} onClick={this.changeState}>Sort EXPENSES by Amount</Button> 
                            {this.state.sortByAmount ? this.sortedByAmount() : this.alphabeticallySorted() }
                            <ExpenseInput /> 
                        </Card>
                    </Col>
                    <Col>
                        <ExpensesDonutGraph expenses={this.props.expenses}/>
                        <br></br>
                        <IncomeVsExpenseBarGraph />
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses.expenses
    }
}
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         fetchExpenses: () => dispatch(fetchExpenses)
//     }
// }


export default connect(mapStateToProps,{fetchExpenses})(ExpensesContainer)