import React from 'react';
import { motion } from 'framer-motion';
import blogImage from '../../assets/images/blogs/blogs2.avif';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const SingleBlog = () => {
  return (
    <div className="text-gray-800 font-sans">
      {/* Banner */}
      <section
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${blogImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-md">
            The Spiritual Wonders of Varanasi
          </h1>
          <p className="mt-2 text-lg font-light drop-shadow">
            Published on June 14, 2025 · by <strong>Arya Sharma</strong>
          </p>
        </motion.div>
      </section>

      {/* Blog Content */}
      <motion.main
        className="max-w-4xl mx-auto px-6 py-12 leading-relaxed text-lg"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeInUp}>
          Varanasi, also known as Kashi or Benares, is one of the oldest living cities in the world. A sacred destination for millions of pilgrims, the city offers a unique blend of spirituality, tradition, and culture.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          The Ghats of the Ganges
        </motion.h2>
        <motion.p variants={fadeInUp}>
          Every corner of Varanasi tells a story. The Ghats lining the Ganges are not just steps; they are symbols of eternal connection between life and death. The early morning aarti at Assi Ghat, the chaotic vibrance of Dashashwamedh Ghat—each has a distinct energy.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Cultural Significance
        </motion.h2>
        <motion.p variants={fadeInUp}>
          Whether you’re exploring the narrow lanes filled with aromas of street food, or attending an evening aarti on the riverbanks, Varanasi promises a deeply personal and transformative experience for every visitor.
        </motion.p>
      </motion.main>

      {/* Author Box */}
      <motion.section
        className="bg-gray-100 py-10 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto flex items-center gap-6">
          <img
            src={blogImage}
            alt="Author"
            className="w-20 h-20 rounded-full object-cover shadow-lg"
          />
          <div>
            <h4 className="text-xl font-semibold">Arya Sharma</h4>
            <p className="text-gray-600 text-sm">
              Arya is a spiritual traveler and author who writes about India's ancient cities and their hidden stories.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Related Posts */}
     <motion.section
  className="max-w-6xl mx-auto px-6 py-16"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h3 className="text-3xl font-bold mb-10 text-center text-blue-900">You might also like</h3>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[1, 2, 3].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        <div className="relative h-60 w-full overflow-hidden">
          <img
            src={blogImage}
            alt="related blog"
            className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 group-hover:opacity-80 transition duration-500"></div>
        </div>

        <div className="absolute bottom-0 p-5 text-white w-full z-10">
          <h4 className="text-xl font-bold drop-shadow">Exploring Rishikesh</h4>
          <p className="text-sm opacity-80 mt-1">A journey to the yoga capital of the world.</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>

    </div>
  );
};

export default SingleBlog;
