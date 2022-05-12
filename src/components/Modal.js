import React from "react";

const Modal = (props) => {
  const { species, setShowModal } = props;
  // const openModal =
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => setShowModal(false)}>X</button>
        <div className="modalPart1">Species: {species}</div>
        <div className="modalPart2">Status: </div>
      </div>
    </div>
  );
};

export default Modal;
