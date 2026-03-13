import { FaInstagram, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from "react-icons/md";
import logo_smart from '../../assets/Logos/LOGO SMART DRIVE.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">

      
      <div className="footer-accent-bar" />

      <div className="footer-inner">

        
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img src={logo_smart} alt="Smart Drive Logo" className="footer-logo" />
          </div>
          <p className="footer-tagline">
            Transformando la logística urbana mediante tecnología eléctrica y propiedad compartida.
          </p>
          <span className="footer-badge">
            <span className="badge-dot" />
            Movilidad Eléctrica
          </span>
        </div>

        
        <div className="footer-divider-v" />

        
        <div className="footer-social">
          <h4 className="footer-col-title">Síguenos</h4>
          <ul className="social-list">
            <li>
              <a href="https://www.instagram.com/smartdrive_elsalvador/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <span className="social-icon-wrap"><FaInstagram /></span>
                <span>Instagram</span>
                <span className="social-arrow">↗</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61579925104197" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <span className="social-icon-wrap"><FaFacebookSquare /></span>
                <span>Facebook</span>
                <span className="social-arrow">↗</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/50361766862" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                <span className="social-icon-wrap"><FaWhatsapp /></span>
                <span>WhatsApp</span>
                <span className="social-arrow">↗</span>
              </a>
            </li>
          </ul>
        </div>

        
        <div className="footer-divider-v" />

        
        <div className="footer-contact">
          <h4 className="footer-col-title">Contacto</h4>
          <ul className="contact-list">
            <li>
              <MdOutlineEmail className="contact-icon" />
              <span>social@tusmartdrive.com</span>
            </li>
            <li>
              <MdOutlinePhone className="contact-icon" />
              <span>+503 6176 6862</span>
            </li>
            <li>
              <MdOutlineLocationOn className="contact-icon" />
              <span>Calle y colonia La Mascota no.316, San Salvador, CP1101</span>
            </li>
          </ul>
        </div>

      </div>

      
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Smart Drive. Todos los derechos reservados.</span>
        <span className="footer-bottom-tag">EV · 100% Eléctrico · Movilidad Sostenible</span>
      </div>

    </footer>
  );
};

export default Footer;