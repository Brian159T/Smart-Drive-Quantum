import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'
import logo_smart from '../../assets/logo.jpeg'

interface NavbarProps {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  // Estado para el menú móvil
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const toggle_menu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={`navbar ${theme}`}>
      
      <Link to="/" className='logo-container'>
        <img src={logo_smart} alt="logo" className='logo' />
      </Link>

      {/* Ícono de hamburguesa (solo visible en móvil) */}
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggle_menu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú de navegación */}
      <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/" end>Quienes Somos</NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/ComoFunciona">Como Funciona</NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/Empresa">Empresa</NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/Vehiculos">Vehiculos</NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/Alquiler">Alquiler</NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/Calculadora">Calculadora</NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/Contactos">Contactos</NavLink>
        </li>
      </ul>

      <div className="nav-right">
        <img
          onClick={toggle_mode}
          src={theme === 'light' ? toogle_light : toogle_dark}
          alt="toggle theme"
          className='toggle-icon'
        />
      </div>

    </nav>
  )
}

export default Navbar