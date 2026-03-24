import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import blogsDataEN from '../data/blogs.json';
import blogsDataFR from '../data/blogs_fr.json';
import './DetailPages.css';

const blogGalleries = {
  '1': [
    'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
    'https://eventdesignmorocco.com/wp-content/uploads/2022/12/eventproduction.jpg',
    'https://seventravel.co.uk/wp-content/uploads/2021/10/Morocco-marrakech-red-streets-building-scaled.jpg',
  ],
  '2': [
    'https://images.unsplash.com/photo-1553551061-f3b185ecff56?auto=format&fit=crop&w=800&q=80',
    'https://e2.hespress.com/wp-content/uploads/2024/07/dakhla-tiznit-highway-900x600.jpg',
    'https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&w=800&q=80',
  ],
  '3': [
    'https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
  ],
  '4': [
    'https://static.yabiladi.com/files/articles/169867_7465faeec23110516ba8a1736133cb5d20250624144107_565.webp',
    'https://eventdesignmorocco.com/wp-content/uploads/2022/12/eventproduction.jpg',
    'https://seventravel.co.uk/wp-content/uploads/2021/10/Morocco-marrakech-red-streets-building-scaled.jpg',
  ],
  '5': [
    'https://e2.hespress.com/wp-content/uploads/2024/07/dakhla-tiznit-highway-900x600.jpg',
    'https://images.unsplash.com/photo-1553551061-f3b185ecff56?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
  ],
  '6': [
    'https://seventravel.co.uk/wp-content/uploads/2021/10/Morocco-marrakech-red-streets-building-scaled.jpg',
    'https://eventdesignmorocco.com/wp-content/uploads/2022/12/eventproduction.jpg',
    'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
  ],
  '7': [
    'https://eventdesignmorocco.com/wp-content/uploads/2022/12/eventproduction.jpg',
    'https://static.yabiladi.com/files/articles/169867_7465faeec23110516ba8a1736133cb5d20250624144107_565.webp',
    'https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&w=800&q=80',
  ],
  '8': [
    'https://images.unsplash.com/photo-1596752763261-002f23b7ac80?auto=format&fit=crop&w=800&q=80',
    'https://e2.hespress.com/wp-content/uploads/2024/07/dakhla-tiznit-highway-900x600.jpg',
    'https://images.unsplash.com/photo-1553551061-f3b185ecff56?auto=format&fit=crop&w=800&q=80',
  ],
};

export default function BlogDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const blogsData = i18n.language === 'fr' ? blogsDataFR : blogsDataEN;
  const blog = blogsData.find(b => b.id === id);

  if(!blog) return <div className="section-padding text-center"><h2>{t('detail.not_found', 'Item not found')}</h2><br/><Link to="/">{t('detail.back', 'Back Home')}</Link></div>;

  return (
    <div className="detail-page">
      <div className="detail-hero" style={{backgroundImage: `url(${blog.image})`}}>
        <div className="detail-hero-overlay"></div>
        <div className="container relative z-10">
          <h1 className="detail-title">{blog.title}</h1>
          <p className="detail-subtitle" style={{color: 'white', fontSize: '1.2rem', marginTop: '10px'}}>{t('blogs.title', 'Morocco in Numbers')}</p>
        </div>
      </div>
      
      <div className="container detail-content-wrapper">
        <div className="detail-main">
          <h2>{blog.title}</h2>
          {blog.detailed_content ? (
            <div className="detail-desc-rich" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
              {blog.detailed_content.map((para, i) => (
                <p key={i} className="detail-desc" style={{ marginBottom: 0 }}>{para}</p>
              ))}
            </div>
          ) : (
            <p className="detail-desc">{blog.description}</p>
          )}

          {/* Image Gallery */}
          {blogGalleries[blog.id] && (
            <div className="detail-images-grid" style={{ marginTop: '40px' }}>
              {blogGalleries[blog.id].map((src, i) => (
                <img key={i} src={src} alt={`${blog.title} ${i + 1}`} />
              ))}
            </div>
          )}

          <div style={{marginTop: '30px', padding: '25px', background: 'var(--white)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)'}}>
             <h4 style={{marginBottom: '10px', color: 'var(--primary)'}}>{t('blog_detail.why_choose', 'Why choose this experience?')}</h4>
             <p style={{fontSize: '1.1rem', color: 'var(--gray)', lineHeight: '1.8'}}>{t('blog_detail.p1', "Morocco is incredibly diverse. This fascinating aspect of our country draws visitors from around the world. We highly recommend exploring this unique attribute to truly appreciate the depth of Moroccan history, culture, and nature. Shems Incoming Morocco can organize custom itineraries highlighting exactly these kinds of wonders!")}</p>
             <p style={{marginTop: '15px', fontSize: '1.1rem', color: 'var(--gray)', lineHeight: '1.8'}}>{t('blog_detail.p2', "With our expertise, our 24/7 dedicated support team, and our vast network of local experts, discovering these numbers and what they mean in reality is easier than ever before. Let us seamlessly integrate these highlights into your journey.")}</p>
          </div>
        </div>
        
        <div className="detail-sidebar">
          <div className="request-form-card">
            <h3>{t('blog_detail.contact_title', 'Contact Us to Learn More')}</h3>
            <p>{t('blog_detail.contact_desc', 'Ready to plan your trip around these highlights? Reach out.')}</p>
            <form action="/contact.php" method="POST" className="sidebar-form" style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
              <input type="hidden" name="subject" value={`Inquiry regarding: ${blog.title}`} />
              <input type="text" name="name" placeholder={t('form.fullname', 'Full Name')} required style={{padding: '12px', border: '1px solid #ddd', borderRadius: '8px'}}/>
              <input type="email" name="email" placeholder={t('form.email', 'Email Address')} required style={{padding: '12px', border: '1px solid #ddd', borderRadius: '8px'}}/>
              <textarea name="message" rows="4" placeholder={t('form.questions', 'Your questions or requests')} required style={{padding: '12px', border: '1px solid #ddd', borderRadius: '8px'}}></textarea>
              <button type="submit" className="btn-primary" style={{width:'100%'}}>{t('contact.btn_send', 'Send Message')}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
