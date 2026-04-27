import { useState } from 'react';
import Footer from '../Components/Footer/Footer';
import './Inversiones.css';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp, FaChartLine, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import { MdElectricCar, MdTrendingUp, MdVerified } from 'react-icons/md';

/* ── Placeholder de imágenes ── */
// Reemplaza estas rutas cuando tengas las imágenes reales
// import imgInversion1 from '../assets/Inversiones/imagen1.jpg';
// import imgInversion2 from '../assets/Inversiones/imagen2.jpg';
// import imgInversion3 from '../assets/Inversiones/imagen3.jpg';

const PLANES = [
  {
    id: 'semilla',
    badge: 'Entrada',
    nombre: 'PLAN SEMILLA',
    monto: '$5,000',
    retorno: '18%',
    periodo: 'anual',
    descripcion: 'Ideal para el primer inversor que quiere sumarse al ecosistema de movilidad eléctrica con bajo riesgo y retorno garantizado.',
    beneficios: [
      'Retorno fijo del 18% anual',
      'Participación en 1 vehículo',
      'Reportes mensuales',
      'Contrato notarial',
    ],
    color: '#38adb1',
    glow: 'rgba(56,173,177,0.25)',
  },
  {
    id: 'crecimiento',
    badge: 'Más popular',
    nombre: 'PLAN CRECIMIENTO',
    monto: '$15,000',
    retorno: '24%',
    periodo: 'anual',
    descripcion: 'Para inversores que buscan escalar su capital aprovechando el crecimiento acelerado de la flota Smart Drive.',
    beneficios: [
      'Retorno fijo del 24% anual',
      'Participación en 3 vehículos',
      'Dashboard en tiempo real',
      'Contrato notarial',
      'Asesor dedicado',
    ],
    color: '#00ff88',
    glow: 'rgba(0,255,136,0.25)',
    destacado: true,
  },
  {
    id: 'premium',
    badge: 'Máximo retorno',
    nombre: 'PLAN QUANTUM',
    monto: '$50,000',
    retorno: '32%',
    periodo: 'anual',
    descripcion: 'Para inversores de alto impacto que desean co-liderar la expansión regional del ecosistema Quantum-SmartDrive.',
    beneficios: [
      'Retorno fijo del 32% anual',
      'Participación en 10+ vehículos',
      'Dashboard en tiempo real',
      'Contrato notarial',
      'Asesor dedicado',
      'Acceso a junta de socios',
    ],
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.25)',
  },
];

const STATS = [
  { valor: '80%', etiqueta: 'Reducción en costos de combustible', icono: <FaLeaf /> },
  { valor: '3x', etiqueta: 'Crecimiento de flota proyectado 2025–2026', icono: <MdTrendingUp /> },
  { valor: '100%', etiqueta: 'Contratos notariales respaldados', icono: <FaShieldAlt /> },
  { valor: '$0', etiqueta: 'Deuda bancaria. Modelo autofinanciado', icono: <MdVerified /> },
];

