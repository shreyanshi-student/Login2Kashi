import React from 'react';
import { motion } from 'framer-motion';
// src/constants/imageConstants.js
// import { BLOG_IMAGES } from '../constants/imageConstants';
import blog1 from '../../assets/images/blogs/blogs1.avif';
import blog2 from '../../assets/images/blogs/blogs2.avif';
import blog3 from '../../assets/images/blogs/blogs3.avif';
import blog4 from '../../assets/images/blogs/blogs4.avif';

export const BLOG_IMAGES = {
  blog1,
  blog2,
  blog3,
  blog4,
};


// Sample blog data (replace with actual props or API call)
const blogs = [
  {
    id: 1,
    title: 'Discover the Spiritual Essence of Kashi',
    excerpt: 'Explore the temples, ghats, and vibrant culture...',
    date: 'June 10, 2025',
    image: BLOG_IMAGES.blog1,
    link: 'singleblog'
  },
  {
    id: 2,
    title: 'Top 10 Must-Visit Temples in Varanasi',
    excerpt: 'A curated list of the most iconic temples...',
    date: 'June 12, 2025',
    image: BLOG_IMAGES.blog2,
    link: 'singleblog'
  },
  {
    id: 3,
    title: 'Planning Your Trip to the Ghats',
    excerpt: 'Tips and guides for navigating the holy riverfront...',
    date: 'June 14, 2025',
    image: BLOG_IMAGES.blog3,
    link: 'singleblog'
  },
  {
    id: 4,
    title: 'Local Food Guide for Pilgrims',
    excerpt: 'A flavorful journey through Varanasi\'s street food...',
    date: 'June 15, 2025',
    image: BLOG_IMAGES.blog4,
    link: 'singleblog'
  },
];

const AllBlogs = () => {
  return (
    <div className="text-gray-800">

      {/* Banner */}
      <section className="relative h-[45vh] flex items-center justify-center bg-cover bg-center ">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Our Spiritual Blogs</h1>
          <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto">
            Dive into stories, guides, and insights from the heart of Kashi.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
             <motion.div
  key={blog.id}
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ type: 'spring', stiffness: 300 }}
  className="bg-white rounded-2xl shadow-md overflow-hidden"
>
  <img
    src={blog.image}
    alt={blog.title}
    className="w-full h-56 object-cover"
  />
  <div className="p-6">
    <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
    <h3 className="text-xl font-semibold mb-2 text-blue-900">{blog.title}</h3>
    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
    <a href={blog.link}>
    <button className="text-blue-700 font-medium hover:underline">
      Read More →
    </button></a>
  </div>
</motion.div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllBlogs;
