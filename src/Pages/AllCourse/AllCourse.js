import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const AllCourse = ({ course }) => {
  const { _id, title, author, details, image_url, total_view, price } = course;
  console.log(_id);

  return (
    <Card className="shadow border-0 m-2 p-2 " style={{ width: "18rem" }}>
      <div style={{ height: "180px" }}>
        <Card.Img className="shadow rounded" variant="top" style={{ height: "100%" }} src={image_url} />
      </div>
      <Card.Body>
        <Card.Title style={{ height: "80px" }}>{title}</Card.Title>
        <Link to={`/course/${_id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
      <div className="d-flex justify-content-between">
        <p className="fw-semibold">{price || "8$"}</p>
        <p className="">
          <FaEye /> <small>{total_view || "230"}</small>
        </p>
      </div>
    </Card>
  );
};

export default AllCourse;
