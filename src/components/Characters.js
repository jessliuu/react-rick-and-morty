import React, { useEffect, useState } from "react";
import { Navbar, Form } from "react-bootstrap";
import Character from "./Character";

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
    </>
  );
}
// <Character info={ id, name, species, image}/>
// const { id, name, species } = character;
// const { id, image, name, species } = character;
// return (
// <Col key={id}>
//   <Card style={{ width: "18rem" }} className="flip-card">
//     <div className="flip-card-inner">
//       <div className="flip-card-front">
//         <Card.Img variant="top" src={image} />
//       </div>
//       <div className="flip-card-back">
//         <Card.Body>
//           <Card.Title>{name} </Card.Title>

//           <Card.Text>
//             <button
//             // onClick={() => {
//             //   setShowModal(true);
//             // }}
//             >
//               Learn More
//             </button>
//           </Card.Text>
//         </Card.Body>
//       </div>
//     </div>
//     {/* {showModal && (
//       <Modal setShowModal={setShowModal} species={species} />
//     )} */}
//   </Card>
// </Col>
//   );
// })}

export default Characters;
