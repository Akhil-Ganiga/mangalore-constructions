import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import FAQ from "../../components/FAQ";
import Services from "../../components/Services";
import Projects from "../../components/Projects";
import { servicesData, projectsData } from "../../data";

const HomePage = () => {
  return (
    <>
      <Hero />

      <section className="section section-alt">
        <About />
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Disciplines We Deliver</h2>
          <p>
            CivilBuild partners with public agencies and private developers to
            design, build and upgrade transport, water and industrial
            infrastructure.
          </p>
        </div>
        <Services services={servicesData.slice(0, 3)} />
      </section>

      <section className="section section-alt home-how-we-work">
        <div className="home-inner">
          <div className="home-column">
            <h2>How We Work On Site</h2>
            <p>
              Every project is planned in detail before mobilisation. Our teams
              combine experienced engineers, supervisors and carefully vetted
              subcontractors who follow clear method statements and checklists.
            </p>
            <div className="pill-row">
              <span className="pill">Detailed planning & phasing</span>
              <span className="pill">Daily toolbox talks</span>
              <span className="pill">Digital progress tracking</span>
            </div>
          </div>
          <div className="home-column">
            <div className="home-card">
              <h3>Safety & Quality First</h3>
              <p>
                Sites operate with full PPE compliance, barricading, equipment
                inspections and documented quality checks at every major
                activity.
              </p>
              <ul>
                <li>Zero tolerance for unsafe practices</li>
                <li>Material testing and third-party labs as needed</li>
                <li>Regular internal and client joint inspections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Highlighted Projects</h2>
          <p>
            A few examples of highways, bridges and industrial facilities that
            demonstrate our execution capability.
          </p>
        </div>
        <Projects projects={projectsData.slice(0, 3)} />
      </section>

      <section className="section section-alt">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Quick answers to common queries around timelines, contracting models
            and information we require to start.
          </p>
        </div>
        <FAQ compact />
      </section>
    </>
  );
};

export default HomePage;

