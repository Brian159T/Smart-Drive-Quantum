import React from 'react';
import './Alquilernexus.css';
import nexusImg from '../assets/nexus-1.webp';

const Alquilernexus: React.FC = () => {
  return (
    <div className="alquiler-page">
      {/* SECCIÓN HERO: Ahora la imagen es un elemento visual real, no solo un fondo */}
      <section className="hero-split">
        <div className="hero-visual">
          <img src={nexusImg} alt="Quantum Nexus" className="vehicle-image" />
          <div className="image-glow"></div>
        </div>
        
        <div className="hero-text-side">
          <span className="badge">Smart Drive Mobility</span>
          <h1>¡MUÉVETE AL <span className="text-green">FUTURO!</span></h1>
          <p className="hero-subtitle">Tu camino hacia la propiedad eléctrica comienza aquí.</p>
        </div>
      </section>

      <section className="main-content-container">
        <div className="grid-container">
          <div className="info-card glass">
            <h3 className="card-title">ALQUILA TU VEHÍCULO <br/><span className="text-green">ELÉCTRICO HOY</span></h3>
            <div className="card-body">
              <p className="highlight-text">Programa Rent to Own: Conduce hoy, sé propietario en 4 años.</p>
              <ul className="details-list">
                <li><strong>Pago Inicial:</strong> $ 500 DUI</li>
                <li><strong>Cuota Semanal:</strong> $ 130</li>
                <li><strong>Ahorro:</strong> 90% en Combustible</li>
                <li><strong>Incluye:</strong> Seguro y Mantenimiento</li>
              </ul>
            </div>
          </div>

          <div className="info-card glass">
            <h3 className="card-title">REQUISITOS <br/><span className="text-green">DRIVER</span></h3>
            <div className="card-body">
              <ul className="req-list">
                <li><i className="check-icon">✓</i> Licencia de Conducir vigente</li>
                <li><i className="check-icon">✓</i> Antecedentes Penales</li>
                <li><i className="check-icon">✓</i> Hoja de Vida</li>
              </ul>
              <button className="btn-contact">Contactanos ahora</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer igual al anterior para consistencia */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-info">
            <h3>SMART DRIVE</h3>
            <p>Transformando la logística urbana mediante tecnología eléctrica.</p>
          </div>
          <div className="footer-nav">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#vehiculos">Vehículos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>info@smartdrive.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Smart Drive. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Alquilernexus;