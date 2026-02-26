import React, { useEffect, useState, useCallback } from 'react';
import './Quienes.css';

// Assets Principales
import imgHero1 from '../assets/Portada/Portada web Smart drive.jpg.jpeg';
import imgHero2 from '../assets/2.webp';
import imgHero3 from '../assets/nexus-1.webp';
import imgTienda from '../assets/Tienda.jpg';

// Assets Clientes
import client1 from '../assets/Clientes/Clientes-Nexus.webp';
import client2 from '../assets/Clientes/clientes2.jpg';
import client3 from '../assets/Clientes/clientes4.png';
import { FaWhatsapp } from "react-icons/fa";

import { PiMotorcycleFill } from "react-icons/pi";
import { FaCar } from "react-icons/fa";

const HERO_IMAGES = [imgHero1, imgHero2, imgHero3];
const CLIENT_IMAGES = [client1, client2, client3];

const Quienes: React.FC = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [currentClient, setCurrentClient] = useState(0);

  // Estados para la Calculadora
  const [pagoDiario, setPagoDiario] = useState<number>(100);
  const [meses, setMeses] = useState<number>(24);

  const totalAlquiler = pagoDiario * 30 * meses;
  const ahorroEstimado = totalAlquiler * 0.45; // Estimación de ahorro promedio

  const nextHero = useCallback(() => {
    setCurrentHero((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const nextClient = useCallback(() => {
    setCurrentClient((prev) => (prev + 1) % CLIENT_IMAGES.length);
  }, []);

  useEffect(() => {
    const heroInterval = setInterval(nextHero, 5000);
    const clientInterval = setInterval(nextClient, 4000);
    return () => {
      clearInterval(heroInterval);
      clearInterval(clientInterval);
    };
  }, [nextHero, nextClient]);

  return (
    <div className="quienes-page">
      {/* BLOQUE 0: HERO */}
      <section className="hero-carousel">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`slide ${currentHero === index ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img})` }}
          >
            <div className="slide-content">
              <span className="light-text">Smart Drive Mobility</span>
              <h1 className="hero-title">Liderando el Cambio</h1>
            </div>
          </div>
        ))}
        <div className="indicators">
          {HERO_IMAGES.map((_, i) => (
            <div key={i} className={`indicator-bar ${currentHero === i ? 'active' : ''}`} />
          ))}
        </div>
      </section>

      <main className="main-content">
        
        {/* BLOQUE 1: MISIÓN */}
        <section className="feature-grid">
          <div className="feature-image">
            <img src={imgHero2} alt="Misión Smart Drive" />
          </div>
          <div className="feature-text">
            <div className="kicker">Misión 2026</div>
            <h2>EL FIN DEL ALQUILER ETERNO</h2>
            <p>
              Mientras que la competencia basa su rentabilidad en mantener al conductor pagando indefinidamente, 
              <strong> SMART DRIVE</strong> basa su éxito en convertir al conductor en dueño.
            </p>
            <div className="stats-badges">
              <span>+ Retención</span>
              <span>+ Sostenibilidad</span>
            </div>
          </div>
        </section>

        {/* BLOQUE 2: VISIÓN */}
        <section className="feature-grid reverse">
          <div className="feature-image">
            <img src={imgHero3} alt="Visión de Negocio" />
          </div>
          <div className="feature-text">
            <div className="kicker">Visión de Negocio</div>
            <h2>UN MODELO DIFERENTE</h2>
            <p>
              No solo ofrecemos movilidad, ofrecemos crecimiento. Nuestro modelo crea estabilidad financiera, 
              fomenta compromiso y garantiza sostenibilidad a largo plazo.
            </p>
            
          </div>
        </section>

        {/* BLOQUE 3: LA TIENDA */}
        <section className="feature-grid">
          <div className="feature-image">
            <img src={imgTienda} alt="Showroom Smart Drive" />
          </div>
          <div className="feature-text">
            <div className="kicker">Nuestra Sede</div>
            <h2>LA TIENDA</h2>
            <p>
              Ven a visitarnos en nuestro showroom físico. Contamos con tecnología de punta y asesores 
              listos para ayudarte a elegir el vehículo que impulsará tu independencia financiera.
            </p>
            
          </div>
        </section>
{/* BLOQUE CONTACTO 1 */}
<section className="contact-block symmetric-section">
  <div className="contact-card">
    <div className="contact-content">
      <h2>¿LISTO PARA COMENZAR?</h2>
      <p>
        Hablemos sobre tu próximo gran paso en la movilidad eléctrica.
      </p>
    </div>

    <a
      href="https://wa.me/50361766862"
      target="_blank"
      rel="noopener noreferrer"
      className="professional-contact-btn"
    >
      CONTACTANOS
      <FaWhatsapp size={25} color="#bad8ca" />
    </a>
  </div>
