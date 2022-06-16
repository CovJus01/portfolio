import * as React from "react";
import Layout from "../components/layout";
import "../styles/index.css";
import Project from "../components/project";

const projectData = {
  Title: "title",
  Description: "This is a short description",
  Image: "imageLink",
  Skills: {
    Java: 20,
    Css: 80,
  },
};

//Body
const ProjectsPage = () => {
  return (
    <Layout>
      <h2>PROJECTS</h2>
      <Project data={projectData} />
    </Layout>
  );
};

export default ProjectsPage;
