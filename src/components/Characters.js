import React, { useEffect, useState } from "react";
import { Navbar, Form, Card, Button } from "react-bootstrap";
import Character from "./Character";

function Characters() {
  const [characters, setCharacters] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    console.log(data);
    setCharacters(data.results);
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
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetchPrevPage();
  }, []);

  return (
    <>
      <Navbar
        className="navbar-light bg-light justify-content-center"
        style={{ padding: 40 }}
      >
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>

        {/* <Nav className="ml-auto"> */}
        <Form inline>
          <Form.Control
            variant="outline-success"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
        </Form>
        {/* </Nav> */}
      </Navbar>

      {characters &&
        characters.map((character) => {
          return <Character info={character} />;
        })}

      <Card.Footer
        className="bg-light justify-content-around"
        style={{ padding: 40, textAlign: "center" }}
      >
        <Button onClick={() => fetchPrevPage()}>Backward</Button>
        <Button onClick={() => fetchNextPage()}>Next</Button>
      </Card.Footer>
    </>
  );
}

export default Characters;
