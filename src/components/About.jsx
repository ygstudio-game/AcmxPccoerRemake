import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
const innerRef = useRef(null);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out'
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const cards = [
    {
      id: 1,
      title: "Our Mission",
      icon: "icon-[ph--target]",
      description: "Foster a vibrant community of students passionate about computing, providing opportunities for collaboration and skill development.",
      stats: "100+ Events",
      highlight: "innovation",
      color: "from-blue-500 to-cyan-400",
      order: "md:order-1",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      id: 2,
      title: "Our Vision",
      icon: "icon-[ph--lightbulb-filament]",
      description: "Inspire a generation of student innovators by promoting creativity and cutting-edge technological solutions.",
      stats: "8+ Years",
      highlight: "creativity",
      color: "from-purple-500 to-pink-500",
      order: "md:order-2",
      span: "md:col-span-1"
    },
    {
      id: 3,
      title: "Established",
      icon: "icon-[ph--calendar]",
      description: "Serving the student community since 2017 with dedication and passion.",
      stats: "2017",
      highlight: "passion",
      color: "from-amber-500 to-yellow-300",
      order: "md:order-3",
      span: "md:col-span-1"
    },
    {
      id: 4,
      title: "Location",
      icon: "icon-[ph--map-pin]",
      description: "Based in Pune, India at PCCOER campus with state-of-the-art facilities.",
      stats: "Pune, India",
      highlight: "community",
      color: "from-emerald-500 to-teal-400",
      order: "md:order-4",
      span: "md:col-span-1"
    },
    {
      id: 5,
      title: "Collaborations",
      icon: "icon-[ph--handshake]",
      description: "Partnered with tech giants and local communities to bring the best opportunities to students.",
      stats: "20+ Partners",
      highlight: "teamwork",
      color: "from-rose-500 to-red-400",
      order: "md:order-5",
      span: "md:col-span-2 md:row-span-1"
    }
  ];

  return (

<section
  id='about'
  ref={sectionRef}
  className="relative min-h-screen py-24 px-4 bg-gradient-to-br from-gray-900 to-black"
>
      {/* Decorative floating elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-500 blur-3xl animate-pulse"></div>
      </div>
      
      <div ref={innerRef} className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We Build <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Innovative</span> Communities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where passion meets technology, creating opportunities for growth and collaboration
          </p>
        </div>
        
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={el => cardRefs.current[index] = el}
              className={`${card.span} ${card.order} group`}
            >
              <div className="glass-card h-full p-6 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-xl relative overflow-hidden">
                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-2xl blur-md`}></div>
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
              <div className={`text-4xl mb-4 bg-gradient-to-br ${card.color} bg-clip-text text-transparent inline-block`}>
                <span className={card.icon} />
              </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-4">
                    {card.description.split(card.highlight).map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="bg-sky-500/20 text-sky-300 px-1 rounded mx-0.5 transition-all duration-300 group-hover:bg-sky-500/40 group-hover:text-white">
                            {card.highlight}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                  
                  {/* Stats */}
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <p className="text-3xl font-bold text-white">{card.stats}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats footer */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "100+", label: "Members" },
            { value: "50+", label: "Events" },
            { value: "20+", label: "Workshops" },
            { value: "8+", label: "Years" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 text-center"
            >
              <p className="text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-300 uppercase text-sm tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default About;