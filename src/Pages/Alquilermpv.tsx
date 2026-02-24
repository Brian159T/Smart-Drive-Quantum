import React from 'react';
import './Alquilermpv.css';
import mpvImg from '../assets/MPV.png';
import { FaWhatsapp } from "react-icons/fa";

const Alquilermpv: React.FC = () => {
  return (
    <div className="alquiler-page">
      {/* SECCIÓN HERO SPLIT */}
      <section className="hero-split">
        <div className="hero-visual">
          <img src={mpvImg} alt="Quantum MPV EV" className="vehicle-image" />
          <div className="image-glow"></div>
        </div>
        
        <div className="hero-text-side">
          <span className="badge">Innovación Financiera</span>
          <h1>¡MUÉVETE AL <span className="text-green">FUTURO!</span></h1>
          <p className="hero-subtitle">
            Transforma el acceso a vehículos eléctricos con la nueva generación MPV EV.
          </p>
        </div>
      </section>

      {/* SECCIÓN DE DATOS ESPECÍFICOS */}
      <section className="main-content-container">
        <div className="grid-container">
          
          {/* Tarjeta de Programa Rent to Own */}
          <div className="info-card glass">
            <h3 className="card-title">PROGRAMA <br/><span className="text-green">RENT TO OWN</span></h3>
            <div className="card-body">
              <p className="highlight-text">Conduce hoy, sé propietario en 5 años.</p>
              <ul className="details-list">
                <li><span className="check-icon">⚡</span> <strong>Cuota Semanal:</strong> $ 280</li>
                <li><span className="check-icon">⚡</span> <strong>Ahorro:</strong> 90% en Combustible</li>
                <li><span className="check-icon">⚡</span> <strong>Autonomía:</strong> 500 Km</li>
                <li><span className="check-icon">⚡</span> <strong>Incluye:</strong> Soporte técnico, Seguro y Mantenimiento</li>
              </ul>
            </div>
          </div>

          {/* Tarjeta de Requisitos */}
          <div className="info-card glass">
            <h3 className="card-title">REQUISITOS <br/><span className="text-green">MPV EV</span></h3>
            <div className="card-body">
              <ul className="req-list">
                <li><strong>Pago Inicial:</strong> $ 900 DUI</li>
                <li><strong>Documentación:</strong> Licencia de Conducir vigente</li>
                <li><strong>Legales:</strong> Antecedentes Penales y Hoja de Vida</li>
                <li><strong>Disponibilidad:</strong> Agenda tu prueba de manejo hoy</li>
              </ul>
              <a
                              href="https://wa.me/50361766862"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-contactm"
                            >
                              Contactanos
                              <FaWhatsapp size={25} color="#00ff88" />
                            </a>

                
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER PROFESIONAL UNIFICADO */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-info">
            <h3>SMART DRIVE</h3>
            <p>Liderando la transición hacia la movilidad eléctrica empresarial y familiar.</p>
          </div>
          <div className="footer-nav">
            <h4>Navegación</h4>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/Vehiculos">Vehículos</a></li>
              <li><a href="/Alquiler">Alquiler</a></li>
              <li><a href="/Contactos">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>info@smartdrive.com</p>
            <p>Santa Cruz, Bolivia</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Smart Drive. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Alquilermpv;