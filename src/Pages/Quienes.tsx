import React, { useEffect, useState, useCallback, useRef } from 'react';
import Footer from '../Components/Footer/Footer';
import './Quienes.css';

// Assets Principales
import imgHero1 from '../assets/Portada/Portada Nexus.jpg.jpeg';
import imgHero2 from '../assets/Portada/Portada web Smart drive.jpg.jpeg';
import imgHero3 from '../assets/Portada/Portada Trooper.jpg.jpeg';
import modena from '../assets/Quienes somos/moneda.webp';
import modelodiferente from '../assets/Quienes somos/mejora - un modelo diferente.png';
import imgTienda from '../assets/Quienes somos/tienda.png';
import urban from '../assets/Galeria/Urbanm.png';
import trooperImgquienes from '../assets/Alquiler/Tomas trooper/portada troopper.png';

import NexusG from '../assets/Galeria/DSC_8915-Edit.jpg.jpeg';
import imgMVPDesktop from '../assets/Fchas tecnicas c/baw.png';
import Vision from '../assets/Empresa/Visión.png';
import mision_propuesta from '../assets/Empresa/mision-propuesta.png';
import Ecosistema from '../assets/Empresa/ecosistema quantum.png';
import Mate from '../assets/Galeria/mate.png';
import nuxus2 from '../assets/Galeria/DSC_6390.jpg.jpeg';

import adelante from '../assets/img/adelante.svg';
import atras from '../assets/img/atras.svg';

// Assets Clientes
import client1 from '../assets/Quienes somos/Cliente3.png';
import client2 from '../assets/Quienes somos/Cliente2.png';
import client3 from '../assets/Quienes somos/Cliente1.png';
import { FaWhatsapp } from 'react-icons/fa';
import { PiMotorcycleFill } from 'react-icons/pi';
import { FaCar } from 'react-icons/fa';

const HERO_IMAGES = [imgHero1, imgHero2, imgHero3];
const CLIENT_IMAGES = [client1, client2, client3];

// Cuotas fijas por modelo
const MODELOS: { label: string; cf: number }[] = [
  { label: 'Trooper', cf: 52 },
  { label: 'Urban',   cf: 48 },
  { label: 'Nexus',   cf: 130 },
  { label: 'Mate',    cf: 177 },
  { label: 'MPV',     cf: 280 },
];

// ─── Seguridad de inputs numéricos ───────────────────────────────────────────
// Bloquea: 'e'/'E' (notación científica), '+'/'-' (signos que acepta type="number")
const BLOCKED_KEYS = ['e', 'E', '+', '-'];

const blockInvalidKeys = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (BLOCKED_KEYS.includes(e.key)) {
    e.preventDefault();
  }
};

// Bloquea pegado de texto que contenga caracteres inválidos o no sea numérico
const blockInvalidPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
  const pasted = e.clipboardData.getData('text');
  if (/[eE+\-a-zA-Z]/.test(pasted) || isNaN(Number(pasted))) {
    e.preventDefault();
  }
};

// Descarta valores negativos o no-numéricos al cambiar el input
const sanitize = (raw: string): number => {
  const n = Number(raw);
  if (isNaN(n) || n < 0) return 0;
  return n;
};
// ─────────────────────────────────────────────────────────────────────────────

