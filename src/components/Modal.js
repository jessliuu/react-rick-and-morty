import React from "react";
import { Card } from "react-bootstrap";
import "./Modal.css";
import "../index.css";

const Modal = (props) => {
  const { name, image, species, setShowModal, status } = props;
  // const openModal =
  return (
    <div onClick={() => setShowModal(false)} className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <h4>{name}</h4>
        <Card
          style={{ width: "16rem", alignSelf: "center", marginBottom: "4px" }}
        >
          <Card.Img variant="top" src={image} />
        </Card>
        <div
          className="modalPart1"
          style={{ alignSelf: "center", marginBottom: "4px" }}
        >
          Species: {species}
        </div>
        <div
          className="modalPart2"
          style={{ alignSelf: "center", marginBottom: "4px" }}
        >
          Status: {status}{" "}
        </div>
      </div>
    </div>
  );
};

export default Modal;
