import React, { useEffect, useState, useCallback, useRef } from 'react';
import Footer from '../Components/Footer/Footer';
import './Quienes.css';
import { Helmet } from 'react-helmet-async';

// Assets Principales
import imgHero1 from '../assets/Portada/Portada Nexus.jpg.jpeg';
import imgHero2 from '../assets/Portada/Portada web Smart drive.jpg.jpeg';
import imgHero3 from '../assets/Portada/Portada Trooper.jpg.jpeg';
import modena from '../assets/Quienes somos/moneda.webp';
import modelodiferente from '../assets/Quienes somos/mejora - un modelo diferente.png';
import imgTienda from '../assets/Quienes somos/tienda.png';
import urban from '../assets/Detalle/Urban/DSC_3895.jpg';
import trooperImgquienes from '../assets/Alquiler/Tomas trooper/portada troopper.png';

import NexusG from '../assets/Galeria/DSC_8915-Edit.jpg.jpeg';
import MVP from '../assets/Detalle/MVP/Copia de DSC_4278.jpg';
import Vision from '../assets/Empresa/Visión.png';
import mision_propuesta from '../assets/Empresa/mision-propuesta.png';
import Ecosistema from '../assets/Empresa/ecosistema quantum.png';
import Mate from '../assets/Galeria/mate.png';
import nuxus2 from '../assets/Galeria/DSC_6390.jpg.jpeg';

import adelante from '../assets/img/adelante.svg';
import atras from '../assets/img/atras.svg';
import video from '../assets/Videos/web SD 2.mp4'

// Assets Clientes
import client1 from '../assets/Quienes somos/Cliente3.png';
import client2 from '../assets/Quienes somos/Cliente2.png';
import client3 from '../assets/Quienes somos/Cliente1.png';
import { FaWhatsapp } from 'react-icons/fa';
// import { PiMotorcycleFill } from 'react-icons/pi';
// import { FaCar } from 'react-icons/fa';

const HERO_IMAGES = [imgHero1, imgHero2, imgHero3];
const CLIENT_IMAGES = [client1, client2, client3];

// Promedios usados en el cálculo
const COSTO_GASOLINA_POR_KM = 0.12;       // $0.12/km promedio gasolina
const MANTENIMIENTO_SEMANAL_PROMEDIO = 25; // $25/sem promedio aceite, frenos, reparaciones
const ALQUILER_SEMANAL_PROMEDIO = 80;      // $80/sem promedio alquiler de vehículo

// ─── RESEÑAS DE DRIVERS ────────────────────────────────────────────────
interface DriverReview {
  name: string;
  vehicle: string;
  rating: number;
  text: string;
}

const DRIVER_REVIEWS: DriverReview[] = [
  {
    name: 'Carlos M.',
    vehicle: 'Trooper',
    rating: 5,
    text: 'Desde que empecé con Smart Drive mis gastos bajaron muchísimo. Ya no dependo de la gasolina y sé que al terminar el contrato el vehículo es mío. Es el mejor movimiento que he hecho en años.',
  },
  {
    name: 'Jesica R.',
    vehicle: 'Nexus',
    rating: 5,
    text: 'El mantenimiento lo incluyen todo. Antes gastaba una fortuna en aceite y reparaciones; ahora ese dinero se queda en mi bolsillo. 100% recomendado para cualquier compañero que trabaje en plataformas.',
  },
  {
    name: 'Miguel A.',
    vehicle: 'Urban',
    rating: 4,
    text: 'Lo que más me convenció fue no necesitar préstamos. Solo cumplí mi tiempo de alquiler y el proceso fue transparente desde el primer día. El equipo siempre resuelve mis dudas rápido.',
  },
];
// ──────────────────────────────────────────────────────────────────────

const MODELOS: { label: string; cf: number }[] = [
  { label: 'Trooper', cf: 52 },
  { label: 'Urban',   cf: 48 },
  { label: 'Nexus',   cf: 130 },
  { label: 'Mate',    cf: 177 },
  { label: 'MPV',     cf: 280 },
];

