import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What is Spiritual Trails?',
    answer:
      'Spiritual Trails is a travel experience platform focusing on India’s most sacred destinations. We guide your journey with cultural depth and spiritual insights.',
  },
  {
    question: 'How can I book a spiritual trip?',
    answer:
      'Visit our Book Now page or contact our team directly through the Contact page. We offer customized and group packages.',
  },
  {
    question: 'Are your guides certified?',
    answer:
      'Yes, all our guides are well-trained, locally knowledgeable, and sensitive to spiritual practices and customs.',
  },
  {
    question: 'Do you provide travel insurance?',
    answer:
      'Yes, travel insurance is available as an optional add-on when you book your journey.',
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-gray-800 bg-white">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 px-4"
      >
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Find answers to the most common questions about our services and spiritual travel experiences.
        </p>
      </motion.section>

      {/* FAQ List */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="border rounded-xl shadow-sm overflow-hidden transition"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-all"
              >
                <span className="text-lg font-medium text-left">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 py-4 bg-white border-t text-gray-700"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-blue-900 text-white py-16 text-center px-6"
      >
        <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
        <p className="mb-6 text-lg">We're here to help you. Get in touch with us directly.</p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
        >
          Contact Us
        </Link>
      </motion.section>
    </div>
  );
};

export default FaqPage;
