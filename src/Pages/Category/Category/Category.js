import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../../Shared/CourseCard/CourseCard";

const Category = () => {
  const categories = useLoaderData();

  return (
    <div className="container ">
      <div className="row  row-cols-2 row-cols-lg-4 g-4 g-lg-4">
        {categories.map((category) => (
          <CourseCard category={category}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
