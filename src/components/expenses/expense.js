import React from "react"
import { ProgressBar, Button } from "react-bootstrap"
import { GoPencil } from "react-icons/go"

import { connect } from "react-redux"

const Expense = (props) => {

    const handleClick= () => {
       console.log("expense edit is clicked") 
    }

    const now = parseInt((props.expense.amount/props.expense.budget)*100)

    return(
        <div className="expence-container">
            {props.expense.name}------{props.expense.amount}---{props.expense.budget}
            <div>
                <ProgressBar style={{height:"20%"}}>
                    <ProgressBar  striped variant="bar-graph" now={now}  label={`$${props.expense.amount}`}/>
                    <ProgressBar  striped variant="base" now={(props.expense.budget-props.expense.amount)} max={props.expense.budget}label={`$${props.expense.budget-props.expense.amount}`}/>
                </ProgressBar>
            </div>
            <div>
                <Button style={{backgroundColor: "pink"}} size="sm" onClick={()=>handleClick()}><GoPencil/></Button>
            </div>
        </div>
    
    )
}
const mapStateToProps = (state) => {
   return {
        expenses: state.expenses.expenses
   } 
}

export default connect(mapStateToProps)(Expense);
