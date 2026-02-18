import React from 'react';
import './Empresa.css';

// Assets (Asegúrate de que las rutas coincidan con tu estructura de carpetas)
import imgHero from '../assets/Entrega-de-premios-sorteo-Fexco.jpg';
import imgMision from '../assets/nexus-1.webp';
import imgEcosistema from '../assets/Auto verde co logo Q.png';


const Empresa: React.FC = () => {
  return (
    <div className="empresa-page">
      
      {/* SECCIÓN 1: VISIÓN (Hero Split) */}
      <section className="section-vision">
        <div className="vision-image">
          <img src={imgHero} alt="Visión Smart Drive" />
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
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${imgMision})` }}
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
            <img src={imgEcosistema} alt="Auto Quantum" className="floating-img" />
          </div>
        </div>
      </section>

      {/* FOOTER PROFESIONAL INTEGRADO */}
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

export default Empresa;