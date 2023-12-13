// import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
// import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useState(null);
  const navigate = useNavigate();

  const handleSignout = () => {
    // signOut(auth);
  };
  const handleNavigateC = () => {
    navigate(`/contact`);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={50} src={logo} alt="" />
           
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="service">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="gallery">
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} to="contact">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <button
                className="btn btn-new rounded-pill mx-3"
                onClick={handleNavigateC}
              >
                Let's Talk
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
