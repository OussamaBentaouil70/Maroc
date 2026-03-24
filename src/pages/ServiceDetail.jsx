import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import servicesDataEN from '../data/services.json';
import categoriesDataEN from '../data/categories.json';
import servicesDataFR from '../data/services_fr.json';
import categoriesDataFR from '../data/categories_fr.json';
import './DetailPages.css';

// Curated Unsplash image galleries per service/category
const galleryImages = {
  // services by numeric id
  '1': [
    'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    'https://static.wixstatic.com/media/8ced09_28afc42ea8f940f7bbef94141f3ac71b~mv2.png/v1/fill/w_980,h_551,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8ced09_28afc42ea8f940f7bbef94141f3ac71b~mv2.png',
  ],
  '2': [
    'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&w=800&q=80',
    'https://static.yabiladi.com/files/articles/169867_7465faeec23110516ba8a1736133cb5d20250624144107_565.webp',
  ],
  '3': [
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    'https://seventravel.co.uk/wp-content/uploads/2021/10/Morocco-marrakech-red-streets-building-scaled.jpg',
    'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
  ],
  '4': [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    'https://eventdesignmorocco.com/wp-content/uploads/2022/12/eventproduction.jpg',
    'https://static.wixstatic.com/media/8ced09_28afc42ea8f940f7bbef94141f3ac71b~mv2.png/v1/fill/w_980,h_551,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8ced09_28afc42ea8f940f7bbef94141f3ac71b~mv2.png',
  ],
  '5': [
    'https://hs-conciergerie.com/wp-content/uploads/2025/12/hs-conciergerie-image-3-scaled.png',
    'https://static.yabiladi.com/files/articles/169867_7465faeec23110516ba8a1736133cb5d20250624144107_565.webp',
    'https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&w=800&q=80',
  ],
  '6': [
    'https://images.unsplash.com/photo-1515386474292-47555758ef2e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1527338611623-4e242563220a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
  ],
  '7': [
    'https://static.wixstatic.com/media/8ced09_28afc42ea8f940f7bbef94141f3ac71b~mv2.png/v1/fill/w_980,h_551,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8ced09_28afc42ea8f940f7bbef94141f3ac71b~mv2.png',
    'https://seventravel.co.uk/wp-content/uploads/2021/10/Morocco-marrakech-red-streets-building-scaled.jpg',
    'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
  ],
  '8': [
    'https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?b=1&s=612x612&w=0&k=20&c=E68ksW1MTzGZGHOxSYHu-y9I2Nv0iqbJCkER9e3K7TM=',
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&w=800&q=80',
  ],
  // leisure categories
  'circuits': [
    'https://e2.hespress.com/wp-content/uploads/2024/07/dakhla-tiznit-highway-900x600.jpg',
    'https://static.yabiladi.com/files/articles/169867_7465faeec23110516ba8a1736133cb5d20250624144107_565.webp',
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
  ],
  'concierge': [
    'https://images.unsplash.com/photo-1515386474292-47555758ef2e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://hs-conciergerie.com/wp-content/uploads/2025/12/hs-conciergerie-image-3-scaled.png',
    'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
  ],
  'experiences': [
    'https://seventravel.co.uk/wp-content/uploads/2021/10/Morocco-marrakech-red-streets-building-scaled.jpg',
    'https://images.unsplash.com/photo-1527338611623-4e242563220a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&w=800&q=80',
  ],
  'transportation': [
    'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1515386474292-47555758ef2e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  'event-planning': [
    'https://static.wixstatic.com/media/8ced09_28afc42ea8f940f7bbef94141f3ac71b~mv2.png/v1/fill/w_980,h_551,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8ced09_28afc42ea8f940f7bbef94141f3ac71b~mv2.png',
    'https://eventdesignmorocco.com/wp-content/uploads/2022/12/eventproduction.jpg',
    'https://static.yabiladi.com/files/articles/169867_7465faeec23110516ba8a1736133cb5d20250624144107_565.webp',
  ],
  'travel-logistics': [
    'https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?b=1&s=612x612&w=0&k=20&c=E68ksW1MTzGZGHOxSYHu-y9I2Nv0iqbJCkER9e3K7TM=',
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&w=800&q=80',
  ],
  'program-development': [
    'https://images.unsplash.com/photo-1527338611623-4e242563220a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://e2.hespress.com/wp-content/uploads/2024/07/dakhla-tiznit-highway-900x600.jpg',
    'https://seventravel.co.uk/wp-content/uploads/2021/10/Morocco-marrakech-red-streets-building-scaled.jpg',
  ],
};

