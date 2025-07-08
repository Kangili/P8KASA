import React from 'react';
import { ApartmentDescription } from '../components/ApartmentDescription';
import "./About.css";
import Banner from '../layout/Banner';

function About (){
  return (
    <>
      <ApartmentBanner />
      <div className="about_container"> 
         <ApartmentDescription />
         <ApartmentDescription />
         <ApartmentDescription />
         <ApartmentDescription />
      </div>
    </>
  );
}

export default About;