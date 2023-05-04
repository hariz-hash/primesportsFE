import React, { useState } from "react";
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

import { Link } from "react-router-dom";

export default function Navigation ()
{

  const[loggedIn,setLoggedIn] = useState(false)
    return <>
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Prime Sports</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
              

                {loggedIn ? ( <Nav className="ms-auto">
                     <Nav.Link as={Link} to="/search">Products</Nav.Link>
                    <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                    {/* <Nav.Link as={Link} to="/cart">Logout</Nav.Link> */}

                    <NavDropdown
										title="Account"
									>
										<NavDropdown.Item eventKey="2" as={Link} to='/orders'>Orders</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item eventKey="3">
											Logout
										</NavDropdown.Item>
									</NavDropdown>


                </Nav>) :(<Nav className="ms-auto">
                <Nav.Link as={Link} to="/search">Products</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link> 

                </Nav>)}
                

                  {/* // <Nav className="ms-auto">
                  //   <Nav.Link as={Link} to="/search">Products</Nav.Link>
                    */}


                  {/* if(loggedIn)
                  //   {loggedIn ? <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  //   : 
                  //   <Nav.Link as={Link} to="/cart">Cart</Nav.Link> 
                  //   }

                  //  {loggedIn ? <Nav.Link as={Link} to="/login">Login</Nav.Link> 
                  //   : 
                  //   <Nav.Link as={Link} to="/orders">Orders</Nav.Link> 
                  //   }

                  //   {loggedIn ? <Nav.Link as={Link} to="/login">Login</Nav.Link> 
                  //   : 
                  //   <Nav.Link as={Link} to="/orders">Logout</Nav.Link> 
                  //   } */}
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>

}