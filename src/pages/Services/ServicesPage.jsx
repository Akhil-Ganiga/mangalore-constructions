import React from "react";
import Services from "../../components/Services";
import { servicesData } from "../../data";

const ServicesPage = () => {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Our Civil Construction Services</h1>
          <p>
            End-to-end solutions for roads, bridges, industrial facilities and
            infrastructure projects of every scale.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-header">
          <h2>Service Capabilities</h2>
          <p>
            Explore our core offerings, from greenfield developments to complex
            brownfield upgrades.
          </p>
        </div>
        <Services services={servicesData} />
      </section>
    </>
  );
};

export default ServicesPage;

