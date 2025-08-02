import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
const facultyCoordinators = [
  {
    name: "Dr. Mahendra B. Salunke",
    role: "Faculty Sponsor",
    image: "https://pccoer.acm.org/Teampic/Faculty/mahendra.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/mahendra-salunke-0b1b3b1b/",
      github: "https://www.github.com/mbsalunke",
      email: "mahendra.salunke@pccoer.in"
    }
  },
  {
    name: "Prof. Shrutika Menkudale",
    role: "Faculty Sponsor",
    image: "https://pccoer.acm.org/Teampic/Faculty/Mrs-Shrutika-Menkudale.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/shrutika-menkudale-6b2b1b1b/",
      github: "https://www.github.com/shrutikamenkudale",
      email: "shrutika.menkudale@pccoer.in"
    }
  }
];
// Team data structure
const teams = {
  core: [
    {
      name: "Shubham Wakadkar",
      role: "Chairperson",
      image: "https://pccoer.acm.org/Teampic/Core/SHUBHAM_WAKADKAR.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/shubham-wakadkar",
        github: "https://github.com/shubham-wakadkar",
        email: "shubham.wakadkar_comp22@pccoer.in"
      }
    },
    {
      name: "Soham Kulkarni",
      role: "Vice Chairperson",
      image: "https://pccoer.acm.org/Teampic/Core/SOHAM_KULKARNI.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/soham-kulkarni-04166a259",
        github: "https://github.com/operatic-ocean",
        email: "soham.kulkarni_comp22@pccoer.in"
      }
    },
    {
      name: "Samruddhi Sonawane",
      role: "Secretary",
      image: "https://pccoer.acm.org/Teampic/Core/SAMRUDDHI_SONAWANE.jpg",
      socials: {
        linkedin: "http://linkedin.com/in/samruddhi14",
        github: "http://github.com/Samruddhi1404",
        email: "samruddhi.sonawane_comp22@pccoer.in"
      }
    },
    {
      name: "Sujal Shahare",
      role: "Treasurer",
      image: "https://pccoer.acm.org/Teampic/Core/sujal_shahare.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/sujal-shahare-7b1b1b1b/",
        github: "https://github.com/sujalshahare",
        email: "sujal.shahare_comp22@pccoer.in"
      }
    }
  ],
  technical: [
    {
      name: "Sidh Jain",
      role: "Technical Head",
      image: "https://pccoer.acm.org/Teampic/Core/SIDH_JAIN.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/sidh-jain/",
        github: "https://github.com/Soild211",
        email: "sidh.jain_comp22@pccoer.in"
      }
    },
    {
      name: "Sidharth Sinhasane",
      role: "Technical Head",
      image: "https://pccoer.acm.org/Teampic/Core/SIDHARTH_SINHASANE.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/sidharth-sinhasane-66ab88252",
        github: "https://github.com/sidharth-sinhasane",
        email: "sidharth.sinhasane_comp22@pccoer.in"
      }
    },
    {
      name: "Ashwin Sangokar",
      role: "Tech. Team Member",
      image: "https://pccoer.acm.org/Teampic/Members/ASHWIN_SANGOKAR.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/ashwin-sangokar-39837b28a",
        github: "https://github.com/ashwin-sangokar",
        email: "ashwin.sangokar_comp23@pccoer.in"
      }
    },
    {
      name: "Prem Kulkarni",
      role: "Tech. Team Member",
      image: "https://pccoer.acm.org/Teampic/Members/PREM_KULKARNI.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/prem-kulkarni-977b26289/",
        github: "https://github.com/prem14-git",
        email: "prem.kulkarni_comp23@pccoer.in"
      }
    }
  ],
  web: [
    {
      name: "Chinmay Wadhe",
      role: "Web Master",
      image: "https://pccoer.acm.org/Teampic/Core/Chinmay.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/chinmay-wadhe-139663262",
        github: "https://www.github.com/chinmaywadhe26",
        email: "chinmay.wadhe_comp22@pccoer.in"
      }
    },
    {
      name: "Pradnesh Tilekar",
      role: "Web Master",
      image: "https://pccoer.acm.org/Teampic/Core/Pradnesh.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/pradneshtilekar/",
        github: "https://github.com/Egon15",
        email: "pradnesh.tilekar_comp22@pccoer.in"
      }
    },
    {
      name: "Shivam Attarkar",
      role: "Web Team Member",
      image: "https://pccoer.acm.org/Teampic/Members/SHIVAM_ATTARKAR.jpg",
      socials: {
        linkedin: "http://www.linkedin.com/in/shivam-attarkar-428ab8317",
        github: "https://github.com/shivamAttarkar/",
        email: "shivam.attarkar_comp23@pccoer.in"
      }
    },
    {
      name: "Prasad Kadam",
      role: "Web Team Member",
      image: "https://pccoer.acm.org/Teampic/Members/PRASAD_KADAM.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/prasad-kadam-12460a29a/",
        github: "https://github.com/Prasadkadam08",
        email: "prasad.kadam_comp23@pccoer.in"
      }
    }
  ],
  promotion: [
    {
      name: "Alisha Borde",
      role: "Promotion Head",
      image: "https://pccoer.acm.org/Teampic/Core/ALISHA_BORDE.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/alisha-borde-00a818259",
        github: "https://github.com/alishlgtm",
        email: "alisha.borde_comp22@pccoer.in"
      }
    },
    {
      name: "Aditi Kshirsagar",
      role: "Promotion Head",
      image: "https://pccoer.acm.org/Teampic/Core/ADITI_KSHIRSAGAR.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/aditi-kshirsagar-10a817259/",
        github: "https://github.com/aditi4-13",
        email: "pramod.aditi_comp22@pccoer.in"
      }
    },
    {
      name: "Aditya Chouke",
      role: "Promo. Team Member",
      image: "https://pccoer.acm.org/Teampic/Members/ADITYA_CHOUKE.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/aditya-chouke-ba2817259",
        email: "rajendra.aditya_comp22@pccoer.in"
      }
    },
    {
      name: "Anjali Shendge",
      role: "Promo. Team Member",
      image: "https://pccoer.acm.org/Teampic/Members/ANJALI_SHENDGE.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/anjali-shendge-0a1b1b1b/",
        github: "https://github.com/AnjaliShendge",
        email: "anjali.shendge_comp23@pccoer.in"
      }
    }
  ],
  design: [
    {
      name: "Ananya Venkatraman",
      role: "Design Head",
      image: "https://pccoer.acm.org/Teampic/Core/ANANYA_VENKATRAMAN.jpg",
      socials: { 
        email: "ananya.venkatraman_it22@pccoer.in" 
      }
    },
    {
      name: "Sayyoni Parate",
      role: "Design Head",
      image: "https://pccoer.acm.org/Teampic/Core/SAYYONI_PARATE.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/sayyoni-parate-b5a17525a",
        github: "https://github.com/Sayyoni-Parate",
        email: "sayyoni.parate_comp22@pccoer.in"
      }
    },
    {
      name: "Kimaya Tambe",
      role: "Design Team Member",
      image: "https://pccoer.acm.org/Teampic/Members/KIMAYA_TAMBE.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/kimaya-tambe-337ab0289/",
        github: "https://github.com/kimayat1903",
        email: "kimaya.tambe_comp23@pccoer.in"
      }
    },
    {
      name: "Ritesh Kharat",
      role: "Design Team Member",
      image: "https://pccoer.acm.org/Teampic/Members/RITESH_KHARAT.jpg",
      socials: {
        github: "https://github.com/Riteshk-21",
        email: "ritesh.kharat_it23@pccoer.in"
      }
    }
  ]
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('core');
  const contentRef = useRef(null);
  const tabs = ['core', 'technical', 'web', 'promotion', 'design'];

  const handleTabClick = (team) => {
    gsap.to(contentRef.current, {
      opacity: 0.9,
      duration: 0.2,
      onComplete: () => setActiveTab(team)
    });
  };

  useEffect(() => {
    gsap.from(contentRef.current.querySelectorAll('.team-card'), {
      opacity: 0,
      y: 30,
      stagger: 0.08,
      duration: 0.6,
      ease: 'power3.out'
    });
  }, [activeTab]);

  return (
    <section 
      id="team" 
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent font-poppins">
            Our Team
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-1 mx-auto w-40 rounded-full bg-blue-400/80"
            transition={{ duration: 0.8, ease: "circOut" }}
          />
        </motion.div>

        {/* Faculty Section */}
        <div className="mb-20">
          <h3 className="text-2xl text-center mb-12 font-medium text-blue-300">
            Faculty Coordinators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyCoordinators.map((faculty, idx) => (
              <FacultyCard 
                key={faculty.name}
                faculty={faculty}
                index={idx}
              />
            ))}
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex rounded-full p-2 bg-slate-800/40 backdrop-blur-lg shadow-lg">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all mx-1 ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-blue-200 hover:bg-slate-700/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Team Cards Grid */}
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode='wait'>
            {teams[activeTab].map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member }) => (
  <motion.div
className="team-card relative rounded-2xl p-6 backdrop-blur-md border border-white/10 hover:border-blue-500/30 bg-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_40px_rgba(0,162,255,0.25)] transition-all duration-300 ease-in-out"
  whileHover={{ y: -8, scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 30 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>
    <div className="relative group">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-white/50 shadow-md"
      />
    </div>
    
    <h3 className="text-lg font-semibold mb-1 text-blue-300">
      {member.name}
    </h3>
    <p className="text-sm mb-4 text-blue-200/80">
      {member.role}
    </p>
    
    <div className="flex justify-center space-x-4">
      <SocialLink href={member.socials.linkedin} icon={<FiLinkedin />} />
      <SocialLink href={member.socials.github} icon={<FiGithub />} />
      <SocialLink href={`mailto:${member.socials.email}`} icon={<FiMail />} />
    </div>
  </motion.div>
);

const FacultyCard = ({ faculty, index }) => (
  <motion.div
    className="rounded-2xl p-6 flex items-center space-x-6 backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 shadow-lg hover:shadow-xl transition-all"
    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <img
      src={faculty.image}
      alt={faculty.name}
      className="w-20 h-20 rounded-full object-cover border-4 border-white/50 shadow-md"
    />
    <div>
      <h4 className="font-semibold mb-1 text-blue-300">
        {faculty.name}
      </h4>
      <p className="text-sm mb-3 text-blue-200/80">
        {faculty.role}
      </p>
      <div className="flex space-x-3">
        <SocialLink href={faculty.socials.linkedin} icon={<FiLinkedin />} />
        <SocialLink href={faculty.socials.github} icon={<FiGithub />} />
        <SocialLink href={`mailto:${faculty.socials.email}`} icon={<FiMail />} />
      </div>
    </div>
  </motion.div>
);

const SocialLink = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full text-blue-300 hover:bg-slate-700/30 transition-colors"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);


export default TeamSection;