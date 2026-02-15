import { useEffect, useState } from 'react'
import './Quienes.css'

import img1 from '../assets/2.webp'
import img2 from '../assets/Tropper financiero.png'
import img3 from '../assets/nexus-1.webp'
import img4 from '../assets/mate.png'
import sectionImg from '../assets/Tropper financiero.png'

const images = [img1, img2, img3, img4]

const Quienes = () => {

  const [current, setCurrent] = useState(0)

  // 🔥 Auto carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  return (
    <div className="quienes-container">

      {/* ===== CARRUSEL ===== */}
      <div className="carousel">
        <img src={images[current]} alt="slide" />

        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>

        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>


      {/* ===== SECCIÓN 1 ===== */}
      <div className="section">

        <div className="section-image">
          <img src={sectionImg} alt="Vehiculos electricos Smart Drive" />
        </div>

        <div className="section-text">
          <h2>EL FIN DEL ALQUILER ETERNO</h2>
          <p>
            Mientras que la competencia basa su rentabilidad en mantener al
            conductor pagando indefinidamente, SMART DRIVE basa su éxito en
            convertir al conductor en dueño. Esto optimiza la retención de
            personal, asegura el cuidado del activo y crea una barrera
            competitiva sólida.
          </p>
        </div>

      </div>


      {/* ===== SECCIÓN 2 ===== */}
      <div className="section3">

        <div className="section3-text">
          <h2>UN MODELO DIFERENTE</h2>
          <p>
            No solo ofrecemos movilidad, ofrecemos crecimiento. Nuestro
            modelo crea estabilidad financiera, fomenta compromiso y
            garantiza sostenibilidad a largo plazo.
          </p>
        </div>

        <div className="section3-image">
          <img src={sectionImg} alt="Vehiculos electricos Smart Drive" />
        </div>

      </div>


      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-column">
            <h3>SMART DRIVE</h3>
            <p>Movilidad eléctrica inteligente para el futuro.</p>
          </div>

          <div className="footer-column">
            <h4>Enlaces</h4>
            <ul>
              <li>Inicio</li>
              <li>Vehículos</li>
              <li>Planes</li>
              <li>Contacto</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contacto</h4>
            <p>Email: info@smartdrive.com</p>
            <p>Tel: +591 70000000</p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Smart Drive. Todos los derechos reservados.
        </div>
      </footer>

    </div>
  )
}

export default Quienes
