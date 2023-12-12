import { Stack } from '@mui/material'
import React from 'react'

export default function Vetements() {
  return (
    <Stack>
    <h2>Vetements</h2>
    
    

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

  )
}
