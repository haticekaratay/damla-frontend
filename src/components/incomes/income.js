import React from "react"
import { ListGroup } from "react-bootstrap"

const Income = (props) => {
   return(

    <ListGroup variant="flush">
        <ListGroup.Item>{props.income.name} {"    "}       ${props.income.amount}</ListGroup.Item>
    </ListGroup>
       
   )
}
export default Income;