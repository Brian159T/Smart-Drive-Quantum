import React from 'react';
import './Comofunciona.css';

// Assets
import imgStep1 from '../assets/nexus-1.webp';
import imgStep2 from '../assets/Tropper financiero.png';
import imgStep3 from '../assets/Auto verde co logo Q.png';

const STEPS = [
  {
    id: '01',
    title: 'Postulación y Registro',
    description: 'Regístrate en nuestra plataforma. Evaluamos tu perfil de conductor de aplicaciones para integrarte a nuestra flota eléctrica de última generación.',
    image: imgStep1
  },
  {
    id: '02',
    title: 'Plan a tu Medida',
    description: 'Eliges un plan de arrendamiento flexible sin inversión inicial elevada. Nosotros nos encargamos del mantenimiento preventivo y soporte técnico.',
    image: imgStep2
  },
  {
    id: '03',
    title: 'Conduce y Sé Dueño',
    description: 'Al completar el periodo del contrato, el vehículo pasa a ser legalmente tuyo. Transforma tu gasto diario en una inversión patrimonial real.',
    image: imgStep3
  }
];

const Comofunciona: React.FC = () => {
  return (
    <div className="how-page-wrapper">
      {/* HEADER PRINCIPAL */}
      <header className="how-hero">
        <div className="how-container">
          <span className="how-kicker">Tu camino a la propiedad</span>
          <h1>¿Cómo funciona <span className="how-highlight">Smart Drive?</span></h1>
          <p className="how-lead">Un proceso transparente y tecnológico diseñado para potenciar tu crecimiento financiero y profesional.</p>
        </div>
      </header>

      {/* SECCIÓN DE PASOS DINÁMICOS */}
      <section className="how-steps">
        <div className="how-container">
          {STEPS.map((step, index) => (
            <div key={step.id} className={`how-step-row ${index % 2 !== 0 ? 'how-reverse' : ''}`}>
              <div className="how-step-text">
                <div className="how-step-badge">{step.id}</div>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
                <div className="how-check-list">
                  <span>✓ Proceso 100% Digital</span>
                  <span>✓ Soporte 24/7</span>
                </div>
                <button className="how-btn-outline">Ver requisitos</button>
              </div>
              <div className="how-step-visual">
                <div className="how-img-frame">
                  <img src={step.image} alt={step.title} loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA INTERMEDIO */}
      

      {/* FOOTER PROFESIONAL UNIFICADO */}
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

export default Comofunciona;