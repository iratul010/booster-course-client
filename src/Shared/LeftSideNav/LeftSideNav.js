import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://booster-courses-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="text-black   text-center p-0   d-lg-block shadow border-0 ">
      <Card>
        <h4 className="  lg-text-black">All Categories</h4>
        <ListGroup variant="flush">
          {categories.map((category) => (
            <ListGroup.Item className="border-0 border-bottom" key={category.id} style={{ hover: "bg-info" }}>
              {" "}
              <Link to={`/category/${category.id}`} className=" fw-bold border-0 text-info p-0">
                {category.name}
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default LeftSideNav;
