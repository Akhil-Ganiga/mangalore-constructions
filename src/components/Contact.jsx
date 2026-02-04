import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      // Replace this URL with your actual backend API endpoint
      const res = await fetch("http://localhost:3000/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to submit enquiry");
      }

      setStatus({
        loading: false,
        success: "Thank you! Your enquiry has been submitted. We will contact you shortly.",
        error: "",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: "",
        error:
          "Something went wrong while submitting your enquiry. Please try again later.",
      });
    }
  };

  return (
    <div className="contact">
      <div className="contact-info">
        <h2>Let's Discuss Your Next Project</h2>
        <p>
          Share your project requirements and our engineering team will get back
          to you with a tailored proposal.
        </p>
        <div className="contact-details">
          <div>
            <h4>Head Office</h4>
            <p>12 Industrial Estate, Main Highway, Mangalore, Karnataka</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Phone: +91 98765 43210</p>
            <p>Email: info@civilbuild.com</p>
          </div>
          <div>
            <h4>Working Hours</h4>
            <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject*</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="e.g. Road construction, industrial building..."
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Project Details*</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Briefly describe your project scope, location and timelines"
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={status.loading}>
          {status.loading ? "Submitting..." : "Submit Enquiry"}
        </button>

        {status.success && <p className="form-success">{status.success}</p>}
        {status.error && <p className="form-error">{status.error}</p>}
      </form>
    </div>
  );
};

export default Contact;