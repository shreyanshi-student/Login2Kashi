// components/EnquiryPopup.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MapPin,
  UserRound,
  SendHorizonal,
  XCircle,
  ClipboardEdit,
} from "lucide-react";

export default function EnquiryPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const closePopup = () => setShowPopup(false);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 max-w-md w-full p-8 relative"
            initial={{ scale: 0.8, y: -30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-4 text-gray-700 hover:text-red-500 transition"
              title="Close"
            >
              <XCircle size={28} />
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-center text-blue-700 mb-6 flex items-center justify-center gap-2">
              <ClipboardEdit size={26} /> Enquiry Form
            </h2>

            {/* Form */}
            <form className="space-y-4">
              {/* Name Field */}
              <div className="relative">
                <UserRound className="absolute top-3 left-3 text-blue-500" size={20} />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Contact Field */}
              <div className="relative">
                <Phone className="absolute top-3 left-3 text-blue-500" size={20} />
                <input
                  type="tel"
                  placeholder="Contact Number"
                  pattern="[0-9]{10}"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Place Field */}
              <div className="relative">
                <MapPin className="absolute top-3 left-3 text-blue-500" size={20} />
                <input
                  type="text"
                  placeholder="Place You Want to Visit"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition flex items-center justify-center gap-2"
              >
                <SendHorizonal size={18} /> Send Enquiry
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
