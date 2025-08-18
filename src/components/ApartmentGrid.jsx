import React, { useEffect, useState } from "react";
import "./ApartmentGrid.css"
import ApartmentCard from "./ApartmentCard.jsx"
import useApartments from "../hooks/useApartments.jsx";
import apartments from "../assets/db.json";


function ApartmentGrid(){
 
 return(
    <div className="grid">
       {apartments.map((apartment) =>(
        <ApartmentCard 
        title={apartment.title} 
        imageUrl={apartment.cover} 
        id ={apartment.id} 
        key={apartment.id} 
        />
       ))}
     </div>
  );
}

export default ApartmentGrid;