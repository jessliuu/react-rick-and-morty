import React from "react";
import { Navbar, Form } from "react-bootstrap";

const Header = (props) => {
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
    </>
  );
};

export default Header;
