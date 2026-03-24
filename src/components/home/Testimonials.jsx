import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = [
    { text: t('test.t1', "Shems Incoming Morocco organized our corporate retreat perfectly. Every detail was handled with precision and the activities were unforgettable."), author: "Thomas Müller", company: t('test.c1', "TechNova Solutions, Germany") },
    { text: t('test.t2', "Our family vacation was magical. The local guides were knowledgeable and the riad accommodations were simply stunning."), author: "Sarah Li", company: t('test.c2', "Family of 5, UK") },
    { text: t('test.t3', "As a travel agent, I only partner with the best. Shems Incoming is reliable, responsive, and consistently delivers premium experiences to my clients."), author: "Jean-Pierre Blanc", company: t('test.c3', "Voyages Extra, France") },
    { text: t('test.t4', "The logistics for our 200-person conference in Marrakech were flawless. Highly recommend their incentive travel team!"), author: "Elena Rossi", company: t('test.c4', "Global Events, Italy") }
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container text-center">
        <h2 style={{color: 'var(--primary)', marginBottom: '40px'}}>{t('test.title', 'What Our Clients Say')}</h2>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
             768: { slidesPerView: 2 },
             1024: { slidesPerView: 3 }
          }}
          style={{paddingBottom: '50px'}}
        >
          {testimonials.map((test, i) => (
            <SwiperSlide key={i}>
              <div className="test-card">
                <Quote size={30} color="var(--primary)" style={{opacity: 0.2, marginBottom: '15px'}} />
                <p>"{test.text}"</p>
                <h4>- {test.author}</h4>
                <small style={{display:'block', textAlign:'right', color:'var(--gray)'}}>{test.company}</small>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
