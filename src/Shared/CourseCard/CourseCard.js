import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaShareAlt } from "react-icons/fa";
const CourseCard = ({ category }) => {
  const { _id, title, author, details, image_url, total_view } = category;
  return (
    <div>
      <Card className="d-flex justify-content-center   shadow border">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image className="me-2 rounded shadow" roundedCircle style={{ height: "60px" }} src={author.img}></Image>
            <p className="mb-0">{author.name}</p> <p>{author.published_date}</p>
          </div>
          <div>
            <FaBookmark></FaBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img className=" rounded" variant="top" src={image_url} style={{ height: "200px" }} />
          <Card.Text>
            {details.length > 100 ? (
              <>
                {details.slice(0, 100)}
                <Link to={`/course/${_id}`}> Read More...</Link>{" "}
              </>
            ) : (
              <> {details}</>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default CourseCard;
