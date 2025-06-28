import React from 'react';
import {Link as NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src ="logo.png" alt="Logo" />
      </div>
      <NavLink to ="/">
        Accueil
      </NavLink>
      <NavLink to ="about">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}


export default Navbar;
