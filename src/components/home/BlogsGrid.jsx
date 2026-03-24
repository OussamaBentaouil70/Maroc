import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import blogsDataEN from '../../data/blogs.json';
import blogsDataFR from '../../data/blogs_fr.json';
import './HomeComponents.css';

export default function BlogsGrid() {
  const { t, i18n } = useTranslation();
  const blogsData = i18n.language === 'fr' ? blogsDataFR : blogsDataEN;

  return (
    <section id="blogs" className="section-padding bg-light">
      <div className="container text-center">
        <h2 style={{color: 'var(--primary)', marginBottom: '40px'}}>{t('blogs.title', 'Morocco in Numbers')}</h2>
        <p style={{maxWidth: '600px', margin: '0 auto 40px'}}>{t('blogs.subtitle', 'Discover what makes Morocco a truly unique destination worldwide.')}</p>
        
        <div className="blogs-grid">
          {blogsData.map((blog, i) => (
            <Link to={`/blogs/${blog.id}`} key={i} className="blog-card">
              <div className="blog-card-img">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-card-content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <span className="read-more">{t('blogs.read_more', 'Read More')} <ArrowRight size={16} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
