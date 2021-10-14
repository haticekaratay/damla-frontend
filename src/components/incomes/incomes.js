import React from "react";
import {userIncomes} from "../../actions/incomeActions"
import { connect } from 'react-redux'
import Income from "./income";
class Incomes extends React.Component {

    componentDidMount(){
        this.props.userIncomes()
        console.log("maptostateincomes:",this.props.incomes)
    }
    // incomes = () => {
    //     return this.props.incomes.forEach(income => <Income income={income} key={income.id} />)
    // }

    render(){
        return(
            <div>
                Incomes: 
                {this.props.incomes.map((income,idx)=> <Income income={income} key={income.id} />)}
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