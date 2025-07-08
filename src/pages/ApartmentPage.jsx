import React from "react";
import "./ApartmentPage.css";
import { ApartmentDescription } from "../components/ApartmentDescription";
import ImageBanner from '../components/ImageBanner';
import ApartmentHeader from "../components/ApartmentHeader";

function ApartmentPage() {
  return (
    <div className="apartment-page">
      <ImageBanner/>
       <ApartmentHeader/>
      <div className="apartment_description_area">
        <ApartmentDescription/>
        <ApartmentDescription/>
      </div>
    </div>
  );
}

export default ApartmentPage;