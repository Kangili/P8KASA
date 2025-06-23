import React from "react";
import "./Footer.css";
import logo from "../../assets/logo-black.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer_text">© 2020 Kasa . All rights reserved</div>
    </div>
  );
}

export default Footer;

