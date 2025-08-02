import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const logoRef = useRef(null);
  const statsContainerRef = useRef(null);
  const animationProgress = useRef(0);
  const particlesRef = useRef(null);

  const statsData = [
    { value: "30+", label: "Events", icon: "📆", description: "Workshops, competitions & sessions" },
    { value: "10+", label: "Expert Talks", icon: "🎤", description: "Industry leaders sharing insights" },
    { value: "1000+", label: "Students", icon: "👥", description: "Active community members" },
    { value: "4.8", label: "Avg Rating", icon: "⭐", description: "Satisfaction with our events" },
    { value: "15+", label: "Projects", icon: "💻", description: "Innovative solutions developed" }
  ];

  useEffect(() => {
    // Floating particles animation
    gsap.utils.toArray(".floating-element").forEach(el => {
      gsap.to(el, {
        y: gsap.utils.random(10, 20),
        duration: gsap.utils.random(4, 8),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    });
    if (!particlesRef.current) return;
    
    // GSAP animations
    const tl = gsap.timeline();
    
    // Floating particles
    const particles = particlesRef.current.querySelectorAll('.particle');
    particles.forEach(particle => {
      gsap.fromTo(particle,
        { 
          x: gsap.utils.random(-100, 100),
          y: gsap.utils.random(-100, 100),
          opacity: 0,
          scale: 0.2
        },
        {
          scale: 1,
          opacity: 0.4,
          duration: gsap.utils.random(1.5, 3),
          x: () => gsap.utils.random(-80, 80),
          y: () => gsap.utils.random(-80, 80),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        }
      );
    });
    // Logo floating animation
    gsap.to(logoRef.current, {
      y: 15,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    // Scroll-triggered animations
    gsap.to(".deco-1", {
      rotate: 10,
      scrollTrigger: {
        trigger: ".stats-wrapper",
        start: "top bottom",
        scrub: 1
      }
    });

    gsap.to(".deco-2", {
      rotate: -15,
      scrollTrigger: {
        trigger: ".stats-wrapper",
        start: "top bottom",
        scrub: 1
      }
    });

    // Cleanup
    return () => {
      gsap.killTweensOf([".floating-element", logoRef.current]);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Render animated text
  const renderAnimatedText = (text) => {
    return text.split('').map((char, i) => (
      <motion.span
        key={i}
        className="inline-block"
        initial={{ opacity: 0, y: 20, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ 
          duration: 0.5,
          delay: i * 0.02,
          type: "spring", 
          damping: 15
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  // Stats card animation variants
  const statsVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    })
  };

  return (
    <div 
      id="home"
      className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-purple-900 relative"
    >
            {/* Background particles */}
      <div 
        ref={particlesRef} 
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="particle absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 10}px`,
              height: `${Math.random() * 10 + 10}px`,
              background: `radial-gradient(circle, 
                ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#ec4899'}, 
                transparent)`
            }}
          />
        ))}
      </div>
      
      {/* Floating circles */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-600/20 to-violet-600/30 blur-3xl opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            translateX: ['-50%', '-55%', '-50%'],
            translateY: ['-50%', '-55%', '-50%']
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 blur-[150px] opacity-40"
          animate={{
            scale: [1, 1.15, 1],
            translateX: ['50%', '55%', '50%'],
            translateY: ['-50%', '-45%', '-50%']
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
      {/* Background gradient elements */}
      <div 
        className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-gradient-to-r from-blue-600/20 to-violet-600/30 blur-3xl opacity-50 floating-element"
      />
      <div 
        className="absolute top-[70%] right-[5%] w-72 h-72 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 blur-[100px] opacity-40 floating-element"
      />
      
      {/* Small floating elements */}
      <div className="absolute top-[30%] left-[20%] w-12 h-12 rounded-full bg-cyan-400/30"></div>
      <div className="absolute top-[40%] right-[15%] w-8 h-8 rounded-full bg-blue-500/30"></div>
      <div className="absolute top-[60%] left-[10%] w-6 h-6 rounded-full bg-violet-500/40"></div>
      <div className="absolute top-[80%] right-[20%] w-10 h-10 rounded-full bg-purple-500/30"></div>
      
      {/* UI Grid overlay */}
      <div className="absolute inset-0 z-10 opacity-5 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />
      
      {/* Content section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">
          {/* Left column with text content */}
          <div className="w-full lg:w-1/2">
            {/* Badge */}
            <motion.div
              className="inline-flex bg-slate-800/40 backdrop-blur-lg px-4 py-2 rounded-full border border-slate-700/50 mb-4 sm:mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.7 } }}
            >
              <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Innovating Computing Education
              </span>
            </motion.div>
            
            {/* Title */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.7 } }}
            >
              <div className="mb-3 sm:mb-4">
                {renderAnimatedText("Advancing Computing")}
              </div>
              <div>
                {renderAnimatedText("as a Science & Profession")}
              </div>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.7 } }}
            >
              <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                ACM x PCCOER Student Chapter
              </span> — Pioneering technology education and innovation
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
              className="flex flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } }}
            >
              <motion.a
                href="#about"
                className="relative group py-3 px-6 sm:py-3.5 sm:px-8 rounded-xl font-bold text-sm sm:text-base w-full sm:w-auto"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 text-white">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl z-0" />
                <div className="absolute inset-0 rounded-xl border border-blue-400/30 z-0"/>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite] rounded-xl" />
                </div>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="relative group py-3 px-6 sm:py-3.5 sm:px-8 rounded-xl font-bold text-sm sm:text-base bg-white/5 backdrop-blur-sm border border-white/20 text-white w-full sm:w-auto"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
                  background: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 rounded-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 animate-pulse rounded-xl" />
                </div>
              </motion.a>
            </motion.div>
          </div>
          
          {/* Right column with logo */}
          <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <motion.div 
              ref={logoRef}
              className="relative w-full max-w-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { delay: 1, duration: 0.7 } }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-r from-blue-600/40 to-purple-600/40 blur-[80px] opacity-60" />
              
              {/* Logo container */}
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 sm:p-8 border border-slate-700/50 relative">
                  {/* Decor elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-400/30 z-0 deco-1" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-400/30 z-0 deco-2" />
                  
                  {/* Logo content */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 relative z-10">
                    <div 
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-400 shadow-lg shadow-indigo-500/30"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-white tracking-tighter">ACM</div>
                    </div>
                    <div className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                      ×
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white py-2 px-4 rounded-xl">
                        <div className="text-lg sm:text-xl font-bold">PCCOER</div>
                        <div className="text-xs opacity-90">Student Chapter</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Stats section with enhanced animations */}
        <div 
          ref={statsContainerRef}
          className="stats-wrapper relative z-20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="relative h-full"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={statsVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 25px 25px -12px rgba(99, 102, 241, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="bg-gradient-to-b from-slate-800/50 to-slate-900 h-full backdrop-blur-lg rounded-xl p-4 sm:p-5 border border-slate-700/50 shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Icon */}
                  <div className="mb-3 text-3xl">{stat.icon}</div>
                  
                  {/* Value and label */}
                  <div className="text-2xl sm:text-3xl font-bold mb-1 text-blue-400">{stat.value}</div>
                  <div className="text-base sm:text-lg mb-2 font-medium text-blue-300">{stat.label}</div>
                  
                  {/* Description */}
                  <div className="text-xs sm:text-sm text-blue-200/70 mt-2">
                    {stat.description}
                  </div>
                  
                  {/* Hover effect layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-20 pointer-events-none">
        <motion.span 
          className="text-sm text-blue-300 font-medium mb-2"
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.5
          }}
        >
          Scroll to explore
        </motion.span>
        <motion.div 
          animate={{ 
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-7 w-7 text-blue-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;