const Inversiones = () => {
  const [planActivo, setPlanActivo] = useState<string>('crecimiento');

  return (
    <>
      <Helmet>
        <title>Inversiones | Smart Drive</title>
        <meta name="description" content="Invierte en la flota de vehículos eléctricos Smart Drive y obtén retornos garantizados mientras transformas la movilidad urbana." />
      </Helmet>

      <div className="inversiones-page">

        {/* ── HERO ── */}
        <section className="inv-hero">
          <div className="inv-hero-noise" />
          <div className="inv-hero-grid-lines" />
          <div className="inv-hero-content">
            <span className="inv-kicker">
              <MdElectricCar size={16} /> Oportunidad de Inversión
            </span>
            <h1 className="inv-hero-title">
              TU CAPITAL,<br />
              <span className="inv-hero-accent">EN MOVIMIENTO</span>
            </h1>
            <p className="inv-hero-sub">
              Invierte en la flota eléctrica más rentable de Latinoamérica.<br />
              Retornos garantizados. Contratos notariales. Impacto real.
            </p>
            <div className="inv-hero-ctas">
              <a href="https://wa.me/50361766862" target="_blank" rel="noopener noreferrer" className="inv-btn-primary">
                QUIERO INVERTIR <FaWhatsapp size={20} />
              </a>
              <a href="#planes" className="inv-btn-ghost">VER PLANES</a>
            </div>
          </div>
          <div className="inv-hero-stat-strip">
            {STATS.map((s, i) => (
              <div key={i} className="inv-hero-stat">
                <span className="inv-stat-icon">{s.icono}</span>
                <span className="inv-stat-val">{s.valor}</span>
                <span className="inv-stat-label">{s.etiqueta}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── POR QUÉ SMART DRIVE ── */}
        <section className="inv-why">
          <div className="inv-why-inner">
            <div className="inv-section-header">
              <span className="inv-kicker-alt">Tesis de inversión</span>
              <h2>¿POR QUÉ SMART DRIVE?</h2>
            </div>
            <div className="inv-why-grid">
              <div className="inv-why-card">
                <FaChartLine className="inv-why-icon" style={{ color: '#00ff88' }} />
                <h3>Activo Productivo</h3>
                <p>Cada vehículo genera ingresos diarios desde el primer día. Tu capital trabaja 24/7.</p>
              </div>
              <div className="inv-why-card">
                <FaShieldAlt className="inv-why-icon" style={{ color: '#38adb1' }} />
                <h3>Respaldo Legal</h3>
                <p>Contrato notarial que garantiza el retorno pactado. Sin letra pequeña ni sorpresas.</p>
              </div>
              <div className="inv-why-card">
                <MdElectricCar className="inv-why-icon" style={{ color: '#a78bfa' }} />
                <h3>Sector en Expansión</h3>
                <p>El mercado de electromovilidad crece un 35% anual en LatAm. Entraste a tiempo.</p>
              </div>
              <div className="inv-why-card">
                <FaLeaf className="inv-why-icon" style={{ color: '#00ff88' }} />
                <h3>Impacto Verde</h3>
                <p>Tu inversión reduce emisiones CO₂ y mejora la calidad de vida de conductores reales.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALERÍA DE IMÁGENES ── */}
        <section className="inv-gallery">
          {/* Imagen 1 — reemplazar src con imagen real */}
          <div className="inv-gallery-item inv-gallery-large">
            <div className="inv-gallery-placeholder">
              <span className="inv-gallery-label">FLOTA EN OPERACIÓN</span>
              {/* <img src={imgInversion1} alt="Flota Smart Drive en operación" /> */}
            </div>
          </div>

          {/* Imagen 2 */}
          <div className="inv-gallery-item">
            <div className="inv-gallery-placeholder">
              <span className="inv-gallery-label">TECNOLOGÍA ELÉCTRICA</span>
              {/* <img src={imgInversion2} alt="Tecnología eléctrica Smart Drive" /> */}
            </div>
          </div>

          {/* Imagen 3 */}
          <div className="inv-gallery-item">
            <div className="inv-gallery-placeholder">
              <span className="inv-gallery-label">SOCIOS EXITOSOS</span>
              {/* <img src={imgInversion3} alt="Socios conductores Smart Drive" /> */}
            </div>
          </div>
        </section>

        {/* ── PLANES DE INVERSIÓN ── */}
        <section className="inv-planes-section" id="planes">
          <div className="inv-section-header centered">
            <span className="inv-kicker-alt">Elige tu nivel de participación</span>
            <h2>PLANES DE INVERSIÓN</h2>
            <p className="inv-section-sub">Cada plan incluye contrato notarial, reportes de rendimiento y soporte directo.</p>
          </div>

          <div className="inv-planes-tabs">
            {PLANES.map((p) => (
              <button
                key={p.id}
                className={`inv-tab ${planActivo === p.id ? 'active' : ''}`}
                style={{ '--tab-color': p.color } as React.CSSProperties}
                onClick={() => setPlanActivo(p.id)}
              >
                {p.nombre}
              </button>
            ))}
          </div>

          <div className="inv-planes-grid">
            {PLANES.map((plan) => (
              <div
                key={plan.id}
                className={`inv-plan-card ${plan.destacado ? 'destacado' : ''} ${planActivo === plan.id ? 'activo' : ''}`}
                style={{ '--plan-color': plan.color, '--plan-glow': plan.glow } as React.CSSProperties}
                onClick={() => setPlanActivo(plan.id)}
              >
                <div className="inv-plan-badge" style={{ background: plan.color, color: '#000' }}>
                  {plan.badge}
                </div>
                <h3 className="inv-plan-nombre">{plan.nombre}</h3>
                <div className="inv-plan-monto">{plan.monto}</div>
                <div className="inv-plan-retorno">
                  <span className="inv-retorno-num" style={{ color: plan.color }}>{plan.retorno}</span>
                  <span className="inv-retorno-periodo">{plan.periodo}</span>
                </div>
                <p className="inv-plan-desc">{plan.descripcion}</p>
                <ul className="inv-plan-beneficios">
                  {plan.beneficios.map((b, i) => (
                    <li key={i}>
                      <span className="inv-check" style={{ color: plan.color }}>✓</span> {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/50361766862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inv-plan-cta"
                  style={{ background: plan.color, color: plan.id === 'crecimiento' ? '#000' : '#000' }}
                >
                  EMPEZAR AHORA
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESO ── */}
        <section className="inv-proceso">
          <div className="inv-section-header centered">
            <span className="inv-kicker-alt">Simple y transparente</span>
            <h2>CÓMO FUNCIONA</h2>
          </div>
          <div className="inv-proceso-steps">
            {[
              { num: '01', titulo: 'Elige tu plan', desc: 'Selecciona el monto y el plan que mejor se adapte a tus objetivos financieros.' },
              { num: '02', titulo: 'Firma el contrato', desc: 'Firmamos un contrato notarial que garantiza tu retorno y protege tu capital.' },
              { num: '03', titulo: 'Activa tu flota', desc: 'Tu capital se asigna a vehículos reales que empiezan a generar ingresos inmediatamente.' },
              { num: '04', titulo: 'Recibe tus retornos', desc: 'Recibes reportes mensuales y tus retornos según el plan elegido.' },
            ].map((s, i) => (
              <div key={i} className="inv-step">
                <div className="inv-step-num">{s.num}</div>
                <div className="inv-step-connector" />
                <h4>{s.titulo}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="inv-cta-final">
          <div className="inv-cta-inner">
            <MdElectricCar size={48} color="#00ff88" />
            <h2>¿LISTO PARA HACER CRECER TU CAPITAL?</h2>
            <p>Únete a los inversores que ya forman parte del futuro de la movilidad eléctrica.</p>
            <a href="https://wa.me/50361766862" target="_blank" rel="noopener noreferrer" className="inv-btn-primary large">
              HABLA CON UN ASESOR <FaWhatsapp size={22} />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Inversiones;