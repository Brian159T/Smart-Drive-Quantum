import React from 'react';
import './Alquilernexus.css';
import nexusImg from '../assets/nexus-1.webp';
import { FaWhatsapp } from "react-icons/fa";
import Footer from '../Components/Footer/Footer'

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
             <a
  href="https://wa.me/50361766862"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-contactn"
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

export default Alquilernexus;