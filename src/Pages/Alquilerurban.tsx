import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Alquilerurban.css';

import im1 from '../assets/Detalle/Urban/Urban_delante.jpg';
import im2 from '../assets/Detalle/Urban/Urban_delivery.png';
import im3 from '../assets/Detalle/Urban/Urban_trasero.jpg';
import im4 from '../assets/Detalle/Urban/Urban_luces.jpg';
import urban from '../assets/Galeria/Urbanm.png';

import adelante from '../assets/img/adelante.svg';
import atras from '../assets/img/atras.svg';

import { FaWhatsapp } from 'react-icons/fa';
import Footer from '../Components/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const Alquilerurban: React.FC = () => {
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
        <title>Alquiler Quantum Urban | Smart Drive</title>
        <meta
          name="description"
          content="Accede al vehículo eléctrico Quantum Urban con el programa Rent to Own de Smart Drive. Conduce hoy y conviértete en propietario en 2 años y medio reduciendo costos de operación."
        />
      </Helmet>

      <div className="alquiler-page">

        {/* HERO */}
        <section className="hero-split">
          <div className="hero-visual">
            <img src={urban} alt="Quantum Nexus" className="vehicle-image" />
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

        <section className="main-content-container">

          <div className="grid-container">

            <div className="info-card glass">
              <h3 className="card-title">
                ALQUILA TU VEHÍCULO <br />
                <span className="text-green">ELÉCTRICO HOY</span>
              </h3>
              <div className="card-body">
                <p className="highlight-text">
                  Programa Rent to Own: Conduce hoy, sé propietario en 2 años y medio.
                </p>
                <ul className="details-list">
                  <li><strong>Cuota Semanal:</strong> $ 48</li>
                  <li><strong>Ahorro:</strong> 90% en Combustible</li>
                  <li><strong>Autonomía:</strong> 140 KM</li>
                  <li><strong>Incluye:</strong>Soporte tecnico, Seguro y Mantenimiento</li>
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
                  <li><i className="check-icon">✓</i> DUI</li>
                  <li><i className="check-icon">✓</i> Pago inicial de $200</li>
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

export default Alquilerurban;