import React from "react";
import {connect} from "react-redux"
import Expense from "./expense";


class Expenses extends React.Component{
    componentDidMount(){
       //get all expenses
    }
    render() {
        return (
            <div>
              <Expense />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(Expenses)