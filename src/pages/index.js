import * as React from "react";
import Layout from "../components/layout";
import Introduction from "../components/introduction";
import "../fonts/fonts.css";
import "../styles/index.css";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import { SEO } from "../components/seo";

//Body
const IndexPage = () => {
  return (
    <Layout>
      <section id="introduction" className="first content-block">
        <Introduction />
      </section>
      <section id="about" className="second content-block">
        <About />
      </section>
      <section id="experience" className="third content-block">
        <Experience />
      </section>

      <section id="projects" className="fourth content-block">
        <Projects />
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
