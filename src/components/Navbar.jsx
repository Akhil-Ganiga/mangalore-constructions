import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button
          className="navbar-logo"
          onClick={() => handleNavigate("/")}
          aria-label="Go to home"
        >
          <span className="logo-mark">C</span>
          <span className="logo-text">
            Civil<span>Build</span>
          </span>
        </button>
        <nav className={`navbar-links ${open ? "open" : ""}`}>
          <NavLink
            to="/mangalore-constructions"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/mangalore-constructions/services"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/mangalore-constructions/projects"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/mangalore-constructions/faq"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/mangalore-constructions/contact"
            className={({ isActive }) =>
              `nav-link nav-cta ${isActive ? "nav-link-active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
