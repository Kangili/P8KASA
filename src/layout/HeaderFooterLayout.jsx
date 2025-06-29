import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Main from "../pages/Main"; 


function HeaderFooterLayout() {
  return (
    <>
      <Navbar />
      <Main>
       <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default HeaderFooterLayout;
