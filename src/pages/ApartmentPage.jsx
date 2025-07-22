import React, { useEffect, useState } from "react"; // Il manquait useState importé
import "./ApartmentPage.css";
import { DescriptionPanel } from "../components/DescriptionPanel";
import ImageBanner from '../components/ImageBanner';
import ApartmentHeader from "../components/ApartmentHeader";
import { useLocation } from "react-router-dom";

function ApartmentPage() {
  const location = useLocation();
  console.log("location:", location);
  console.log("our apartment id is:", location.state.apartmentId);

  const [flat, setFlat] = useState(null);
  console.log ("flat", flat);
 
  useEffect(() => {
    fetchApartmentData();
  }, []);

  function fetchApartmentData() {
    fetch("db.json")
      .then((res) => res.json())
      .then((flats) => {
        // Correction: c'est "selectedFlat" ou "flat" ? ici flat dans find
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        setFlat(flat);
      })
      .catch(console.error);
  }
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
