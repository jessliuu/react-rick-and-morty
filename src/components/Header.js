import React from "react";

import Input from "react-bootstrap/Input";

const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Button color="green" text="Add" />
    </div>
  );
};

export default Header;
