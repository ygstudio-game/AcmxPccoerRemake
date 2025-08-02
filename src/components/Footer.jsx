import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub, 
  FaDiscord 
} from "react-icons/fa";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [hoveredLink, setHoveredLink] = useState(null);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    
    // Reset message after 3 seconds
    setTimeout(() => setSubscribed(false), 3000);
  };

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'ACM', href: 'https://www.acm.org/' },
    { name: 'ACM India', href: 'https://india.acm.org/' },
    { name: 'ACM Digital Library', href: 'https://dl.acm.org/' },
    { name: 'PCCOE&R', href: 'https://www.pccoer.com/' }
  ];

 
const socialLinks = [
  { name: 'Twitter', icon: <FaTwitter />, href: '#' },
  { name: 'Facebook', icon: <FaFacebookF />, href: '#' },
  { name: 'Instagram', icon: <FaInstagram />, href: '#' },
  { name: 'LinkedIn', icon: <FaLinkedinIn />, href: '#' },
  { name: 'GitHub', icon: <FaGithub />, href: '#' },
];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 pt-20 pb-10 overflow-hidden">
      {/* Floating elements for glassmorphism effect */}
      <motion.div 
        className="absolute top-20 left-1/4 w-80 h-80 bg-blue-500/10 backdrop-blur-3xl rounded-full mix-blend-soft-light"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute top-40 right-1/3 w-60 h-60 bg-purple-500/10 backdrop-blur-3xl rounded-full mix-blend-soft-light"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
          {/* Logo and description */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="ml-3 text-white text-xl font-bold">ACM PCCOER</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-xs">
              Advancing computing as a Science & Profession through quality education and professional development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  whileHover={{ 
                    y: -5,
                    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                  }}
                  transition={{ duration: 0.3 }}
                >
      {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Useful Links
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
            </h3>
            <ul className="space-y-3">
              {links.map((link, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  onMouseEnter={() => setHoveredLink(i)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <a 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center transition-colors ${
                      hoveredLink === i 
                        ? 'text-cyan-400' 
                        : 'text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    <motion.span
                      animate={{ 
                        x: hoveredLink === i ? 5 : 0 
                      }}
                      transition={{ type: "spring", stiffness: 500 }}
                      className="mr-2 text-blue-500"
                    >
                      <i className="fas fa-chevron-right text-xs"></i>
                    </motion.span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Contact Us
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </h3>
            <ul className="space-y-4 text-slate-400">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <i className="fas fa-map-marker-alt mt-1 mr-4 text-blue-500"></i>
                <span>PCCOE&R, Ravet, Pune, Maharashtra 412101</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <i className="fas fa-envelope mt-1 mr-4 text-blue-500"></i>
                <span>acmchapter@pccoer.in</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <i className="fas fa-phone-alt mt-1 mr-4 text-blue-500"></i>
                <span>+91 1234567890</span>
              </motion.li>
            </ul>
          </div>
          

        </div>
        
        {/* Copyright section */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ACM PCCOER Student Chapter. All rights reserved.
          </p>
          <div className="text-slate-500 text-sm">
            Designed and Developed by the yadnyesh borole
            <span className="text-blue-500"> @ ACM x PCCOER</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;