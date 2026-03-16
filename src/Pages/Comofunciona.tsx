import React from 'react';
import './Comofunciona.css';
import Footer from '../Components/Footer/Footer';
import { Helmet } from 'react-helmet-async';

// Assets
import Postulacion from '../assets/Como funciona/postulación y registro.png';
import Plan from '../assets/Como funciona/plan a tu medida.png';
import Conduce from '../assets/Como funciona/conduce y se dueño.png';

const STEPS = [
  {
    id: '01',
    title: 'Postulación y Registro',
    description:
      'Contáctanos para evaluar tu perfil como conductor de aplicaciones e integrarte a nuestra flota de vehículos eléctricos de última generación.',
    image: Postulacion,
    label: 'Paso 01 — Registro',
  },
  {
    id: '02',
    title: 'Plan a tu Medida',
    description:
      'Eliges un plan de arrendamiento flexible sin inversión inicial elevada. Nosotros nos encargamos del mantenimiento preventivo y soporte técnico.',
    image: Plan,
    label: 'Paso 02 — Tu Plan',
  },
  {
    id: '03',
    title: 'Conduce y Sé Dueño',
    description:
      'Al completar el periodo del contrato, el vehículo pasa a ser legalmente tuyo. Transforma tu gasto diario en una inversión patrimonial real.',
    image: Conduce,
    label: 'Paso 03 — Propiedad',
  },
];

const Comofunciona: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cómo funciona Smart Drive | Rent to Own</title>
        <meta
          name="description"
          content="Descubre cómo funciona el programa Smart Drive Rent to Own para acceder a vehículos eléctricos y convertir tu trabajo en una inversión."
        />
      </Helmet>

      <div className="how-page-wrapper">

        {/* HERO */}
        <header className="how-hero">
          <div className="how-container">
            <span className="how-kicker">Tu camino a la propiedad</span>
            <h1>
              ¿Cómo ser parte de<br />
              <span className="how-highlight">Smart Drive?</span>
            </h1>
            <p className="how-lead">
              Un proceso transparente y tecnológico diseñado para potenciar
              tu crecimiento financiero y profesional.
            </p>
          </div>
        </header>

        {/* PASOS — TIMELINE */}
        <section className="how-steps">
          <div className="how-container" style={{ position: 'relative' }}>

            {/* línea vertical */}
            <div className="how-timeline-line" />

            {STEPS.map((step, index) => (
              <div
                key={step.id}
                className={`how-step-row ${index % 2 !== 0 ? 'how-reverse' : ''}`}
              >
                {/* TEXTO */}
                <div className="how-step-text">
                  <span className="how-step-num">{step.id}</span>
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                  <div className="how-check-list">
                    <span>✓ Proceso 100% Digital</span>
                    <span>✓ Soporte 24/7</span>
                  </div>
                </div>

                {/* NODO CENTRAL */}
                <div className="how-step-node">
                  <div className="how-node-circle" />
                </div>

                {/* IMAGEN */}
                <div className="how-step-visual">
                  <div className="how-img-frame">
                    <img src={step.image} alt={step.title} loading="lazy" />
                    <span className="how-img-label">{step.label}</span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Comofunciona;