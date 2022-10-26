import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h4>All Categories</h4>
      <div>
        {Categories.map((Category) => (
          <p key={Category.id}>
            <Link to={`/category/${Category.id}`}>{Category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
