import React from "react";
import logo from "../images/personal-logo.png";

//Style
const header = {
  margin: 0,
  background: "#282830",
  color: "#ffffff",
};

//Body
const Header = () => {
  return (
    <div style={header}>
      <img width="60px" alt="Gatsby G Logo" src={logo} />
      <h1>Justin Covach</h1>
    </div>
  );
};

export default Header;
