import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Alquilernexus.css';
import nexusImg from '../assets/Galeria/DSC_8915-Edit.jpg.jpeg';

import im1 from '../assets/Detalle/Nexus/DSC_6437.jpg';
import im2 from '../assets/Detalle/Nexus/DSC_6448.jpg';
import im3 from '../assets/Detalle/Nexus/DSC_6474.jpg';
import im4 from '../assets/Detalle/Nexus/DSC_6505.jpg';

import adelante from '../assets/img/adelante.svg';
import atras from '../assets/img/atras.svg';

import { FaWhatsapp } from 'react-icons/fa';
import Footer from '../Components/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const Alquilernexus: React.FC = () => {
  const imagenes = [
    { url: im1 },
    { url: im2 },
    { url: im3 },
    { url: im4 },
  ];

  const [actual, setActual] = useState(0);
  const intervaloRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = useCallback(() => {
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
    }
    intervaloRef.current = setInterval(() => {
      setActual((prev) => (prev + 1) % imagenes.length);
    }, 10000);
  }, [imagenes.length]);

  useEffect(() => {
    startAuto();
    return () => {
      if (intervaloRef.current) {
        clearInterval(intervaloRef.current);
      }
    };
  }, [startAuto]);

  const siguiente = () => {
    setActual((prev) => (prev + 1) % imagenes.length);
    startAuto();
  };

  const anterior = () => {
    setActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
    startAuto();
  };

  return (
    <>
      <Helmet>
        <title>Alquiler Quantum Nexus | Smart Drive</title>
        <meta
          name="description"
          content="Accede al Quantum Nexus con el programa Rent to Own de Smart Drive. Conduce un vehículo eléctrico hoy y conviértete en propietario en pocos años."
        />
      </Helmet>

      <div className="alquiler-page">

        {/* HERO */}
        <section className="hero-split">
          <div className="hero-visual">
            <img src={nexusImg} alt="Quantum Nexus" className="vehicle-image" />
            <div className="image-glow"></div>
          </div>

          <div className="hero-text-side">
            <span className="badge">Smart Drive Mobility</span>
            <h1>¡MUÉVETE AL <span className="text-green">FUTURO!</span></h1>
            <p className="hero-subtitle">
              Tu camino hacia la propiedad eléctrica comienza aquí.
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <section className="main-content-container">

          <div className="grid-container">

            <div className="info-card glass">
              <h3 className="card-title">
                ALQUILA TU VEHÍCULO <br />
                <span className="text-green">ELÉCTRICO HOY</span>
              </h3>
              <div className="card-body">
                <p className="highlight-text">
                  Programa Rent to Own: Conduce hoy, sé propietario en 4 años.
                </p>
                <ul className="details-list">
                  <li><strong>Cuota Semanal:</strong> $ 130</li>
                  <li><strong>Ahorro:</strong> 90% en Combustible con autonomía de 200 Km</li>
                  <li><strong>Incluye:</strong> Soporte tecnico,Seguro y Mantenimiento</li>
                </ul>
              </div>
            </div>

            <div className="info-card glass">
              <h3 className="card-title">
                REQUISITOS <br />
                <span className="text-green">DRIVER</span>
              </h3>
              <div className="card-body">
                <ul className="req-list">
                  <li><i className="check-icon">✓</i> Licencia de Conducir vigente</li>
                  <li><i className="check-icon">✓</i> Antecedentes Penales y Hoja de vida</li>
                  <li><i className="check-icon">✓</i> Hoja de Vida</li>
                  <li><i className="check-icon">✓</i> DUI</li>
                  <li><i className="check-icon">✓</i> Pago inicial 500$</li>
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
              <p key={i} className={i === actual ? 'bold' : ''}>.</p>
            ))}
          </div>

        </section>

        <Footer />

      </div>
    </>
  );
};

export default Alquilernexus;