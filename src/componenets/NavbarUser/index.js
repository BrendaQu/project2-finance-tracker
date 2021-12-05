//Brenda
import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavbarUser = () => {
    return (
        <Navbar expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="#home">Finance Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-center justify-content-center ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="userexpense">Expense Form</Nav.Link>
                        <Nav.Link href="userbudget">Budget Form</Nav.Link>
                        <Nav.Link href="userreport">Reports</Nav.Link>
                        <NavDropdown title={
                            <div className="profile-header">
                                <img src={process.env.PUBLIC_URL + '/img/profile.jpg'} width="20" height="20" alt="profile" />
                                <p>Name</p>
                            </div>} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarUser;