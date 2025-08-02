 import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';


const faqItems = [
  {
    question: "What is ACM Student Chapter?",
    answer: "ACM Student Chapter is a student-led organization that promotes computer science and related fields through events, workshops, and competitions."
  },
  {
    question: "How can I join the ACM Student Chapter?",
    answer: "You can join the ACM Student Chapter by signing up during our member-hiring drives that take place during the start of the academic year."
  },
  {
    question: "What are the benefits of joining the ACM Student Chapter?",
    answer: "Members gain access to exclusive events, workshops, and networking opportunities with professionals in the field."
  },
  {
    question: "Do I need to be a computer science major to join?",
    answer: "No, ACM Student Chapter is open to students from all majors interested in computer science and technology."
  },
  {
    question: "What types of events does the ACM Student Chapter host?",
    answer: "We host coding competitions, hackathons, workshops, guest lectures throughout the year."
  },
  {
    question: "How can I stay updated with ACM Student Chapter events?",
    answer: "Follow us on our social media platforms to get the latest updates on upcoming events."
  }
];
 
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRefs = useRef([]);
  
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    
    setTimeout(() => {
      if (activeIndex !== index && accordionRefs.current[index]) {
        accordionRefs.current[index].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 50);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#050b1b] to-[#0a1126] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent font-poppins mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-1 mx-auto w-40 rounded-full bg-blue-400/80"
            transition={{ duration: 0.8 }}
          />
        </div>
        
        <div className="space-y-4">
          {faqItems.map((faq, i) => (
            <motion.div
              key={i}
              ref={el => accordionRefs.current[i] = el}
              className="rounded-2xl backdrop-blur-md border border-white/10 hover:border-blue-500/30 bg-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.button
                className="w-full flex justify-between items-center p-6 text-left font-medium"
                onClick={() => toggleAccordion(i)}
                whileHover={{ background: 'rgba(30, 41, 59, 0.3)' }}
                whileTap={{ background: 'rgba(30, 41, 59, 0.5)' }}
              >
                <span className="text-blue-300 text-lg">{faq.question}</span>
                <motion.span 
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  className="ml-4 text-blue-400"
                >
                  <FiChevronDown className="w-6 h-6" />
                </motion.span>
              </motion.button>
              <motion.div 
                className="overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: activeIndex === i ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-6 text-blue-200/80 text-md leading-relaxed bg-gradient-to-b from-slate-800/30 to-transparent">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
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
    </section>
  );
};

export default FAQSection;