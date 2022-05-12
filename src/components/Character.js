import React from "react";
import { Col, Card } from "react-bootstrap";
import Modal from "./Modal";
import { useState } from "react";

const Character = (props) => {
  const id = props.info.id;
  const name = props.info.name;
  const species = props.info.species;
  const image = props.info.image;
  //   console.log(props);

  const [showModal, setShowModal] = useState(false);
  return (
    <Col key={id}>
      <Card style={{ width: "18rem" }} className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Card.Img variant="top" src={image} />
          </div>
          <div className="flip-card-back">
            <Card.Body>
              <Card.Title>{name} </Card.Title>

              <Card.Text>
                <button
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Learn More
                </button>
              </Card.Text>
            </Card.Body>
          </div>
        </div>
        {showModal && <Modal setShowModal={setShowModal} species={species} />}
      </Card>
    </Col>
    // <div key={id}>
    //   <p>
    //     {name}, {species}
    //   </p>
    //   {showModal && <Modal setShowModal={setShowModal} species={species} />}
    // </div>
  );
};

export default Character;
