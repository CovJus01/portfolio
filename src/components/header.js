import React from "react";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { Link } from "react-scroll";
//Style
const HeaderLink = ({ children, href, target, type }) => (
  <div className="link-wrap ">
    {type === "icon" ? (
      <a
        className={`header-link ${type} fontLato400`}
        target={target}
        href={href}
      >
        {children}
      </a>
    ) : (
      <Link
        className="header-link fontLato400"
        activeClass="active"
        to={href}
        spy={true}
        smooth={true}
        offset={-window.innerHeight * 0.07}
        duration={1000}
      >
        {children}
      </Link>
    )}
  </div>
);
//Body
const Header = () => {
  return (
    <header className="header">
      <HeaderLink
        target="_blank"
        href="https://github.com/CovJus01"
        type="icon"
      >
        <FaGithub />
      </HeaderLink>
      <HeaderLink
        target="_blank"
        href="https://www.linkedin.com/in/justin-covach2001/"
        type="icon"
      >
        <FaLinkedin />
      </HeaderLink>
      <HeaderLink href="mailto:covjus01@gmail.com" type="icon">
        <FaEnvelope />
      </HeaderLink>
      <HeaderLink href="introduction">Home</HeaderLink>
      <HeaderLink href="about">About</HeaderLink>
      <HeaderLink href="experience">Experience</HeaderLink>
      <HeaderLink href="projects">Projects</HeaderLink>
      <HeaderLink href="contact">Contact</HeaderLink>
    </header>
  );
};

export default Header;
