import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import video from "../../Assets/Video/video.mp4";
import { FaEye, FaClock } from "react-icons/fa";
import PdfDownloader from "../../PdfDownloder/PdfDownloader";

import PurchaseConfirm from "../../Pages/PurchaseConfirm/PurchaseConfirm";

const RightSideNav = ({ selectedCourse }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { title, price, total_view } = selectedCourse;
  return (
    <Row id="pageToDownload" className=" container p-0 mx-auto">
      <Col lg="12">
        <Card className="p-0  border-0 bg-white shadow" style={{ width: "18rem" }}>
          <div className="embed-responsive embed-responsive-16by9">
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

          <Button variant="primary" className="mb-2 " onClick={() => setModalShow(true)}>
            PURCHASE
          </Button>

          <PurchaseConfirm selectedCourse={selectedCourse} show={modalShow} onHide={() => setModalShow(false)} />
          {/*  */}
          <PdfDownloader roofElementId="pageToDownload" downloadFileName={title}></PdfDownloader>

          <BrandCarousel></BrandCarousel>
        </Card>
      </Col>
    </Row>
  );
};

export default RightSideNav;
