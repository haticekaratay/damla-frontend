import React from "react"
import { GrAddCircle } from "react-icons/gr"
import { GrSubtractCircle } from "react-icons/gr"
import { Row, Col, Form} from "react-bootstrap"

const ExpenseAmountEdit = () => {
    return(
        <Row >
            <Col>
            </Col>
            <Col >
                <GrSubtractCircle />
                <GrAddCircle />
                {/* <input type = "number" size="8" maxlength="4" step="0.01" ></input> */}
                <Form.Control size="xxs" type="number" step="0.01"/>
            </Col>
        </Row>
    )
}

export default ExpenseAmountEdit;





