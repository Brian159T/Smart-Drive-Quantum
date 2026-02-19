import React from 'react';
import './Alquilermate.css';
import mateImg from '../assets/mate.png';

const Alquilermate: React.FC = () => {
  return (
    <div className="alquiler-page">
      {/* SECCIÓN HERO SPLIT */}
      <section className="hero-split">
        <div className="hero-visual">
          <img src={mateImg} alt="Kliin Mate" className="vehicle-image" />
          <div className="image-glow"></div>
        </div>
        
        <div className="hero-text-side">
          <span className="badge">Innovación Financiera</span>
          <h1>¡MUÉVETE AL <span className="text-green">FUTURO!</span></h1>
          <p className="hero-subtitle">
            La solución urbana ideal. Transforma tu movilidad con el nuevo KLIIN MATE.
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
                <li><span className="check-icon">⚡</span> <strong>Cuota Semanal:</strong> $ 160</li>
                <li><span className="check-icon">⚡</span> <strong>Ahorro:</strong> 90% en Combustible</li>
                <li><span className="check-icon">⚡</span> <strong>Autonomía:</strong> 300 Km</li>
                <li><span className="check-icon">⚡</span> <strong>Incluye:</strong> Soporte técnico, Seguro y Mantenimiento</li>
              </ul>
            </div>
          </div>

          {/* Tarjeta de Requisitos */}
          <div className="info-card glass">
            <h3 className="card-title">REQUISITOS <br/><span className="text-green">KLIIN MATE</span></h3>
            <div className="card-body">
              <ul className="req-list">
                <li><strong>Pago Inicial:</strong> $ 650</li>
                <li><strong>Documentación:</strong> DUI y Licencia de Conducir vigente</li>
                <li><strong>Legales:</strong> Antecedentes Penales y Hoja de Vida</li>
                <li><strong>Proceso:</strong> Agenda tu prueba de manejo hoy</li>
              </ul>
              <button className="btn-contact">Contactanos</button>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER PROFESIONAL UNIFICADO */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-info">
            <h3>SMART DRIVE</h3>
            <p>Innovación financiera para transformar el acceso a vehículos eléctricos.</p>
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
            <p>El Salvador</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Smart Drive. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Alquilermate;