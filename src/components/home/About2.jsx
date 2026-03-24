import { useTranslation } from 'react-i18next';

export default function About2() {
  const { t } = useTranslation();
  return (
    <section className="section-padding bg-white">
      <div className="container about2-container">
        <div className="about2-item">
          <img src="/assets/images/stock/chefchaouen.png" alt="Culture" />
          <div className="about2-text">
            <h3>{t('about2.culture_title', 'Rich Cultural Heritage')}</h3>
            <p>{t('about2.culture_desc', 'Immerse yourself in a vibrant tapestry of history, art, and tradition that has evolved over centuries. Our curated cultural tours bring the magic of ancient medinas and majestic palaces to life.')}</p>
          </div>
        </div>
        <div className="about2-item">
          <img src="/assets/images/stock/sahara_dunes.png" alt="Landscapes" />
          <div className="about2-text">
            <h3>{t('about2.landscape_title', 'Breathtaking Landscapes')}</h3>
            <p>{t('about2.landscape_desc', 'From the sweeping Sahara dunes to the snow-capped Atlas Mountains, explore nature in its purest form. We offer exclusive access to hidden oases and picturesque valleys.')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
