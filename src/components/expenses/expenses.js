import React from "react";
import {connect} from "react-redux"
import Expense from "./expense";
import {fetchExpenses} from "../../actions/expenseActions"

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