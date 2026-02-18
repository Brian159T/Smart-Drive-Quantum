import React, { useState, useEffect } from 'react';
import './Calculadora.css';

const Calculadora: React.FC = () => {
  const [pagoInicial, setPagoInicial] = useState<number>(2000);
  const [meses, setMeses] = useState<number>(24);
  const [cuotaMensual, setCuotaMensual] = useState<number>(0);

  // Lógica simple de simulación
  useEffect(() => {
    const precioVehiculo = 15000;
    const restante = precioVehiculo - pagoInicial;
    const interes = 1.15; // 15% simulado
    setCuotaMensual(Math.round((restante * interes) / meses));
  }, [pagoInicial, meses]);

  return (
    <div className="calc-view">
      <header className="calc-header">
        <span className="calc-kicker">Simulador Financiero</span>
        <h1>Calcula tu <span className="calc-highlight">Vehículo Eléctrico</span></h1>
        <p>Ajusta los valores para encontrar el plan que mejor se adapte a tus ingresos.</p>
      </header>

      <main className="calc-container">
        <div className="calc-grid">
          
          {/* COLUMNA DE ENTRADA */}
          <section className="calc-card-input calc-glass">
            <div className="calc-field">
              <div className="calc-label-row">
                <label>Pago Inicial (USD)</label>
                <span className="calc-value">${pagoInicial.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="8000" 
                step="500"
                value={pagoInicial}
                onChange={(e) => setPagoInicial(Number(e.target.value))}
                className="calc-slider"
              />
            </div>

            <div className="calc-field">
              <div className="calc-label-row">
                <label>Plazo del Contrato</label>
                <span className="calc-value">{meses} Meses</span>
              </div>
              <div className="calc-tabs">
                {[12, 24, 36, 48].map((m) => (
                  <button 
                    key={m}
                    className={`calc-tab ${meses === m ? 'active' : ''}`}
                    onClick={() => setMeses(m)}
                  >
                    {m}m
                  </button>
                ))}
              </div>
            </div>

            <div className="calc-field">
              <label>Modelo de Interés</label>
              <select className="calc-select">
                <option>Quantum E4 - Sedan</option>
                <option>Quantum Tork - Moto</option>
                <option>Quantum Colibrí - Compacto</option>
              </select>
            </div>
          </section>

          {/* COLUMNA DE RESULTADOS */}
          <section className="calc-card-result calc-glass">
            <div className="calc-result-content">
              <h3>Resumen de Cuota</h3>
              <div className="calc-big-price">
                <span className="currency">$</span>
                <span className="amount">{cuotaMensual}</span>
                <span className="period">/mes</span>
              </div>
              
              <ul className="calc-features">
                <li><span>✓</span> Mantenimiento incluido</li>
                <li><span>✓</span> Seguro contra accidentes</li>
                <li><span>✓</span> Opción a compra final</li>
              </ul>

              <button className="calc-btn-main">Solicitar Aprobación</button>
              <p className="calc-disclaimer">
                * Sujeto a evaluación de perfil de conductor.
              </p>
            </div>
          </section>

        </div>
      </main>

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

export default Calculadora;