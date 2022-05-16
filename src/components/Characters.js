import React, { useEffect, useState } from "react";
import { Navbar, Form, Card, Button } from "react-bootstrap";
import Character from "./Character";
import { Row } from "react-bootstrap";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(1);
  const [myInput, setMyInput] = useState(null);
  const [filteredResults, setFilteredResults] = useState();

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    console.log(data.results);
    setCharacters(data.results);
    setFilteredResults(data.results);
  };
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchNextPage = async () => {
    const responseNP = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${currentPage + 1}`
    );
    const dataNP = await responseNP.json();
    console.log(dataNP);
    setCharacters(dataNP.results);
    setCurrentPage(currentPage + 1);
    setFilteredResults(dataNP.results);
  };

  useEffect(() => {
    fetchNextPage();
  }, []);

  const fetchPrevPage = async () => {
    if (currentPage !== 1) {
      const responsePP = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${currentPage - 1}`
      );
      const dataPP = await responsePP.json();
      console.log(dataPP);
      setCharacters(dataPP.results);
      setFilteredResults(dataPP.results);
      setCurrentPage(currentPage - 1);
      console.log("current page", currentPage);
    }
  };

  useEffect(() => {
    fetchPrevPage();
  }, []);

  const changeCounter = (event) => {
    if (event.target.value === "next") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    console.log(count);
  };

  const onChangeInput = (event) => {
    setMyInput(event.target.value);
    // let filtered = characters.filter((r) => {
    //   return r.name.includes(myInput);
    // });
    // setFilteredResults(filtered);
    // console.log(filtered);
  };

  // const [results, setResults] = useState(characters);

  const filtered = () => {
    const results = characters.filter((r) => {
      return r.name.includes(myInput);
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
          alignContent: "flex-end",
          backgroundColor: "#8BCF21",
        }}
      >
        <Button variant="light" value="prev" onClick={fetchPrevPage}>
          Backward
        </Button>
        <Button variant="light" value="next" onClick={fetchNextPage}>
          Next
        </Button>
      </Card.Footer>
    </>
  );
}

export default Characters;
