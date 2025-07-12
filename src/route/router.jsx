import { createBrowserRouter, Outlet } from "react-router-dom";
import HeaderFooterLayout from "../layout/HeaderFooterLayout";
import Homepage from "../pages/Homepage"; // ✅ Corrigé ici
import ApartmentPage from "../pages/ApartmentPage"; // ✅ Corrigé ici
import Main from "../pages/Main"; // ✅ car Main.jsx est dans /pages/
import Navbar from "../components/Navbar";
import About from "../pages/About";
import ErrorPageNotFound from '../pages/ErrorPageNotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound/>,
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

