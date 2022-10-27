import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import LeftSideNav from "../LeftSideNav.js/LeftSideNav";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { Image } from "react-bootstrap";

const Header = () => {
  const { user } = useContext(AuthContext);
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
          <Nav className="text-center">
            <Nav href="#deets">
              {user?.uid ? (
                <>
                  <Link className="text-decoration-none text-white me-2" to="/">
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Nav>
                    {" "}
                    <Link className="text-decoration-none text-white me-2" to="/login">
                      Login
                    </Link>
                  </Nav>
                  <Nav>
                    <Link className="text-decoration-none text-white me-2" to="/register">
                      Register
                    </Link>
                  </Nav>
                </>
              )}
            </Nav>
            {/* <Nav eventKey={2} href="#memes">
             
            </Nav> */}
            <Nav eventKey={2} href="#memes">
              <Link className="text-decoration-none">
                {user?.uid ? (
                  <Image style={{ height: "35px" }} src={user.photoURL} roundedCircle></Image>
                ) : (
                  <div style={{ fontSize: "20px" }} className="border-0 p-0 m-0">
                    <FaUserCircle />
                  </div>
                )}
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
