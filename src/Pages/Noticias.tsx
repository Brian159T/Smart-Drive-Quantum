import React, { useState } from 'react';
import './Noticias.css';
import { Helmet } from 'react-helmet-async';
import Footer from '../Components/Footer/Footer';

interface Noticia {
  id: number;
  categoria: string;
  titulo: string;
  resumen: string;
  fecha: string;
  lectura: string;
  autor: string;
  tag?: string;
  imagen?: string;
}

const NOTICIAS: Noticia[] = [
  {
    id: 1,
    categoria: 'Catalogo',
    titulo: 'Smart Drive incorpora 50 motos electricas de ultima generacion a su flota metropolitana',
    resumen: 'La expansion posiciona a la empresa como el operador de movilidad electrica mas grande del pais, con cobertura en las principales rutas de reparto y transporte.',
    fecha: '8 Mayo 2025',
    lectura: '4 min',
    autor: 'Redaccion SD',
    tag: 'EXCLUSIVA',
    imagen: '',
  },
  {
    id: 2,
    categoria: 'Tecnologia',
    titulo: 'Plataforma de monitoreo en tiempo real transforma la experiencia del conductor afiliado',
    resumen: 'La nueva app permite visualizar bateria, mantenimiento y rendimiento desde el movil, reduciendo tiempos muertos en un 38%.',
    fecha: '2 Mayo 2025',
    lectura: '3 min',
    autor: 'Tech Desk',
    imagen: '',
  },
  {
    id: 3,
    categoria: 'Rent to Own',
    titulo: '120 familias ya son propietarias gracias al programa Rent to Own de Smart Drive',
    resumen: 'El programa cumple su segundo aniversario con resultados que superan las proyecciones iniciales y un indice de satisfaccion del 94%.',
    fecha: '28 Abr 2025',
    lectura: '5 min',
    autor: 'Reportaje especial',
    tag: 'REPORTAJE',
    imagen: '',
  },
  {
    id: 4,
    categoria: 'Estaciones',
    titulo: 'Dos nuevas estaciones de carga abren en Santa Ana y Sonsonate',
    resumen: 'La red nacional suma 14 puntos activos, cubriendo las rutas de mayor demanda fuera del area metropolitana.',
    fecha: '20 Abr 2025',
    lectura: '2 min',
    autor: 'Operaciones',
    imagen: '',
  },
  {
    id: 5,
    categoria: 'Alianzas',
    titulo: 'Acuerdo estrategico con plataformas de delivery garantiza condiciones preferenciales',
    resumen: 'El convenio asegura tarifas diferenciadas y prioridad de asignacion para los mas de 800 conductores activos de la flota.',
    fecha: '14 Abr 2025',
    lectura: '3 min',
    autor: 'Redaccion SD',
    imagen: '',
  },
  {
    id: 6,
    categoria: 'Sostenibilidad',
    titulo: 'La flota evito 340 toneladas de CO2 en el primer trimestre de 2025',
    resumen: 'El informe trimestral confirma que la transicion a movilidad electrica genera beneficios medibles y sostenidos para la ciudad.',
    fecha: '5 Abr 2025',
    lectura: '6 min',
    autor: 'Sostenibilidad SD',
    tag: 'INFORME',
    imagen: '',
  },
];

const CATEGORIAS = ['Todas', 'Catalogo', 'Tecnologia', 'Rent to Own', 'Estaciones', 'Alianzas', 'Sostenibilidad'];

const CAT_CLASS: Record<string, string> = {
  Catalogo:       'cat--flota',
  Tecnologia:     'cat--tech',
  'Rent to Own':  'cat--rto',
  Estaciones:     'cat--est',
  Alianzas:       'cat--ali',
  Sostenibilidad: 'cat--eco',
};

const IMG_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"%3E%3Crect width="800" height="400" fill="%23111"%2F%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23333" font-size="18" font-family="sans-serif"%3ESin imagen%3C%2Ftext%3E%3C%2Fsvg%3E';

