import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet, useLoaderData } from "react-router-dom";

import LeftSideNav from "../../Shared/LeftSideNav.js/LeftSideNav";
import AllCourse from "../AllCourse/AllCourse";

const Courses = () => {
  const allCourses = useLoaderData();

  return (
    <div className="container min-vh-100 d-none d-lg-block">
      <h2 className="text-center">All Courses</h2>
      <Row className="container">
        <Col lg="2" className="m-0">
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col lg="10">
          <div className="row row-cols-4 row-cols-lg-4 g-3 g-lg-2 ">
            {allCourses.map((course, i) => (
              <AllCourse key={i} course={course}></AllCourse>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Courses;
