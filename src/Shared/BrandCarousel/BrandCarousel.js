import React from "react";

import Carousel from "react-bootstrap/Carousel";
import brand1 from "../../Assets/Brands/brands1.png";
import brand2 from "../../Assets/Brands/brands2.png";
import brand3 from "../../Assets/Brands/brands3.png";
import brand4 from "../../Assets/Brands/brands4.png";
import brand5 from "../../Assets/Brands/brands5.png";
import brand6 from "../../Assets/Brands/brands6.png";
import brand7 from "../../Assets/Brands/brands7.png";
const BrandCarousel = () => {
  return (
    <Carousel className="mt-3">
      <Carousel.Item style={{ height: "180px" }}>
        <img className="d-block w-100" style={{ height: "100%" }} src={brand1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item style={{ height: "180px" }}>
        <img className="d-block w-100" src={brand2} style={{ height: "100%" }} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item style={{ height: "180px" }}>
        <img className="d-block w-100" src={brand3} style={{ height: "100%" }} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item style={{ height: "180px" }}>
        <img className="d-block w-100" src={brand4} style={{ height: "100%" }} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item style={{ height: "180px" }}>
        <img className="d-block w-100" src={brand5} style={{ height: "100%" }} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item style={{ height: "180px" }}>
        <img className="d-block w-100" src={brand6} style={{ height: "100%" }} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item style={{ height: "180px" }}>
        <img className="d-block w-100" src={brand7} style={{ height: "100%" }} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;
