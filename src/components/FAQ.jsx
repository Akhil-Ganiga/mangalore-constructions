import React, { useState } from "react";

const FAQ = ({ compact = false }) => {
  const [openId, setOpenId] = useState(1);

  const faqs = [
    {
      id: 1,
      question: "What type of civil projects do you specialise in?",
      answer:
        "We execute roads and highways, bridges, industrial and commercial buildings, logistics parks, water infrastructure and large-scale earthworks. Our team can support both government and private sector projects.",
    },
    {
      id: 2,
      question: "How do you ensure projects are delivered on time?",
      answer:
        "We use detailed baseline scheduling, fortnightly look-ahead planning, strong subcontractor coordination and proactive risk management. Progress is tracked closely with regular client reviews and digital reporting.",
    },
    {
      id: 3,
      question: "Do you work as a turnkey EPC contractor?",
      answer:
        "Yes. Depending on client needs, we can deliver EPC, item-rate or pure execution contracts. For EPC we support design coordination, procurement, construction and commissioning.",
    },
    {
      id: 4,
      question: "What safety and quality standards do you follow?",
      answer:
        "Our sites operate under robust HSE plans, tool-box talks, PPE compliance and regular audits. Quality is governed by method statements, ITPs and checklists aligned with relevant IS and IRC codes.",
    },
    {
      id: 5,
      question: "How can I get a cost estimate for my project?",
      answer:
        "Share your drawings, basic BOQ or concept note through our contact form. Our pre-construction team will review the scope and revert with clarifications and a ballpark estimate.",
    },
  ];

  const displayedFaqs = compact ? faqs.slice(0, 3) : faqs;

  return (
    <div className={`faq ${compact ? "faq-compact" : ""}`}>
      <div className="faq-list">
        {displayedFaqs.map((item) => {
          const isOpen = openId === item.id;
          return (
            <article
              key={item.id}
              className={`faq-item ${isOpen ? "open" : ""}`}
              onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
            >
              <div className="faq-header">
                <h3>{item.question}</h3>
                <button
                  type="button"
                  className="faq-toggle"
                  aria-label={isOpen ? "Collapse answer" : "Expand answer"}
                >
                  <span>{isOpen ? "−" : "+"}</span>
                </button>
              </div>
              {isOpen && <p className="faq-body">{item.answer}</p>}
            </article>
          );
        })}
      </div>
      {!compact && (
        <aside className="faq-aside">
          <div className="faq-aside-card">
            <h4>Still have questions?</h4>
            <p>
              Reach out to our pre-construction team for clarifications on
              specifications, timelines or budgeting.
            </p>
            <ul>
              <li>Detailed proposals for qualified enquiries</li>
              <li>Site visits for large or complex projects</li>
              <li>Transparent and collaborative planning</li>
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
};

export default FAQ;

