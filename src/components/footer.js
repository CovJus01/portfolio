import React from "react";
import {FaEnvelope} from '@react-icons/all-files/fa/FaEnvelope'
import {FaGithub} from '@react-icons/all-files/fa/FaGithub'
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin'

//Styles
const footerStyle = {
  margin: 0,
  background: "#104547",
  color: "#c8f5f9",
  display:"flex",
  minHeight:"6vh",
};
const buttonWrap = {
  margin: 0,
  background: "#104547",
  color: "#c8f5f9",
  display:"flex",
  width:"33%",
  justifyContent: "center",
  alignItems:"center",
  fontSize: "80%",
};
//Body
const Footer = () => {
  return (
    <div id="header-container">
      <footer style={footerStyle}>
                        <div style ={buttonWrap} >
                            <a target='_blank' href="https://www.linkedin.com/in/justin-covach2001/"><FaLinkedin /></a>
                        </div>  
                        <div style ={buttonWrap} >
                            <a href="mailto:covjus01@gmail.com"><FaEnvelope /></a>
                        </div>  
                        <div style ={buttonWrap} >
                            <a target='_blank' href="https://github.com/CovJus01"><FaGithub /></a>
                        </div>  
      </footer>
    </div>
  );
};

export default Footer;
