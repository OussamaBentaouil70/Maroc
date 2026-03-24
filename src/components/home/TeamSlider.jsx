import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TeamSlider() {
  const { t } = useTranslation();
  const team = [
    { name: "Ahmed El Fassi", role: t('team.role_ceo', "CEO & Founder"), img: "/assets/images/team1.jpg" },
    { name: "Sarah Jenkins", role: t('team.role_op', "Operations Manager"), img: "/assets/images/team2.jpg" },
    { name: "Fatima Zahra", role: t('team.role_design', "Lead Experience Designer"), img: "/assets/images/team3.jpg" },
    { name: "Youssef Maaroufi", role: t('team.role_log', "Logistics Coordinator"), img: "/assets/images/team4.jpg" },
    { name: "Karim Safi", role: t('team.role_crm', "Customer Relations"), img: "/assets/images/team5.jpg" }
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container text-center">
        <h2 style={{color: 'var(--primary)', marginBottom: '40px'}}>{t('team.title', 'Our Team')}</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
          }}
          style={{paddingBottom: '50px'}}
        >
          {team.map((member, i) => (
            <SwiperSlide key={i}>
              <div className="team-card">
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
