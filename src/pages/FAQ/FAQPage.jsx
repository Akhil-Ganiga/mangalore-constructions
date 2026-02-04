import React from "react";
import FAQ from "../../components/FAQ";

const FAQPage = () => {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find quick answers about timelines, safety, pricing models and how
            we approach complex civil works.
          </p>
        </div>
      </section>
      <section className="section">
        <FAQ />
      </section>
    </>
  );
};

export default FAQPage;

