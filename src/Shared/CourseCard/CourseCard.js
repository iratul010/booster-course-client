import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaShareAlt } from "react-icons/fa";
const CourseCard = ({ category }) => {
  const { _id, title, author, details, image_url, total_view } = category;
  return (
    <Card className="m-4 ">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image className="me-2" roundedCircle style={{ height: "60px" }} src={author.img}></Image>
          <div className="">
            <p className="mb-0">{author.name}</p> <p>{author.published_date}</p>
          </div>
        </div>
        <div>
          <FaBookmark></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 100 ? (
            <>
              {details.slice(0, 100) + "..."}
              <Link to={`/news/${_id}`}> Read More</Link>{" "}
            </>
          ) : (
            <> {details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default CourseCard;
