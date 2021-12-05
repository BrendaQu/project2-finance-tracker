//Milton
import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavbarDefault = () => {
  return (
    <Navbar expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="#home">Finance Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center justify-content-center ml-auto">
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
};

export default NavbarDefault;