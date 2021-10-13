import React from "react";
import {userIncomes} from "../../actions/incomeActions"
import { connect } from 'react-redux'

class Incomes extends React.Component {

    componentDidMount(){
        this.props.userIncomes()
        console.log("maptostateincomes:",this.props.incomes)
    }

    render(){
        return(
            <div>
                Incomes: 
                {this.props.incomes.map((income,idx)=> <li key={idx} >{income.name}--{income.amount}</li>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        incomes: state.incomes.incomes
    }
}
export default connect(mapStateToProps)(Incomes)