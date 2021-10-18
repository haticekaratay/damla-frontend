import React from "react";
import IncomeInput from "./incomeInput";
import Incomes from "./incomes"
import {Card, Container} from "react-bootstrap"
import { Tab, Tabs } from "react-bootstrap"

const incomesContainer = (props) => {
    return(
        <Card>
            <Tabs defaultActiveKey="home" transition={false} className="mb-3">
                <Tab eventKey="home" title="Incomes">
                    <Container className="tab-container">
                        <Incomes/>
                    </Container>
                    
                </Tab>
                <Tab eventKey="incomes" title="Add Income">
                    <Container className="tab-container">
                        <IncomeInput />
                    </Container>
                </Tab>
            </Tabs>
        </Card>

    )
}
export default incomesContainer;

