import React from 'react';
import './Alquilermate.css';
import mateImg from '../assets/mate.png';
import { FaWhatsapp } from "react-icons/fa";
import Footer from '../Components/Footer/Footer'

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
              <a
                                            href="https://wa.me/50361766862"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-contactmate"
                                          >
                                            Contactanos
                                            <FaWhatsapp size={25} color="#00ff88" />
                                          </a>
              
            </div>
          </div>

        </div>
      </section>
      <Footer />

      
    </div>
  );
};

export default Alquilermate;