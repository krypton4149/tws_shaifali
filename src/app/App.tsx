import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SEO from './components/SEO';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isLowPerfMode, setIsLowPerfMode] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px), (pointer: coarse), (prefers-reduced-motion: reduce)');
    const update = () => setIsLowPerfMode(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  return (
    <BrowserRouter>
      <LoadingScreen />
      <div className="relative min-h-screen bg-black text-foreground overflow-x-hidden">
        <SEO />
        {!isLowPerfMode ? (
          <>
            <AnimatedBackground />
            <FloatingParticles />
          </>
        ) : null}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
