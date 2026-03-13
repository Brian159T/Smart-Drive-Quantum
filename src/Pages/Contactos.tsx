import React from 'react';
import './Contactos.css';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import Footer from '../Components/Footer/Footer'
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
                  <h4>Direccion</h4>
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
                  
                  <a href="https://www.instagram.com/smartdrive_elsalvador/"><FaInstagram /></a>
                  <a href="https://www.facebook.com/people/Smart-Drive-El-Salvador/61579925104197/"><FaFacebook /></a>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: MAPA INTERACTIVO */}
          <div className="contact-map-side">
  <div className="map-container">
    <iframe
      title="Ubicación Smart Drive"
      src="https://www.google.com/maps?q=Calle+y+colonia+La+Mascota+no.316,+San+Salvador,+CP1101&z=16&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
</div>

        </div>
      </section>

      
      <section className="faq-preview">
        <div className="contactos-container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h5 className='subtitulo'>¿Solo pueden aplicar Drivers?</h5>
              <p>No. Aunque muchos de nuestros clientes sean conductores de plataforma, el programa está abierto a 
                cualquier persona que quiera acceder a un vehículo bajo el modelo Rent to Own.</p>
            </div>
            <div className="faq-item">
              <h5 className='subtitulo'>¿Que tipo de seguro incluye tu cuota semanal?</h5>
              <p>Tu cuota incluye seguro contra accidentes y daños al vehículo para que conduzcas con más confianza.</p>
            </div>

            <div className="faq-item">
              <h5 className='subtitulo'>¿Cuánto tiempo tarda la carga completa?</h5>
              <p>Entre 6 y 7 horas en autos, y entre 2,5 y 3 horas en motos.</p>
            </div>
            <div className="faq-item">
              <h5 className='subtitulo'>¿Los puntos de carga donde se encuentran?</h5>
              <p>Alrededor de toda la ciudad </p>
            </div>

            <div className="faq-item">
              <h5 className='subtitulo'>¿Se puede instalar punto de carga en domicilio?</h5>
              <p>Sí, y no tiene ningún costo adicional.</p>
            </div>

            <div className="faq-item">
              <h5 className='subtitulo'>¿El cargador viene incluido?</h5>
              <p>Sí, viene incluido.</p>
            </div>

            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contactos;