import React from "react"
import { Nav, Navbar, Container} from "react-bootstrap"
import { connect } from "react-redux"
import {logout} from "../actions/userActions"
import {withRouter} from "react-router"
import {autoLogin} from "../actions/userActions"

const NavBar = (props) => {
    
  
    const handleLogout = () => {
        localStorage.removeItem("token")
        props.logout()
        props.history.push("/")
    }
    const isLoggedIn = () => {
       return localStorage.getItem("token")
    }
    const loggedNav = () => {
        return (
            <Navbar variant="dark" className="navbar-custom">
            <Container>
                <Navbar.Brand href="/mybudget">Home</Navbar.Brand>
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

    const loginNav = () => {
        return(
            <Navbar variant="dark" className="navbar-custom">
            <Container>
                <Navbar.Brand href="/">WELCOME TO DAMLA BUDGET</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav.Link href="/signup">Signup</Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
    return(
        <div>
            {isLoggedIn() ? loggedNav() : loginNav()}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
      currentUser : state.users.currentUser,
      loggedIn : state.users.loggedIn
    }

}


export default withRouter(connect(mapStateToProps,{logout, autoLogin})(NavBar));