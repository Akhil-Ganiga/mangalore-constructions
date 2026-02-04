import React from "react";
import Projects from "../../components/Projects";
import { projectsData } from "../../data";

const ProjectsPage = () => {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Featured Civil Projects</h1>
          <p>
            A selection of roads, bridges, industrial parks and utilities we
            have successfully delivered.
          </p>
        </div>
      </section>
      <section className="section section-alt">
        <div className="section-header">
          <h2>Project Portfolio</h2>
          <p>
            Every project reflects our focus on safety, quality, schedule and
            stakeholder coordination.
          </p>
        </div>
        <Projects projects={projectsData} />
      </section>
    </>
  );
};

export default ProjectsPage;

