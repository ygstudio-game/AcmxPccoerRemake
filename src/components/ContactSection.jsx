import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiMapPin,
  FiMail,
  FiShare2,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiYoutube
} from 'react-icons/fi';

const ContactSection = () => {

  // Particle Background Component
  const Particles = () => (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 5}px`,
            height: `${Math.random() * 20 + 5}px`,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15],
            x: [0, Math.random() * 20 - 10]
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
  );

  const IconContainer = ({ icon }) => (
    <motion.div
      className="bg-slate-800/50 p-3 rounded-xl mr-4 border border-slate-600 hover:border-blue-400 transition-all"
      whileHover={{ scale: 1.05 }}
    >
      {icon}
    </motion.div>
  );

  const contactItems = [
    {
      title: 'Location',
      icon: <FiMapPin className="text-blue-300 text-xl" />,
      content: 'Plot No. B, Sector no. 110, Gate no.1, Laxminagar, Ravet, Haveli, Pune, Pimpri-Chinchwad, Maharashtra 412101',
    },
    {
      title: 'Email',
      icon: <FiMail className="text-blue-300 text-xl" />,
      content: 'example@acm.in',
      link: 'mailto:example@acm.in',
    },
    {
      title: 'Socials',
      icon: <FiShare2 className="text-blue-300 text-xl" />,
      content: 'Follow us on socials',
      link: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-[#050b1b] to-[#0a1126] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent font-poppins mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-1 mx-auto w-40 rounded-full bg-blue-400/80 origin-left"
            transition={{ duration: 0.8 }}
          />
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl backdrop-blur-md border border-slate-700 bg-white/5 p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-start">
                <IconContainer icon={item.icon} />
                <div>
                  <h3 className="text-lg font-semibold text-blue-200 mb-1">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-blue-300 hover:text-blue-400 transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-blue-100">{item.content}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Particles />
    </section>
  );
};

export default ContactSection;
