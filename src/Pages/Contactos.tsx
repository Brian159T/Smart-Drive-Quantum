import React, { useState } from 'react';
import './Contactos.css';

const Contactos: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: 'Soporte Técnico',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enviando:', formData);
    alert('Mensaje enviado con éxito');
  };

  return (
    <div className="contactos-view">
      {/* SECCIÓN HERO */}
      <div className="contactos-hero">
        <div className="contactos-container">
          <span className="contactos-kicker">Atención Personalizada</span>
          <h1>Ponte en <span className="contactos-highlight">contacto</span></h1>
          <p>Estamos aquí para resolver tus dudas y potenciar tu camino hacia la movilidad eléctrica.</p>
        </div>
      </div>

      {/* SECCIÓN PRINCIPAL */}
      <main className="contactos-main">
        <div className="contactos-container contactos-grid">
          
          {/* BLOQUE FORMULARIO */}
          <section className="contactos-form-card">
            <div className="contactos-glass">
              <h3>Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="contactos-form">
                <div className="contactos-field">
                  <label>Nombre Completo</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre aquí" 
                    required 
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>
                <div className="contactos-field">
                  <label>Correo Electrónico</label>
                  <input 
                    type="email" 
                    placeholder="ejemplo@correo.com" 
                    required 
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="contactos-field">
                  <label>Asunto</label>
                  <select onChange={(e) => setFormData({...formData, asunto: e.target.value})}>
                    <option>Soporte Técnico</option>
                    <option>Información de Planes</option>
                    <option>Alianzas</option>
                  </select>
                </div>
                <div className="contactos-field">
                  <label>Mensaje</label>
                  <textarea 
                    rows={4} 
                    placeholder="¿En qué podemos ayudarte?" 
                    required
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="contactos-btn">Enviar Solicitud</button>
              </form>
            </div>
          </section>

          {/* BLOQUE INFORMACIÓN */}
          <aside className="contactos-info-sidebar">
            <div className="contactos-glass">
              <h3>Datos de contacto</h3>
              <div className="contactos-info-item">
                <span className="contactos-icon">📍</span>
                <div>
                  <h4>Dirección</h4>
                  <p>Cochabamba Bolivia</p>
                </div>
              </div>
              <div className="contactos-info-item">
                <span className="contactos-icon">📞</span>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+591 70000000</p>
                </div>
              </div>
              <div className="contactos-info-item">
                <span className="contactos-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>info@smartdrive.com</p>
                </div>
              </div>

              {/* Mapa Simulado */}
              <div className="contactos-map-box">
                <div className="contactos-map-pin">📍 Ver en Google Maps</div>
              </div>
            </div>

            <div className="contactos-social-bar contactos-glass">
              <a href="#">TW</a>
              <a href="#">FB</a>
              <a href="#">LN</a>
              <a href="#">IG</a>
            </div>
          </aside>
        </div>
      </main>

      {/* FOOTER */}
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