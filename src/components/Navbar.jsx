import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import categoriesDataEN from '../data/categories.json';
import blogsDataEN from '../data/blogs.json';
import servicesDataEN from '../data/services.json';
import categoriesDataFR from '../data/categories_fr.json';
import blogsDataFR from '../data/blogs_fr.json';
import servicesDataFR from '../data/services_fr.json';
import mainLogo from '/assets/images/logos/Logos-Incoming-Morocco-Paysage-1.png';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [langDropdown, setLangDropdown] = useState(false);

  const currentLang = i18n.language || 'en';
  const categoriesData = currentLang === 'fr' ? categoriesDataFR : categoriesDataEN;
  const blogsData = currentLang === 'fr' ? blogsDataFR : blogsDataEN;
  const servicesData = currentLang === 'fr' ? servicesDataFR : servicesDataEN;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const handleMouseEnter = (name) => {
    if (window.innerWidth > 900) setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 900) setActiveDropdown(null);
  };

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setLangDropdown(false);
    setIsOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={mainLogo} alt="Shems Incoming Morocco" style={{maxWidth: '180px'}} />
        </Link>
        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>{t('nav.home', 'Home')}</Link>
          <a href="/#about" onClick={() => setIsOpen(false)}>{t('nav.about', 'About Us')}</a>
          
          {/* Services Dropdown */}
          <div 
            className="nav-item-dropdown" 
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="nav-item-header" onClick={() => toggleDropdown('services')}>
              <a href="/#services" onClick={(e) => { if(window.innerWidth <= 900) e.preventDefault() }}>{t('nav.services', 'Services')}</a>
              <ChevronDown size={16} className={`dropdown-icon ${activeDropdown === 'services' ? 'rotate' : ''}`} />
            </div>
            {activeDropdown === 'services' && (
              <div className="dropdown-menu mega-menu">
                <div className="mega-menu-section">
                  <h4>{t('nav.general_services', 'General Services')}</h4>
                  <ul>
                    {servicesData.slice(0, 4).map(srv => (
                      <li key={srv.id}><Link to={`/services/service_${srv.id}`} onClick={() => setIsOpen(false)}>{srv.title}</Link></li>
                    ))}
                  </ul>
                </div>
                <div className="mega-menu-section">
                  <h4>{t('nav.leisure', 'Leisure Travel')}</h4>
                  <ul>
                    {categoriesData.leisure.map(srv => (
                      <li key={srv.id}><Link to={`/services/${srv.id}`} onClick={() => setIsOpen(false)}>{srv.title}</Link></li>
                    ))}
                  </ul>
                </div>
                <div className="mega-menu-section">
                  <h4>{t('nav.incentive', 'Incentive & Events')}</h4>
                  <ul>
                    {categoriesData.incentive.map(srv => (
                      <li key={srv.id}><Link to={`/services/${srv.id}`} onClick={() => setIsOpen(false)}>{srv.title}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Blogs Dropdown */}
          <div 
            className="nav-item-dropdown"
            onMouseEnter={() => handleMouseEnter('blogs')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="nav-item-header" onClick={() => toggleDropdown('blogs')}>
              <a href="/#blogs" onClick={(e) => { if(window.innerWidth <= 900) e.preventDefault() }}>{t('nav.blogs', 'Morocco in Numbers')}</a>
              <ChevronDown size={16} className={`dropdown-icon ${activeDropdown === 'blogs' ? 'rotate' : ''}`} />
            </div>
            {activeDropdown === 'blogs' && (
              <div className="dropdown-menu simple-menu">
                <ul>
                  {blogsData.map(blog => (
                    <li key={blog.id}><Link to={`/blogs/${blog.id}`} onClick={() => setIsOpen(false)}>{blog.title}</Link></li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/get-inspired" onClick={() => setIsOpen(false)} style={{fontWeight: 600, color: 'var(--primary)'}}>{t('nav.get_inspired', 'Get Inspired')}</Link>

          <a href="/#contact" className="btn-primary" onClick={() => setIsOpen(false)}>{t('nav.contact', 'Contact Us')}</a>
          
          {/* Language Switcher */}
          <div className="lang-switcher" style={{position: 'relative'}}>
            <button 
              onClick={() => setLangDropdown(!langDropdown)}
              style={{background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', fontWeight: 600, color: 'var(--dark)'}}
            >
              <Globe size={18} /> {currentLang.toUpperCase()}
            </button>
            {langDropdown && (
              <div style={{position: 'absolute', top: '100%', right: 0, background: 'white', border: '1px solid #eee', borderRadius: '4px', padding: '5px', display: 'flex', flexDirection: 'column', gap: '5px', zIndex: 1100}}>
                <button onClick={() => changeLang('en')} style={{background: 'none', border: 'none', padding: '5px 15px', cursor: 'pointer', textAlign: 'left', fontWeight: currentLang === 'en' ? 'bold' : 'normal'}}>EN</button>
                <button onClick={() => changeLang('fr')} style={{background: 'none', border: 'none', padding: '5px 15px', cursor: 'pointer', textAlign: 'left', fontWeight: currentLang === 'fr' ? 'bold' : 'normal'}}>FR</button>
              </div>
            )}
          </div>
        </nav>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
