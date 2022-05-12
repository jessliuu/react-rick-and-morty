import React from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";
import "./index.css";
// import Container from "react-bootstrap/Container";

import { Row } from "react-bootstrap";

function App() {
  return (
    <div>
      <Header title="What" charname="Rick" />

      <Row>
        <Characters />
      </Row>
    </div>
  );
}

export default App;
