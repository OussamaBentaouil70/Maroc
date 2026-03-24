import { Bed, Users, Briefcase, Map } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Stats() {
  const { t } = useTranslation();
  const stats = [
    { icon: <Bed size={40}/>, number: '+18500', label: t('stats.stays', 'OVERNIGHT STAYS') },
    { icon: <Users size={40}/>, number: '+20', label: t('stats.experts', 'MULTILINGUAL EXPERTS') },
    { icon: <Briefcase size={40}/>, number: '+3500', label: t('stats.visitors', 'VISITORS') },
    { icon: <Map size={40}/>, number: '1078', label: t('stats.products', 'TOURS AND PRODUCTS') },
  ];

  return (
    <section className="stats-section section-padding">
      <div className="container stats-container">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
