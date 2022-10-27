import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
const LeftSideNav = () => {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="text-black border text-center p-0">
      <h4>All Categories</h4>
      {/* <div className="p-3">
        {Categories.map((Category) => (
          <p key={Category.id} className="text-start ">
            <Link to={`/category/${Category.id}`} className=" fw-bold text-info p-0">
              {Category.name}
            </Link>
          </p>
        ))}
      </div> */}
      <Card>
        <ListGroup variant="flush">
          {Categories.map((Category) => (
            <ListGroup.Item key={Category.id} style={{ hover: "bg-info" }}>
              {" "}
              <Link to={`/category/${Category.id}`} className=" fw-bold text-info p-0">
                {Category.name}
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default LeftSideNav;
