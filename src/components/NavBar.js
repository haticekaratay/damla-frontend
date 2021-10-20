import React from "react"
import { Nav, Navbar, Container} from "react-bootstrap"
import { connect } from "react-redux"
import {logout} from "../actions/userActions"
import {withRouter} from "react-router"

const NavBar = (props) => {

    const handleLogout = () => {
        localStorage.removeItem("token")
        props.logout()
        props.history.push("/")
    }
    
    return(

        <Navbar variant="dark" className="navbar-custom">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav.Link href="/mybudget" style={{ color: "white" }}>My Budget</Nav.Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav.Link onClick={()=>handleLogout()}>Logout</Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}


export default withRouter(connect(null,{logout})(NavBar));