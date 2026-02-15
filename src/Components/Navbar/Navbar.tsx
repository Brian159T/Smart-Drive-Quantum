import React from 'react'
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

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className='navbar'>
      
      {/* Logo */}
      <Link to="/">
        <img 
          src={logo_smart} 
          alt="logo"
          className='logo'
        />
      </Link>

      {/* Menu */}
     <ul>
  <li>
    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
      Quienes Somos
    </NavLink>
  </li>

  <li>
    <NavLink to="/ComoFunciona" className={({ isActive }) => isActive ? "active" : ""}>
      Como Funciona
    </NavLink>
  </li>

  <li>
    <NavLink to="/Empresa" className={({ isActive }) => isActive ? "active" : ""}>
      Empresa
    </NavLink>
  </li>

  <li>
    <NavLink to="/Vehiculos" className={({ isActive }) => isActive ? "active" : ""}>
      Vehiculos
    </NavLink>
  </li>

  <li>
    <NavLink to="/Alquiler" className={({ isActive }) => isActive ? "active" : ""}>
      Alquiler
    </NavLink>
  </li>

  <li>
    <NavLink to="/Calculadora" className={({ isActive }) => isActive ? "active" : ""}>
      Calculadora de Ahorro
    </NavLink>
  </li>

  <li>
    <NavLink to="/Contactos" className={({ isActive }) => isActive ? "active" : ""}>
      Contactos
    </NavLink>
  </li>
</ul>

      {/* Toggle theme */}
      <img
        onClick={toggle_mode}
        src={theme === 'light' ? toogle_light : toogle_dark}
        alt="toggle theme"
        className='toggle-icon'
      />

    </div>
  )
}

export default Navbar