const Noticias: React.FC = () => {
  const [filtro, setFiltro] = useState('Todas');

  const principal   = NOTICIAS[0];
  const secundarias = NOTICIAS.slice(1, 3);
  const sinFiltro   = filtro === 'Todas';
  const gridItems   = sinFiltro
    ? NOTICIAS.slice(3)
    : NOTICIAS.filter(n => n.categoria === filtro);

  return (
    <>
      <Helmet>
        <title>Noticias | Smart Drive</title>
        <meta name="description" content="Ultimas noticias de Smart Drive: catalogo electrico, Rent to Own, tecnologia y mas." />
      </Helmet>

      <div className="mag-wrapper">

        {/* MASTHEAD */}
        <header className="mag-masthead">
          <div className="mag-container">
            <div className="mag-edition-bar">
              <span className="mag-edition-line" />
              <span className="mag-edition-text">Smart Drive · Mayo 2026</span>
              <span className="mag-edition-line" />
            </div>
            <h1 className="mag-brand">
              Centro de <em>Noticias</em>
            </h1>
            <p className="mag-tagline">
              Innovacion · Catalogo electrico · Movilidad urbana
            </p>
          </div>

          <nav className="mag-nav-strip">
            <div className="mag-container mag-nav-inner">
              {CATEGORIAS.map(cat => (
                <button
                  key={cat}
                  className={`mag-nav-btn ${filtro === cat ? 'active' : ''}`}
                  onClick={() => setFiltro(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </nav>
        </header>

        {/* PORTADA (solo sin filtro) */}
        {sinFiltro && (
          <section className="mag-portada">
            <div className="mag-container">
              <div className="mag-portada-grid">

                {/* NOTA PRINCIPAL */}
                <article className="mag-hero-story">
                  <div className="mag-hero-img-wrap">
                    <img
                      src={principal.imagen || IMG_PLACEHOLDER}
                      alt={principal.titulo}
                      className="mag-hero-img"
                    />
                  </div>
                  <div className="mag-hero-accent" />
                  <div className="mag-hero-body">
                    <div className="mag-hero-tags">
                      <span className={`mag-cat ${CAT_CLASS[principal.categoria]}`}>
                        {principal.categoria}
                      </span>
                      {principal.tag && <span className="mag-badge">{principal.tag}</span>}
                    </div>
                    <h2 className="mag-hero-title">{principal.titulo}</h2>
                    <p className="mag-hero-resumen">{principal.resumen}</p>
                    <div className="mag-byline">
                      <span>{principal.autor}</span>
                      <span className="mag-dot" />
                      <span>{principal.fecha}</span>
                      <span className="mag-dot" />
                      <span>{principal.lectura} de lectura</span>
                    </div>
                   
                  </div>
                  <div className="mag-hero-number">01</div>
                </article>

                {/* HISTORIAS LATERALES */}
                <aside className="mag-aside">
                  <div className="mag-aside-label">Tambien hoy</div>
                  {secundarias.map((n, i) => (
                    <article className="mag-aside-card" key={n.id}>
                      <div className="mag-aside-img-wrap">
                        <img
                          src={n.imagen || IMG_PLACEHOLDER}
                          alt={n.titulo}
                          className="mag-aside-img"
                        />
                      </div>
                      <span className="mag-aside-num">0{i + 2}</span>
                      <div className="mag-aside-body">
                        <div className="mag-aside-tags">
                          <span className={`mag-cat mag-cat--xs ${CAT_CLASS[n.categoria]}`}>
                            {n.categoria}
                          </span>
                          {n.tag && <span className="mag-badge mag-badge--xs">{n.tag}</span>}
                        </div>
                        <h3 className="mag-aside-title">{n.titulo}</h3>
                        <div className="mag-byline mag-byline--sm">
                          <span>{n.fecha}</span>
                          <span className="mag-dot" />
                          <span>{n.lectura}</span>
                        </div>
                        
                      </div>
                    </article>
                  ))}
                </aside>

              </div>
            </div>
          </section>
        )}

        {/* DIVISOR */}
        <div className="mag-rule">
          <div className="mag-container">
            <div className="mag-rule-inner">
              <div className="mag-rule-line" />
              <span className="mag-rule-label">
                {sinFiltro ? 'Mas noticias' : filtro}
              </span>
              <div className="mag-rule-line" />
            </div>
          </div>
        </div>

        {/* GRID */}
        <section className="mag-grid-section">
          <div className="mag-container">
            {gridItems.length === 0 ? (
              <p className="mag-empty">No hay noticias en esta categoria todavia.</p>

            ) : !sinFiltro ? (
              <>
                {/* ── HERO DE CATEGORIA: imagen derecha a full altura ── */}
                <article className="mag-filter-hero">
                  {/* Panel izquierdo: texto */}
                  <div className="mag-filter-hero-body">
                    <div className="mag-filter-hero-accent" />
                    <div className="mag-filter-hero-content">
                      <div className="mag-hero-tags">
                        <span className={`mag-cat ${CAT_CLASS[gridItems[0].categoria]}`}>
                          {gridItems[0].categoria}
                        </span>
                        {gridItems[0].tag && (
                          <span className="mag-badge">{gridItems[0].tag}</span>
                        )}
                      </div>
                      <h2 className="mag-hero-title">{gridItems[0].titulo}</h2>
                      <p className="mag-hero-resumen">{gridItems[0].resumen}</p>
                      <div className="mag-byline">
                        <span>{gridItems[0].autor}</span>
                        <span className="mag-dot" />
                        <span>{gridItems[0].fecha}</span>
                        <span className="mag-dot" />
                        <span>{gridItems[0].lectura} de lectura</span>
                      </div>
                     
                    </div>
                  </div>

                  {/* Panel derecho: imagen a full */}
                  <div className="mag-filter-hero-img-wrap">
                    <img
                      src={gridItems[0].imagen || IMG_PLACEHOLDER}
                      alt={gridItems[0].titulo}
                      className="mag-filter-hero-img"
                    />
                  </div>
                </article>

                {/* Resto de noticias de la categoria en grid */}
                {gridItems.length > 1 && (
                  <div className="mag-grid mag-grid--filtered">
                    {gridItems.slice(1).map((n, i) => (
                      <article
                        className="mag-card"
                        key={n.id}
                        style={{ animationDelay: `${i * 0.07}s` }}
                      >
                        <div className="mag-card-img-wrap">
                          <img
                            src={n.imagen || IMG_PLACEHOLDER}
                            alt={n.titulo}
                            className="mag-card-img"
                          />
                        </div>
                        <div className="mag-card-header">
                          <span className={`mag-cat ${CAT_CLASS[n.categoria]}`}>
                            {n.categoria}
                          </span>
                          {n.tag && <span className="mag-badge mag-badge--xs">{n.tag}</span>}
                          <span className="mag-card-index">{String(n.id).padStart(2, '0')}</span>
                        </div>
                        <h3 className="mag-card-title">{n.titulo}</h3>
                        <p className="mag-card-resumen">{n.resumen}</p>
                        <div className="mag-card-foot">
                          <span className="mag-card-autor">{n.autor}</span>
                          <span className="mag-dot" />
                          <span className="mag-card-fecha">{n.fecha}</span>
                          
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </>

            ) : (
              /* ── VISTA "TODAS": grid normal ── */
              <div className="mag-grid">
                {gridItems.map((n, i) => (
                  <article
                    className="mag-card"
                    key={n.id}
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    <div className="mag-card-img-wrap">
                      <img
                        src={n.imagen || IMG_PLACEHOLDER}
                        alt={n.titulo}
                        className="mag-card-img"
                      />
                    </div>
                    <div className="mag-card-header">
                      <span className={`mag-cat ${CAT_CLASS[n.categoria]}`}>
                        {n.categoria}
                      </span>
                      {n.tag && <span className="mag-badge mag-badge--xs">{n.tag}</span>}
                      <span className="mag-card-index">{String(n.id).padStart(2, '0')}</span>
                    </div>
                    <h3 className="mag-card-title">{n.titulo}</h3>
                    <p className="mag-card-resumen">{n.resumen}</p>
                    <div className="mag-card-foot">
                      <span className="mag-card-autor">{n.autor}</span>
                      <span className="mag-dot" />
                      <span className="mag-card-fecha">{n.fecha}</span>
                      
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Noticias;