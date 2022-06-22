import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
};

export default Layout;
