import React from "react";
import"./ApartmentDescription.css";

export function ApartmentDescription() {
  return (
    <div className="apartment_descrpition">
      <p className="description_header">
        <span>Description</span>
        <i className="fas fa-chevron-up"></i>
      </p>

      <p className="description_content">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
      </p>
    </div>
  );
}