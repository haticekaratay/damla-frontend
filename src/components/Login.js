import React from "react"
import {connect} from "react-redux"
import {loginUser} from "../actions/userActions"
import {Row,Col, Form,Button, Card, Image,Container} from "react-bootstrap"
import damla from "../damla.png"


class Login extends React.Component{
    state={
        username: "",
        password: ""
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // need to submit the user data to backend 
        console.log("submit: ", this.state)
        this.props.loginUser(this.state,this.props.history)
    }

     styles = {
        center: {
          marginLeft: "auto",
          marginRight: "auto"
        }
    }

    render(){
        return(
            <>
            {/* <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="username" placeholder="username"/><br />
                    <input onChange={this.handleChange} type="text" name="password" placeholder="password"/><br />
                    <Button variant="primary" type="submit">
                        LOGIN
                    </Button>
                </form>
            </div> */}
             
            <div className={this.styles.center} >
            <Container>
                <Card className=" align-items-center justify-content-md-center">

                    <Row xs={2} className="align-items-center justify-content-md-center">
                        <Col  >
                            <Image style={{width: '100%', height: '100%'}} src={damla} />
                        </Col>
                        <Col  >
                        <Form onSubmit={this.handleSubmit} className="form-signin">
                            <Form.Label>DAMLA</Form.Label>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={this.handleChange} type="username" name="username" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control  onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="secondary" type="submit">
                                LOGIN
                            </Button>
                        </Form>
                        </Col>
                    </Row>
                </Card>
            </Container> 
            </div>

            </>
        
        )
    }

}


export default connect(null,{loginUser})(Login)