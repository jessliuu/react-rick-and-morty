import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Characters() {
  const [characters, setCharacters] = useState();

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    console.log(data);
    setCharacters(data.results);
  };
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      {characters &&
        characters.map((character) => {
          // const { id, name, species } = character;
          const { id, image } = character;
          return (
            <Col key={id}>
              <Card style={{ width: "18rem" }} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Card.Img variant="top" src={image} />
                  </div>
                  <div className="flip-card-back">
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
    </>
  );
}

export default Characters;
