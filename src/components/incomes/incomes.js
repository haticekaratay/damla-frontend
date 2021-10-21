import React from "react"
import {userIncomes} from "../../actions/incomeActions"
import { connect } from "react-redux"
import Income from "./income"
import IncomeTotal from "./incomeTotal"
import {Row,Card,Tabs,Tab,Container} from "react-bootstrap"
import IncomeInput from "./incomeInput"

class Incomes extends React.Component {

    componentDidMount(){
        this.props.userIncomes()
        console.log("maptostateincomes:",this.props.incomes)
    }

    render(){
        return(
            <>  
            <Container>
                <Row>
                    <Card>
                        <Tabs defaultActiveKey="home" transition={false} className="mb-3">
                            <Tab eventKey="home" title="TOTAL INCOME">
                                <Container className="tab-container">
                                    <IncomeTotal />
                                </Container>
                            </Tab>
                            <Tab eventKey="incomes" title="Add Income">
                                <Container className="tab-container">
                                    <IncomeInput />
                                </Container>
                            </Tab>
                        </Tabs>
                    </Card>
                </Row>
            </Container>
                <hr></hr>
            <Row >
                {this.props.incomes.map((income)=> <Income income={income} key={income.id} />)}
            </Row>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        incomes: state.incomes.incomes
    }
}
export default connect(mapStateToProps,{userIncomes})(Incomes)