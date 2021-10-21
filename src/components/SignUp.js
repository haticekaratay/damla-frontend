import React from "react"
import { connect } from 'react-redux'
import { createUser} from "../actions/userActions"
import { Row,Col,Form,Button,Card,Container } from "react-bootstrap"
import { Link } from "react-router-dom"
class SignUp extends React.Component{
    state={
        username: "",
        email: "",
        password: ""
    }


    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createUser(this.state, this.props.history)
    }

    render(){
        return(

            <Container className="signup-container">
                <Card className="signup-card">
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <h3>SIGN UP</h3>
                                <hr></hr>
                                <Form.Group >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control onChange={this.handleChange} type="username" name="username" placeholder="Enter username" />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control onChange={this.handleChange} type="email" name="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control  onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                                </Form.Group>
                                <br></br>
                                <Button   Button variant="secondary" type="submit">
                                    SIGN UP
                                </Button>
                        </Form>
                        <br></br>
                        If you already signed up.
                            <Link to="/login" style={{ color: "black" }}>
                                LOG IN
                            </Link> 
                        </Col>
                    </Row>
                </Card>
            </Container> 
        )
    }
}
export default connect(null, {createUser})(SignUp)