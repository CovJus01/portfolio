import React from "react";
import { Link } from "gatsby";

//Styles
const navbar = {
  margin: 0,
  background: "#104547",
  color: "#ffffff",
};

//Body
const Nav = () => {
  return (
    <div id="nav-container" style={navbar}>
      <Link to="/about">About Me!</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/extra">Extra</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Nav;
