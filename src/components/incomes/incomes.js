import React from "react";
import {userIncomes} from "../../actions/incomeActions"
import { connect } from 'react-redux'

class Incomes extends React.Component {
    
    componentDidMount(){
        this.props.userIncomes()
    }

    render(){
        return(
            <div>
                Incomes:
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        incomes: state.incomes
    }
}
export default connect(mapStateToProps,{userIncomes})(Incomes)