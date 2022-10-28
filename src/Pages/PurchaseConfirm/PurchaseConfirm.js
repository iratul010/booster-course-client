import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcCheckmark } from "react-icons/fc";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
const PurchaseConfirm = (props) => {
  const { title, image_url, total_view, price } = props.selectedCourse;
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Modal {...props} size="lg" centered className="w-70">
      <Modal.Header closeButton>
        <card className="text-center fs-5" id="contained-modal-title-vcenter">
          Congratulations!
        </card>
        <small className="ms-2">
          <FcCheckmark style={{ fontSize: "39px" }} />
        </small>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column flex-lg-row  justify-content-evenly">
        <Card style={{ width: "18rem" }}>
          <p className="fw-semibold m-0 p-2">{title}</p>
          <Card.Img variant="top" src={image_url} />
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" className="border " style={{ width: "80px", height: "80px" }} src={user?.photoURL} />
          <Card.Body>
            <Card.Title> {user?.displayName}</Card.Title>
            <Card.Text>
              {`We want to give you to  10%  discount for your first order! Check Your Email: ${user?.email} `}
            </Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PurchaseConfirm;
