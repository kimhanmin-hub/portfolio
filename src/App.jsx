import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen'; 
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const aboutRef = useRef(null);
  const eyesRef = useRef(null);
  const featuredRef = useRef(null);
  const cardsRef = useRef(null);
  const footerRef = useRef(null);

  const sections = [aboutRef, eyesRef, footerRef, cardsRef, featuredRef];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false); 
          return 100;
        }
        return prev + 1; 
      });
    }, 6); // 0.3초마다 진행률 증가

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    // Locomotive Scroll 초기화
    if (!loading) {
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, [loading]);

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      {loading ? (
        <LoadingScreen progress={progress} />
      ) : (
        <div data-scroll-container>
          <Navbar sections={sections} />
          <LandingPage />
          <div ref={aboutRef}>
            <Marquee />
            <About />
          </div>
          <div ref={eyesRef}>
            <Eyes />
          </div>
          <div ref={featuredRef}>
            <Featured />
          </div>
          <div ref={cardsRef}>
            <Cards />
          </div>
          <div ref={footerRef}>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
