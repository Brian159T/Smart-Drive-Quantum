import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import logo_smart from '../../assets/Logos/LOGO SMART DRIVE.png'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle_menu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setDropdownOpen(false);
  }

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }

  return (
    <nav className="navbar">
      
      <Link to="/" className='logo-container' onClick={closeAll}>
        <img src={logo_smart} alt="logo" className='logo' />
      </Link>

      <div 
        className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
        onClick={toggle_menu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>

        <li onClick={closeAll}>
          <NavLink to="/" end>Quienes Somos</NavLink>
        </li>

        <li onClick={closeAll}>
          <NavLink to="/ComoFunciona">Como Funciona</NavLink>
        </li>

        

        <li onClick={closeAll}>
          <NavLink to="/Vehiculos">Vehiculos</NavLink>
        </li>

        {/* DROPDOWN */}
        <li className="nav-item-dropdown">
          <span 
            className={`nav-link-placeholder ${dropdownOpen ? 'active' : ''}`} 
            onClick={(e) => {
              if (window.innerWidth <= 1050) {
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }
            }}
          >
            Alquiler <span className="arrow">▾</span>
          </span>
          
          <ul className={`submenu ${dropdownOpen ? 'show' : ''}`}>
            <li onClick={closeAll}><Link to="/Alquiler/Nexus">Nexus</Link></li>
            <li onClick={closeAll}><Link to="/Alquiler/Trooper">Trooper</Link></li>
            <li onClick={closeAll}><Link to="/Alquiler/MPV">MPV</Link></li>
            <li onClick={closeAll}><Link to="/Alquiler/Mate">Mate</Link></li>
            <li onClick={closeAll}><Link to="Alquiler/Urban">Urban</Link></li>
          </ul>
        </li>

        <li onClick={closeAll}>
          <NavLink to="/Contactos">Contactos</NavLink>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar