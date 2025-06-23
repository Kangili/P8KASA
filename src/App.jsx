import React from 'react';
import Navbar from "./components/navbar/Navbar.jsx";
import Banner from "./components/navbar/Banner.jsx";
import "./App.css";
import ApartmentGrid from "./components/navbar/ApartmentGrid.jsx";
import Main from "./components/navbar/Main.jsx";
import Footer from "./components/navbar/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
      <Banner />
      <ApartmentGrid />
      </Main>
      <Footer>
      </Footer>
    </div>
  );
}


export default App;