const defaultGallery = [
  'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
  'https://static.yabiladi.com/files/articles/169867_7465faeec23110516ba8a1736133cb5d20250624144107_565.webp',
];

export default function ServiceDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  
  const servicesData = i18n.language === 'fr' ? servicesDataFR : servicesDataEN;
  const categoriesData = i18n.language === 'fr' ? categoriesDataFR : categoriesDataEN;

  let service = null;
  if(id.startsWith('service_')){
    service = servicesData.find(s => s.id === id.replace('service_',''));
  } else {
    service = categoriesData.leisure.find(s => s.id === id) || categoriesData.incentive.find(s => s.id === id);
  }

  if(!service) return <div className="section-padding text-center"><h2>{t('detail.not_found', 'Item not found')}</h2><br/><Link to="/">{t('detail.back', 'Back Home')}</Link></div>;

  return (
    <div className="detail-page">
      <div className="detail-hero" style={{backgroundImage: `url(${service.image})`}}>
        <div className="detail-hero-overlay"></div>
        <div className="container relative z-10">
          <h1 className="detail-title">{service.title}</h1>
          {service.subtitle && <p className="detail-subtitle" style={{color: 'white', fontSize: '1.2rem', marginTop: '10px'}}>{service.subtitle}</p>}
        </div>
      </div>
      
      <div className="container detail-content-wrapper">
        <div className="detail-main">
          <h2>{t('detail.about_service', 'About this Service')}</h2>
          {service.detailed_content ? (
            <div className="detail-desc-rich" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
              {service.detailed_content.map((para, i) => (
                <p key={i} className="detail-desc" style={{ marginBottom: 0 }}>{para}</p>
              ))}
            </div>
          ) : (
            <p className="detail-desc">{service.description || t('detail.desc_fallback', "Detailed description is being updated. Experience the best of Morocco with us.")}</p>
          )}

          {/* Image Gallery */}
          <div className="detail-images-grid" style={{ marginTop: '40px' }}>
            {(galleryImages[service.id] || defaultGallery).map((src, i) => (
              <img key={i} src={src} alt={`${service.title} ${i + 1}`} />
            ))}
          </div>
        </div>
        
        <div className="detail-sidebar">
          <div className="request-form-card">
            <h3>{t('detail.request_title', 'Request this Service')}</h3>
            <p>{t('detail.request_desc', 'Fill out the form below to tailor this experience to your needs.')}</p>
            <form action="/contact.php" method="POST" className="sidebar-form" style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
              <input type="hidden" name="subject" value={`Service Request: ${service.title}`} />
              <input type="text" name="name" placeholder={t('form.fullname', 'Full Name')} required style={{padding: '12px', border: '1px solid #ddd', borderRadius: '8px'}}/>
              <input type="email" name="email" placeholder={t('form.email', 'Email Address')} required style={{padding: '12px', border: '1px solid #ddd', borderRadius: '8px'}}/>
              <input type="date" name="date" required style={{padding: '12px', border: '1px solid #ddd', borderRadius: '8px'}}/>
              <textarea name="requirements" rows="4" placeholder={t('form.requirements', 'Any specific requirements?')} style={{padding: '12px', border: '1px solid #ddd', borderRadius: '8px'}}></textarea>
              <button type="submit" className="btn-primary" style={{width:'100%'}}>{t('detail.btn_send', 'Send Request')}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
