import React from "react";

const Services = ({ services }) => {
  return (
    <div className="grid">
      {services.map((service) => (
        <article key={service.id} className="card service-card">
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </article>
      ))}
    </div>
  );
};

export default Services;