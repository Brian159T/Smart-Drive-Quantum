import React, { useEffect, useState, useCallback } from 'react';
import './Quienes.css';

// Assets Principales
import imgHero1 from '../assets/Portada/Portada Nexus.jpg.jpeg';
import imgHero2 from '../assets/Portada/Portada web Smart drive.jpg.jpeg';
import imgHero3 from '../assets/Portada/Portada Trooper.jpg.jpeg';
import finalquiler from '../assets/Quienes somos/fin del alquiler eterno.png';
import modelodiferente from '../assets/Quienes somos/mejora - un modelo diferente.png';
import imgTienda from '../assets/Quienes somos/tienda.png';

import trooperImgquienes from '../assets/Alquiler/Tomas trooper/portada troopper.png'; 
import nexusImgquienes from '../assets/nexus-1.webp'; 
import imgMateDesktop from '../assets/Fchas tecnicas c/mate.png'; 
import imgMVPDesktop from '../assets/Fchas tecnicas c/baw.png';

// Assets Clientes
import client1 from '../assets/Quienes somos/Cliente3.png';
import client2 from '../assets/Quienes somos/Cliente2.png';
import client3 from '../assets/Quienes somos/Cliente1.png';
import { FaWhatsapp } from "react-icons/fa";
import { PiMotorcycleFill } from "react-icons/pi";
import { FaCar } from "react-icons/fa";

const HERO_IMAGES = [imgHero1, imgHero2, imgHero3];
const CLIENT_IMAGES = [client1, client2, client3];

const Quienes: React.FC = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [currentClient, setCurrentClient] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0); // Nuevo estado para el carrusel principal

  // Estados para la Calculadora
  const [pagoDiario, setPagoDiario] = useState<number>(100);
  const [meses, setMeses] = useState<number>(24);

  const totalAlquiler = pagoDiario * 30 * meses;
  const ahorroEstimado = totalAlquiler * 0.45;

  const nextHero = useCallback(() => {
    setCurrentHero((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const nextClient = useCallback(() => {
    setCurrentClient((prev) => (prev + 1) % CLIENT_IMAGES.length);
  }, []);

  const nextFeature = useCallback(() => {
    setCurrentFeature((prev) => (prev + 1) % 3);
  }, []);

  useEffect(() => {
    const heroInterval = setInterval(nextHero, 5000);
    const clientInterval = setInterval(nextClient, 4000);
    const featureInterval = setInterval(nextFeature, 7000); // Cambio cada 7 segundos
    return () => {
      clearInterval(heroInterval);
      clearInterval(clientInterval);
      clearInterval(featureInterval);
    };
  }, [nextHero, nextClient, nextFeature]);

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

      <section className="fullscreen-grid">
        <div className="grid-item">
          <img src={trooperImgquienes} alt="Trooper" />
          <div className="overlay"><h2>TROOPER</h2></div>
        </div>
        <div className="grid-item">
          <img src={nexusImgquienes} alt="Nexus" />
          <div className="overlay"><h2>NEXUS</h2></div>
        </div>
        <div className="grid-item">
          <img src={imgMateDesktop} alt="Mate" />
          <div className="overlay"><h2>MATE</h2></div>
        </div>
        <div className="grid-item">
          <img src={imgMVPDesktop} alt="MVP" />
          <div className="overlay"><h2>MVP</h2></div>
        </div>
        <div className="grid-item">
          <img src={imgMVPDesktop} alt="Urban" />
          <div className="overlay"><h2>URBAN</h2></div>
        </div>
        <div className="grid-item">
          <img src={imgMVPDesktop} alt="Urban 2" />
          <div className="overlay"><h2>URBAN 2</h2></div>
        </div>
      </section>

      <main className="main-content">
        {/* CARRUSEL DE INFORMACIÓN (MISIÓN, VISIÓN, TIENDA) */}
        <section className="info-carousel-section">
          <div className="info-carousel-wrapper">
            
            {/* Slide 1: MISIÓN */}
            <div className={`info-slide ${currentFeature === 0 ? 'active' : ''}`}>
              <section className="feature-grid">
                <div className="feature-image">
                  <img src={finalquiler} alt="fin del alquiler" />
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
            </div>

            {/* Slide 2: VISIÓN */}
            <div className={`info-slide ${currentFeature === 1 ? 'active' : ''}`}>
              <section className="feature-grid reverse">
                <div className="feature-image">
                  <img src={modelodiferente} alt="Modelo Diferente Smart Drive" />
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
            </div>

            {/* Slide 3: LA TIENDA */}
            <div className={`info-slide ${currentFeature === 2 ? 'active' : ''}`}>
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
            </div>
          </div>

          <div className="info-dots">
            {[0, 1, 2].map((i) => (
              <span 
                key={i} 
                className={`dot ${currentFeature === i ? 'active' : ''}`} 
                onClick={() => setCurrentFeature(i)} 
              />
            ))}
          </div>
        </section>

        {/* BLOQUE CONTACTO 1 */}
        <section className="contact-block symmetric-section">
          <div className="contact-card">
            <div className="contact-content">
              <h2>¿LISTO PARA COMENZAR?</h2>
              <p>Hablemos sobre tu próximo gran paso en la movilidad eléctrica.</p>
            </div>
            <a href="https://wa.me/50361766862" target="_blank" rel="noopener noreferrer" className="professional-contact-btn">
              CONTACTANOS <FaWhatsapp size={25} color="#bad8ca" />
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

        {/* CALCULADORA */}
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
                  <label>Kilómetros semanales (KM)</label>
                  <input type="number" value={pagoDiario} onChange={(e) => setPagoDiario(Number(e.target.value))} />
                  <div className="value-display">{pagoDiario} km.</div>
                </div>
                <div className="input-group">
                  <label>Gasto en gasolina semanal ($)</label>
                  <input type="number" value={meses} onChange={(e) => setMeses(Number(e.target.value))} />
                  <div className="value-display">{meses} $</div>
                </div>
                <div className="input-group">
                  <label>Tiempo de contrato (Meses)</label>
                  <input type="number" value={meses} onChange={(e) => setMeses(Number(e.target.value))} />
                  <div className="value-display">{meses} meses</div>
                </div>
              </div>
              <div className="calc-results">
                <div className="result-item">
                  <span>Gasto en Alquiler Tradicional</span>
                  <div className="price-total">{totalAlquiler.toLocaleString()} Bs.</div>
                </div>
                <div className="result-item highlight">
                  <span>Ahorro Proyectado Smart Drive</span>
                  <div className="price-savings">{ahorroEstimado.toLocaleString()} Bs.*</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 5: REGISTRO */}
        <section className="contact-block">
          <div className="contact-card2">
            <h2>¿LISTO PARA SER SMART? <br /> REGÍSTRATE AHORA</h2>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="https://forms.gle/RtRsECQq7MRtGurn8" target="_blank" rel="noopener noreferrer" className="professional-contact-btn2">
                REGISTRO MOTOCICLETAS <PiMotorcycleFill size={30} color="#bad8ca" />
              </a>
              <a href="https://forms.gle/txb5JQ4tJm3pArB17" target="_blank" rel="noopener noreferrer" className="professional-contact-btn2">
                REGISTRO VEHÍCULOS <FaCar size={25} color="#bad8ca" />
              </a>
            </div>
          </div>
        </section>
      </main>

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