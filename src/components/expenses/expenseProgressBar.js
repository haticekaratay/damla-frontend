import React from "react"
import { ProgressBar} from "react-bootstrap"

const ExpenseProgressBar = (props) => {
    return(
        <ProgressBar style={{height:"20%"}}>
            <ProgressBar  variant="bar-graph" now={props.now}  label={`$${props.amount}`}/>
            <ProgressBar variant="base" now={(props.budget-props.amount)} max={props.budget}label={`$${props.budget-props.amount}`}/>
        </ProgressBar>
    )
}

export default ExpenseProgressBar;
