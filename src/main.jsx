import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom" ;
import Home from './Components/Home.jsx';
import Team from './Components/Team.jsx';
import About from './Components/About.jsx';
import Events from './Components/Event.jsx';
import Contact from './Components/Contact.jsx';
const route = createBrowserRouter([
  {
    path : "/" ,
    element : <Home />,
  } ,
  {
    path : "/about" ,
    element : <About />,
  },
 {
    path : "/Team" ,
    element : <Team />
  },
  {
    path : "/Events" ,
    element : <Events />
  },
  {
    path : "/contact" ,
    element : <Contact />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={route} />
  </StrictMode>,
)
