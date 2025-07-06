import React from "react";
import "./ApartmentPage.css";
import { ApartmentDescription } from "../components/ApartmentDescription";
import ApartmentBanner from "../components/ApartmentBanner";
import ApartmentHeader from "../components/ApartmentHeader";

function ApartmentPage() {
  return (
    <div className="apartment-page">
      <ApartmentBanner/>
       <ApartmentHeader/>
      <div className="apartment_description_area">
        <ApartmentDescription/>
        <ApartmentDescription/>
      </div>
    </div>
  );
}

export default ApartmentPage;