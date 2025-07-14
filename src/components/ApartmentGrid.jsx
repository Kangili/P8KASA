import React, { useEffect, useState } from "react";
import "./ApartmentGrid.css"
import ApartmentCard from "./ApartmentCard.jsx"


function ApartmentGrid(){
 const [apartments,setApartments] =useState([]);

useEffect(fetchApartments,[])
// useEffect avec une array vide == excécute cette fonction au chargement du composant

function fetchApartments(){
 fetch("/db.json")
    .then((res) => res.json())
    .then((res) => setApartments(res))
    .catch(console.error);
}

 return(
    <div className="grid">
       {apartments.map((apartment) =>(
        <ApartmentCard title={apartment.title} imageUrl={apartment.cover} id ={apartment.id} key={apartment.id} />
       ))}
     </div>
  );
}

export default ApartmentGrid;