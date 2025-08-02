import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import blogs from "../data/blogs";


const BlogCard = ({ blog, index }) => (
  <motion.a 
    href={`/blogs/${encodeURIComponent(blog.title)}`}
    className="group relative rounded-2xl overflow-hidden backdrop-blur-md border border-white/10 hover:border-blue-500/30 bg-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_40px_rgba(0,162,255,0.25)] transition-all duration-300 ease-in-out"
    whileHover={{ y: -8, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
  >
    {/* Animated background particles */}
    <div className="absolute inset-0">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
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

    <div className="relative h-48 overflow-hidden">
      <img 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        src={blog.image} 
        alt={blog.title} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1126]/90 to-transparent" />
    </div>
    
    <div className="p-6 relative z-10">
      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent mb-3">
        {blog.title}
      </h3>
      <p className="text-blue-200/80 text-sm leading-relaxed mb-4">
        {blog.description}
      </p>
      <div className="flex justify-between text-sm text-blue-300/80">
        <div className="flex items-center">
          <FiUser className="mr-2 text-blue-400" />
          <span>{blog.author}</span>
        </div>
        <div className="flex items-center">
          <FiCalendar className="mr-2 text-blue-400" />
          <span>{blog.date}</span>
        </div>
      </div>
    </div>
    
    <div className="absolute top-4 right-4 p-2 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
      <FiArrowUpRight className="w-5 h-5 text-blue-400 group-hover:rotate-45 transition-transform" />
    </div>
  </motion.a>
);

const BlogsSection = () => {
 

  return (
  <section id="blogs" className="py-24 px-4 bg-gradient-to-b from-[#050b1b] to-[#0a1126] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent font-poppins">
            Our Blogs
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-1 mx-auto w-40 rounded-full bg-blue-400/80"
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.title} blog={blog} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.a 
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-2xl font-medium hover:shadow-[0_6px_30px_rgba(0,162,255,0.4)] transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Blogs
            <FiArrowUpRight className="group-hover:rotate-45 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>

  );
};

export default BlogsSection;