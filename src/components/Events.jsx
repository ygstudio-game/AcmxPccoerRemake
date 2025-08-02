import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiUsers, FiArrowRight } from 'react-icons/fi';

const EventCard = ({ event, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.15, duration: 0.7, ease: "easeOut" }
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-0" />
      
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#0B1E3F] to-[#08162f] border border-blue-500/20 z-10 h-full"
        whileHover={{ 
          y: -15,
          boxShadow: "0 20px 25px rgba(0, 245, 255, 0.15)"
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Year badge */}
        <motion.div 
          className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-3 py-1 rounded-full text-sm font-bold z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + (index * 0.15), duration: 0.5 }}
        >
          {event.year}
        </motion.div>
        
        {/* Image with zoom effect */}
        <div className="overflow-hidden h-48">
          <motion.img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        {/* Glassmorphism content */}
        <div className="p-6 backdrop-blur-sm bg-white/5 border-t border-blue-500/20">
          <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
          
          <p className="text-gray-300 mb-4">
            {event.description}
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="flex items-center text-sm text-cyan-300">
              <FiCalendar className="mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-sm text-cyan-300">
              <FiMapPin className="mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-sm text-cyan-300">
              <FiUsers className="mr-2" />
              <span>{event.participants} participants</span>
            </div>
          </div>
          
          <motion.button
            className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium flex items-center justify-center group-hover:from-blue-500 group-hover:to-cyan-400 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Details
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Events = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      id: 1,
      image: "https://pccoer.acm.org/Eventspic/icpc.jpeg",
      year: "2024",
      title: "ICPC Guidance Session",
      description: "Expert tips, tricks, and strategies for competitive programming excellence.",
      date: "15 Feb 2024",
      location: "PCCOER Campus",
      participants: "120"
    },
    {
      id: 2,
      image: "https://pccoer.acm.org/Eventspic/teacher.png",
      year: "2024",
      title: "Teacher's Day Celebration",
      description: "Honoring our mentors with gratitude and joy on this special occasion.",
      date: "5 Sept 2024",
      location: "Main Auditorium",
      participants: "250"
    },
    {
      id: 3,
      image: "https://pccoer.acm.org/Eventspic/code.jpeg",
      year: "2024",
      title: "Code Fiesta",
      description: "A fun-filled coding contest designed to challenge and excite beginners.",
      date: "20 Mar 2024",
      location: "CS Department",
      participants: "85"
    },
    {
      id: 4,
      image: "https://pccoer.acm.org/Eventspic/git.jpeg",
      year: "2023",
      title: "Git & GitHub Workshop",
      description: "Master version control for seamless collaboration in projects.",
      date: "10 Nov 2023",
      location: "Tech Lab 3",
      participants: "95"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      year: "2024",
      title: "Web Development Bootcamp",
      description: "Build modern web applications with React and Node.js.",
      date: "5 May 2024",
      location: "Tech Hub",
      participants: "110"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      year: "2024",
      title: "AI & ML Workshop",
      description: "Introduction to machine learning algorithms and applications.",
      date: "18 Jun 2024",
      location: "AI Research Center",
      participants: "140"
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section 
      id="events"
      className="py-24 px-4 bg-gradient-to-b from-[#050b1b] to-[#0a1126] relative overflow-hidden"
      ref={ref}
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
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent font-poppins">
            Our Events
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-1 mx-auto w-40 rounded-full bg-blue-400/80"
            transition={{ duration: 0.8, ease: "circOut" }}
          />
        </motion.div>
          
          <motion.p
            className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Explore our latest tech events, workshops, and competitions designed to inspire and educate.
          </motion.p>
        </div>
        
        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
        
        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <motion.button
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(0, 245, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(0, 245, 255, 0.2)",
                "0 0 20px rgba(0, 245, 255, 0.4)",
                "0 0 10px rgba(0, 245, 255, 0.2)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="relative z-10 flex items-center">
              View All Events
              <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </span>
            
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -rotate-45 w-[200%] h-[200%] top-[-50%] left-[-50%] transition-opacity duration-500" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;