import React from "react";

const Projects = ({ projects }) => {
  return (
    <div className="grid">
      {projects.map((project) => (
        <article key={project.id} className="card project-card">
          <div className="project-image-wrapper">
            <img src={project.image} alt={project.name} />
            <span className="project-category">{project.category}</span>
          </div>
          <div className="project-body">
            <h3>{project.name}</h3>
            <p className="project-location">{project.location}</p>
            <p>{project.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Projects;