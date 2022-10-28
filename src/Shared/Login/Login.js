import React from "react";
import Card from "react-bootstrap/Card";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { providerLogin, signIn, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        navigate(from, { replace: true });
        setError("");
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((res) => {
        const user = res.user;
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((res) => {
        const user = res.user;
        navigate(from, { replace: true });
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
                  <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                  <br />
                  {error ? <Form.Text className="text-danger">{error}</Form.Text> : ""}
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Link className="text-decoration-none">
                  {" "}
                  <p className="m-3 text-danger ">Forget Password</p>
                </Link>
                <p className="text-decoration-none">
                  Don't have an account?
                  <Link className="m-3 text-danger " to="/register">
                    Create a new account
                  </Link>
                </p>
              </Form>
            </div>

            <div className="  mt-4">
              <h4 className="w-100  border-bottom m-3 p-4"> Or Sign In With</h4>
              <ButtonGroup vertical>
                <Button variant="outline-dark" className="mb-2" onClick={handleGoogleSignIn}>
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

export default Login;
