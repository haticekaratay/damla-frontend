import React from "react";
import IncomeInput from "./incomeInput";
import Incomes from "./incomes";
import {Card} from "react-bootstrap"
import { Tab, Tabs } from "react-bootstrap";

const incomesContainer = (props) => {
    return(
        <div>
            <Card >
                <Card.Header>Your Income</Card.Header>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Incomes">
                    <Incomes/>
                </Tab>
                <Tab eventKey="incomes" title="Add Income">
                    <IncomeInput />
                </Tab>
            </Tabs>
                
            </Card>
        </div>
    )
}
export default incomesContainer;

