import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import categoriesDataEN from '../../data/categories.json';
import categoriesDataFR from '../../data/categories_fr.json';
import './HomeComponents.css';

export default function CategorySplit() {
  const { t, i18n } = useTranslation();
  const categoriesData = i18n.language === 'fr' ? categoriesDataFR : categoriesDataEN;
  const [activeTab, setActiveTab] = useState('leisure');

  return (
    <section className="section-padding bg-white">
      <div className="container text-center">
        <h2 style={{color: 'var(--primary)', marginBottom: '30px'}}>{t('category.title', 'Explore Our Expertise')}</h2>
        <div className="category-tabs">
          <button className={`cat-btn ${activeTab === 'leisure' ? 'active' : ''}`} onClick={() => setActiveTab('leisure')}>
            {t('category.leisure', 'LEISURE TRAVEL')}
          </button>
          <button className={`cat-btn ${activeTab === 'incentive' ? 'active' : ''}`} onClick={() => setActiveTab('incentive')}>
            {t('category.incentive', 'INCENTIVE AND EVENTS')}
          </button>
        </div>
        
        <div className="category-grid">
          {categoriesData[activeTab].map((srv, i) => (
            <Link to={`/services/${srv.id}`} key={i} className="cat-card">
              <img src={srv.image} alt={srv.title} />
              <div className="cat-card-overlay">
                <span className="cat-card-title">{srv.title}</span>
                <p>{t('category.discover', 'Discover More')} &rarr;</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
