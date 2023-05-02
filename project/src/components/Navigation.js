import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';

import { Link } from "react-router-dom";

export default function Navigation ()
{

    return <>
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Prime Sports</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/search">Products</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>

}