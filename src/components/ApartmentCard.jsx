import React from "react";
import "./ApartmentCard.css";
import { Link } from "react-router-dom";

function ApartmentCard(props) {
  console.log ("props dans apartment card:", props);
  return (
    <Link to= "/flat">
      <div className="apartment">
        <img src ={props.imageUrl} alt = ""/>
        <div className="apartment_subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default ApartmentCard;
