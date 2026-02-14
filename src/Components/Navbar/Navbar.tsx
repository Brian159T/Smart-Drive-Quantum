import React from 'react'
import './Navbar.css'
// import logo_light from '../../assets/logo-black.png'
// import logo_dark from '../../assets/logo-white.png'
// import search_icon_light from '../../assets/search-w.png'
// import search_icon_dark from '../../assets/search-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'
import logo_smart from '../../assets/logo.jpeg'

interface NavbarProps {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className='navbar'>
      <img 
        src={logo_smart} 
        alt="" 
        className='logo'
      />

      <ul>
        <li>Quienes Somos</li>
        <li>Como Funciona</li>
        <li>Empresa</li>
        <li>Vehiculos</li>
        <li>Alquiler</li>
        <li>Calculadora de Ahorro</li>
        <li>Contactos</li>
      </ul>

      <img
        onClick={toggle_mode}
        src={theme === 'light' ? toogle_light : toogle_dark}
        alt=""
        className='toggle-icon'
      />
    </div>
  )
}

export default Navbar
