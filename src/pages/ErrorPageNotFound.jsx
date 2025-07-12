import {Link} from "react-router-dom";
import React from "react";
import "./ErrorPageNotFound.css"
import Navbar from "../components/Navbar";
import Footer from "../layout/Footer";
import Main from "../pages/Main" // dois je le mettre dans Layout ? voir avec Maxime

function ErrorPageNotFound (){
 return(
  <>
   <Navbar/>
  <Main>
   <div className="error-page">
     <h1 className="error-code">404</h1>
     <h2 className="error-message" >Oups! La page que vous demandez n'existe pas.</h2>
     <Link to = "/" className="error-link">Retourner sur la page d'accueil</Link>
    </div>
  </Main>
  <Footer/>
  </>
 )
}

export default ErrorPageNotFound;