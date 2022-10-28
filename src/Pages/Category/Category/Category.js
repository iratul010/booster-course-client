import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../../Shared/CourseCard/CourseCard";

const Category = () => {
  const categories = useLoaderData();
  console.log("courses", categories);
  return (
    <div className="  container mx-auto min-vh-100">
      <div className=" row  row-cols row-cols-lg-3 g-4  ">
        {categories.map((category, i) => (
          <CourseCard key={i} category={category}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
