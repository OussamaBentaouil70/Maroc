import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="hero-video-wrapper">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="hero-video"
          src="/assets/shems-teasetr-maroc.mp4" 
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{t('hero.title', 'MOROCCO')}</h1>
          <h2 className="hero-subtitle">{t('hero.subtitle', 'Has never been closer to you!')}</h2>
        </div>
        <div className="hero-form-container">
          <form action="/contact.php" method="POST" className="reservation-form">
            <h3>{t('hero.form_title', 'Quick Reservation')}</h3>
            <input type="hidden" name="subject" value="Hero Quick Reservation" />
            <input type="text" name="name" placeholder={t('form.fullname', 'Full Name')} required />
            <input type="email" name="email" placeholder={t('form.email', 'Email Address')} required />
            <input type="date" name="date" required />
            <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '10px'}}>{t('hero.btn_reserve', 'Reserve Now')}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
