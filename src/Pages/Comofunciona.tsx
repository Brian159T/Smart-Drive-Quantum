import React from 'react';
import './Comofunciona.css';
import Footer from '../Components/Footer/Footer'

// Assets
import Postulacion from '../assets/Como funciona/postulación y registro.png';
import Plan from '../assets/Como funciona/plan a tu medida.png';
import Conduce from '../assets/Como funciona/conduce y se dueño.png';

const STEPS = [
  {
    id: '01',
    title: 'Postulación y Registro',
    description: 'Regístrate en nuestra plataforma. Evaluamos tu perfil de conductor de aplicaciones para integrarte a nuestra flota eléctrica de última generación.',
    image: Postulacion
  },
  {
    id: '02',
    title: 'Plan a tu Medida',
    description: 'Eliges un plan de arrendamiento flexible sin inversión inicial elevada. Nosotros nos encargamos del mantenimiento preventivo y soporte técnico.',
    image: Plan
  },
  {
    id: '03',
    title: 'Conduce y Sé Dueño',
    description: 'Al completar el periodo del contrato, el vehículo pasa a ser legalmente tuyo. Transforma tu gasto diario en una inversión patrimonial real.',
    image: Conduce
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
      

      <Footer />
    </div>
  );
};

export default Comofunciona;