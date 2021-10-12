import React from "react";

const Expense = (props) => {
//    debugger
    return(
        <div>
            <li>Expense: {props.expense.name}------{props.expense.amount}</li>
        </div>
    )
}

export default Expense;