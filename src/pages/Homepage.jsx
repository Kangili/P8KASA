import React from 'react';
import Banner from "../layout/Banner.jsx";
import "./Homepage.css";
import ApartmentGrid from "../components/ApartmentGrid.jsx";

function HomePage() {
  return (
    <>
      <Banner />
      <ApartmentGrid />
    </>
  );
}

export default HomePage;

