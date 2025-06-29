import React from "react";
import "./Main.css";

function Main({ children }) {
  return <main className="main">{children}</main>; // Utilise une balise <main> avec classe
}

export default Main;
