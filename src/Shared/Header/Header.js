import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import LeftSideNav from "../LeftSideNav.js/LeftSideNav";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark " className="mb-5">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="text-decoration-none text-white">
            Booster Courses
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav>
              <Link to="/courses" className="text-decoration-none text-white me-3">
                Courses
              </Link>
            </Nav>
            <Nav>
              <Link to="/faq" className="text-decoration-none text-white me-3">
                FAQ
              </Link>
            </Nav>
            <Nav>
              <Link to="/blog" className="text-decoration-none text-white me-3">
                Blog
              </Link>
            </Nav>
          </Nav>
          <nav>
            <Form>
              <Form.Check type="switch" id="custom-switch" label="Check this switch" />
            </Form>
          </nav>
          <Nav>
            <Nav href="#deets">
              <Link to="/login" className="text-decoration-none text-white me-2">
                Login
              </Link>
            </Nav>
            <Nav eventKey={2} href="#memes">
              <Link className="text-decoration-none text-white me-2" to="/register">
                Register
              </Link>
            </Nav>
            <Nav eventKey={2} href="#memes">
              <Link className="text-decoration-none">
                <img src="" alt="" />
                pppp
              </Link>
            </Nav>
          </Nav>
          <div className="d-lg-none fw-bold mt-3">
            <LeftSideNav className="text-white"></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
