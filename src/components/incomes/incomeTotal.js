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
        <div >
          <h3><strong>Total income: &nbsp;&nbsp; $ {total()}</strong> </h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        incomes: state.incomes.incomes
    }
}
export default connect(mapStateToProps)(IncomeTotal);