import React, { useState, useEffect } from 'react';
import './Alquilertrooper.css';
import trooperImg from '../assets/Alquiler/Tomas trooper/portada troopper.png';

import im1 from '../assets/Detalle/Trooper/DSC_3827.jpg'
import im2 from '../assets/Detalle/Trooper/DSC_3831.jpg'
import im3 from '../assets/Detalle/Trooper/DSC_3835.jpg'
import im4 from '../assets/Detalle/Trooper/DSC_3848.jpg'

import adelante from '../assets/img/adelante.svg'
import atras from '../assets/img/atras.svg'

import { FaWhatsapp } from "react-icons/fa";
import Footer from '../Components/Footer/Footer'

const Alquilertrooper: React.FC = () => {

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

      {/* HERO SPLIT */}
      <section className="hero-split">
        <div className="hero-visual">
          <img src={trooperImg} alt="Quantum Trooper" className="vehicle-image" />
          <div className="image-glow"></div>
        </div>
        
        <div className="hero-text-side">
          <span className="badge">Smart Drive Mobility</span>
          <h1>¡MUÉVETE AL <span className="text-green">FUTURO!</span></h1>
          <p className="hero-subtitle">
            Conoce tu futura moto hoy y transforma tu transporte urbano.
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
                Conduce hoy, sé propietario en 2 años y medio.
              </p>

              <ul className="details-list">
                <li><span className="check-icon">⚡</span> <strong>Cuota Semanal:</strong> $ 52</li>
                <li><span className="check-icon">⚡</span> <strong>Ahorro:</strong> 90% en Combustible</li>
                <li><span className="check-icon">⚡</span> <strong>Autonomía:</strong> 140 Km</li>
                <li><span className="check-icon">⚡</span> <strong>Servicios:</strong> Soporte técnico, Seguro y Mantenimiento incluido</li>
              </ul>
            </div>
          </div>

          <div className="info-card glass">
            <h3 className="card-title">
              REQUISITOS <br/><span className="text-green">PARA MOTOCICLETA</span>
            </h3>

            <div className="card-body">
              <ul className="req-list">
                <li><strong>Pago Inicial:</strong> $ 200</li>
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

        {/* CARRUSEL */}
        <div className="carrusel">

          <div className="atras" onClick={anterior}>
            <img src={atras} alt="atras" />
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
            <img src={adelante} alt="adelante" />
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

export default Alquilertrooper;