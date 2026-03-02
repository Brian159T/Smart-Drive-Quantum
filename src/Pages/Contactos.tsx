import React from 'react';
import './Contactos.css';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Contactos: React.FC = () => {
  return (
    <div className="contactos-view">
      {/* HERO SECTION */}
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

      {/* SECCIÓN PRINCIPAL: INFO + MAPA */}
      <section className="contact-main-grid">
        <div className="contactos-container grid-wrapper">
          
          {/* COLUMNA IZQUIERDA: INFO */}
          <div className="contact-info-side">
            <div className="contactos-card">
              <div className="contactos-item">
                <div className="icon-box"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Oficina Principal</h4>
                  <p>Av. América Oeste #123, Cochabamba, Bolivia</p>
                </div>
              </div>

              <div className="contactos-item">
                <div className="icon-box"><FaWhatsapp /></div>
                <div>
                  <h4>WhatsApp Corporativo</h4>
                  <p>+591 70000000</p>
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
                  <a href="#"><FaLinkedin /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaFacebook /></a>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: MAPA INTERACTIVO */}
          <div className="contact-map-side">
            <div className="map-container">
              <iframe 
                title="Ubicación Smart Drive"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15227.425983832442!2d-66.1666!3d-17.3895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37401349f7e4f%3A0x66f64c679a9f4c34!2sCochabamba!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN EXTRA: FAQ RÁPIDA (Aumenta el profesionalismo) */}
      <section className="faq-preview">
        <div className="contactos-container">
          <h2 className="section-title">Preguntas Comunes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h5>¿Tienen showroom?</h5>
              <p>Sí, puedes agendar una prueba de manejo de lunes a viernes en nuestra sede central.</p>
            </div>
            <div className="faq-item">
              <h5>¿Hay financiamiento?</h5>
              <p>Contamos con planes de propiedad compartida adaptados a socios conductores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-info">
            <h3>SMART DRIVE</h3>
            <p>Transformando la logística urbana mediante tecnología eléctrica.</p>
          </div>
          <div className="footer-nav">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#vehiculos">Vehículos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>info@smartdrive.com</p>
            <p>Cochabamba, Bolivia</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Smart Drive. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contactos;