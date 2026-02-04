import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-mark">C</span>
          <span className="logo-text">
            Civil<span>Build</span>
          </span>
          <p>Delivering safe, durable and future-ready infrastructure.</p>
        </div>
        <div className="footer-cols">
          <div>
            <h4>Quick Links</h4>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Office</h4>
            <p>12 Industrial Estate, Main Highway, Mangalore, Karnataka</p>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} CivilBuild Contractors. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;