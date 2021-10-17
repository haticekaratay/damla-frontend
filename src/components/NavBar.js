import React from "react"
import { Nav, Navbar,NavItem, Container} from "react-bootstrap"
import { connect } from "react-redux"
import {logout} from "../actions/userActions"
import {withRouter} from "react-router"

const NavBar = (props) => {

    console.log("withRouter props:", props)
    const handleLogout = () => {
        console.log("logout", props)
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







        // <div>
        //     this is test
        //     <Navbar bg="dark" variant="dark">
        //             <Nav className="justify-content-end" style={{ width: "100%" }}>
        //                 <Nav.Link href="/">Home</Nav.Link>
        //                 <Nav.Link href="/mybudget">My Budget</Nav.Link>
        //                 <div ><Nav.Link  onClick={()=>handleLogout()}>Logout</Nav.Link></div>
                        
        //             </Nav>
        //         </Navbar>
        // </div>
    )
}


export default withRouter(connect(null,{logout})(NavBar));