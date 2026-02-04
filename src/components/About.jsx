import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80"
          alt="Construction site"
        />
      </div>
      <div className="about-content">
        <h2>About CivilBuild Contractors</h2>
        <p>
          CivilBuild Contractors is a full-service civil construction company
          delivering roads, bridges, industrial structures and urban
          infrastructure across Mangalore, Karnataka.
        </p>
        <p>
          Our multidisciplinary team of engineers, planners and project managers
          leverage modern construction technologies, robust safety practices and
          strong supply-chain partnerships to execute complex projects on time
          and within budget.
        </p>
        <ul className="about-list">
          <li>ISO-compliant quality and safety management systems</li>
          <li>End-to-end project delivery from design coordination to handover</li>
          <li>Transparent reporting and proactive stakeholder communication</li>
        </ul>
        <div className="about-highlights">
          <div>
            <span className="about-number">100%</span>
            <span className="about-label">On-Time Delivery For Last 5 Years</span>
          </div>
          <div>
            <span className="about-number">24/7</span>
            <span className="about-label">Site Monitoring & Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;