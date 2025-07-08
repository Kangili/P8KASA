import React from "react";
import"./DescriptionPanel.css";

export function DescriptionPanel() {
  return (
    <div className="descrpition_panel">
      <p className="description_header">
        <span>Description</span>
        <i className="fas fa-chevron-up"></i>
      </p>

      <p className="description_content">
        Vou serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à coté de nombreux bars et restaurants.
        Au coeur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'est (7minutes à pied).
      </p>
    </div>
  );
}

export default DescriptionPanel;