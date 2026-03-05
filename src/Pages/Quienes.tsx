import React, { useEffect, useState, useCallback } from 'react';
import './Quienes.css';

// Assets Principales
import imgHero1 from '../assets/Portada/Portada Nexus.jpg.jpeg';
import imgHero2 from '../assets/Portada/Portada web Smart drive.jpg.jpeg';
import imgHero3 from '../assets/Portada/Portada Trooper.jpg.jpeg';
import modena from '../assets/Quienes somos/moneda.webp'
import modelodiferente from '../assets/Quienes somos/mejora - un modelo diferente.png';
import imgTienda from '../assets/Quienes somos/tienda.png';

import trooperImgquienes from '../assets/Alquiler/Tomas trooper/portada troopper.png'; 
import nexusImgquienes from '../assets/nexus-1.webp'; 
import imgMateDesktop from '../assets/Fchas tecnicas c/mate.png'; 
import imgMVPDesktop from '../assets/Fchas tecnicas c/baw.png';
import Vision from '../assets/Empresa/Visión.png';
import mision_propuesta from '../assets/Empresa/mision-propuesta.png';
import Ecosistema from '../assets/Empresa/ecosistema quantum.png';

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
  // const [pagoDiario, setPagoDiario] = useState<number>(100);
  // const [meses, setMeses] = useState<number>(24);

  // const totalAlquiler = pagoDiario * 30 * meses;
  // const ahorroEstimado = totalAlquiler * 0.45;

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

         {/* SECCIÓN 1: VISIÓN (Hero Split) */}
      <section className="section-vision">
        <div className="vision-image">
          <img src={Vision} alt="Visión Smart Drive" />
        </div>
        <div className="vision-content">
          <div className="glass-card">
            <span className="kicker">Hacia el futuro</span>
            <h2>Visión</h2>
            <p>
              Ser la empresa referente en movilidad eléctrica para conductores de aplicaciones en Latinoamérica, 
              liderando la transición hacia un transporte sostenible, accesible y rentable.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: MISIÓN Y PROPUESTA (Banner con imagen de fondo) */}
      <section 
        className="section-impact" 
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${mision_propuesta })` }}
      >
        <div className="impact-grid">
          <div className="impact-item">
            <h3>Nuestra Misión</h3>
            <p>
              Facilitar el acceso a vehículos eléctricos a conductores de plataformas de movilidad y delivery, 
              mediante soluciones de arrendamiento flexibles con opción a compra, brindando ingresos sostenibles 
              y promoviendo una movilidad urbana eficiente y ambientalmente responsable.
            </p>
          </div>
          <div className="impact-divider"></div>
          <div className="impact-item">
            <h3>Propuesta de Valor</h3>
            <p>
              Smart Drive permite a los conductores de aplicaciones acceder a vehículos eléctricos sin inversión inicial elevada, 
              reduciendo costos operativos y ofreciendo una ruta clara hacia la propiedad del vehículo.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: ECOSISTEMA */}
      <section className="section-ecosystem">
        <div className="ecosystem-container">
          <div className="ecosystem-text">
            <span className="kicker">Sinergia Industrial</span>
            <h2>Ecosistema Quantum-SmartDrive</h2>
            <p className="highlight-p">
              La unión de la capacidad industrial y la innovación financiera.
            </p>
            <p>
              Somos la vía más eficiente para que los conductores de aplicaciones móviles accedan y sean dueños de vehículos eléctricos, 
              eliminando las barreras de entrada tradicionales del mercado automotriz.
            </p>
            <div className="eco-stats">
              <div className="stat">
                <h4>100%</h4>
                <span>Eléctrico</span>
              </div>
              <div className="stat">
                <h4>0%</h4>
                <span>Inversión Inicial</span>
              </div>
            </div>
          </div>
          <div className="ecosystem-image">
            <img src={Ecosistema} alt="Auto Quantum" className="floating-img" />
          </div>
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
                  <img src={modena} alt="fin del alquiler" />
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

      
        <section className="Seccion-calculadora">
  <h2 className="titulo-calculadora">CALCULADORA DE AHORRO</h2>
  <p className="descripcion">
    Compara tu gasto actual con el modelo Smart Drive y descubre el potencial de tu inversión.
  </p>

  <div className="cuerpo-calculadora">
    {/* COLUMNA IZQUIERDA: DATOS DE ENTRADA */}
    <div className="entradas">
      <div className="input-group">
        <label className="etiquetas" htmlFor="km-semanales">¿Cuántos Km recorres en una semana promedio?</label>
        <input className="entrada" type="number" id="km-semanales" placeholder="0" />
      </div>

      <div className="input-group">
        <label className="etiquetas" htmlFor="$-semanales">¿Cuánto dinero gastas de gasolina a la semana? ($)</label>
        <input className="entrada" type="number" id="$-semanales" placeholder="0" />
      </div>

      <div className="input-group">
        <label className="etiquetas" htmlFor="gastos-mensuales">Gasto mensual en aceite, frenos y reparaciones ($)</label>
        <input className="entrada" type="number" id="gastos-mensuales" placeholder="0" />
      </div>

      <div className="input-group">
        <label className="etiquetas" htmlFor="pago-semanal">Si alquilas, ¿cuánto pagas semanalmente? ($)</label>
        <input className="entrada" type="number" id="pago-semanal" placeholder="0" />
      </div>
      <button className="btn-ahorro">Calcular</button>
    </div>

    {/* COLUMNA DERECHA: RESULTADOS Y COMPARATIVA */}
    <div className="salidas">
      
      {/* VEHÍCULO ACTUAL */}
      <div className="vehiculo-actual-card">
        <h3 color='red' className='titulo-estado-actual'>ESTADO ACTUAL</h3>
        <div className="resultado-item">
          <span className="res-label">Costo operativo semanal:</span>
          <span className="res-valor primary-text">$ 0.00</span>
        </div>
        <div className="resultado-item">
          <span className="res-label">Costo por KM:</span>
          <span className="res-valor">$ 0.00</span>
        </div>

        
      </div>

      {/* NUEVO SMART DRIVE */}
      <div className="nuevo-sd-card">
        <h3 className='titulo-estado-actual'>CON SMART DRIVE</h3>
        <div className="resultado-grid">
          <div className="resultado-item">
            <span className="res-label">Cuota fija (Seguro + Mant.):</span>
            <span className="res-valor">$ 0.00</span>
          </div>
          <div className="resultado-item">
            <span className="res-label">Carga eléctrica:</span>
            <span className="res-valor">$ 0.00</span>
          </div>
          <div className="resultado-item">
            <span className="res-label">Mantenimiento y seguro:</span>
            <span className="res-valor">Incluido</span>
          </div>
          <div className="resultado-item">
            <span className="res-label">Costo por Km:</span>
            <span className="res-valor highlight-text">$ 0.00</span>
          </div>
        </div>
      </div>

      {/* VISUALIZADOR DE AHORRO FINAL */}
      <div className="visualizador">
        <p className="congrats-text">¡Felicidades! Al pasarte a Smart Drive tu bolsillo respira</p>
        <div className="ahorro-container">
          <div className="ahorro-block">
            <span className="ahorro-label">AHORRO SEMANAL</span>
            <span className="ahorro-monto">$ 0.00</span>
          </div>
          <div className="ahorro-block">
            <span className="ahorro-label">AHORRO MENSUAL</span>
            <span className="ahorro-monto">$ 0.00</span>
          </div>
          <div className="ahorro-block total">
            <span className="ahorro-label">AHORRO ANUAL</span>
            <span className="ahorro-monto">$ 0.00</span>
          </div>

          
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