import React from "react";
import ExpensesContainer from "../expenses/expensesContainer";
import IncomesContainer from "../incomes/incomesContainer"

const BudgetsContainer = () => {
    return(
        <div>
            <IncomesContainer />
            <ExpensesContainer />
        </div>
    )
}

export default BudgetsContainer;