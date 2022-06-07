import React from "react";
import { Link } from "gatsby";

//Styles
const navbar = {
  margin: 0,
  background: "#104547",
  color: "#ffffff",
  display:"flex",
};
const navContent ={
  width: "25%",
  textAlign: "center"
}

//Body
const Nav = () => {
  return (
    <div id="nav-container" style={navbar}>
      <Link to="/about" style={navContent}>About Me!</Link>
      <Link to="/projects" style={navContent}>Projects</Link>
      <Link to="/extra" style={navContent}>Extra</Link>
      <Link to="/contact" style={navContent}>Contact</Link>
    </div>
  );
};

export default Nav;
