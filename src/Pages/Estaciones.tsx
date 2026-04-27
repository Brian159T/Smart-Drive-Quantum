import { useState } from 'react';
import Footer from '../Components/Footer/Footer';
import './Estaciones.css';
import { Helmet } from 'react-helmet-async';
import { MdBolt, MdAccessTime, MdSpeed } from 'react-icons/md';
import { FaWhatsapp, FaChargingStation, FaMapMarkerAlt } from 'react-icons/fa';

/* ─────────────────────────────────────────────────────────
   PUNTOS DE CARGA
   Reemplaza lat/lng con las coordenadas reales cuando las tengas
───────────────────────────────────────────────────────── */
const PUNTOS = [
  {
    id: 1,
    nombre: 'Estación Centro Histórico',
    direccion: 'San Salvador, Centro Histórico',
    lat: 13.6929,
    lng: -89.2182,
    tipo: 'Carga Rápida DC',
    potencia: '50 kW',
    conectores: 4,
    horario: '24/7',
    disponible: true,
  },
  {
    id: 2,
    nombre: 'Estación Santa Tecla',
    direccion: 'Santa Tecla, La Libertad',
    lat: 13.6765,
    lng: -89.2801,
    tipo: 'Carga Estándar AC',
    potencia: '22 kW',
    conectores: 2,
    horario: '06:00 – 22:00',
    disponible: true,
  },
  {
    id: 3,
    nombre: 'Estación Soyapango',
    direccion: 'Soyapango, San Salvador',
    lat: 13.7101,
    lng: -89.1519,
    tipo: 'Carga Rápida DC',
    potencia: '50 kW',
    conectores: 3,
    horario: '24/7',
    disponible: true,
  },
  {
    id: 4,
    nombre: 'Estación San Marcos',
    direccion: 'San Marcos, San Salvador',
    lat: 13.6598,
    lng: -89.1927,
    tipo: 'Carga Estándar AC',
    potencia: '22 kW',
    conectores: 2,
    horario: '07:00 – 21:00',
    disponible: false,
  },
  {
    id: 5,
    nombre: 'Estación Antiguo Cuscatlán',
    direccion: 'Antiguo Cuscatlán, La Libertad',
    lat: 13.6720,
    lng: -89.2480,
    tipo: 'Carga Ultra-Rápida DC',
    potencia: '75 kW',
    conectores: 6,
    horario: '24/7',
    disponible: true,
  },
];

