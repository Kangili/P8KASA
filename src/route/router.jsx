import { createBrowserRouter, Outlet } from "react-router-dom";
import HeaderFooterLayout from "../layout/HeaderFooterLayout";
import Homepage from "../pages/Homepage"; // ✅ Corrigé ici
import ApartmentPage from "../pages/ApartmentPage"; // ✅ Corrigé ici
import Main from "../pages/Main"; // ✅ car Main.jsx est dans /pages/
import Navbar from "../components/Navbar";
import About from "../pages/About";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderFooterLayout />,
    errorElement: <h1>404 not found</h1>,
    children: [
      { index: true, element: <Homepage/> }, // Route d'accueil
      {
        path: "/flat",
       element: (
       <Main>
        <ApartmentPage />
       </Main>
      ),
      },
      { path: "/about", 
        element: <About />
      },
    ],
  },
]);

