import React, { useState, useEffect } from 'react';
import './Alquilermpv.css';
import mpvImg from '../assets/MPV.png';

import im1 from '../assets/Imagenes tipo 2/un modelo diferente.png'
import im2 from '../assets/MPV.png'
import im3 from '../assets/mate.png'
import im4 from '../assets/Ficha Tecnica Nexus.png'

import adelante from '../assets/img/adelante.svg'
import atras from '../assets/img/atras.svg'

import { FaWhatsapp } from "react-icons/fa";
import Footer from '../Components/Footer/Footer'

const Alquilermpv: React.FC = () => {

  const imagenes = [
    { url: im1 },
    { url: im2 },
    { url: im3 },
    { url: im4 }
  ];

  const [actual, setActual] = useState(0);

  // carrusel automático
  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % imagenes.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  const siguiente = () => {
    setActual((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="alquiler-page">

      {/* HERO */}
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

      {/* CONTENIDO */}
      <section className="main-content-container">

        <div className="grid-container">

          <div className="info-card glass">
            <h3 className="card-title">
              PROGRAMA <br/><span className="text-green">RENT TO OWN</span>
            </h3>

            <div className="card-body">
              <p className="highlight-text">
                Conduce hoy, sé propietario en 5 años.
              </p>

              <ul className="details-list">
                <li><span className="check-icon">⚡</span> <strong>Cuota Semanal:</strong> $ 280</li>
                <li><span className="check-icon">⚡</span> <strong>Ahorro:</strong> 90% en Combustible</li>
                <li><span className="check-icon">⚡</span> <strong>Autonomía:</strong> 500 Km</li>
                <li><span className="check-icon">⚡</span> <strong>Incluye:</strong> Soporte técnico, Seguro y Mantenimiento</li>
              </ul>
            </div>
          </div>

          <div className="info-card glass">
            <h3 className="card-title">
              REQUISITOS <br/><span className="text-green">MPV EV</span>
            </h3>

            <div className="card-body">
              <ul className="req-list">
                <li><strong>Pago Inicial:</strong> $ 900</li>
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

        {/* CARRUSEL */}
        <div className="carrusel">

          <div className="atras" onClick={anterior}>
            <img src={atras} alt="atras"/>
          </div>

          <div className="imagenes">
            <img
              className="img"
              src={imagenes[actual].url}
              alt="vehiculo"
              loading="lazy"
            />
          </div>

          <div className="adelante" onClick={siguiente}>
            <img src={adelante} alt="adelante"/>
          </div>

        </div>

        {/* PUNTOS */}
        <div className="puntos">
          {imagenes.map((_, i) => (
            <p key={i} className={i === actual ? "bold" : ""}>.</p>
          ))}
        </div>

      </section>

      <Footer />

    </div>
  );
};

export default Alquilermpv;