const Quienes: React.FC = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [currentClient, setCurrentClient] = useState(0);
  const featureIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [currentFeature, setCurrentFeature] = useState(0);

  // --- ENTRADAS DE LA CALCULADORA ---
  const [kmSemanales, setKmSemanales] = useState<number>(0);
  const [D, setD] = useState<number>(0);
  const [PM, setPM] = useState<number>(0);
  const [PS, setPS] = useState<number>(0);
  const [modeloSeleccionado, setModeloSeleccionado] = useState<string>('Trooper');

  // CF dinámico según modelo seleccionado
  const CF = MODELOS.find((m) => m.label === modeloSeleccionado)?.cf ?? 130;

  // --- RESULTADOS DE LA CALCULADORA ---
  const [CO, setCO] = useState<number>(0);
  const [COK, setCOK] = useState<number>(0);
  const [CE, setCE] = useState<number>(0);
  const [COKE, setCOKE] = useState<number>(0);
  const [AS, setAS] = useState<number>(0);
  const [AM, setAM] = useState<number>(0);
  const [AN, setAN] = useState<number>(0);
  const [calculado, setCalculado] = useState<boolean>(false);

  function calcular() {
    if (kmSemanales <= 0) return;

    const costoOperativoSemanal = D + PM / 4 + PS;
    const costoPorKm = costoOperativoSemanal / kmSemanales;
    const cargaElectrica = D * 0.12;
    const costoKmElectrico = (CF + cargaElectrica) / kmSemanales;
    const ahorroSemanal = costoOperativoSemanal - (CF + cargaElectrica);
    const ahorroMensual = ahorroSemanal * 4;
    const ahorroAnual = ahorroMensual * 12;

    setCO(costoOperativoSemanal);
    setCOK(costoPorKm);
    setCE(cargaElectrica);
    setCOKE(costoKmElectrico);
    setAS(ahorroSemanal);
    setAM(ahorroMensual);
    setAN(ahorroAnual);
    setCalculado(true);
  }

  // ─── Auto-avance del hero carousel ───────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ─── Auto-avance del cliente carousel ────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClient((prev) => (prev + 1) % CLIENT_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ─── Feature carousel: arranque automático ───────────────────────────────
  const startFeatureAuto = useCallback(() => {
    if (featureIntervalRef.current) {
      clearInterval(featureIntervalRef.current);
    }
    featureIntervalRef.current = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 12000);
  }, []);

  useEffect(() => {
    startFeatureAuto();
    return () => {
      if (featureIntervalRef.current) {
        clearInterval(featureIntervalRef.current);
      }
    };
  }, [startFeatureAuto]);

  // ─── Navegación manual del feature carousel ──────────────────────────────
  const nextFeatureManual = () => {
    setCurrentFeature((prev) => (prev + 1) % 3);
    startFeatureAuto();
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev === 0 ? 2 : prev - 1));
    startFeatureAuto();
  };

  return (
    <div className="quienes-page">
      {/* BLOQUE 0: HERO */}
      <section className="hero-carousel">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`slide ${currentHero === index ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img})`,
            }}
          >
            <div className="slide-content">
              <span className="light-text">Smart Drive Mobility</span>
              <h1 className="hero-title">Liderando el Cambio</h1>
            </div>
          </div>
        ))}
        <div className="indicators">
          {HERO_IMAGES.map((_, i) => (
            <div
              key={i}
              className={`indicator-bar ${currentHero === i ? 'active' : ''}`}
            />
          ))}
        </div>
      </section>

      <section className="fullscreen-grid">
        <div className="grid-item">
          <img src={trooperImgquienes} alt="Trooper" />
          <div className="overlay">
            <h2 className="titulo_modelo">TROOPER</h2>
          </div>
        </div>
        <div className="grid-item">
          <img src={NexusG} alt="Nexus" />
          <div className="overlay">
            <h2>NEXUS</h2>
          </div>
        </div>
        <div className="grid-item">
          <img src={Mate} alt="Mate" />
          <div className="overlay">
            <h2>MATE</h2>
          </div>
        </div>
        <div className="grid-item">
          <img src={imgMVPDesktop} alt="MVP" />
          <div className="overlay">
            <h2>MPV</h2>
          </div>
        </div>
        <div className="grid-item">
          <img src={urban} alt="Urban" />
          <div className="overlay">
            <h2>URBAN</h2>
          </div>
        </div>
        <div className="grid-item">
          <img src={nuxus2} alt="Nexus" />
          <div className="overlay">
            <h2>NEXUS</h2>
          </div>
        </div>
      </section>

      <section className="clients-section">
        <h2 className="center-title">CLIENTES SATISFECHOS</h2>
        <div className="client-carousel">
          {CLIENT_IMAGES.map((img, index) => (
            <div
              key={index}
              className={`client-slide ${currentClient === index ? 'active' : ''}`}
            >
              <div className="client-img-wrapper">
                <img src={img} alt={`Cliente Satisfecho ${index + 1}`} />
                <div className="client-overlay">
                  <p className="client-quote">
                    "Gracias a Smart Drive, hoy soy dueño de mi propio futuro."
                  </p>
                  <span className="client-name">Socio Conductor Certificado</span>
                </div>
              </div>
            </div>
          ))}
          <div className="client-dots">
            {CLIENT_IMAGES.map((_, i) => (
              <span
                key={i}
                className={`dot ${currentClient === i ? 'active' : ''}`}
                onClick={() => setCurrentClient(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 1: VISIÓN */}
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

      {/* SECCIÓN 2: MISIÓN Y PROPUESTA */}
      <section
        className="section-impact"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${mision_propuesta})`,
        }}
      >
        <div className="impact-grid">
          <div className="impact-item">
            <h3>Nuestra Misión</h3>
            <p>
              Facilitar el acceso a vehículos eléctricos a conductores de
              plataformas de movilidad y delivery, mediante soluciones de
              arrendamiento flexibles con opción a compra, brindando ingresos
              sostenibles y promoviendo una movilidad urbana eficiente y
              ambientalmente responsable.
            </p>
          </div>
          <div className="impact-divider"></div>
          <div className="impact-item">
            <h3>Propuesta </h3>
            <p>
              Convertir el sueño de tener un vehículo eléctrico propio en una realidad económica
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: ECOSISTEMA */}
      <section className="section-ecosystem">
        <div className="ecosystem-container">
          <div className="ecosystem-text">
            <span className="kicker">Sinergia Industrial</span>
            <h2>Ecosistema Quantum-SmartDrive</h2>
            <p className="highlight-p">
              La unión de la movilidad eléctrica y la innovación financiera.
            </p>
            <p className="ecosystem-description">
  <strong className="ecosystem-subtitle">SMART DRIVE</strong> permite a los conductores de aplicaciones acceder a vehículos eléctricos sin inversión inicial elevada, reduciendo costos operativos y ofreciendo una ruta clara hacia la propiedad del vehículo. Se basa en tres pilares:

  <br /><br />

  <strong className="ecosystem-subtitle">INCLUSIÓN FINANCIERA:</strong> Acceso a activos productivos para personas sin historial crediticio bancario.

  <br /><br />

  <strong className="ecosystem-subtitle">EFICIENCIA ENERGÉTICA:</strong> Reducción del 80% en costos de combustible mediante electromovilidad.

  <br /><br />

  <strong className="ecosystem-subtitle">CAPITALIZACIÓN DEL DRIVER:</strong> Al finalizar el contrato en cualquiera de sus formatos Sedan, Motos o VAN, la propiedad del vehículo se transfiere al conductor.
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
            <button className="nav-btn-info prev" onClick={prevFeature}>
              <img src={atras} alt="Anterior" />
            </button>

            <button className="nav-btn-info next" onClick={nextFeatureManual}>
              <img src={adelante} alt="Siguiente" />
            </button>

            <div className={`info-slide ${currentFeature === 0 ? 'active' : ''}`}>
              <section className="feature-grid">
                <div className="feature-image">
                  <img src={modena} alt="fin del alquiler" />
                </div>
                <div className="feature-text">
                  <div className="kicker">Misión 2026</div>
                  <h2>EL FIN DEL ALQUILER ETERNO</h2>
                  <p>
                    Mientras que la competencia (rentadoras tradicionales y flotas privadas) basa su rentabilidad en mantener al conductor pagando indefinidamente, SMART DRIVE basa su éxito en convertir al conductor en dueño. Esto elimina la rotación de personal (churn), 
                    asegura el cuido extremo del activo por parte del driver y crea una barrera de salida casi imposible de romper para la competencia{' '}
                    
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
                    SMART DRIVE es una plataforma de movilidad que resuelve la brecha de capital para los trabajadores del sector de servicio de transporte en El Salvador. 
                    A través de un <strong>modelo </strong>híbrido de Leasing Operativo con Opción a Compra (Rent-to-Own), transformamos un gasto operativo (alquiler) en una inversión patrimonial para el conductor, 
                    utilizando vehículos 100% eléctricos de alta eficiencia.
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
                    Ven a visitarnos en nuestro showroom físico. Contamos con
                    tecnología de punta y asesores listos para ayudarte a elegir
                    el vehículo que impulsará tu independencia financiera.
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div className="info-dots">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`dot ${currentFeature === i ? 'active' : ''}`}
                onClick={() => setCurrentFeature(i)}
              />
            ))}
          </div>
        </section>

        {/* BLOQUE CONTACTO */}
        <section className="contact-block symmetric-section">
          <div className="contact-card">
            <div className="contact-content">
              <h2>¿LISTO PARA COMENZAR?</h2>
              <p>Hablemos sobre tu próximo gran paso en la movilidad eléctrica.</p>
            </div>
            <a
              href="https://wa.me/50361766862"
              target="_blank"
              rel="noopener noreferrer"
              className="professional-contact-btn"
            >
              CONTACTANOS <FaWhatsapp size={25} color="#bad8ca" />
            </a>
          </div>
        </section>

        {/* CALCULADORA DE AHORRO */}
        <section className="Seccion-calculadora">
          <h2 className="titulo-calculadora">CALCULADORA DE AHORRO</h2>
          <p className="descripcion">
            Compara tu gasto actual con el modelo Smart Drive y descubre el
            potencial de tu inversión.
          </p>

          <div className="cuerpo-calculadora">
            {/* COLUMNA IZQUIERDA: DATOS DE ENTRADA */}
            <div className="entradas">
              <div className="input-group">
                <label className="etiquetas" htmlFor="modelo-vehiculo">
                  Selecciona el modelo Smart Drive
                </label>
                <select
                  className="entrada"
                  id="modelo-vehiculo"
                  value={modeloSeleccionado}
                  onChange={(e) => {
                    setModeloSeleccionado(e.target.value);
                    setCalculado(false);
                  }}
                >
                  {MODELOS.map((m) => (
                    <option key={m.label} value={m.label}>
                      {m.label} — Cuota fija: ${m.cf}/sem
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-group">
                <label className="etiquetas" htmlFor="km-semanales">
                  ¿Cuántos Km recorres en una semana promedio?
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
                  onChange={(e) => setKmSemanales(sanitize(e.target.value))}
                />
              </div>

              <div className="input-group">
                <label className="etiquetas" htmlFor="gasto-gasolina">
                  ¿Cuánto dinero gastas de gasolina a la semana? ($)
                </label>
                <input
                  className="entrada"
                  type="number"
                  id="gasto-gasolina"
                  placeholder="0"
                  min="0"
                  value={D || ''}
                  onKeyDown={blockInvalidKeys}
                  onPaste={blockInvalidPaste}
                  onChange={(e) => setD(sanitize(e.target.value))}
                />
              </div>

              <div className="input-group">
                <label className="etiquetas" htmlFor="gastos-mensuales">
                  Gasto mensual en aceite, frenos y reparaciones ($)
                </label>
                <input
                  className="entrada"
                  type="number"
                  id="gastos-mensuales"
                  placeholder="0"
                  min="0"
                  value={PM || ''}
                  onKeyDown={blockInvalidKeys}
                  onPaste={blockInvalidPaste}
                  onChange={(e) => setPM(sanitize(e.target.value))}
                />
              </div>

              <div className="input-group">
                <label className="etiquetas" htmlFor="pago-semanal">
                  Si alquilas, ¿cuánto pagas semanalmente? ($)
                </label>
                <input
                  className="entrada"
                  type="number"
                  id="pago-semanal"
                  placeholder="0"
                  min="0"
                  value={PS || ''}
                  onKeyDown={blockInvalidKeys}
                  onPaste={blockInvalidPaste}
                  onChange={(e) => setPS(sanitize(e.target.value))}
                />
              </div>

              <button className="btn-ahorro" onClick={calcular}>
                Calcular
              </button>
            </div>

            {/* COLUMNA DERECHA: RESULTADOS */}
            <div className="salidas">
              <div className="vehiculo-actual-card">
                <h3 className="titulo-estado-actual">ESTADO ACTUAL</h3>
                <div className="resultado-item">
                  <span className="res-label">Costo operativo semanal:</span>
                  <span className="res-valor primary-text">$ {CO.toFixed(2)}</span>
                </div>
                <div className="resultado-item">
                  <span className="res-label">Costo por KM:</span>
                  <span className="res-valor">$ {COK.toFixed(2)}</span>
                </div>
              </div>

              <div className="nuevo-sd-card">
                <h3 className="titulo-estado-actual">
                  CON SMART DRIVE — {modeloSeleccionado}
                </h3>
                <div className="resultado-grid">
                  <div className="resultado-item">
                    <span className="res-label">
                      Cuota fija (Seguro + Mant.):
                    </span>
                    <span className="res-valor">$ {CF.toFixed(2)}</span>
                  </div>
                  <div className="resultado-item">
                    <span className="res-label">Carga eléctrica semanal:</span>
                    <span className="res-valor">$ {CE.toFixed(2)}</span>
                  </div>
                  <div className="resultado-item">
                    <span className="res-label">Mantenimiento y seguro:</span>
                    <span className="res-valor">Incluido</span>
                  </div>
                  <div className="resultado-item">
                    <span className="res-label">Costo por Km:</span>
                    <span className="res-valor highlight-text">
                      $ {COKE.toFixed(2)}
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

        {/* BLOQUE REGISTRO */}
        <section className="contact-block">
          <div className="contact-card2">
            <h2>
              ¿LISTO PARA SER SMART? <br /> REGÍSTRATE AHORA
            </h2>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <a
                href="https://forms.gle/RtRsECQq7MRtGurn8"
                target="_blank"
                rel="noopener noreferrer"
                className="professional-contact-btn2"
              >
                REGISTRO MOTOCICLETAS{' '}
                <PiMotorcycleFill size={30} color="#bad8ca" />
              </a>
              <a
                href="https://forms.gle/txb5JQ4tJm3pArB17"
                target="_blank"
                rel="noopener noreferrer"
                className="professional-contact-btn2"
              >
                REGISTRO VEHÍCULOS <FaCar size={25} color="#bad8ca" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Quienes;