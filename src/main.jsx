import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/layout/AppLayout.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Events from "./Components/Event.jsx";
import Team from "./Components/Team.jsx";
import Contact from "./Components/Contact.jsx";

const route = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/events", element: <Events /> },
      { path: "/Events", element: <Events /> },
      { path: "/team", element: <Team /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
