import React from "react"
import { connect } from "react-redux"
import { loginUser } from "../actions/userActions"
import { Row,Col, Form,Button, Card, Image,Container } from "react-bootstrap"
import damla from "../damla.png"
import { Link } from "react-router-dom"


class Login extends React.Component{
    state={
        username: "",
        password: ""
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginUser(this.state,this.props.history)
    }

    render(){        
        return(
            <Container className="login-container">
                <Card >
                    <Row  className=" d-flex align-items-center justify-content-center">
                        <Col>
                            <Image style={{width: '100%', height: '100%'}} src={damla} />
                        </Col>
                        <Col>
                            <Form onSubmit={this.handleSubmit} className="form-signin">
                                <Form.Label>DAMLA</Form.Label>
                                <Form.Group >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control onChange={this.handleChange} type="username" name="username" placeholder="Enter username" />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control  onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                                </Form.Group>
                                <br></br>
                                <Button   Button variant="secondary" type="submit">
                                    SIGN IN
                                </Button>
                        </Form>
                        <br></br>
                            <Link to="/signup" style={{ color: "black" }}>
                                SIGN UP
                            </Link> 
                        </Col>
                    </Row>
                </Card>
            </Container> 
        )  
    }
}


export default connect(null,{loginUser})(Login)