import React from "react"
import { Button,Col,Card } from "react-bootstrap"
import { MdDelete } from "react-icons/md"
import { connect } from "react-redux"
import { deleteIncome} from "../../actions/incomeActions"

const Income = (props) => {

    const handleClick= () => {
        props.deleteIncome(props.income.id)
    }

    return(
        <Col>
            <Card>
                <div className="income-card">
                    <strong>{props.income.name}:</strong> <h4>${props.income.amount}</h4>
                    <Button variant="secondary" style={{backgroundColor: "#009688" ,border: "none", outline: "none"}} size="sm"  onClick={()=>handleClick()}><MdDelete /></Button>
                </div>
            </Card>
        </Col>
   )
}
export default connect(null, {deleteIncome})(Income);