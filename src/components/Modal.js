import React from "react";
// import "./Modal.css";

const Modal = (props) => {
  const { species, setShowModal, status } = props;
  // const openModal =
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <div className="modalPart1">Species: {species}</div>
        <div className="modalPart2">Status: {status} </div>
      </div>
    </div>
  );
};

export default Modal;
