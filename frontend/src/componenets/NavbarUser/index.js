//Brenda
import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavbarUser = () => {

    const name = sessionStorage.getItem("name")

    return (
        <Navbar expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="#home">Finance Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-center justify-content-center ms-auto">
                        <Nav.Link href="usermenu">Home</Nav.Link>
                        <Nav.Link href="userexpense">Expense Form</Nav.Link>
                        <Nav.Link href="userbudget">Budget Form</Nav.Link>
                        <Nav.Link href="userreport">Reports</Nav.Link>
                        <NavDropdown title={
                            <div className="profile-header">
                                <img src={process.env.PUBLIC_URL + '/img/profile.jpg'} width="20" height="20" alt="profile" />
                                <p>{name}</p>
                            </div>} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarUser;