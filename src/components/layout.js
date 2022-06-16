import React from "react";
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <div className="main-content">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
