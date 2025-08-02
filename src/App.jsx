import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CounterSection from './components/CounterSection';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import TeamSection from './components/TeamSection';
import BlogsSection from './components/BlogsSection';
import FAQ from './components/FAQSection';
import Contact from './components/ContactSection';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Gallery />
      <TeamSection />
      <BlogsSection />
      <FAQ />
      <Contact />
    </>
  );
}

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.utils.toArray('.animate-on-scroll').forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Router>
      <div ref={containerRef}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Home />
            </main>
          } />
          <Route path="/blogs/:blogTitle" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;