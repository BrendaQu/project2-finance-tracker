//Milton
import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavbarEmployee = () => {
    return (
            <Navbar expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Finance Tracker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex align-items-center justify-content-center ms-auto">
                            <Nav.Link href="/EmpMenu">Home</Nav.Link>
                            <Nav.Link href="/EmpApprove">Account Approval</Nav.Link>
                            <Nav.Link href="/EmpDelete">Deletion Request</Nav.Link>
                            <Nav.Link href="/EmpSearch">Employee Search</Nav.Link>
                            <Nav.Link href="/EmpReport">Reports</Nav.Link>
                            <NavDropdown title={
                                <div className="profile-header">
                                    <img src={process.env.PUBLIC_URL + '/img/profile.jpg'} width="20" height="20" alt="profile" />
                                    <p>Name</p>
                                </div>} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="index">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default NavbarEmployee;