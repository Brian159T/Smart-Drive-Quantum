import React from 'react';
import './Comofunciona.css';
import Footer from '../Components/Footer/Footer';
import { Helmet } from 'react-helmet-async';

// Assets
import Postulacion from '../assets/Como funciona/postulación y registro.png';
import Plan from '../assets/Como funciona/plan a tu medida.png';
import Conduce from '../assets/Como funciona/conduce y se dueño.png';

// Icons
import { FaIdCard, FaFileAlt, FaMapMarkerAlt, FaCar, FaWhatsapp } from 'react-icons/fa';
import { PiMotorcycleFill } from 'react-icons/pi';

const STEPS = [
  {
    id: '01',
    title: 'Postulación y Registro',
    description:
      'Contáctanos para evaluar tu perfil como conductor de aplicaciones e integrarte a nuestra flota de vehículos eléctricos de última generación.',
    image: Postulacion,
    label: 'Paso 01 — Registro',
    checks: ['Proceso 100% Digital', 'Evaluación en 24 hrs'],
  },
  {
    id: '02',
    title: 'Plan a tu Medida',
    description:
      'Eliges un plan de arrendamiento flexible sin inversión inicial elevada. Nosotros nos encargamos del mantenimiento preventivo y soporte técnico.',
    image: Plan,
    label: 'Paso 02 — Tu Plan',
    checks: ['Sin préstamos bancarios', 'Mantenimiento incluido'],
  },
  {
    id: '03',
    title: 'Conduce y Sé Dueño',
    description:
      'Al completar el periodo del contrato, el vehículo pasa a ser legalmente tuyo. Transforma tu gasto diario en una inversión patrimonial real.',
    image: Conduce,
    label: 'Paso 03 — Propiedad',
    checks: ['100% tuyo al terminar', 'Sin costos ocultos'],
  },
];

const REQUISITOS = [
  {
    icon: <FaIdCard size={28} />,
    title: 'DUI',
    desc: 'Documento Único de Identidad vigente del solicitante.',
  },
  {
    icon: <FaFileAlt size={28} />,
    title: 'Antecedentes penales',
    desc: 'Certificado de antecedentes penales actualizado.',
  },
  {
    icon: <FaMapMarkerAlt size={28} />,
    title: 'Croquis',
    desc: 'Croquis de tu dirección de residencia actual.',
  },
  {
    icon: <FaCar size={28} />,
    title: 'Licencia vigente',
    desc: 'Licencia de conducir en plena vigencia.',
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

        {/* REQUISITOS MÍNIMOS */}
        <section className="how-requisitos">
          <div className="how-container">
            <div className="how-req-header">
              <span className="how-req-kicker">Antes de aplicar</span>
              <h2 className="how-req-title">Requisitos mínimos</h2>
              <p className="how-req-sub">
                Asegúrate de tener estos documentos listos para agilizar tu proceso de admisión.
              </p>
            </div>

            <div className="how-req-grid">
              {REQUISITOS.map((req, i) => (
                <div className="how-req-card" key={i}>
                  <div className="how-req-icon">{req.icon}</div>
                  <h3 className="how-req-name">{req.title}</h3>
                  <p className="how-req-desc">{req.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                    {step.checks.map((c, ci) => (
                      <span key={ci}>✓ {c}</span>
                    ))}
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

        {/* CTA REGISTRO */}
        <section className="how-cta-section">
          <div className="how-container">
            <div className="how-cta-card">
              <div className="how-cta-text">
                <span className="how-kicker" style={{ marginBottom: '12px' }}>¿Listo para comenzar?</span>
                <h2 className="how-cta-title">Regístrate ahora</h2>
                <p className="how-cta-desc">
                  Completa el formulario de tu categoría y un asesor se pondrá en contacto contigo en menos de 24 horas.
                </p>
              </div>
              <div className="how-cta-actions">
                <a
                  href="https://forms.gle/RtRsECQq7MRtGurn8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="how-cta-btn how-cta-btn--moto"
                >
                  <PiMotorcycleFill size={26} />
                  Registro Motocicletas
                </a>
                <a
                  href="https://forms.gle/txb5JQ4tJm3pArB17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="how-cta-btn how-cta-btn--car"
                >
                  <FaCar size={22} />
                  Registro Vehículos
                </a>
                <a
                  href="https://wa.me/50361766862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="how-cta-btn how-cta-btn--wa"
                >
                  <FaWhatsapp size={22} />
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Comofunciona;