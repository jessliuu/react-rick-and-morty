import React, { useEffect, useState } from "react";
import { Navbar, Form, Card, Button } from "react-bootstrap";
import Character from "./Character";
import { Row } from "react-bootstrap";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const [count, setCount] = useState(1);
  const [myInput, setMyInput] = useState(null);
  const [filteredResults, setFilteredResults] = useState();

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    console.log(data.results);
    setCharacters(data.results);
    setFilteredResults(data.results);
    console.log(count);
  };
  useEffect(() => {
    fetchCharacters();
  }, []);

  const changeCounter = async (event) => {
    if (event.target.value === "next") {
      setCount(count + 1);
      const responseNP = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${count + 1}`
      );
      const dataNP = await responseNP.json();
      console.log(dataNP);
      setCharacters(dataNP.results);
      setFilteredResults(dataNP.results);
    } else {
      if (count !== 1) {
        setCount(count - 1);
        const responsePP = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${count - 1}`
        );
        const dataPP = await responsePP.json();
        console.log(dataPP);
        setCharacters(dataPP.results);
        setFilteredResults(dataPP.results);
      }
    }
  };

  const onChangeInput = (event) => {
    setMyInput(event.target.value);
  };

  const filtered = () => {
    const results = characters.filter((r) => {
      return r.name.toLowerCase().includes(myInput.toLowerCase());
    });
    setFilteredResults(results);
  };
  // console.log(filtered());

  useEffect(() => {
    filtered();
  }, [myInput]);

  return (
    <>
      <Navbar
        className="navbar-light justify-content-center"
        style={{ padding: 20, backgroundColor: "#8BCF21", color: "white" }}
      >
        <Form inline>
          <Form.Control
            variant="outline-success"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={onChangeInput}
          />
        </Form>
        <Navbar.Brand
          href="#home"
          style={{ color: "white", paddingLeft: "4%" }}
        >
          Rick and Morty Characters
        </Navbar.Brand>
      </Navbar>

      <Row className="g-4" style={{ margin: 24 }}>
        {filteredResults &&
          filteredResults.map((character) => {
            return <Character info={character} />;
          })}
      </Row>

      <Card.Footer
        style={{
          padding: 40,
          textAlign: "center",
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "#8BCF21",
        }}
      >
        <Button variant="light" value="prev" onClick={changeCounter}>
          Backward
        </Button>
        <Button variant="light" value="next" onClick={changeCounter}>
          Next
        </Button>
      </Card.Footer>
    </>
  );
}

export default Characters;
