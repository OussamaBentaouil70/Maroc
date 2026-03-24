import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import BlogDetail from './pages/BlogDetail';
import GetInspiredPage from './pages/GetInspiredPage';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/get-inspired" element={<GetInspiredPage />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
