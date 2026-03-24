import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';

export default function PartnersSlider() {
  const { t } = useTranslation();
  const partners = [
    "/assets/images/logos/iata.png",
    "/assets/images/logos/marriott.png",
    "/assets/images/logos/tui.png",
    "/assets/images/logos/iata.png",
    "/assets/images/logos/marriott.png",
    "/assets/images/logos/tui.png",
    "/assets/images/logos/iata.png",
    "/assets/images/logos/marriott.png",
    "/assets/images/logos/tui.png"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container text-center">
        <h2 style={{color: 'var(--primary)', marginBottom: '40px'}}>{t('partners.title', 'Where to meet us')}</h2>
        
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3000}
            breakpoints={{
               640: { slidesPerView: 3 },
               900: { slidesPerView: 4 },
               1200: { slidesPerView: 5 }
            }}
            className="partners-track"
          >
            {partners.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="partner-logo" style={{display:'flex', justifyContent:'center'}}>
                  <img src={logo} alt={`Partner ${i}`} style={{maxHeight:'100px', maxWidth:'150px', objectFit:'contain', filter:'grayscale(100%) opacity(60%)', transition:'var(--transition)'}} onMouseEnter={(e)=>e.target.style.filter='grayscale(0) opacity(100%)'} onMouseLeave={(e)=>e.target.style.filter='grayscale(100%) opacity(60%)'}/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
