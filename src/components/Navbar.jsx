import React from 'react';
import {NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to ="/">
        <div>
         <img className="navbar__logo" src ="LOGO.png" alt="Logo" />
        </div>
      </NavLink>
      <NavLink to ="/">
        Accueil
      </NavLink>
      <NavLink to ="/about">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}


export default Navbar;
