import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogs from "../data/blogs";
import { FiArrowLeft, FiCalendar, FiUser } from "react-icons/fi";
const BlogPage = () => {
  const { blogTitle } = useParams();
  const decodedTitle = decodeURIComponent(blogTitle);
  console.log(decodedTitle);
  
  const blog = blogs.find((b) => b.title === decodedTitle);

  if (!blog) return <div className="text-center py-20">Blog not found</div>;

  return (
    <div className="min-h-screen pt-20 md:pt-24 px-4 sm:px-6 bg-gradient-to-b from-[#050b1b] to-[#0a1126]">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div whileHover={{ x: -5 }} className="mb-10 md:mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm md:text-base"
          >
            <FiArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </motion.div>

        <div className="rounded-xl md:rounded-2xl backdrop-blur-md border border-white/10 bg-white/5 p-4 sm:p-6 md:p-8">
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent mb-4 md:mb-6"
          >
            {blog.title}
          </motion.h1>

          <motion.div
            className="relative h-48 md:h-64 lg:h-96 overflow-hidden rounded-lg md:rounded-xl mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          <div className="prose prose-invert max-w-none px-2 sm:px-0">
            <motion.p
              className="text-lg md:text-xl text-blue-200/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {blog.description}
            </motion.p>
            <div className="prose prose-invert max-w-none px-2 sm:px-0">
              <motion.p
                className="text-lg md:text-xl text-blue-200/90 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {blog.description}
              </motion.p>

              {/* Add content section */}
              <motion.div
                className="blog-content text-blue-200/80 space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Metadata section remains the same */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-12 md:mt-16 text-blue-300/80 border-t border-white/10 pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                ...
              </motion.div>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6 md:mt-8 text-blue-300/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center">
                <FiUser className="mr-2 text-blue-400 flex-shrink-0" />
                <span className="truncate">{blog.author}</span>
              </div>
              <div className="flex items-center">
                <FiCalendar className="mr-2 text-blue-400 flex-shrink-0" />
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPage;
