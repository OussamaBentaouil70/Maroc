import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './GetInspired.css';

const GetInspired = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'plan5',
      title: t('get_inspired.plan5.title'),
      duration: t('get_inspired.plan5.duration'),
      badge: '🌙',
      highlight: t('get_inspired.plan5.highlight'),
      days: [
        { day: 'Day 1', location: t('get_inspired.plan5.days.1.location'), desc: t('get_inspired.plan5.days.1.desc') },
        { day: 'Day 2', location: t('get_inspired.plan5.days.2.location'), desc: t('get_inspired.plan5.days.2.desc') },
        { day: 'Day 3', location: t('get_inspired.plan5.days.3.location'), desc: t('get_inspired.plan5.days.3.desc') },
        { day: 'Day 4', location: t('get_inspired.plan5.days.4.location'), desc: t('get_inspired.plan5.days.4.desc') },
        { day: 'Day 5', location: t('get_inspired.plan5.days.5.location'), desc: t('get_inspired.plan5.days.5.desc') },
        { day: 'Day 6', location: t('get_inspired.plan5.days.6.location'), desc: t('get_inspired.plan5.days.6.desc') }
      ]
    },
    {
      id: 'plan8',
      title: t('get_inspired.plan8.title'),
      duration: t('get_inspired.plan8.duration'),
      badge: '🐪',
      highlight: t('get_inspired.plan8.highlight'),
      days: [
        { day: 'Day 1', location: t('get_inspired.plan8.days.1.location'), desc: t('get_inspired.plan8.days.1.desc') },
        { day: 'Day 2', location: t('get_inspired.plan8.days.2.location'), desc: t('get_inspired.plan8.days.2.desc') },
        { day: 'Day 3', location: t('get_inspired.plan8.days.3.location'), desc: t('get_inspired.plan8.days.3.desc') },
        { day: 'Day 4', location: t('get_inspired.plan8.days.4.location'), desc: t('get_inspired.plan8.days.4.desc') },
        { day: 'Day 5', location: t('get_inspired.plan8.days.5.location'), desc: t('get_inspired.plan8.days.5.desc') },
        { day: 'Day 6', location: t('get_inspired.plan8.days.6.location'), desc: t('get_inspired.plan8.days.6.desc') },
        { day: 'Day 7', location: t('get_inspired.plan8.days.7.location'), desc: t('get_inspired.plan8.days.7.desc') },
        { day: 'Day 8', location: t('get_inspired.plan8.days.8.location'), desc: t('get_inspired.plan8.days.8.desc') }
      ]
    },
    {
      id: 'plan10',
      title: t('get_inspired.plan10.title'),
      duration: t('get_inspired.plan10.duration'),
      badge: '✨',
      highlight: t('get_inspired.plan10.highlight'),
      days: [
        { day: 'Day 1', location: t('get_inspired.plan10.days.1.location'), desc: t('get_inspired.plan10.days.1.desc') },
        { day: 'Day 2', location: t('get_inspired.plan10.days.2.location'), desc: t('get_inspired.plan10.days.2.desc') },
        { day: 'Day 3', location: t('get_inspired.plan10.days.3.location'), desc: t('get_inspired.plan10.days.3.desc') },
        { day: 'Day 4', location: t('get_inspired.plan10.days.4.location'), desc: t('get_inspired.plan10.days.4.desc') },
        { day: 'Day 5', location: t('get_inspired.plan10.days.5.location'), desc: t('get_inspired.plan10.days.5.desc') },
        { day: 'Day 6', location: t('get_inspired.plan10.days.6.location'), desc: t('get_inspired.plan10.days.6.desc') },
        { day: 'Day 7', location: t('get_inspired.plan10.days.7.location'), desc: t('get_inspired.plan10.days.7.desc') },
        { day: 'Day 8', location: t('get_inspired.plan10.days.8.location'), desc: t('get_inspired.plan10.days.8.desc') },
        { day: 'Day 9', location: t('get_inspired.plan10.days.9.location'), desc: t('get_inspired.plan10.days.9.desc') },
        { day: 'Day 10', location: t('get_inspired.plan10.days.10.location'), desc: t('get_inspired.plan10.days.10.desc') },
        { day: 'Day 11', location: t('get_inspired.plan10.days.11.location'), desc: t('get_inspired.plan10.days.11.desc') }
      ]
    }
  ];

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
    document.body.style.overflow = 'auto';
  };

  const handleReserve = () => {
    handleCloseModal();
    navigate('/#contact');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="get-inspired-page">
      {/* Page Hero */}
      <div className="inspired-hero">
        <div className="inspired-hero-overlay" />
        <div className="inspired-hero-content">
          <p className="inspired-hero-eyebrow">{t('get_inspired.eyebrow')}</p>
          <h1 className="inspired-hero-title">{t('get_inspired.title')}</h1>
          <p className="inspired-hero-subtitle">{t('get_inspired.subtitle')}</p>
        </div>
      </div>

      {/* Plans Grid */}
      <section className="get-inspired-section section-padding">
        <div className="get-inspired-container container">
          <div className="plans-grid">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="plan-card"
                onClick={() => handleOpenModal(plan)}
              >
                <div className="plan-card-inner">
                  <div className="plan-badge">{plan.badge}</div>
                  <div className="plan-duration">{plan.duration}</div>
                  <h3 className="plan-title">{plan.title}</h3>
                  <p className="plan-highlight">{plan.highlight}</p>
                  <button className="view-plan-btn">{t('get_inspired.view_plan')}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPlan && (
        <div className="menu-modal-overlay" onClick={handleCloseModal}>
          <div className="menu-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={handleCloseModal}>&times;</button>
            <div className="menu-modal-content">
              <div className="menu-header">
                <p className="menu-eyebrow">{t('get_inspired.sample_itinerary')}</p>
                <h3 className="menu-title">{selectedPlan.title}</h3>
                <div className="menu-duration">{selectedPlan.duration}</div>
                <div className="menu-decorator">
                  <span>&#10061;</span><hr /><span>&#10061;</span>
                </div>
              </div>

              <div className="menu-body">
                {selectedPlan.days.map((day, idx) => (
                  <div key={idx} className="menu-item-row">
                    <div className="menu-item-day">
                      <span className="day-label">{day.day}</span>
                    </div>
                    <div className="menu-item-details">
                      <h4 className="item-location">{day.location}</h4>
                      <p className="item-desc">{day.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="menu-footer">
                <p className="bon-voyage">{t('get_inspired.footer_text')}</p>
                <button className="reserve-itinerary-btn" onClick={handleReserve}>
                  {t('get_inspired.reserve_btn')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetInspired;
