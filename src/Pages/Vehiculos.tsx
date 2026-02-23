import React, { useState } from 'react';
import './Vehiculos.css';

import imgMate from '../assets/Fchas tecnicas c/mate.png';
import imgMVP from '../assets/Fchas tecnicas c/baw.png';
import imgNexus from '../assets/Fchas tecnicas c/nexus.png';
import imgTrooper from '../assets/Fchas tecnicas c/Trooper.png';
import imgUrban from '../assets/Fchas tecnicas c/Urban.png';

const VEHICULOS_DATA = [
  { id: 2, name: 'Quantum Trooper', category: 'Motocicleta', image: imgTrooper },
  { id: 5, name: 'Quantum Urban', category: 'Solución Urbana', image: imgUrban },
  { id: 1, name: 'Quantum Nexus Plus', category: 'Automóvil', image: imgNexus },
  { id: 4, name: 'Quantum Mate', category: 'Solución Urbana', image: imgMate },
  { id: 3, name: 'Quantum MPV EV', category: 'Van Industrial', image: imgMVP },
];

const Vehiculos: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (img: string) => {
    setModalImage(img);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="vehiculos-page">

      <section className="vehiculos-hero">
        <div className="v-container">
          <span className="v-kicker">Nuestra Flota Eléctrica</span>
          <h1>
            Movilidad de <span className="v-highlight">Nueva Generación</span>
          </h1>
        </div>
      </section>

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
                    <img
                      src={v.image}
                      alt={v.name}
                      className="v-technical-sheet"
                    />

                    <div className="v-overlay">
                      <button
                        className="v-btn-zoom"
                        onClick={() => openModal(v.image)}
                      >
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

      {modalImage && (
        <div className="v-lightbox-overlay" onClick={closeModal}>
          <button className="v-close-button" onClick={closeModal}>
            &times;
          </button>
          <div
            className="v-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={modalImage} alt="Ficha técnica ampliada" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Vehiculos;