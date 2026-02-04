import React from "react";
import Contact from "../../components/Contact";

const ContactPage = () => {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Contact Our Team</h1>
          <p>
            Share your project details and we will assemble the right team to
            support you from concept to commissioning.
          </p>
        </div>
      </section>
      <section className="section section-alt">
        <Contact />
      </section>
    </>
  );
};

export default ContactPage;

