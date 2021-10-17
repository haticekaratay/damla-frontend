import React from "react"
import ExpensesContainer from "../expenses/expensesContainer"
import IncomesContainer from "../incomes/incomesContainer"
import { Container } from "react-bootstrap"

const BudgetsContainer = (props) => {
    console.log("budgets container props: ", props)
    return(
        <Container className="budget-container">
            <IncomesContainer />
            <hr></hr>
            <ExpensesContainer />
        </Container>
    )
}

export default BudgetsContainer;