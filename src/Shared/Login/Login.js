import React from "react";
import Card from "react-bootstrap/Card";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <Row className="justify-content-center min-vh-100 ">
      <Col lg="5">
        <Card className="  container mx-auto   border shadow p-4">
          <div className="text-center border-bottom mb-3 p-3">
            <h1>Login</h1>
            <p>Use a local account to log in.</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center  mw-100   ">
            <div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <p className="m-3">Forget Password</p>
              </Form>
            </div>

            <div className="  mt-4">
              <h4 className="w-100  border-bottom m-3 p-4"> Or Sign In With</h4>
              <ButtonGroup vertical>
                <Button variant="outline-dark" className="mb-2">
                  <FaGoogle /> Login with Google
                </Button>
                <Button variant="outline-dark" className="mb-2">
                  <FaFacebook /> Login with FaceBook
                </Button>
                <Button variant="outline-dark" className="mb-2">
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

export default Login;
