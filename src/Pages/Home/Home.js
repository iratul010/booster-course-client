import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import home from "../../Assets/Brands/home.png";
const Home = () => {
  return (
    <div className="container mx-auto min-vh-100">
      <Card classNameName="container" bg="light">
        <div className="d-flex align-items-center p-5">
          <div className="row no-gutters justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">
                  <h1>Let's build the future of the web, together</h1>
                </h5>
                <p className="card-text ">
                  Take advantage of the latest modern technologies to build amazing web experiences for everyone.
                </p>
                <p className="card-text">
                  <Button variant="primary">Reade More</Button>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={home} className="card-img border-radius" alt="..." />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
