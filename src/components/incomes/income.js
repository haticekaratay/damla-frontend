import React from "react"
import { ListGroup, Button } from "react-bootstrap"
import { MdDelete } from "react-icons/md"
import { connect } from "react-redux"
import { deleteIncome} from "../../actions/incomeActions"

const Income = (props) => {

    const handleClick = () => {
        console.log("delete income")
        console.log("handleclick delete id:", props.income.id)
        props.deleteIncome(props.income.id)
    }

    return(
    <>
        <ListGroup variant="flush">
            <ListGroup.Item>{props.income.name} {"    "}       ${props.income.amount}</ListGroup.Item>
        </ListGroup>
        <Button size="sm" style={{backgroundColor: "pink"}} onClick={()=>handleClick()}><MdDelete /></Button>
    </> 
   )
}
export default connect(null, {deleteIncome})(Income);