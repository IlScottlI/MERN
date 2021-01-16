import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "@reach/router";
export default function NavBarr() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/home" className="navbar-brand">
          React-Bootstrap
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <NavDropdown title="Reach Router" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/1" className="nav-link">
                The Number is:1
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to="/Hello" className="nav-link">
                The Word is: Hello
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Colorful/Red/Blue" className="nav-link">
                The Word is: Colorful
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
