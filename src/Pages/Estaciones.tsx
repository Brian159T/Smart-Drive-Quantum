import { useState } from 'react';
import Footer from '../Components/Footer/Footer';
import './Estaciones.css';
import { Helmet } from 'react-helmet-async';
import { MdBolt, MdAccessTime, } from 'react-icons/md';
import { FaWhatsapp, FaChargingStation, FaMapMarkerAlt } from 'react-icons/fa';

const PUNTOS = [
  {
    id: 1,
    nombre: 'Estacion Centro Historico',
    direccion: 'San Salvador, Centro Historico',
    lat: 13.7040,
    lng: -89.2015,
    
    
    conectores: 4,
    horario: '24/7',
    disponible: true,
  },
  {
    id: 2,
    nombre: 'Estacion Santa Tecla Norte',
    direccion: 'Santa Tecla, La Libertad',
    lat: 13.7014,
    lng: -89.2284,
    // tipo: 'Carga Estandar AC',
    
    conectores: 2,
    horario: '06:00 - 22:00',
    disponible: true,
  },
  {
    id: 3,
    nombre: 'Estacion Santa Tecla Oeste',
    direccion: 'Santa Tecla, La Libertad',
    lat: 13.7096,
    lng: -89.2412,
    // tipo: 'Carga Rapida DC',
    
    conectores: 3,
    horario: '24/7',
    disponible: true,
  },
  {
    id: 4,
    nombre: 'Estacion Nuevo Cuscatlan',
    direccion: 'Nuevo Cuscatlan, La Libertad',
    lat: 13.6918,
    lng: -89.2376,
    // tipo: 'Carga Estandar AC',
    // potencia: '22 kW',
    
    horario: '07:00 - 21:00',
    disponible: true,
  },
  {
    id: 5,
    nombre: 'Estacion Antiguo Cuscatlan Norte',
    direccion: 'Antiguo Cuscatlan, La Libertad',
    lat: 13.6764,
    lng: -89.2457,
    // tipo: 'Carga Ultra-Rapida DC',
    
    conectores: 6,
    horario: '24/7',
    disponible: true,
  },
  {
    id: 6,
    nombre: 'Estacion Antiguo Cuscatlan Sur',
    direccion: 'Antiguo Cuscatlan, La Libertad',
    lat: 13.6760,
    lng: -89.2446,
    // tipo: 'Carga Rapida DC',
    
    conectores: 4,
    horario: '24/7',
    disponible: true,
  },
  {
    id: 7,
    nombre: 'Estacion Merliot',
    direccion: 'Ciudad Merliot, La Libertad',
    lat: 13.6771,
    lng: -89.2559,
    // tipo: 'Carga Estandar AC',
    
    conectores: 2,
    horario: '06:00 - 22:00',
    disponible: true,
  },
  {
    id: 8,
    nombre: 'Estacion Lourdes',
    direccion: 'Lourdes, La Libertad',
    lat: 13.6670,
    lng: -89.2706,
    // tipo: 'Carga Rapida DC',
    
    conectores: 3,
    horario: '24/7',
    disponible: true,
  },
  {
    id: 9,
    nombre: 'Estacion Colon Norte',
    direccion: 'Colon, La Libertad',
    lat: 13.6782,
    lng: -89.2968,
    // tipo: 'Carga Estandar AC',
    
    conectores: 2,
    horario: '07:00 - 21:00',
    disponible: true,
  },
  {
    id: 10,
    nombre: 'Estacion Colon Sur',
    direccion: 'Colon, La Libertad',
    lat: 13.6773,
    lng: -89.2974,
    // tipo: 'Carga Rapida DC',
    
    conectores: 4,
    horario: '24/7',
    disponible: true,
  },
  {
    id: 11,
    nombre: 'Estacion Zaragoza',
    direccion: 'Zaragoza, La Libertad',
    lat: 13.6540,
    lng: -89.2811,
    // tipo: 'Carga Ultra-Rapida DC',
    
    conectores: 6,
    horario: '24/7',
    disponible: true,
  },
];

const Estaciones = () => {
  const [puntoActivo, setPuntoActivo] = useState<number>(1);

  const activo = PUNTOS.find((p) => p.id === puntoActivo) ?? PUNTOS[0];

  
  const estaciones247 = PUNTOS.filter((p) => p.horario === '24/7').length;

  return (
    <>
      <Helmet>
        <title>Estaciones de Carga | Smart Drive</title>
        <meta
          name="description"
          content="Encuentra los puntos de carga electrica Smart Drive mas cercanos en El Salvador."
        />
      </Helmet>

      <div className="estaciones-page">

        <section className="est-hero">
          <div className="est-hero-grid" />
          <div className="est-hero-blob est-blob-1" />
          <div className="est-hero-blob est-blob-2" />
          <div className="est-hero-inner">
            <span className="est-kicker">
              <MdBolt /> Red de Carga Electrica
            </span>
            <h1 className="est-hero-title">
              CARGA DONDE<br />
              <span className="est-hero-accent">ESTES</span>
            </h1>
            <p className="est-hero-sub">
              Nuestra red de estaciones cubre los puntos estrategicos de
              El Salvador para que nunca te quedes sin energia.
            </p>
          </div>

          <div className="est-stat-strip">
            {[
              { icon: <FaChargingStation />, val: String(PUNTOS.length),   label: 'Estaciones activas'     },
             
                    
              { icon: <MdAccessTime />,      val: String(estaciones247),   label: 'Estaciones 24/7'        },
            ].map((s, i) => (
              <div className="est-stat" key={i}>
                <span className="est-stat-icon">{s.icon}</span>
                <span className="est-stat-val">{s.val}</span>
                <span className="est-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

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
                  {/* <span className="est-dl">Tipo</span> */}
                  
                </div>
                
                <div className="est-detalle-item">
                  
                  {/* <span className="est-dv">{activo.conectores}</span> */}
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

        <section className="est-leyenda-section">
          <div className="est-leyenda-inner">
            {[
              
              
              { color: '', label: '' },
            ].map((l, i) => (
              <div className="est-leyenda-item" key={i}>
                <span className="est-leyenda-dot" style={{ background: l.color }} />
                <span>{l.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="est-cta">
          <div className="est-cta-inner">
            <FaChargingStation size={44} color="#00ff88" />
            <h2>QUIERES UNA ESTACION CERCA DE TI?</h2>
            <p>Estamos expandiendo nuestra red. Escribenos y evaluamos tu zona.</p>
            <a
              href="https://wa.me/50361766862"
              target="_blank"
              rel="noopener noreferrer"
              className="est-btn"
            >
              CONTACTANOS <FaWhatsapp size={20} />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Estaciones;