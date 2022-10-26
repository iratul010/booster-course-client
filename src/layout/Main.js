import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav.js/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="7">
            <Home></Home>
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
