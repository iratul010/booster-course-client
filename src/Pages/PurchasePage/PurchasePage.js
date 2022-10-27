import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import { Col, Row } from "react-bootstrap";
const PurchasePage = () => {
  const selectedCourse = useLoaderData();
  const { title, author, details, image_url, total_view, price } = selectedCourse;

  return (
    <div className="container min-vh-100 ">
      <Row className="g-2 justify-content-between align-items-start  ">
        <Col lg="7 shadow bg-white rounded">
          <Card className="text-center border-0">
            <img className="rounded" src={image_url} alt="" />

            <Card.Body>
              <Card.Title>
                <h1>{title}</h1>
              </Card.Title>
              <Card.Text className="text-start   p-3">{details}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Released on june 16</Card.Footer>
          </Card>
        </Col>
        <Col lg="3" p="2">
          <RightSideNav selectedCourse={selectedCourse}></RightSideNav>
        </Col>
      </Row>
    </div>
  );
};

export default PurchasePage;
