import React from "react";
import {connect} from "react-redux"
import Expense from "./expense";
import {fetchExpenses} from "../../actions/expenseActions"
import ExpensesDonutGraph from "./expensesDonutGraph";

class Expenses extends React.Component{
    componentDidMount(){
       this.props.fetchExpenses()
    }

    // expenses = () => {
    //     // return this.props.expenses
    //      return this.props.expenses.forEach(expense => <Expense expense={expense} key={expense.id}/>)
    // }
    
    render() {
        return (
            <div>
              {/* <ul>{console.log(this.expenses())}</ul> */}
              {this.props.expenses.map(expense => <Expense expense={expense} key={expense.id}/>)}
                <ExpensesDonutGraph expenses={this.props.expenses}/>
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