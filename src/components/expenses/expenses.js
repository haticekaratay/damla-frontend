import React from "react"
import {connect} from "react-redux"
import Expense from "./expense"
import {fetchExpenses} from "../../actions/expenseActions"
import ExpensesDonutGraph from "./expensesDonutGraph"
import { Col, Row, Card } from "react-bootstrap"

class Expenses extends React.Component{
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
                        </Card>
                        
                    </Col>
                    <Col>
                        <ExpensesDonutGraph expenses={this.props.expenses}/>
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

export default connect(mapStateToProps,{fetchExpenses})(Expenses)