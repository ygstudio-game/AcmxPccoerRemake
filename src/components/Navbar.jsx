import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef(null);
  const sectionRefs = useRef({});

  // Handler for smooth scrolling
  // const scrollToSection = (id) => {
  //   setIsMenuOpen(false);
  //   const element = document.getElementById(id);
  //   if (element) {
  //     const offset = window.innerWidth < 1024 ? 100 : 80; // Adjust for mobile header height
  //     window.scrollTo({
  //       top: element.offsetTop - offset,
  //       behavior: 'smooth'
  //     });
      
  //   }
  // };
const scrollToSection = (id) => {
  setIsMenuOpen(false);

  // Check if we're on a different page
  if (location.pathname !== '/') {
    // Navigate to home page first
    window.location.href = `/#${id}`;
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    const offset = window.innerWidth < 1024 ? 100 : 80;
    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: 'smooth'
    });
  }
};

  // Track scroll position for navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set up scroll-spy with intersection observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
          
        }
      });
    };
    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections
    const sectionIds = ['home', 'about', 'events', 'team', 'blogs', 'contact'];
    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      
      if (section) {
        sectionRefs.current[id] = section;
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'team', label: 'Team' },
    { id: 'blogs', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const underlineVariants = {
    active: { 
      width: '100%',
      background: 'linear-gradient(90deg, #3b82f600, #3b82f6, #3b82f600)',
      transition: { 
        duration: 0.4, 
        ease: 'easeInOut' 
      }
    },
    hover: { 
      width: '100%',
      background: 'linear-gradient(90deg, #3b82f610, #3b82f630, #3b82f610)',
    },
    initial: { width: 0 }
  };

  const linkGlowVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      boxShadow: '0 0 0 rgba(59, 130, 246, 0)'
    },
    visible: { 
      opacity: 1,
      scale: 1,
      boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)',
      transition: { 
        duration: 0.3,
        delay: 0.1
      }
    }
  };

  const glassStyle = `
    bg-white/60 dark:bg-gray-900/70 backdrop-blur-xl 
    shadow-lg shadow-gray-400/10 dark:shadow-gray-900/20
    border border-white/30 dark:border-gray-700/50
  `;

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? glassStyle + ' py-3' : 'bg-transparent py-5'}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            onClick={() => scrollToSection('home')}
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl mr-3 shadow-md">
              <div className="bg-white/70 w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <div className="bg-gradient-to-r from-blue-400 to-indigo-500 w-6 h-6 rounded-md"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ACM <span className="text-blue-600 dark:text-blue-400">PCCOER</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <div className="flex gap-10 items-center">
              {navLinks.map((link) => (
                <motion.div
                  key={link.id}
                  className="relative py-2 cursor-pointer"
                  onClick={() => scrollToSection(link.id)}
                  initial="initial"
                  whileHover="hover"
                  animate={activeLink === link.id ? 'active' : 'initial'}
                >
                  {/* Glowing highlight */}
                  {activeLink === link.id && (
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-blue-100/60 dark:bg-blue-900/40"
                      variants={linkGlowVariants}
                      initial="hidden"
                      animate="visible"
                    />
                  )}

                  <span className={`relative z-10 font-medium px-3 py-2 transition-colors duration-200 ${
                    activeLink === link.id 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}>
                    {link.label}
                  </span>

                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 rounded-full"
                    variants={underlineVariants}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-white"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

<AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg w-full max-w-xs absolute right-0 top-0 h-screen"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="px-4 pt-4 pb-8 space-y-2 sm:px-6">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-lg"
                  >
                    <FiX className="h-6 w-6" />
                  </button>
                </div>
                {navLinks.map((link) => (
                  <motion.div
                    key={link.id}
                    className={`px-3 py-3 rounded-lg text-lg font-medium relative cursor-pointer ${
                      activeLink === link.id 
                        ? 'bg-blue-50/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {link.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;