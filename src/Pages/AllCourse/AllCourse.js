import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const AllCourse = ({ course }) => {
  const { title, author, details, image_url, total_view, price } = course;

  return (
    <Card className="m-2 p-2" style={{ width: "18rem" }}>
      <div style={{ height: "180px" }}>
        <Card.Img variant="top" style={{ height: "100%" }} src={image_url} />
      </div>
      <Card.Body>
        <Card.Title style={{ height: "80px" }}>{title}</Card.Title>
        <Button variant="primary">Details</Button>
      </Card.Body>
      <div className="d-flex justify-content-between">
        <p>{price}</p> <small>{total_view}</small>
      </div>
    </Card>
  );
};

export default AllCourse;
