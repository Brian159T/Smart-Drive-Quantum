import React, { useState } from 'react';
import './Vehiculos.css';

// Importación de assets según tus rutas
import imgMate from '../assets/Ficha Tecnica Mate.png';
import imgMVP from '../assets/Ficha Tecnica MVP.png';
import imgNexus from '../assets/Ficha Tecnica Nexus.png';
import imgTrooper from '../assets/Ficha Tecnica Trooper.png';

const VEHICULOS_DATA = [
  { id: 1, name: 'Quantum Nexus Plus', category: 'Automóvil', image: imgNexus },
  { id: 2, name: 'Quantum Trooper', category: 'Motocicleta', image: imgTrooper },
  { id: 3, name: 'Quantum MPV EV', category: 'Van Industrial', image: imgMVP },
  { id: 4, name: 'Quantum Mate', category: 'Solución Urbana', image: imgMate },
];

const Vehiculos: React.FC = () => {
  // Estado para la imagen que se mostrará en pantalla completa
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (img: string) => {
    setModalImage(img);
    document.body.style.overflow = 'hidden'; // Evita el scroll al estar abierto
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto'; // Restaura el scroll
  };

  return (
    <div className="vehiculos-page">
      {/* HEADER DE SECCIÓN */}
      <section className="vehiculos-hero">
        <div className="v-container">
          <span className="v-kicker">Nuestra Flota Eléctrica</span>
          <h1>Movilidad de <span className="v-highlight">Nueva Generación</span></h1>
          <p>Explora las especificaciones técnicas de nuestros vehículos diseñados para la eficiencia urbana.</p>
        </div>
      </section>

      {/* GRILLA DE VEHÍCULOS */}
      <section className="vehiculos-grid-section">
        <div className="v-container">
          <div className="v-grid">
            {VEHICULOS_DATA.map((v) => (
              <div key={v.id} className="v-card-wrapper">
                <div className="v-card glass">
                  <div className="v-card-header">
                    <span className="v-tag">{v.category}</span>
                    <h3>{v.name}</h3>
                  </div>
                  <div className="v-image-container">
                    <img src={v.image} alt={v.name} className="v-technical-sheet" />
                    <div className="v-overlay">
                      {/* Al hacer clic, pasamos la imagen al estado */}
                      <button className="v-btn-zoom" onClick={() => openModal(v.image)}>
                        Ver Ficha Completa
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL PARA IMAGEN AGRANDADA */}
      {modalImage && (
        <div className="v-lightbox-overlay" onClick={closeModal}>
          <button className="v-close-button" onClick={closeModal}>&times;</button>
          <div className="v-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Ficha técnica ampliada" />
          </div>
        </div>
      )}

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

export default Vehiculos;