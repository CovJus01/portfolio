import React from "react";
import { Link } from "gatsby";

const Project = ({ project }) => {
  return (
    <div className="project-wrap">
      <div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {project.hasOwnProperty("projectLink") ? (
          <Link to={project.projectLink}>Check Project</Link>
        ) : null}
      </div>
    </div>
  );
};

//Body
const Projects = () => {
  const projects = require("../data/projects.json");
  return (
    <div className="projects">
      <div className="content-wrap">
        <div>
          <h1>Projects</h1>
        </div>

        <section className="project-gallery">
          {projects.projects.map((project) => (
            <Project key={project._id} project={project} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Projects;
