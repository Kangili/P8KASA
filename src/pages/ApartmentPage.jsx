import React, { useEffect, useState } from "react"; // Il manquait useState importé
import "./ApartmentPage.css";
import { DescriptionPanel } from "../components/DescriptionPanel";
import ImageBanner from '../components/ImageBanner';
import ApartmentHeader from "../components/ApartmentHeader";
import useApartment from "../hooks/useApartment.jsx";

function ApartmentPage() {
  const flat = useApartment();

  if (flat == null) return <div>Loading...</div>;
  return (
    <div className="apartment-page">
      <ImageBanner pictures = {flat.pictures}/>
      <ApartmentHeader flat ={flat}/>
      <div className="apartment_description_area">
        {/* Ici tu peux passer selectedFlat en props à DescriptionPanel si besoin */}
        <DescriptionPanel title ="Description" content ={flat.description}/>
        <DescriptionPanel 
           title = "Equipements"
          content = {flat.equipments.map ((eq, i) => (
          <li key = {i}>{eq}</li>
        ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
