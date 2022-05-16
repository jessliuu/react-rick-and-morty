import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import Modal from "./Modal";
import { useState } from "react";

const Character = (props) => {
  const id = props.info.id;
  const name = props.info.name;
  const species = props.info.species;
  const image = props.info.image;
  const status = props.info.status;
  //   console.log(props);

  const [showModal, setShowModal] = useState(false);
  return (
    <Col key={id}>
      <Card style={{ width: "16rem" }} className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front bg-info">
            <Card.Img variant="top" src={image} />
          </div>
          <div className="flip-card-back bg-info">
            <Card.Body>
              <Card.Title>{name} </Card.Title>

              <Card.Text>
                <Button
                  variant="light"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Learn More
                </Button>
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          species={species}
          status={status}
          name={name}
          image={image}
        />
      )}
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
