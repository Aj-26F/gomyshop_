
import { Stack } from '@mui/material'
import { useState } from 'react'


import './App.css'
import { Link } from 'react-router-dom'


 function App() {
  const [count, setCount] = useState(0)

  return (
     <Stack>
    
    

    <h1> GOMYSHOP </h1>
    <p className='p'>Bienvenue sur GOMYSHOP un site de vente en ligne qui met a votre disposition
      une diversité d'articles du quotidien. Nos ventes sont accéees sur mes vetements,chaussures et montres de qualité
    </p>
   

    

  <nav className="navbar">
    <div className='navbar__logo'>logo</div>
    <ul className='navbar_links'>
      <li className='navbar__item'>
        <a href="/" className='navbar__link'>Accueil</a>
      </li>
      <li className='navbar__item'>
        <a href="./vetements" className='navbar__link'>Vetement</a>
      </li>
      <li className='navbar__item'>
        <a href="./montres" className='navbar__link'>Montres</a>
      </li>
      <li className='navbar__item'>
        <a href="./chaussures" className='navbar__link'>Chaussures</a>
      </li>
    </ul>
    <button className='navbar__burger'>
      <span className='burger_bar'></span>
    </button>
  </nav>
  
    
        
    
    
  </Stack>
      
      
  );
}

 

export default App


