import React from "react"
import { Nav, Navbar,NavItem} from "react-bootstrap"
import { connect } from "react-redux"
import {logout} from "../actions/userActions"

const NavBar = (props) => {

    const handleLogout = () => {
        console.log("logout", props)
        localStorage.removeItem("token")
        props.logout()
    }
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/public/damla.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' '} DAMLA</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/mybudget">My Budget</Nav.Link>
                        <Nav.Link onClick={()=>handleLogout()}>Logout</Nav.Link>
                        <NavItem onClick={()=>handleLogout()}>Logout2</NavItem>
                    </Nav>
                </Navbar>
        </div>
    )
}


export default connect(null,{logout})(NavBar);