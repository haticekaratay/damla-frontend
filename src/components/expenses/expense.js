import React from "react";
import { Bar } from 'react-chartjs-2';
import { ProgressBar } from "react-bootstrap";

const Expense = (props) => {
//    debugger
    const now = parseInt(props.expense.amount)/parseInt(props.expense.budget)*100
    console.log("parseInt(props.expense.amount):", parseInt(props.expense.amount))
    console.log("parseInt(props.expense.budget):",parseInt(props.expense.budget))
    console.log("now:",now)
    return(
        // <div style={{height:"500px", width:"400px"}}>
        <div style={{ width:"400px"}}>
            <li>{props.expense.name}------{props.expense.amount}---{props.expense.budget}</li>
            <ProgressBar>
                <ProgressBar  striped variant="bar-graph" now={props.expense.amount} label={`$${props.expense.amount}`}/>
                <ProgressBar  striped variant="base" now={props.expense.budget-props.expense.amount} label={`$${props.expense.budget-props.expense.amount}`}/>
            </ProgressBar>

            {/* <ProgressBar  variant="bar-graph" max={props.expense.budget} now = {props.expense.amount}></ProgressBar> */}
            
        </div>
    )
}

export default Expense;

// const now = 60;

// const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

// render(progressInstance);