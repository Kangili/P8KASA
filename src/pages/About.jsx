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
         <DescriptionPanel title = "Fiabilité" content ="C'est très important"/>
         <DescriptionPanel title = "Respect" content = "C'est très important"/>
         <DescriptionPanel title = "Service" content = "C'est très important"/>
         <DescriptionPanel title = "Sécurité" content = "C'est très important"/>
      </div>
    </>
  );
}

export default About;