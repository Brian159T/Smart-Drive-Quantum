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
}

const NOTICIAS: Noticia[] = [
  {
    id: 1,
    categoria: 'Flota',
    titulo: 'Smart Drive incorpora 50 motos eléctricas de última generación a su flota metropolitana',
    resumen: 'La expansión posiciona a la empresa como el operador de movilidad eléctrica más grande del país, con cobertura en las principales rutas de reparto y transporte.',
    fecha: '8 Mayo 2025',
    lectura: '4 min',
    autor: 'Redacción SD',
    tag: 'EXCLUSIVA',
  },
  {
    id: 2,
    categoria: 'Tecnología',
    titulo: 'Plataforma de monitoreo en tiempo real transforma la experiencia del conductor afiliado',
    resumen: 'La nueva app permite visualizar batería, mantenimiento y rendimiento desde el móvil, reduciendo tiempos muertos en un 38%.',
    fecha: '2 Mayo 2025',
    lectura: '3 min',
    autor: 'Tech Desk',
  },
  {
    id: 3,
    categoria: 'Rent to Own',
    titulo: '120 familias ya son propietarias gracias al programa Rent to Own de Smart Drive',
    resumen: 'El programa cumple su segundo aniversario con resultados que superan las proyecciones iniciales y un índice de satisfacción del 94%.',
    fecha: '28 Abr 2025',
    lectura: '5 min',
    autor: 'Reportaje especial',
    tag: 'REPORTAJE',
  },
  {
    id: 4,
    categoria: 'Estaciones',
    titulo: 'Dos nuevas estaciones de carga abren en Santa Ana y Sonsonate',
    resumen: 'La red nacional suma 14 puntos activos, cubriendo las rutas de mayor demanda fuera del área metropolitana.',
    fecha: '20 Abr 2025',
    lectura: '2 min',
    autor: 'Operaciones',
  },
  {
    id: 5,
    categoria: 'Alianzas',
    titulo: 'Acuerdo estratégico con plataformas de delivery garantiza condiciones preferenciales',
    resumen: 'El convenio asegura tarifas diferenciadas y prioridad de asignación para los más de 800 conductores activos de la flota.',
    fecha: '14 Abr 2025',
    lectura: '3 min',
    autor: 'Redacción SD',
  },
  {
    id: 6,
    categoria: 'Sostenibilidad',
    titulo: 'La flota evitó 340 toneladas de CO₂ en el primer trimestre de 2025',
    resumen: 'El informe trimestral confirma que la transición a movilidad eléctrica genera beneficios medibles y sostenidos para la ciudad.',
    fecha: '5 Abr 2025',
    lectura: '6 min',
    autor: 'Sostenibilidad SD',
    tag: 'INFORME',
  },
];

const CATEGORIAS = ['Todas', 'Flota', 'Tecnología', 'Rent to Own', 'Estaciones', 'Alianzas', 'Sostenibilidad'];

const CAT_CLASS: Record<string, string> = {
  Flota:          'cat--flota',
  Tecnología:     'cat--tech',
  'Rent to Own':  'cat--rto',
  Estaciones:     'cat--est',
  Alianzas:       'cat--ali',
  Sostenibilidad: 'cat--eco',
};

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
        <meta name="description" content="Últimas noticias de Smart Drive: flota eléctrica, Rent to Own, tecnología y más." />
      </Helmet>

      <div className="mag-wrapper">

        {/* ── MASTHEAD ── */}
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
              Innovación · Flota eléctrica · Movilidad urbana
            </p>
          </div>

          {/* nav strip */}
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

        {/* ── PORTADA (solo sin filtro) ── */}
        {sinFiltro && (
          <section className="mag-portada">
            <div className="mag-container">
              <div className="mag-portada-grid">

                {/* NOTA PRINCIPAL */}
                <article className="mag-hero-story">
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
                    <a href="#" className="mag-hero-btn">
                      Leer nota completa <span>→</span>
                    </a>
                  </div>
                  <div className="mag-hero-number">01</div>
                </article>

                {/* HISTORIAS LATERALES */}
                <aside className="mag-aside">
                  <div className="mag-aside-label">También hoy</div>
                  {secundarias.map((n, i) => (
                    <article className="mag-aside-card" key={n.id}>
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
                        <a href="#" className="mag-aside-link">Leer →</a>
                      </div>
                    </article>
                  ))}
                </aside>

              </div>
            </div>
          </section>
        )}

        {/* ── DIVISOR ── */}
        <div className="mag-rule">
          <div className="mag-container">
            <div className="mag-rule-inner">
              <div className="mag-rule-line" />
              <span className="mag-rule-label">
                {sinFiltro ? 'Más noticias' : filtro}
              </span>
              <div className="mag-rule-line" />
            </div>
          </div>
        </div>

        {/* ── GRID ── */}
        <section className="mag-grid-section">
          <div className="mag-container">
            {gridItems.length === 0 ? (
              <p className="mag-empty">No hay noticias en esta categoría todavía.</p>
            ) : (
              <div className="mag-grid">
                {gridItems.map((n, i) => (
                  <article
                    className="mag-card"
                    key={n.id}
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
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
                      <a href="#" className="mag-card-leer">Leer →</a>
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