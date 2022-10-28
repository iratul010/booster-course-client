import React from "react";
import Card from "react-bootstrap/Card";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { useContext } from "react";

import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");

  const { createUser, userUpdate, githubLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, email, password, confirm);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUserUpdate(name, url);
        setError("");
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };

  const handleUserUpdate = (name, photoURL) => {
    const profileInfo = {
      displayName: name,
      photoURL: photoURL,
    };
    userUpdate(profileInfo);
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((res) => {
        const user = res.user;

        setError("");
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };
  return (
    <Row className="justify-content-center min-vh-100 ">
      <Col lg="5">
        <Card className="  container mx-auto   border shadow p-2">
          <div className="text-center border-bottom mb-2 p-3">
            <h1>Register</h1>
            <p>Use a local account to log in.</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center  mw-100   ">
            <div>
              <Form className=" " onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label> Photo Url</Form.Label>
                  <Form.Control type="text" name="photoUrl" placeholder=" Photo Url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Confirm Password </Form.Label>
                  <Form.Control type="password" name="confirm" placeholder="Confirm Password " required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                  <br />
                  <p className="text-decoration-none">
                    Already have an account?
                    <Link className="m-3 text-danger " to="/register">
                      Login
                    </Link>
                  </p>
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <div style={{ width: "200px" }}>{error ? <Form.Text className="text-danger ">{error}</Form.Text> : ""}</div>
            </div>

            <div className="  mt-4">
              <h4 className="w-100  border-bottom m-3 p-4"> Or Sign In With</h4>
              <ButtonGroup vertical>
                <Button variant="outline-dark" className="mb-2">
                  <FaGoogle /> Login with Google
                </Button>

                <Button variant="outline-dark" className="mb-2" onClick={handleGithubLogin}>
                  <FaGithub /> Login with GitHub
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
