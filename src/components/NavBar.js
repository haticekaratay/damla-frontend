import React from "react";
import { Nav, Navbar} from "react-bootstrap"

const NavBar = () => {
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
                        <Nav.Link href="/logout">Logout</Nav.Link>
                    </Nav>
                </Navbar>
        </div>
    )
}

export default NavBar;