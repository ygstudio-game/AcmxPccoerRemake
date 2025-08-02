import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogs from '../data/blogs';
import { FiArrowLeft ,FiCalendar ,FiUser } from 'react-icons/fi';

const BlogPage = () => {
  const { blogTitle } = useParams();
  const decodedTitle = decodeURIComponent(blogTitle);
  const blog = blogs.find(b => b.title === decodedTitle);

  if (!blog) return <div className="text-center py-20">Blog not found</div>;

  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-b from-[#050b1b] to-[#0a1126]">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.a
          href="/"
          className="mb-8 inline-flex items-center text-blue-400 hover:text-blue-300"
          whileHover={{ x: -5 }}
        >
          <FiArrowLeft className="mr-2" />
          Back to Home
        </motion.a>

        <div className="rounded-2xl backdrop-blur-md border border-white/10 bg-white/5 p-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent mb-6">
            {blog.title}
          </h1>
          <div className="relative h-96 overflow-hidden rounded-xl mb-8">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-blue-200/90">{blog.description}</p>
            <div className="flex gap-4 mt-8 text-blue-300/80">
              <div className="flex items-center">
                <FiUser className="mr-2 text-blue-400" />
                {blog.author}
              </div>
              <div className="flex items-center">
                <FiCalendar className="mr-2 text-blue-400" />
                {blog.date}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPage;