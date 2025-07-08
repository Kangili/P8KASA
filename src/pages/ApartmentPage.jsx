import React from "react";
import "./ApartmentPage.css";
import { DescriptionPanel } from "../components/DescriptionPanel";
import ImageBanner from '../components/ImageBanner';
import ApartmentHeader from "../components/ApartmentHeader";

function ApartmentPage() {
  return (
    <div className="apartment-page">
      <ImageBanner/>
       <ApartmentHeader/>
      <div className="apartment_description_area">
        <DescriptionPanel/>
        <DescriptionPanel/>
      </div>
    </div>
  );
}

export default ApartmentPage;