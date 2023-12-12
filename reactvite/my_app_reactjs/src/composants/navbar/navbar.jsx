import { Stack } from '@mui/material'
import './navbar.css'





function Navbar() {
    const [count, setCount] = useState(0)
  
    return (
        <Stack>

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
      <span className='burger__bar'></span>
    </button>
  </nav>
  
    
        
    
    
  </Stack>
      
      
  );
}
export default Navbar