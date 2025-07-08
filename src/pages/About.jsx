import React from 'react';
import { DescriptionPanel } from '../components/DescriptionPanel';
import "./About.css";
import Banner from '../layout/Banner';
import ImageBanner from '../components/ImageBanner';

function About (){
  return (
    <>
      <ImageBanner />
      <div className="about_container"> 
         <DescriptionPanel />
         <DescriptionPanel />
         <DescriptionPanel />
         <DescriptionPanel />
      </div>
    </>
  );
}

export default About;