</section>

        {/* BLOQUE 4: CLIENTES */}
        <section className="clients-section">
          
          <h2 className="center-title">CLIENTES SATISFECHOS</h2>
          
          <div className="client-carousel">
            {CLIENT_IMAGES.map((img, index) => (
              <div key={index} className={`client-slide ${currentClient === index ? 'active' : ''}`}>
                <div className="client-img-wrapper">
                  <img src={img} alt={`Cliente Satisfecho ${index + 1}`} />
                  <div className="client-overlay">
                    <p className="client-quote">"Gracias a Smart Drive, hoy soy dueño de mi propio futuro."</p>
                    <span className="client-name">Socio Conductor Certificado</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="client-dots">
              {CLIENT_IMAGES.map((_, i) => (
                <span key={i} className={`dot ${currentClient === i ? 'active' : ''}`} onClick={() => setCurrentClient(i)} />
              ))}
            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: CALCULADORA DE AHORRO */}
        <section className="calculator-section">
          <div className="calculator-container">
            <div className="calc-header">
              <div className="kicker">Simulador Financiero</div>
              <h2>Calcula tu <span className="text-primary">Independencia</span></h2>
              <p>Compara el costo de un alquiler tradicional frente a la propiedad con Smart Drive.</p>
            </div>

            <div className="calc-body">
              <div className="calc-inputs">
                <div className="input-group">
                  <label>Pago diario promedio (Bs.)</label>
                  <input 
                    type="range" 
                    min="50" 
                    max="300" 
                    step="10" 
                    value={pagoDiario} 
                    onChange={(e) => setPagoDiario(Number(e.target.value))}
                  />
                  <div className="value-display">{pagoDiario} Bs.</div>
                </div>

                <div className="input-group">
                  <label>Tiempo de contrato (Meses)</label>
                  <input 
                    type="range" 
                    min="12" 
                    max="48" 
                    step="6" 
                    value={meses} 
                    onChange={(e) => setMeses(Number(e.target.value))}
                  />
                  <div className="value-display">{meses} meses</div>
                </div>
              </div>

              <div className="calc-results">
                <div className="result-item">
                  <span>Gasto en Alquiler Tradicional</span>
                  <div className="price-total">{totalAlquiler.toLocaleString()} Bs.</div>
                  <small>Dinero que no recuperas</small>
                </div>
                <div className="result-item highlight">
                  <span>Ahorro Proyectado Smart Drive</span>
                  <div className="price-savings">{ahorroEstimado.toLocaleString()} Bs.*</div>
                  <small>Basado en valor residual del vehículo</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 5: CONTACTO */}
        <section className="contact-block">
          <div className="contact-card2">
            <h2>¿LISTO PARA SER SMART? <br />
              REGÍSTRATE AHORA
            
            </h2>
            <a
  href="https://forms.gle/RtRsECQq7MRtGurn8"
  target="_blank"
  rel="noopener noreferrer"
  className="professional-contact-btn2"
>
  REGISTRO MOTOCICLETAS
  <PiMotorcycleFill size={30} color="#bad8ca" />
</a>
            
            <a
  href="https://forms.gle/txb5JQ4tJm3pArB17"
  target="_blank"
  rel="noopener noreferrer"
  className="professional-contact-btn2"
>
  REGISTRO VEHÍCULOS
  <FaCar size={25} color="#bad8ca" />
</a>
          </div>
        </section>
      </main>

      {/* FOOTER UNIFICADO */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-info">
            <h3>SMART DRIVE</h3>
            <p>
              Transformando la logística urbana mediante tecnología eléctrica y
              propiedad compartida.
            </p>
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