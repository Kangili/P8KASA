import React from "react";
import "./ApartmentCard.css";
import { Link } from "react-router-dom";

function ApartmentCard() {
  return (
    <Link to= "/flat">
      <div className="apartment">
        <div className="apartment_subtitle">Titre de la location</div>
      </div>
    </Link>
  );
}

export default ApartmentCard;
