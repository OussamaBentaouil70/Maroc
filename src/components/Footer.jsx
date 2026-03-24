import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import mainLogo from '/assets/images/logos/Logos-Incoming-Morocco-Paysage-1.png';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-col">
          <Link to="/" className="navbar-logo" style={{color: 'white', display: 'block', marginBottom: '20px'}}>
            <img src={mainLogo} alt="Shems Incoming Morocco" style={{maxWidth: '220px', filter: 'brightness(0) invert(1)'}} />
          </Link>
          <p style={{color: 'var(--gray)'}}>{t('footer.tagline', 'Your premier DMC partner for exceptional Moroccan experiences.')}</p>
        </div>
        
        <div className="footer-col">
          <h4>{t('footer.quick_links', 'Quick Links')}</h4>
          <ul>
            <li><Link to="/">{t('nav.home', 'Home')}</Link></li>
            <li><a href="/#about">{t('nav.about', 'About Us')}</a></li>
            <li><a href="/#services">{t('nav.services', 'Services')}</a></li>
            <li><a href="/#blogs">{t('nav.blogs', 'Morocco in Numbers')}</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>{t('footer.contact', 'Contact')}</h4>
          <ul className="footer-contact">
            <li><MapPin size={18} /> Bd de la corniche, Casablanca</li>
            <li><Phone size={18} /> +212 (0) 5 22 24 52 70</li>
            <li><Mail size={18} /> dmc@shemstravel.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shems Incoming Morocco. {t('footer.rights', 'All rights reserved. Designed for excellence.')}</p>
      </div>
    </footer>
  );
}
