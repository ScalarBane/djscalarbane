import { useState, useEffect, useRef } from 'react';
import AmbientGlow from './components/AmbientGlow';
import Navbar from './components/Navbar';
import VerticalNav from './components/VerticalNav';
import HeroSection from './components/HeroSection';
import BioSection from './components/BioSection';
import VideoSection from './components/VideoSection';
import GallerySection from './components/GallerySection';
import PastPerformancesSection from './components/PastPerformancesSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [currentPanel, setCurrentPanel] = useState(0);
  const sectionRefs = useRef([]);

  const scrollToPanel = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setCurrentPanel(i); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const sections = [
    HeroSection,
    BioSection,
    VideoSection,
    GallerySection,
    PastPerformancesSection,
    ContactSection,
  ];

  return (
    <>
      <AmbientGlow />
      <Navbar onBookings={() => scrollToPanel(5)} />
      <VerticalNav currentPanel={currentPanel} onNavigate={scrollToPanel} />
      <main>
        {sections.map((Section, i) => (
          <div key={i} ref={(el) => { sectionRefs.current[i] = el; }}>
            <Section />
          </div>
        ))}
      </main>
    </>
  );
}
