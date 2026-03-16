import React, { useState } from 'react';
import './Contactos.css';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';
import Footer from '../Components/Footer/Footer';

const FAQS = [
  {
    q: '¿Solo pueden aplicar Drivers?',
    a: 'No. Aunque muchos de nuestros clientes sean conductores de plataforma, el programa está abierto a cualquier persona que quiera acceder a un vehículo bajo el modelo Rent to Own.',
  },
  {
    q: '¿Qué tipo de seguro incluye tu cuota semanal?',
    a: 'Tu cuota incluye seguro contra accidentes y daños al vehículo para que conduzcas con más confianza.',
  },
  {
    q: '¿Cuánto tiempo tarda la carga completa?',
    a: 'Entre 6 - 7 horas en autos, y entre 2,5 - 3 horas en motos.',
  },
  {
    q: '¿Los puntos de carga dónde se encuentran?',
    a: 'Alrededor de toda la ciudad, con estaciones disponibles en zonas comerciales y residenciales principales.',
  },
  {
    q: '¿Se puede instalar punto de carga en domicilio?',
    a: 'Sí, y no tiene ningún costo adicional.',
  },
  {
    q: '¿El cargador viene incluido?',
    a: 'Sí, viene incluido con tu vehículo desde el primer día.',
  },
];

const Contactos: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="contactos-view">

      {/* HERO */}
      <section className="contactos-hero">
        <div className="contactos-container">
          <span className="contactos-kicker">Contacto Corporativo</span>
          <h1>Hablemos de tu <span className="contactos-highlight">próximo paso</span></h1>
          <p>
            Estamos aquí para resolver tus dudas sobre movilidad eléctrica.
            Visítanos en nuestras oficinas o contáctanos por canales digitales.
          </p>
        </div>
      </section>

      {/* INFO + MAPA */}
      <section className="contact-main-grid">
        <div className="contactos-container grid-wrapper">

          <div className="contact-info-side">
            <div className="contactos-card">
              <div className="contactos-item">
                <div className="icon-box"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Dirección</h4>
                  <p>Calle y colonia La Mascota no.316, San Salvador, CP1101</p>
                </div>
              </div>
              <div className="contactos-item">
                <div className="icon-box"><FaWhatsapp /></div>
                <div>
                  <h4>WhatsApp Corporativo</h4>
                  <p>+503 6176 6862</p>
                </div>
              </div>
              <div className="contactos-item">
                <div className="icon-box"><FaEnvelope /></div>
                <div>
                  <h4>Correo Electrónico</h4>
                  <p>info@smartdrive.com</p>
                </div>
              </div>
              <div className="social-connect">
                <span>Síguenos:</span>
                <div className="social-icons">
                  <a href="https://www.instagram.com/smartdrive_elsalvador/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook.com/people/Smart-Drive-El-Salvador/61579925104197/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-map-side">
            <div className="map-container">
              <iframe
                title="Ubicación Smart Drive"
                src="https://www.google.com/maps?q=13.6978373,-89.2396259&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* FAQ ACORDEÓN */}
      <section className="faq-preview">
        <div className="contactos-container">

          <div className="faq-header">
            <span className="faq-kicker">FAQ</span>
            <h2 className="section-title">Todo lo que necesitas saber</h2>
            <p className="faq-subtitle">
              Resolvemos tus dudas antes de que des el paso hacia la movilidad eléctrica.
            </p>
          </div>

          <div className="faq-accordion">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`faq-row${isOpen ? ' faq-row--open' : ''}`}
                  onClick={() => toggle(i)}
                >
                  <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="faq-content">
                    <div className="faq-question">
                      <span className="faq-q-text">{faq.q}</span>
                      <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                    </div>
                    <div className={`faq-answer${isOpen ? ' faq-answer--visible' : ''}`}>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contactos;