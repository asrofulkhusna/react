import React from 'react';
import './css/Navbar.css';
import { FaDove } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import { FaRegShareSquare } from 'react-icons/fa';

export default function Coba() {
    return (
        <div className="navb">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/"><b>Traveloka</b> <FaDove /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/home"></Link></Nav.Link>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/formLogin"></Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/home">Home</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/contact">Contact</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/about">About Us</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        {/* <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
                        <Button variant="info">Search</Button> */}
                        <Nav.Link><Link to="/" className="btnLogout"><FaRegShareSquare /> Logout</Link></Nav.Link>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
