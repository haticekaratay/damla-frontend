import React from "react"
import {userIncomes} from "../../actions/incomeActions"
import { connect } from "react-redux"
import Income from "./income"

class Incomes extends React.Component {

    componentDidMount(){
        this.props.userIncomes()
        console.log("maptostateincomes:",this.props.incomes)
    }

    render(){
        return(
            <div>
                <h4>Incomes:</h4> 
                <hr></hr>
                {this.props.incomes.map((income)=> <Income income={income}  />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        incomes: state.incomes.incomes
    }
}
export default connect(mapStateToProps,{userIncomes})(Incomes)