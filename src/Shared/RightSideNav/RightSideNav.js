import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-dark" className="mb-2 text-align-center">
          <FaGoogle className="me-1" /> Login with Google
        </Button>
        <Button variant="outline-dark" className="text-align-center ">
          <FaGithub className="me-1" />
          Login With Github
        </Button>
      </ButtonGroup>
      <ListGroup className="mt-3">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
