import React from "react"
import { ListGroup, Button } from "react-bootstrap"
import {MdDelete} from "react-icons/md"

const Income = (props) => {

    const handleClick = () => {
        console.log("delete income")
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
export default Income;