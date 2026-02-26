import React, { useState } from 'react';
import './Vehiculos.css';

import imgMateDesktop from '../assets/Fchas tecnicas c/mate.png';
import imgMVPDesktop from '../assets/Fchas tecnicas c/baw.png';
import imgNexusDesktop from '../assets/Fchas tecnicas c/nexus.png';
import imgTrooperDesktop from '../assets/Fchas tecnicas c/Trooper.png';
import imgUrbanDesktop from '../assets/Fchas tecnicas c/Urban.png';

import imgMateMobile from '../assets/Fichas tecnicas/Mate.png';
import imgMVPMobile from '../assets/Fichas tecnicas/Baw.png';
import imgNexusMobile from '../assets/Fichas tecnicas/Nexus.png';
import imgTrooperMobile from '../assets/Fichas tecnicas/Trooper.png';
import imgUrbanMobile from '../assets/Fichas tecnicas/Urban.png';

const VEHICULOS_DATA = [
  {
    id: 2,
    name: 'Quantum Trooper',
    category: 'Motocicleta',
    imageDesktop: imgTrooperDesktop,
    imageMobile: imgTrooperMobile,
  },
  {
    id: 5,
    name: 'Quantum Urban',
    category: 'Solución Urbana',
    imageDesktop: imgUrbanDesktop,
    imageMobile: imgUrbanMobile,
  },
  {
    id: 1,
    name: 'Quantum Nexus Plus',
    category: 'Automóvil',
    imageDesktop: imgNexusDesktop,
    imageMobile: imgNexusMobile,
  },
  {
    id: 4,
    name: 'Quantum Mate',
    category: 'Solución Urbana',
    imageDesktop: imgMateDesktop,
    imageMobile: imgMateMobile,
  },
  {
    id: 3,
    name: 'Quantum MPV EV',
    category: 'Van Industrial',
    imageDesktop: imgMVPDesktop,
    imageMobile: imgMVPMobile,
  },
];

const Vehiculos: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (desktopImg: string, mobileImg: string) => {
    const isMobile = window.innerWidth <= 768;
    setModalImage(isMobile ? mobileImg : desktopImg);
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

                    <picture>
                      <source
                        media="(max-width: 768px)"
                        srcSet={v.imageMobile}
                      />
                      <img
                        src={v.imageDesktop}
                        alt={v.name}
                        className="v-technical-sheet"
                        loading="lazy"
                      />
                    </picture>

                    <div className="v-overlay">
                      <button
                        className="v-btn-zoom"
                        onClick={() => openModal(v.imageDesktop, v.imageMobile)}
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