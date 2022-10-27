import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import video from "../../Assets/Video/video.mp4";
import { FaEye, FaClock } from "react-icons/fa";
const RightSideNav = ({ selectedCourse }) => {
  const { price, total_view } = selectedCourse;
  return (
    <Row>
      <Col lg="12">
        <Card className="p-2 border-0 bg-white shadow" style={{ width: "18rem" }}>
          <div className="embed-responsive embed-responsive-16by9">
            {/* <iframe className="embed-responsive-item" src={video} allowfullscreen></iframe> */}
            <video className="m-3" controls muted autoplay style={{ height: "200px", width: "250px" }}>
              <source src={video} type="video/mp4"></source>
            </video>
          </div>
          <Card.Body>
            <Card.Title>
              <Row className="text-center">
                <Col>
                  <small>
                    <FaEye /> {total_view}
                  </small>
                </Col>
                <Col>
                  <small>
                    <FaClock /> 2:57s
                  </small>
                </Col>
              </Row>
            </Card.Title>
            <Card.Title>
              <small className="text-decoration-line-through">Price: {parseInt(price) + 20}$</small>
              <br />
              <small>Discount: </small>

              <small className="fs-3 text-black ">{price || " 8$"}</small>
            </Card.Title>
          </Card.Body>
          <Button variant="primary" className="mb-2">
            PURCHASE
          </Button>
          <Button className="text-white" variant="info">
            DOWNLOAD PDF
          </Button>
          <BrandCarousel></BrandCarousel>
        </Card>
      </Col>
    </Row>
  );
};

export default RightSideNav;
