import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './main.css'
import {createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Connexion from './composants/connexion/Connexion.jsx'
import Inscription from './composants/inscription/Inscription.jsx'
import Montres from './composants/montres/Montres.jsx'
import Vetements from './composants/vetements/Vetements.jsx'
import Chaussures from './composants/chaussures/Chaussures.jsx'



const route = createBrowserRouter([
  {
  path: "/",
  element: <App/>,
  },
  {
    path: "/Chaussures",
    element: (<div>
      <Chaussures/>
       
 
    </div>)  

  },
  {
    path: "/Vetements",
    element:(<>
       <Vetements/>
       
      
       </>)
  },
  {
    path: "/Montres",
    element: <Montres/>
  },
  {
    path: "/Connexion",
    element: <Connexion/>,
  },
  {
    path: "/Inscription",
    element: <Inscription/>,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={route} />
   </React.StrictMode>,
);
