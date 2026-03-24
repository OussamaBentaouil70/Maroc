import { useTranslation } from 'react-i18next';

export default function WhyMorocco() {
  const { t } = useTranslation();
  const reasons = [
    { title: t('why.r1_title', "Strategic Location"), desc: t('why.r1_desc', "Easily accessible from Europe and major international hubs."), img: "/assets/images/why1.jpg" },
    { title: t('why.r2_title', "Diverse Landscapes"), desc: t('why.r2_desc', "From sweeping Sahara dunes to snow-capped Atlas mountains."), img: "/assets/images/why2.jpg" },
    { title: t('why.r3_title', "Rich Culture & History"), desc: t('why.r3_desc', "Centuries of heritage preserved in enchanting medinas and palaces."), img: "/assets/images/why3.jpg" },
    { title: t('why.r4_title', "Modern Infrastructure"), desc: t('why.r4_desc', "World-class facilities meeting the highest international standards."), img: "/assets/images/why4.jpg" },
    { title: t('why.r5_title', "Authentic Hospitality"), desc: t('why.r5_desc', "Warm, welcoming locals who make you feel right at home."), img: "/assets/images/why5.jpg" },
    { title: t('why.r6_title', "Year-Round Climate"), desc: t('why.r6_desc', "Perfect weather guaranteeing sunshine in almost every season."), img: "/assets/images/why6.jpg" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container text-center">
        <h2 style={{color: 'var(--primary)', marginBottom: '40px'}}>{t('why.title', 'Why Morocco?')}</h2>
        <div className="why-grid">
          {reasons.map((r, i) => (
            <div key={i} className="why-card">
              <img src={r.img} alt={r.title} />
              <div className="why-overlay">
                <h3>{r.title}</h3>
                <p className="why-desc">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
