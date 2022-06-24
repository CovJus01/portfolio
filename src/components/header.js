import React from "react";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { Link } from "react-scroll";
const HeaderLink = ({ children, href, target, type, offset }) => (
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
        offset={-window.innerHeight * offset}
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
      <HeaderLink href="introduction" offset={0}>
        Home
      </HeaderLink>
      <HeaderLink href="about" offset={0.135}>
        About
      </HeaderLink>
      <HeaderLink href="experience" offset={0}>
        Experience
      </HeaderLink>
      <HeaderLink href="projects" offset={0}>
        Projects
      </HeaderLink>
    </header>
  );
};

export default Header;
