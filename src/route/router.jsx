import { createBrowserRouter, Outlet } from "react-router-dom";
import HeaderFooterLayout from "../layout/HeaderFooterLayout";
import App from "../App"; // ✅ Corrigé ici
import Main from "../pages/Main"; // ✅ car Main.jsx est dans /pages/
import Navbar from "../components/Navbar";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderFooterLayout />,
    errorElement: <h1>404 not found</h1>,
    children: [
      { index: true, element: <App /> }, // Route d'accueil
      {
        path: "/flat",
        element: (
          <Main>
            <h1>Appartement</h1>
          </Main>
        ),
      },
      { path: "/about", 
        element: 
        <Main>
          <h1>A propos</h1>
        </Main> 
      },
    ],
  },
]);

