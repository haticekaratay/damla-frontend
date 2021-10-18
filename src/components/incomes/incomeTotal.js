import React from "react"
import {connect} from "react-redux"

const IncomeTotal = (props) => {
    
    const total = () => {
        let total = 0;
        props.incomes.forEach((incomeObj) => {
        total += incomeObj.amount 
    })
        return total
    }
    
    return(
        <div>
            Total income $ {total()}
        </div>
   )
}

const mapStateToProps = (state) => {
    console.log("state: ", state)
    return {
        incomes: state.incomes.incomes
    }
}
export default connect(mapStateToProps)(IncomeTotal);