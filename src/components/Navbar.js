// File name: Navbar.js
// Student’s Name: John Doe
// StudentID: 123456
// Date: 2024-05-30

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

/* Navbar component to navigate between pages */
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
        <img src="/images/Logo.png" alt="My Logo" />
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active-link">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active-link">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;