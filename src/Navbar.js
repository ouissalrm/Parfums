import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function myFunction() {
    const element = document.body;
    element.classList.toggle("dark-mode");
  }

  function toggleMenu() {
    setOpen((s) => !s);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="logoo">
        <h2>Parfuméa</h2>
      </div>

      <button
        className={`nav-toggle ${open ? "open" : ""}`}
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={toggleMenu}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <div id="primary-navigation" className={`navbar1 ${open ? "open" : ""}`}>
        <Link to="/Home" className="nav-link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/Products" className="nav-link" onClick={closeMenu}>
          Products
        </Link>
        <Link to="/About" className="nav-link" onClick={closeMenu}>
          About
        </Link>
        <Link to="/Shop" className="nav-link" onClick={closeMenu}>
          Shop
        </Link>
        <Link to="/Login" className="nav-link" onClick={closeMenu}>
          Login
        </Link>
      </div>

      <div className="toggle-wrapper">
        <input
          type="checkbox"
          id="darkmode-toggle"
          onClick={myFunction}
        />
        <label className="toggle-label" htmlFor="darkmode-toggle" />
      </div>
    </nav>
  );
}
