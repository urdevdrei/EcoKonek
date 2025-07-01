// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = ({ id = "" }) => (
  <nav className="nav" id={id}>
    <Link to="/">HOME</Link>
    <Link to="/about">ABOUT</Link>
    <Link to="/shop">SHOP</Link>
    <Link to="/contact">CONTACT</Link>
  </nav>
);

export default Navbar;
