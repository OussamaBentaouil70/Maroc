import { useTranslation } from 'react-i18next';

export default function About1() {
  const { t } = useTranslation();
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container about-container">
        <div className="about-image">
          <img src="/assets/images/stock/marrakech_medina.png" alt="About Morocco" />
        </div>
        <div className="about-text">
          <h2 style={{color: 'var(--primary)', marginBottom: '10px'}}>{t('about1.title', 'Welcome to Shems Incoming Morocco')}</h2>
          <h3 style={{fontSize: '1.8rem', marginBottom: '20px', fontWeight: 600}}>{t('about1.subtitle', 'Your Premier Destination Management Company')}</h3>
          <p>{t('about1.desc', 'We are your premier Destination Management Company (DMC) operating across Morocco, specializing in crafting unforgettable, tailor-made experiences. With local expertise and a passion for perfection, we turn your Moroccan dreams into reality.')}</p>
          <a href="#services" className="btn-primary" style={{marginTop: '20px'}}>{t('about1.btn', 'Learn More About Us')}</a>
        </div>
      </div>
    </section>
  );
}
