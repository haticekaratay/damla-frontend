import React from "react"
import {connect} from "react-redux"
import Expense from "./expense"
import {fetchExpenses} from "../../actions/expenseActions"
import ExpensesDonutGraph from "./expensesDonutGraph"
import { Col, Row, Card } from "react-bootstrap"
import ExpenseInput from "./expenseInput"
import IncomeVsExpenseBarGraph from "../budgets/incomeVsExpenseBarGraph"

class ExpensesContainer extends React.Component{
    componentDidMount(){
       this.props.fetchExpenses()
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Card>
                            {this.props.expenses.map(expense => <Expense expense={expense} key={expense.id}/>)}
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

export default connect(mapStateToProps,{fetchExpenses})(ExpensesContainer)