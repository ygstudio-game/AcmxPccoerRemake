// src/components/CounterSection.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CounterItem = ({ number, label, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-blue-50 p-6 rounded-xl text-center shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: inView ? 1 : 0, 
        y: inView ? 0 : 30 
      }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.25)'
      }}
    >
      <div className="text-5xl font-bold text-blue-900 mb-2">
        {inView ? <CountUp end={number} duration={2.5} suffix="+" /> : "0+"}
      </div>
      <div className="text-xl font-medium text-gray-700">{label}</div>
    </motion.div>
  );
};

const CounterSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CounterItem number={8} label="Years Established" delay={0.1} />
          <CounterItem number={50} label="Events" delay={0.2} />
          <CounterItem number={100} label="Members" delay={0.3} />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;