import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import servicesDataEN from '../../data/services.json';
import servicesDataFR from '../../data/services_fr.json';
import './HomeComponents.css';

export default function ServicesGrid() {
  const { t, i18n } = useTranslation();
  const servicesData = i18n.language === 'fr' ? servicesDataFR : servicesDataEN;

  return (
    <section id="services" className="section-padding bg-light">
      <div className="container text-center">
        <h2 style={{color: 'var(--primary)', marginBottom: '10px'}}>{t('services.title', 'Our Main Services')}</h2>
        <p style={{color: 'var(--gray)', marginBottom: '40px'}}>{t('services.subtitle', 'Discover the core offerings that make us the leading DMC in Morocco.')}</p>
        <div className="services-grid">
          {servicesData.map((srv, i) => (
            <Link to={`/services/service_${srv.id}`} key={i} className="service-card">
              <div className="service-card-img">
                <img src={srv.image} alt={srv.title} />
                <div className="service-card-overlay">
                  <span>{t('services.view', 'View Details')}</span>
                </div>
              </div>
              <div className="service-card-content">
                <h3>{srv.title}</h3>
                <p>{srv.subtitle || t('services.fallback', "Experience the best of Morocco with our dedicated team.")}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/#contact" className="btn-primary" style={{marginTop: '40px', display: 'inline-block'}}>{t('services.btn_request', 'Request a Service')}</Link>
      </div>
    </section>
  );
}
