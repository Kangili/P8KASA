import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'; // Assure-toi que App est bien importé

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 not found</h1>
  },
  {
    path: "/flat",
    element: <h1>Nos appartements</h1>
  },
  {
    path: "/about",
    element: <h1>A propos</h1>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

