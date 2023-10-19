import React from "react";

//Components
const Job = ({ job }) => {
  return (
    <div className="job-wrap">
      <div className="center">
        <img src={job.image} className="job-image" alt="RPDU Logo" />
      </div>
      <div>
        <h2>
          {job.company} - {job.title}
        </h2>
        <p>{job.description}</p>
      </div>
    </div>
  );
};
//Body
const data = require("../data/experience.json");
const skills = require("../data/skills.json");
const Experience = () => {
  return (
    <div className="experience">
      <div className="content-wrap">
        <div>
          <h1>Experience</h1>
        </div>
        <section className="work-experience-gallery">
          {data.Experience.map((job) => (
            <Job key={job._id} job={job} />
          ))}
        </section>
        <section className="Skills">
          <h2>Skills</h2>
          {skills.list.map((skill, index) => (
            <h4 key={index}>{skill}</h4>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Experience;
