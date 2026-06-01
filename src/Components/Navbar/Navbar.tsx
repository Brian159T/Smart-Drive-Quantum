import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import logo_smart from '../../assets/Logos/LOGO SMART DRIVE.png'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      if (prev) setDropdownOpen(false);
      return !prev;
    });
  };

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDropdownOpen(prev => !prev);
  };

  // Bloquear scroll del body cuando el menu esta abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar">

        <Link to="/" className="logo-container" onClick={closeAll}>
          <img src={logo_smart} alt="logo" className="logo" />
        </Link>

        <div
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menu"
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
            <NavLink to="/ComoFunciona">Como ser parte de S.D</NavLink>
          </li>

          <li onClick={closeAll}>
            <NavLink to="/Noticias">Noticias</NavLink>
          </li>

          <li onClick={closeAll}>
            <NavLink to="/Vehiculos">Vehiculos</NavLink>
          </li>

          {/* DROPDOWN */}
          <li className="nav-item-dropdown">
            <span
              className={`nav-link-placeholder ${dropdownOpen ? 'active' : ''}`}
              onClick={toggleDropdown}
            >
              Alquiler <span className="arrow">&#9662;</span>
            </span>

            <ul className={`submenu ${dropdownOpen ? 'show' : ''}`}>
              <li onClick={closeAll}><Link to="/Alquiler/Nexus">Nexus</Link></li>
              <li onClick={closeAll}><Link to="/Alquiler/Trooper">Trooper</Link></li>
              <li onClick={closeAll}><Link to="/Alquiler/MPV">MPV</Link></li>
              <li onClick={closeAll}><Link to="/Alquiler/Mate">Mate</Link></li>
              <li onClick={closeAll}><Link to="/Alquiler/Urban">Urban</Link></li>
            </ul>
          </li>

          <li onClick={closeAll}>
            <NavLink to="/Inversiones">Inversiones</NavLink>
          </li>

          <li onClick={closeAll}>
            <NavLink to="/Estaciones">Estaciones de carga</NavLink>
          </li>

          <li onClick={closeAll}>
            <NavLink to="/Contactos">Contactos</NavLink>
          </li>

        </ul>

      </nav>

      {/* Overlay para cerrar el menu al tocar fuera */}
      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={closeAll}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;