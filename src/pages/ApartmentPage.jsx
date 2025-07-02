import React from "react";
import "./ApartmentPage.css";

function ApartmentPage() {
  return (
   <div className="apartment-page">
    <div>
      <img src ="Background.png" alt ="background" className="apartment-banner"/>
    </div>
  <div className="apartment_header">
    <div className="apartment_title">
        <h1 className="apartment-title">Cozy loft on the Canal Saint-Martin</h1>
        <h2 className="text-black"> Paris,Ile-de-France</h2>
        <div className="apartment_tags">
          <span>Cozy</span>
          <span>Canal</span>
          <span>Paris 10</span>
        </div>
    </div>
    <div className="apartment_owner">
      <div className="apartment_owner_details">
        <h3 className="apartment_owner_name">
          Alexandre<br />
          <span className="owner_lastname">Dumas</span>
        </h3>
        <div className="apartment_owner_badge"></div>
      </div>
      <div className="apartment_owner_stars"></div>
       <span className="on">★</span>
       <span className="on">★</span>
       <span className="on">★</span>
       <span className="off" >★</span>
       <span className="off">★</span>
  </div>
    </div>
    <div className="apartment_descrpition">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
      </p>
    </div>
    <div className="apartment_descrpition">
    </div>
   </div>
  );
}

export default ApartmentPage;