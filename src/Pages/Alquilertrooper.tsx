import React from 'react';
import './Alquilertrooper.css';
import trooperImg from '../assets/Trooper.png';
import { FaWhatsapp } from "react-icons/fa";

const Alquilertrooper: React.FC = () => {
  return (
    <div className="alquiler-page">
      {/* SECCIÓN HERO SPLIT */}
      <section className="hero-split">
        <div className="hero-visual">
          <img src={trooperImg} alt="Quantum Trooper" className="vehicle-image" />
          <div className="image-glow"></div>
        </div>
        
        <div className="hero-text-side">
          <span className="badge">Smart Drive Mobility</span>
          <h1>¡MUÉVETE AL <span className="text-green">FUTURO!</span></h1>
          <p className="hero-subtitle">Conoce tu futura moto hoy y transforma tu transporte urbano.</p>
        </div>
      </section>

      {/* SECCIÓN DE DATOS ESPECÍFICOS */}
      <section className="main-content-container">
        <div className="grid-container">
          
          {/* Tarjeta de Programa Rent to Own */}
          <div className="info-card glass">
            <h3 className="card-title">PROGRAMA <br/><span className="text-green">RENT TO OWN</span></h3>
            <div className="card-body">
              <p className="highlight-text">Conduce hoy, sé propietario en 2 años y medio.</p>
              <ul className="details-list">
                <li><span className="check-icon">⚡</span> <strong>Cuota Semanal:</strong> $ 52</li>
                <li><span className="check-icon">⚡</span> <strong>Ahorro:</strong> 90% en Combustible</li>
                <li><span className="check-icon">⚡</span> <strong>Autonomía:</strong> 140 Km</li>
                <li><span className="check-icon">⚡</span> <strong>Servicios:</strong> Soporte técnico, Seguro y Mantenimiento incluido</li>
              </ul>
            </div>
          </div>

          {/* Tarjeta de Requisitos */}
          <div className="info-card glass">
            <h3 className="card-title">REQUISITOS <br/><span className="text-green">PARA MOTOCICLETA</span></h3>
            <div className="card-body">
              <ul className="req-list">
                <li><strong>Pago Inicial:</strong> $ 200 DUI</li>
                <li><strong>Documentación:</strong> Licencia de Conducir vigente</li>
                <li><strong>Legales:</strong> Antecedentes Penales y Hoja de Vida</li>
                <li><strong>Prueba:</strong> Agenda tu prueba de manejo hoy mismo</li>
              </ul>
                     <a
                href="https://wa.me/50361766862"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contactt"
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
            <p>Transformando la logística urbana mediante tecnología eléctrica y propiedad compartida.</p>
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
            <p>+591 70000000</p>
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

export default Alquilertrooper;