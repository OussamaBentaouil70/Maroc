import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="text-center">
          <h2 style={{color: 'var(--primary)', marginBottom: '10px'}}>{t('contact.title', 'Get in Touch')}</h2>
          <p style={{marginBottom: '50px'}}>{t('contact.subtitle', 'Ready to plan your next Moroccan experience? We are here to help.')}</p>
        </div>

        <div className="contact-container">
          <div>
            <h3>{t('contact.info_title', 'Contact Information')}</h3>
            <p>{t('contact.info_desc', "Reach out to us for any inquiries, partnerships, or to start planning your custom itinerary. Our multilingual team is available 24/7.")}</p>
            
            <ul className="contact-details-list">
              <li style={{display:'flex', gap:'15px'}}><MapPin color="var(--primary)"/> Bd de la corniche, Casablanca</li>
              <li style={{display:'flex', gap:'15px'}}><Phone color="var(--primary)"/> +212 (0) 5 22 24 52 70</li>
              <li style={{display:'flex', gap:'15px'}}><Mail color="var(--primary)"/> dmc@shemstravel.com</li>
            </ul>
          </div>

          <div className="contact-form-wrapper">
            <h3 style={{marginBottom: '20px'}}>{t('contact.form_title', 'Send us a Message')}</h3>
            <form action="/contact.php" method="POST" className="main-form">
              <input type="text" name="name" placeholder={t('form.fullname', 'Full Name')} required />
              <input type="email" name="email" placeholder={t('form.email', 'Email Address')} required />
              <select name="subject" required>
                <option value="">{t('form.subject_select', 'Select Subject')}</option>
                <option value="Leisure Travel">{t('form.subj_leisure', 'Leisure Travel Inquiry')}</option>
                <option value="Incentive Events">{t('form.subj_incentive', 'Incentive & Events')}</option>
                <option value="Partnership">{t('form.subj_partnership', 'Partnership')}</option>
                <option value="Other">{t('form.subj_other', 'Other')}</option>
              </select>
              <textarea name="message" rows="5" placeholder={t('form.message', 'Your Message')} required></textarea>
              <button type="submit" className="btn-primary" style={{marginTop:'10px'}}>{t('contact.btn_send', 'Send Message')}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