const Estaciones = () => {
  const [puntoActivo, setPuntoActivo] = useState<number>(1);

  const activo = PUNTOS.find((p) => p.id === puntoActivo) ?? PUNTOS[0];

  return (
    <>
      <Helmet>
        <title>Estaciones de Carga | Smart Drive</title>
        <meta
          name="description"
          content="Encuentra los puntos de carga eléctrica Smart Drive más cercanos en El Salvador."
        />
      </Helmet>

      <div className="estaciones-page">

        {/* ── HERO ── */}
        <section className="est-hero">
          <div className="est-hero-grid" />
          <div className="est-hero-blob est-blob-1" />
          <div className="est-hero-blob est-blob-2" />
          <div className="est-hero-inner">
            <span className="est-kicker">
              <MdBolt /> Red de Carga Eléctrica
            </span>
            <h1 className="est-hero-title">
              CARGA DONDE<br />
              <span className="est-hero-accent">ESTÉS</span>
            </h1>
            <p className="est-hero-sub">
              Nuestra red de estaciones cubre los puntos estratégicos de
              El Salvador para que nunca te quedes sin energía.
            </p>
          </div>

          <div className="est-stat-strip">
            {[
              { icon: <FaChargingStation />, val: '5',    label: 'Estaciones activas' },
              { icon: <MdBolt />,            val: '17',   label: 'Conectores disponibles' },
              { icon: <MdSpeed />,           val: '75kW', label: 'Potencia máxima' },
              { icon: <MdAccessTime />,      val: '24/7', label: 'Estaciones sin horario' },
            ].map((s, i) => (
              <div className="est-stat" key={i}>
                <span className="est-stat-icon">{s.icon}</span>
                <span className="est-stat-val">{s.val}</span>
                <span className="est-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── MAPA + PANEL ── */}
        <section className="est-mapa-section">

          <aside className="est-panel">
            <div className="est-panel-header">
              <h3>PUNTOS DE CARGA</h3>
              <span className="est-contador">{PUNTOS.length} ubicaciones</span>
            </div>

            <ul className="est-lista">
              {PUNTOS.map((p) => (
                <li
                  key={p.id}
                  className={`est-item ${puntoActivo === p.id ? 'activo' : ''}`}
                  onClick={() => setPuntoActivo(p.id)}
                >
                  <div className="est-item-dot" data-disponible={String(p.disponible)} />
                  <div className="est-item-info">
                    <span className="est-item-nombre">{p.nombre}</span>
                    <span className="est-item-dir">
                      <FaMapMarkerAlt size={10} /> {p.direccion}
                    </span>
                    <div className="est-item-tags">
                      <span className="est-tag">{p.potencia}</span>
                      <span className="est-tag">{p.conectores} conectores</span>
                      <span className="est-tag" data-estado={p.disponible ? 'on' : 'off'}>
                        {p.disponible ? 'Disponible' : 'No disponible'}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="est-detalle">
              <div className="est-detalle-header">
                <MdBolt className="est-detalle-icon" />
                <div>
                  <h4>{activo.nombre}</h4>
                  <span>{activo.direccion}</span>
                </div>
              </div>
              <div className="est-detalle-grid">
                <div className="est-detalle-item">
                  <span className="est-dl">Tipo</span>
                  <span className="est-dv">{activo.tipo}</span>
                </div>
                <div className="est-detalle-item">
                  <span className="est-dl">Potencia</span>
                  <span className="est-dv">{activo.potencia}</span>
                </div>
                <div className="est-detalle-item">
                  <span className="est-dl">Conectores</span>
                  <span className="est-dv">{activo.conectores}</span>
                </div>
                <div className="est-detalle-item">
                  <span className="est-dl">Horario</span>
                  <span className="est-dv">{activo.horario}</span>
                </div>
              </div>
              <div className="est-estado-badge" data-disponible={String(activo.disponible)}>
                {activo.disponible ? '● Operativa' : '● Sin servicio'}
              </div>
            </div>
          </aside>

          {/* MAPA — iframe sin API key, cambia automáticamente al seleccionar punto */}
          <div className="est-mapa-wrapper">
            <iframe
              key={activo.id}
              title={activo.nombre}
              src={`https://www.google.com/maps?q=${activo.lat},${activo.lng}&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="est-mapa"
            />
          </div>

        </section>

        {/* ── LEYENDA ── */}
        <section className="est-leyenda-section">
          <div className="est-leyenda-inner">
            {[
              { color: '#00ff88', label: 'Carga Rápida DC — 50 kW+' },
              { color: '#38adb1', label: 'Carga Estándar AC — 22 kW' },
              { color: '#444e5a', label: 'Sin servicio temporalmente' },
            ].map((l, i) => (
              <div className="est-leyenda-item" key={i}>
                <span className="est-leyenda-dot" style={{ background: l.color }} />
                <span>{l.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="est-cta">
          <div className="est-cta-inner">
            <FaChargingStation size={44} color="#00ff88" />
            <h2>¿QUIERES UNA ESTACIÓN CERCA DE TI?</h2>
            <p>Estamos expandiendo nuestra red. Escríbenos y evaluamos tu zona.</p>
            <a
              href="https://wa.me/50361766862"
              target="_blank"
              rel="noopener noreferrer"
              className="est-btn"
            >
              CONTÁCTANOS <FaWhatsapp size={20} />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Estaciones;