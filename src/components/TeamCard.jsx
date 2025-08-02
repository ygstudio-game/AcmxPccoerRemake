import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const TeamCard = ({ member }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden text-center p-6 team-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)'
      }}
    >
      <img 
        className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
        src={member.image} 
        alt={member.name} 
      />
      <h4 className="text-lg font-bold text-blue-900 mb-1">{member.name}</h4>
      <p className="text-gray-600 mb-3">{member.role}</p>
      <div className="flex justify-center space-x-3">
        {member.linkedin && (
          <a 
            href={member.linkedin} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
        )}
        {member.github && (
          <a 
            href={member.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FiGithub className="w-5 h-5" />
          </a>
        )}
        {member.email && (
          <a 
            href={`mailto:${member.email}`} 
            className="text-red-600 hover:text-red-800"
          >
            <FiMail className="w-5 h-5" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const TeamTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap border-b border-gray-200 mb-8 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === tab.id
              ? 'text-blue-900 border-b-2 border-blue-900'
              : 'text-gray-600 hover:text-blue-900'
          } whitespace-nowrap`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('core');
  const sectionRef = useRef(null);
  
  const tabs = [
    { id: 'core', label: 'Core Team' },
    { id: 'technical', label: 'Technical Team' },
    { id: 'web', label: 'Web Team' },
    { id: 'promotion', label: 'Promotion Team' },
    { id: 'design', label: 'Design Team' },
  ];
  
  // Sample data (replace with actual data)
  const teamData = {
    core: [
      {
        name: "Shubham Wakadkar",
        role: "Chairperson",
        image: "https://pccoer.acm.org/Teampic/Core/SHUBHAM_WAKADKAR.jpg",
        linkedin: "https://www.linkedin.com/in/shubham-wakadkar",
        github: "https://github.com/shubham-wakadkar",
        email: "shubham.wakadkar_comp22@pccoer.in"
      },
      // Add more core team members...
    ],
    technical: [
      {
        name: "Sidh Jain",
        role: "Technical Head",
        image: "https://pccoer.acm.org/Teampic/Core/SIDH_JAIN.jpeg",
        linkedin: "https://www.linkedin.com/in/sidh-jain/",
        github: "https://github.com/Soild211",
        email: "sidh.jain_comp22@pccoer.in"
      },
      // Add more technical team members...
    ],
    // Add data for other teams...
  };

  return (
    <section id="team" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto" />
        </div>
        
        <TeamTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {teamData[activeTab]?.map((member, index) => (
            <TeamCard 
              key={`${member.name}-${index}`} 
              member={member} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;