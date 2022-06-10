import React from "react";
import logo from "../images/personal-logo.png";

//Style
const header = {
  margin: 0,
  background: "#282830",
  color: "#ffffff",
  display: "flex",
};

const title = {
  fontSize:"60px",
  width: "80%",
  textAlign: "center"
}
const imageWrap = {width: "10%", display:"flex",alignItems: "center",justifyContent:"center"};

//Body
const Header = () => {
  return (
    <div style={header}>
      <div style = {imageWrap}>
      <img height = "60px" width="60px" alt="Gatsby G Logo" src={logo} />
      </div>
      <h1 style = {title}>Justin Covach</h1>
    
    <div style = {{width: "10%"}}/>
    </div>
  );
};

export default Header;
