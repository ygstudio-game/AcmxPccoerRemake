import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Zoom, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { Blurhash } from "react-blurhash";
import { FiX, FiZoomIn, FiChevronDown, FiChevronUp } from "react-icons/fi";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loadedIndexes, setLoadedIndexes] = useState(new Set());
  const [isExpanded, setIsExpanded] = useState(false);
  const [initialVisible, setInitialVisible] = useState(3);

  const images = [
    {
      src: "https://pccoer.acm.org/Homepic/teacher1-min.jpg",
      blurHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
      caption: "Honoring our mentors on Teacher's Day 2024",
      date: "Sept 5, 2024"
    },
    {
      src: "https://pccoer.acm.org/Homepic/teacher3-min.jpg",
      blurHash: "LQH3f}Rj9Y~q%MaybIX8IAWBayay",
      caption: "ACM leadership presenting awards",
      date: "Sept 5, 2024"
    },
    {
      src: "https://pccoer.acm.org/Homepic/teacher7-min.jpg",
      blurHash: "L49Diyxt00o#_3ofV@ay00o#%Loz",
      caption: "Student-faculty interactions",
      date: "Sept 5, 2024"
    },
    {
      src: "https://pccoer.acm.org/Homepic/teacher4-min.jpg",
      blurHash: "LME:xAxt~qtR?wRjIUNG%MofM{of",
      caption: "Group photo with faculty members",
      date: "Sept 5, 2024"
    },
 
  ];

  useEffect(() => {
    const updateVisibleCount = () => {
      setInitialVisible(window.innerWidth < 768 ? 2 : 3);
    };
    
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const visibleImages = isExpanded ? images : images.slice(0, initialVisible);

  const handleImageLoad = (index) => {
    setLoadedIndexes(prev => new Set(prev).add(index));
  };

  const handleClose = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const handleOpen = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const cardVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <section 
      className="py-24 px-4 bg-gradient-to-b from-[#050b1b] to-[#0a1126] relative overflow-hidden"
    >   
          {/* Animated background particles */}
          <div className="absolute inset-0 z-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-500 opacity-10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 20 + 5}px`,
                  height: `${Math.random() * 20 + 5}px`,
                }}
                animate={{
                  y: [0, Math.random() * 30 - 15],
                  x: [0, Math.random() * 20 - 10],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
             <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent font-poppins">
            ACM Gallery
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-1 mx-auto w-40 rounded-full bg-blue-400/80"
            transition={{ duration: 0.8, ease: "circOut" }}
          />
        </motion.div>
          
          <motion.p
            className="text-xl text-cyan-100 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Celebrating academic excellence and tech innovation at PCCOER ACM
          </motion.p>
        </div>

        <LayoutGroup>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <AnimatePresence>
              {visibleImages.map((img, index) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer"
                  onClick={() => handleOpen(index)}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-transparent group-hover:border-cyan-300/30 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:shadow-[0_12px_40px_rgba(100,210,255,0.3)] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-medium text-sm">{img.caption}</p>
                        <p className="text-cyan-200 text-xs mt-1">{img.date}</p>
                      </div>
                      <div className="absolute top-3 right-3 bg-cyan-500/20 backdrop-blur-sm p-2 rounded-full transform scale-90 group-hover:scale-100 transition-transform">
                        <FiZoomIn className="text-cyan-300 text-xl" />
                      </div>
                    </div>
                    
                    <div className="relative w-full h-full">
                      {!loadedIndexes.has(index) && (
                        <Blurhash
                          hash={img.blurHash}
                          width="100%"
                          height="100%"
                          className="absolute inset-0 animate-shimmer"
                        />
                      )}
                      <img
                        src={img.src}
                        alt={img.caption}
                        loading="lazy"
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                          loadedIndexes.has(index) ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => handleImageLoad(index)}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </LayoutGroup>

        {images.length > initialVisible && (
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-6 py-2 bg-cyan-600/20 hover:bg-cyan-500/30 backdrop-blur-sm rounded-full border border-cyan-400/30 transition-all"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? (
                  <FiChevronUp className="text-cyan-300" />
                ) : (
                  <FiChevronDown className="text-cyan-300" />
                )}
              </motion.span>
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="relative w-full max-w-6xl bg-gradient-to-br from-gray-800/70 to-blue-900/50 backdrop-blur-2xl rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_60px_rgba(100,210,255,0.3)]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <button
                className="absolute top-5 right-5 z-50 text-white bg-cyan-600/30 hover:bg-cyan-500/50 backdrop-blur-md rounded-full p-2 border border-cyan-400/30 transition-all duration-300 hover:scale-110"
                onClick={handleClose}
                aria-label="Close gallery"
              >
                <FiX className="text-xl" />
              </button>

              <Swiper
                modules={[Navigation, Pagination, Keyboard, Zoom, Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
                }}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true,
                  renderBullet: (index, className) => {
                    return `<span class="${className} bg-cyan-400 !w-2.5 !h-2.5"></span>`;
                  }
                }}
                keyboard={{ enabled: true }}
                loop={true}
                zoom={{
                  maxRatio: 3,
                  minRatio: 1,
                  toggle: true
                }}
                spaceBetween={20}
                breakpoints={{
                  640: { spaceBetween: 30 }
                }}
                slidesPerView={1}
                initialSlide={selectedIndex}
                className="h-[85vh]"
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i} className="flex items-center justify-center">
                    <div className="swiper-zoom-container w-full h-full flex flex-col">
                      <div className="relative">
                        <motion.div
                          className="absolute top-0 left-0 h-1 bg-cyan-400 z-50"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 3, ease: 'linear' }}
                          key={Date.now()}
                        />
                        <div className="relative flex-1 flex items-center justify-center p-4">
                          {!loadedIndexes.has(i) && (
                            <Blurhash
                              hash={img.blurHash}
                              width="100%"
                              height="100%"
                              className="absolute inset-0 animate-shimmer"
                            />
                          )}
                          <img
                            src={img.src}
                            alt={img.caption}
                            className={`object-contain max-h-[70vh] w-full mx-auto transition-opacity duration-500 cursor-zoom-in ${
                              loadedIndexes.has(i) ? "opacity-100" : "opacity-0"
                            }`}
                            onLoad={() => handleImageLoad(i)}
                          />
                        </div>
                      </div>
                      
                      <div className="p-6 text-center bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-md border-t border-cyan-500/20">
                        <p className="text-cyan-100 text-xl font-medium">{img.caption}</p>
                        <p className="text-cyan-300 text-sm mt-2">
                          {img.date} • Photo {i + 1} of {images.length}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-button-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-cyan-600/30 hover:bg-cyan-500/50 backdrop-blur-md rounded-full p-3 border border-cyan-400/30 w-12 h-12 flex items-center justify-center text-white after:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="swiper-button-next absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-cyan-600/30 hover:bg-cyan-500/50 backdrop-blur-md rounded-full p-3 border border-cyan-400/30 w-12 h-12 flex items-center justify-center text-white after:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;