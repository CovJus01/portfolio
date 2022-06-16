import * as React from "react";
import Layout from "../components/layout";
import ViewCard from "../components/viewCard";
import "../fonts/fonts.css";
import "../styles/index.css";

//Styles

//Body
const IndexPage = () => {
  return (
    <Layout>
      <section className="introduction">
        <h2 className="fontOswald300">Welcome!</h2>
        <p>
          Hi there, glad you could make it! Welcome to my personal portfolio
          where you should be able to find some cool projects I've been working
          on, a few things about myself and how to connect with me!
          <br />
          Below you can find a few things to get you started:
        </p>
      </section>
      <section className="quickViews"></section>
    </Layout>
  );
};

export default IndexPage;
