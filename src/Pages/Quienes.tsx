import React, { useEffect, useState, useCallback } from 'react';
import './Quienes.css';

// Sustituye estas rutas por tus assets reales
import img1 from '../assets/2.webp';
import img2 from '../assets/Tropper financiero.png';
import img3 from '../assets/nexus-1.webp';
import img4 from '../assets/mate.png';

const IMAGES: string[] = [img1, img2, img3, img4];

const Quienes: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % IMAGES.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  // Auto-play con pausa al interactuar
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <div className="quienes-page">
      {/* SECTION: HERO CARRUSEL */}
      <section 
        className="hero-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {IMAGES.map((img, index) => (
          <div
            key={index}
            className={`slide ${current === index ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${img})` }}
          >
            <div className="slide-content">
              <span className="fade-in-up">Smart Drive Mobility</span>
              <h1 className="fade-in-up delay-1">Liderando el Cambio</h1>
            </div>
          </div>
        ))}

        <div className="carousel-controls">
          <button className="nav-btn prev" onClick={prevSlide} aria-label="Anterior">❮</button>
          <div className="indicators">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                className={`indicator-bar ${current === i ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
          <button className="nav-btn next" onClick={nextSlide} aria-label="Siguiente">❯</button>
        </div>
      </section>

      {/* SECTION: CONTENIDO PRINCIPAL */}
      <main className="main-content">
        
        {/* Bloque 1: Imagen Izquierda, Texto Derecha */}
        <section className="feature-grid">
          <div className="feature-image">
            <img src={img2} alt="Vehículo eléctrico Smart Drive" loading="lazy" />
          </div>
          <div className="feature-text">
            <div className="kicker">Misión 2026</div>
            <h2>EL FIN DEL ALQUILER ETERNO</h2>
            <p>
              Mientras que la competencia basa su rentabilidad en mantener al
              conductor pagando indefinidamente, <strong>SMART DRIVE</strong> basa su éxito en
              convertir al conductor en dueño.
            </p>
            <div className="stats-mini">
              <div><span>+Retención</span></div>
              <div><span>+Sostenibilidad</span></div>
            </div>
          </div>
        </section>

        {/* Bloque 2: Texto Izquierda, Imagen Derecha (Reverse) */}
        <section className="feature-grid reverse">
          <div className="feature-image">
            <img src={img4} alt="Estrategia Smart Drive" loading="lazy" />
          </div>
          <div className="feature-text">
            <div className="kicker">Visión de Negocio</div>
            <h2>UN MODELO DIFERENTE</h2>
            <p>
              No solo ofrecemos movilidad, ofrecemos crecimiento. Nuestro
              modelo crea estabilidad financiera, fomenta compromiso y
              garantiza sostenibilidad a largo plazo.
            </p>
            <button className="cta-button">Explorar Planes</button>
          </div>
        </section>
      </main>

      {/* FOOTER PROFESIONAL */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-info">
            <h3>SMART DRIVE</h3>
            <p>Transformando la logística urbana mediante tecnología eléctrica y propiedad compartida.</p>
          </div>
          <div className="footer-nav">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#vehiculos">Vehículos</a></li>
              <li><a href="#planes">Planes</a></li>
              <li><a href="#contacto">Contacto</a></li>
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

export default Quienes;