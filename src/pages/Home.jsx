import Hero from '../components/home/Hero';
import About1 from '../components/home/About1';
import Stats from '../components/home/Stats';
import About2 from '../components/home/About2';
import ServicesGrid from '../components/home/ServicesGrid';
import CategorySplit from '../components/home/CategorySplit';
import BlogsGrid from '../components/home/BlogsGrid';
import WhyMorocco from '../components/home/WhyMorocco';
import TeamSlider from '../components/home/TeamSlider';
import PartnersSlider from '../components/home/PartnersSlider';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';
import './Home.css';
import '../components/home/HomeComponents.css';
import '../components/home/BottomComponents.css';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <About1 />
      <Stats />
      <About2 />
      <ServicesGrid />
      <CategorySplit />
      <BlogsGrid />
      <WhyMorocco />
      <TeamSlider />
      <PartnersSlider />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
