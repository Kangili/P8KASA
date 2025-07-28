import React from 'react';
import { DescriptionPanel } from '../components/DescriptionPanel';
import "./About.css";
import Banner from '../layout/Banner';
import ImageBanner from '../components/ImageBanner';

function About (){
  return (
    <>
      <ImageBanner/>
      <div className="about_container"> 
         <DescriptionPanel title = "Fiabilité" content ="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
         <DescriptionPanel title = "Respect" content = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."/>
         <DescriptionPanel title = "Service" content = "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillions à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."/>
         <DescriptionPanel title = "Sécurité" content = "La sécruité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant un note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que des standards sont bien respectés. Nous organisons également des atliers sur la sécurité domestique pour nos hôtes."/>
      </div>
    </>
  );
}

export default About;