const BLOCKED_KEYS = ['e', 'E', '+', '-'];

const blockInvalidKeys = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (BLOCKED_KEYS.includes(e.key)) e.preventDefault();
};

const blockInvalidPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
  const pasted = e.clipboardData.getData('text');
  if (/[eE+\-a-zA-Z]/.test(pasted) || isNaN(Number(pasted))) e.preventDefault();
};

const sanitize = (raw: string): number => {
  const n = Number(raw);
  if (isNaN(n) || n < 0) return 0;
  return n;
};

// Componente de estrellas
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="review-stars" aria-label={`${rating} de 5 estrellas`}>
    {[1, 2, 3, 4, 5].map((star) => (
      <span key={star} className={star <= rating ? 'star filled' : 'star'}>★</span>
    ))}
  </div>
);

const Quienes: React.FC = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [currentClient, setCurrentClient] = useState(0);
  const featureIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [activeReview, setActiveReview] = useState(0);

  // ── Estado calculadora ──
  const [kmSemanales, setKmSemanales] = useState<number>(0);
  const [alquilaVehiculo, setAlquilaVehiculo] = useState<'si' | 'no' | ''>('');
  const [modeloSeleccionado, setModeloSeleccionado] = useState<string>('Trooper');

  const CF = MODELOS.find((m) => m.label === modeloSeleccionado)?.cf ?? 130;

  // Resultados calculadora
  const [CO, setCO] = useState<number>(0);   // Costo operativo semanal actual
  const [COK, setCOK] = useState<number>(0); // Costo por km actual
  const [CE, setCE] = useState<number>(0);   // Carga eléctrica semanal Smart Drive
  const [COKE, setCOKE] = useState<number>(0); // Costo por km eléctrico
  const [AS, setAS] = useState<number>(0);   // Ahorro semanal
  const [AM, setAM] = useState<number>(0);   // Ahorro mensual
  const [AN, setAN] = useState<number>(0);   // Ahorro anual
  const [calculado, setCalculado] = useState<boolean>(false);

  // Valores desglosados para mostrar en tarjeta "Estado Actual"
  const [gastoGasolinaCalc, setGastoGasolinaCalc] = useState<number>(0);
  // const [alquilerIncluido, setAlquilerIncluido] = useState<number>(0);

  function calcular() {
    if (kmSemanales <= 0 || alquilaVehiculo === '') return;

    const gasolinaSemanal = kmSemanales * COSTO_GASOLINA_POR_KM;
    const alquilerSemanal = alquilaVehiculo === 'si' ? ALQUILER_SEMANAL_PROMEDIO : 0;

    const costoOperativoSemanal = gasolinaSemanal + MANTENIMIENTO_SEMANAL_PROMEDIO + alquilerSemanal;
    const costoPorKm = costoOperativoSemanal / kmSemanales;

    const cargaElectrica = gasolinaSemanal * 0.12; // aprox 12% del costo gasolina equivalente
    const costoKmElectrico = (CF + cargaElectrica) / kmSemanales;

    const ahorroSemanal = costoOperativoSemanal - (CF + cargaElectrica);
    const ahorroMensual = ahorroSemanal * 4;
    const ahorroAnual = ahorroMensual * 12;

    setGastoGasolinaCalc(gasolinaSemanal);
    // setAlquilerIncluido(alquilerSemanal);
    setCO(costoOperativoSemanal);
    setCOK(costoPorKm);
    setCE(cargaElectrica);
    setCOKE(costoKmElectrico);
    setAS(ahorroSemanal);
    setAM(ahorroMensual);
    setAN(ahorroAnual);
    setCalculado(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClient((prev) => (prev + 1) % CLIENT_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (DRIVER_REVIEWS.length <= 1) return;
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % DRIVER_REVIEWS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const startFeatureAuto = useCallback(() => {
    if (featureIntervalRef.current) clearInterval(featureIntervalRef.current);
    featureIntervalRef.current = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 12000);
  }, []);

  useEffect(() => {
    startFeatureAuto();
    return () => { if (featureIntervalRef.current) clearInterval(featureIntervalRef.current); };
  }, [startFeatureAuto]);

  const nextFeatureManual = () => {
    setCurrentFeature((prev) => (prev + 1) % 3);
    startFeatureAuto();
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev === 0 ? 2 : prev - 1));
    startFeatureAuto();
  };

  // Resetear resultado si cambia algún input
  const handleKmChange = (val: string) => {
    setKmSemanales(sanitize(val));
    setCalculado(false);
  };

  const handleAlquilaChange = (val: 'si' | 'no') => {
    setAlquilaVehiculo(val);
    setCalculado(false);
  };

  const handleModeloChange = (val: string) => {
    setModeloSeleccionado(val);
    setCalculado(false);
  };

  const canCalculate = kmSemanales > 0 && alquilaVehiculo !== '';

  return (
    <>
      <Helmet>
        <title>Quienes Somos | Smart Drive</title>
        <meta name="description" content="Descubre la flota de vehículos eléctricos de Smart Drive..." />
      </Helmet>

      <div className="quienes-page">

        {/* HERO */}
        <section className="hero-carousel">
          {HERO_IMAGES.map((img, index) => (
            <div
              key={index}
              className={`slide ${currentHero === index ? 'active' : ''}`}
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img})` }}
            >
              <div className="slide-content">
                <span className="light-text">Smart Drive Mobility</span>
                <h1 className="hero-title">Liderando el Cambio</h1>
              </div>
            </div>
          ))}
          <div className="indicators">
            {HERO_IMAGES.map((_, i) => (
              <div key={i} className={`indicator-bar ${currentHero === i ? 'active' : ''}`} />
            ))}
          </div>
        </section>

        {/* VIDEO */}
        <section style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
          <video src={video} autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }} />
        </section>

        {/* GRID */}
        <section className="fullscreen-grid">
          <div className="grid-item">
            <img src={trooperImgquienes} alt="Trooper" />
            <div className="overlay"><h2>TROOPER</h2></div>
          </div>
          <div className="grid-item">
            <img src={NexusG} alt="Nexus" />
            <div className="overlay"><h2>NEXUS</h2></div>
          </div>
          <div className="grid-item">
            <img src={Mate} alt="Mate" />
            <div className="overlay"><h2>MATE</h2></div>
          </div>
          <div className="grid-item">
            <img src={MVP} alt="MVP" />
            <div className="overlay"><h2>MPV</h2></div>
          </div>
          <div className="grid-item">
            <img src={urban} alt="Urban" />
            <div className="overlay"><h2>URBAN</h2></div>
          </div>
          <div className="grid-item">
            <img src={nuxus2} alt="Nexus" />
            <div className="overlay"><h2>NEXUS</h2></div>
          </div>
        </section>

        {/* ── RESEÑAS DE DRIVERS ── */}
        <section className="drivers-reviews-section">
          <div className="reviews-header">
            <span className="reviews-kicker">Comunidad Smart Drive</span>
            <h2 className="reviews-title">LO QUE DICEN NUESTROS DRIVERS</h2>
            <p className="reviews-subtitle">
              Experiencias reales de conductores que ya hicieron el cambio.
            </p>
          </div>

          <div className="reviews-carousel-wrapper">
            <div className="reviews-track">
              {DRIVER_REVIEWS.map((review, i) => (
                <div
                  key={i}
                  className={`review-card ${activeReview === i ? 'active' : ''}`}
                  onClick={() => setActiveReview(i)}
                >
                  <span className="review-quote-mark">"</span>
                  <p className="review-text">{review.text}</p>
                  <div className="review-footer">
                    <div className="review-avatar">{review.name.charAt(0)}</div>
                    <div className="review-meta">
                      <span className="review-name">{review.name}</span>
                      <span className="review-vehicle">Smart Drive · {review.vehicle}</span>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              ))}
            </div>

            <div className="reviews-dots">
              {DRIVER_REVIEWS.map((_, i) => (
                <button
                  key={i}
                  className={`reviews-dot ${activeReview === i ? 'active' : ''}`}
                  onClick={() => setActiveReview(i)}
                  aria-label={`Reseña ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTES */}
        <section className="clients-section">
          <h2 className="center-title">CLIENTES SATISFECHOS</h2>
          <div className="client-carousel">
            {CLIENT_IMAGES.map((img, index) => (
              <div key={index} className={`client-slide ${currentClient === index ? 'active' : ''}`}>
                <div className="client-img-wrapper">
                  <img src={img} alt={`Cliente Satisfecho ${index + 1}`} />
                  <div className="client-overlay"></div>
                </div>
              </div>
            ))}
            <div className="client-dots">
              {CLIENT_IMAGES.map((_, i) => (
                <span key={i} className={`dot ${currentClient === i ? 'active' : ''}`} onClick={() => setCurrentClient(i)} />
              ))}
            </div>
          </div>
        </section>

        {/* VISIÓN */}
        <section className="section-vision">
          <div className="vision-image">
            <img src={Vision} alt="Visión Smart Drive" />
          </div>
          <div className="vision-content">
            <div className="glass-card">
              <span className="kicker">Hacia el futuro</span>
              <h2>Visión</h2>
              <p>
                Ser la empresa referente en movilidad eléctrica para conductores de
                aplicaciones en Latinoamérica, liderando la transición hacia un
                transporte sostenible, accesible y rentable.
              </p>
            </div>
          </div>
        </section>

        {/* MISIÓN */}
        <section
          className="section-impact"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${mision_propuesta})` }}
        >
          <div className="impact-grid">
            <div className="impact-item">
              <h3>Nuestra Misión</h3>
              <p>
                Hacemos realidad el sueño de tener un vehículo eléctrico sin deudas. Con nuestro modelo Rent to Own,
                cualquier conductor de plataforma puede convertirse en propietario simplemente cumpliendo su tiempo de alquiler,
                promoviendo una movilidad urbana eficiente y sin complicaciones financieras
              </p>
            </div>
            <div className="impact-divider"></div>
            <div className="impact-item">
              <h3>Propuesta</h3>
              <p>
                Conduce para ser dueño, convierte el sueño de tener un vehículo
                eléctrico propio en una realidad económica
              </p>
            </div>
          </div>
        </section>

        {/* ECOSISTEMA */}
        <section className="section-ecosystem">
          <div className="ecosystem-container">
            <div className="ecosystem-text">
              <span className="kicker"></span>
              <h2>La unión de la movilidad eléctrica y la libertad financiera.</h2>
              <p className="highlight-p">La unión de la movilidad eléctrica y la innovación financiera.</p>
              <p className="ecosystem-description">
                <strong className="ecosystem-subtitle">SMART DRIVE</strong> permite a conductores de aplicaciones ser dueños de un vehículo eléctrico sin inversión inicial elevada y sin préstamos bancarios. Al cumplir tu tiempo de alquiler, el vehículo es legalmente tuyo.
                <br /><br />
                <strong className="ecosystem-subtitle">INCLUSIÓN RADICAL:</strong> permite a conductores de aplicaciones ser dueños de un vehículo eléctrico sin inversión inicial elevada y sin préstamos bancarios. Al cumplir tu tiempo de alquiler, el vehículo es legalmente tuyo.
                <br /><br />
                <strong className="ecosystem-subtitle">AHORRO REAL:</strong> Reduce un 80% tus costos de energía frente a la gasolina
                <br /><br />
                <strong className="ecosystem-subtitle">DUEÑO AL FINALIZAR:</strong> Sin letras chicas; al terminar el contrato, el vehículo te pertenece al 100%.
              </p>
            </div>
            <div className="ecosystem-image">
              <img src={Ecosistema} alt="Auto Quantum" className="floating-img" />
            </div>
          </div>
        </section>

        <main className="main-content">

          {/* CARRUSEL DE INFORMACIÓN */}
          <section className="info-carousel-section">
            <div className="info-carousel-wrapper">
              <div className={`info-slide ${currentFeature === 0 ? 'active' : ''}`}>
                <section className="feature-grid">
                  <div className="feature-image">
                    <img src={modena} alt="fin del alquiler" />
                  </div>
                  <div className="feature-text">
                    <div className="kicker">Misión 2026</div>
                    <h2>EL FIN DEL ALQUILER ETERNO</h2>
                    <p>
                      Deja de pagar por el vehículo de otros y empieza a invertir en el tuyo. Mientras otros basan su éxito en tu pago indefinido, nosotros lo basamos en convertirte en propietario.

                     * PROPIEDAD GARANTIZADA: Al finalizar tu contrato, el vehículo es 100% tuyo sin costos ocultos.
                     * LIBERTAD FINANCIERA: Sin préstamos bancarios; tu cumplimiento es tu mejor crédito.
                     (Botón: Quiero ser dueño)

                    </p>
                    <div className="stats-badges">
                      <span>+ Retención</span>
                      <span>+ Sostenibilidad</span>
                    </div>
                  </div>
                </section>
              </div>

              <div className={`info-slide ${currentFeature === 1 ? 'active' : ''}`}>
                <section className="feature-grid reverse">
                  <div className="feature-image">
                    <img src={modelodiferente} alt="Modelo Diferente Smart Drive" />
                  </div>
                  <div className="feature-text">
                    <div className="kicker">Visión de Negocio</div>
                    <h2>UN MODELO DIFERENTE</h2>
                    <p>
                     En SMART DRIVE, eliminamos la barrera del capital en El Salvador. Transformamos tu alquiler
                     diario en una inversión real: con nuestro modelo único Rent-to-Own, dejas de pagar por el vehículo de otros y comienzas a construir
                     tu propio patrimonio utilizando tecnología eléctrica de alta eficiencia.
                    </p>
                  </div>
                </section>
              </div>

              <div className={`info-slide ${currentFeature === 2 ? 'active' : ''}`}>
                <section className="feature-grid">
                  <div className="feature-image">
                    <img src={imgTienda} alt="Showroom Smart Drive" />
                  </div>
                  <div className="feature-text">
                    <div className="kicker">Nuestra Sede</div>
                    <h2>LA TIENDA</h2>
                    <p>
                     Ven a conocer de cerca la tecnología que transformará tu economía. En nuestra sede,
                     asesores expertos te ayudarán a elegir el vehículo ideal para tu plan Rent to Own.
                     Sin préstamos ni deudas bancarias, solo el camino directo a tu independencia financiera
                    </p>
                  </div>
                </section>
              </div>
            </div>

            <div className="info-dots">
              <button className="nav-btn-info prev" onClick={prevFeature}>
                <img src={atras} alt="Anterior" />
              </button>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`dot ${currentFeature === i ? 'active' : ''}`}
                  onClick={() => setCurrentFeature(i)}
                />
              ))}
              <button className="nav-btn-info next" onClick={nextFeatureManual}>
                <img src={adelante} alt="Siguiente" />
              </button>
            </div>
          </section>

          {/* CONTACTO */}
          <section className="contact-block symmetric-section">
            <div className="contact-card">
              <div className="contact-content">
                <h2>¿LISTO PARA COMENZAR?</h2>
                <p>Hablemos sobre tu próximo gran paso en la movilidad eléctrica.</p>
              </div>
              <a href="https://wa.me/50361766862" target="_blank" rel="noopener noreferrer" className="professional-contact-btn">
                CONTACTANOS <FaWhatsapp size={25} color="#bad8ca" />
              </a>
            </div>
          </section>

          {/* CALCULADORA */}
          <section className="Seccion-calculadora">
            <h2 className="titulo-calculadora">CALCULADORA DE AHORRO</h2>
            <p className="descripcion">
              Ingresa solo 3 datos y descubre cuánto puedes ahorrar al pasarte a Smart Drive.
            </p>

            <div className="cuerpo-calculadora">
              <div className="entradas">

                {/* Modelo Smart Drive */}
                <div className="input-group">
                  <label className="etiquetas" htmlFor="modelo-vehiculo">
                    Selecciona el modelo Smart Drive
                  </label>
                  <select
                    className="entrada"
                    id="modelo-vehiculo"
                    value={modeloSeleccionado}
                    onChange={(e) => handleModeloChange(e.target.value)}
                  >
                    {MODELOS.map((m) => (
                      <option key={m.label} value={m.label}>
                        {m.label} — Cuota fija: ${m.cf}/sem
                      </option>
                    ))}
                  </select>
                </div>

                {/* Km semanales */}
                <div className="input-group">
                  <label className="etiquetas" htmlFor="km-semanales">
                    ¿Cuántos km recorres en una semana promedio?
                  </label>
                  <input
                    className="entrada"
                    type="number"
                    id="km-semanales"
                    placeholder="0"
                    min="0"
                    value={kmSemanales || ''}
                    onKeyDown={blockInvalidKeys}
                    onPaste={blockInvalidPaste}
                    onChange={(e) => handleKmChange(e.target.value)}
                  />
                  {kmSemanales > 0 && (
                    <span className="input-hint">
                      Gasto estimado en gasolina: ${(kmSemanales * COSTO_GASOLINA_POR_KM).toFixed(2)}/sem
                      <br />
                      <span className="input-hint-small">(basado en promedio de $0.12/km)</span>
                    </span>
                  )}
                </div>

                {/* ¿Alquilas vehículo? */}
                <div className="input-group">
                  <label className="etiquetas">¿Actualmente alquilas el vehículo que usas?</label>
                  <div className="radio-group">
                    <button
                      type="button"
                      className={`radio-btn ${alquilaVehiculo === 'si' ? 'radio-btn--active' : ''}`}
                      onClick={() => handleAlquilaChange('si')}
                    >
                      Sí, alquilo
                    </button>
                    <button
                      type="button"
                      className={`radio-btn ${alquilaVehiculo === 'no' ? 'radio-btn--active' : ''}`}
                      onClick={() => handleAlquilaChange('no')}
                    >
                      No, es mío
                    </button>
                  </div>
                  {alquilaVehiculo === 'si' && (
                    <span className="input-hint">
                      Se incluirá un promedio de alquiler de ${ALQUILER_SEMANAL_PROMEDIO}/sem en el cálculo.
                    </span>
                  )}
                </div>

                {/* Nota sobre mantenimiento */}
                <div className="input-group calc-note">
                  <span className="calc-note-icon">ℹ️</span>
                  <p>
                    Se incluye un promedio de <strong>${MANTENIMIENTO_SEMANAL_PROMEDIO}/sem</strong> en mantenimiento
                    (aceite, frenos, reparaciones) para un vehículo tradicional.
                    Con Smart Drive, el mantenimiento está <strong>incluido</strong> en tu cuota.
                  </p>
                </div>

                <button
                  className={`btn-ahorro ${!canCalculate ? 'btn-ahorro--disabled' : ''}`}
                  onClick={calcular}
                  disabled={!canCalculate}
                >
                  Calcular
                </button>
              </div>

              <div className="salidas">
                <div className="vehiculo-actual-card">
                  <h3 className="titulo-estado-actual">ESTADO ACTUAL</h3>
                  <div className="resultado-item">
                    <span className="res-label">Gasolina semanal (estimado):</span>
                    <span className="res-valor">
                      {calculado ? `$ ${gastoGasolinaCalc.toFixed(2)}` : '—'}
                    </span>
                  </div>
                  <div className="resultado-item">
                    <span className="res-label">Mantenimiento semanal (promedio):</span>
                    <span className="res-valor">$ {MANTENIMIENTO_SEMANAL_PROMEDIO.toFixed(2)}</span>
                  </div>
                  {alquilaVehiculo === 'si' && (
                    <div className="resultado-item">
                      <span className="res-label">Alquiler semanal (promedio):</span>
                      <span className="res-valor">$ {ALQUILER_SEMANAL_PROMEDIO.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="resultado-item resultado-item--total">
                    <span className="res-label">Costo operativo semanal total:</span>
                    <span className="res-valor primary-text">
                      {calculado ? `$ ${CO.toFixed(2)}` : '—'}
                    </span>
                  </div>
                  <div className="resultado-item">
                    <span className="res-label">Costo por km:</span>
                    <span className="res-valor">
                      {calculado ? `$ ${COK.toFixed(4)}` : '—'}
                    </span>
                  </div>
                </div>

                <div className="nuevo-sd-card">
                  <h3 className="titulo-estado-actual">CON SMART DRIVE — {modeloSeleccionado}</h3>
                  <div className="resultado-grid">
                    <div className="resultado-item">
                      <span className="res-label">Cuota fija (Seguro + Mant.):</span>
                      <span className="res-valor">$ {CF.toFixed(2)}</span>
                    </div>
                    <div className="resultado-item">
                      <span className="res-label">Carga eléctrica semanal:</span>
                      <span className="res-valor">
                        {calculado ? `$ ${CE.toFixed(2)}` : '—'}
                      </span>
                    </div>
                    <div className="resultado-item">
                      <span className="res-label">Mantenimiento y seguro:</span>
                      <span className="res-valor">Incluido</span>
                    </div>
                    <div className="resultado-item">
                      <span className="res-label">Costo por km:</span>
                      <span className="res-valor highlight-text">
                        {calculado ? `$ ${COKE.toFixed(4)}` : '—'}
                      </span>
                    </div>
                  </div>
                </div>

                {calculado && (
                  <div className="visualizador">
                    <p className="congrats-text">
                      {AS >= 0
                        ? '¡Felicidades! Al pasarte a Smart Drive tu bolsillo respira'
                        : 'Con Smart Drive optimizas tu movilidad y cuidas el medio ambiente'}
                    </p>
                    <div className="ahorro-container">
                      <div className="ahorro-block">
                        <span className="ahorro-label">AHORRO SEMANAL</span>
                        <span className="ahorro-monto">$ {AS.toFixed(2)}</span>
                      </div>
                      <div className="ahorro-block">
                        <span className="ahorro-label">AHORRO MENSUAL</span>
                        <span className="ahorro-monto">$ {AM.toFixed(2)}</span>
                      </div>
                      <div className="ahorro-block total">
                        <span className="ahorro-label">AHORRO ANUAL</span>
                        <span className="ahorro-monto">$ {AN.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* REGISTRO */}
          {/* <section className="contact-block">
            <div className="contact-card2">
              <h2>¿LISTO PARA SER SMART? <br /> REGÍSTRATE AHORA</h2>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="https://forms.gle/RtRsECQq7MRtGurn8" target="_blank" rel="noopener noreferrer" className="professional-contact-btn2">
                  REGISTRO MOTOCICLETAS <PiMotorcycleFill size={30} color="#bad8ca" />
                </a>
                <a href="https://forms.gle/txb5JQ4tJm3pArB17" target="_blank" rel="noopener noreferrer" className="professional-contact-btn2">
                  REGISTRO VEHÍCULOS <FaCar size={25} color="#bad8ca" />
                </a>
              </div>
            </div>
          </section> */}

        </main>

        <Footer />

      </div>
    </>
  );
};

export default Quienes;