import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate("/contact");
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-kicker">Trusted Civil Construction Partner</p>
        <h1>
          Building Infrastructure
          <br />
          That Shapes Tomorrow.
        </h1>
        <p className="hero-subtitle">
          We deliver roads, bridges, industrial facilities and public
          infrastructure with an uncompromising focus on safety, quality and
          timelines.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={handleQuoteClick}>
            Request a Quote
          </button>
          <Link to="/projects" className="btn btn-ghost">
            View Our Projects
          </Link>
        </div>
        <div className="hero-stats">
          <div>
            <span className="hero-stat-number">15+</span>
            <span className="hero-stat-label">Years Experience</span>
          </div>
          <div>
            <span className="hero-stat-number">120+</span>
            <span className="hero-stat-label">Completed Projects</span>
          </div>
          <div>
            <span className="hero-stat-number">MNG</span>
            <span className="hero-stat-label">Serving Mangalore, Karnataka</span>
          </div>
        </div>
      </div>
      <div className="hero-image" />
    </section>
  );
};

export default Hero;