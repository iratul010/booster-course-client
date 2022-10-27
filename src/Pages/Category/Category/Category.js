import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../../Shared/CourseCard/CourseCard";

const Category = () => {
  const categories = useLoaderData();

  return (
    <div className="  container mx-auto min-vh-100">
      <div className=" container row mx-auto p-0 m-0  row-cols row-cols-lg-4 g-3 g-lg-4  ">
        {categories.map((category, i) => (
          <CourseCard key={i} category={category}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
