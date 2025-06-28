import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import "./App.css";
import ApartmentGrid from "./components/ApartmentGrid.jsx";
import Main from "./pages/Main.jsx";
import Footer from "./components/Footer.jsx";

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
