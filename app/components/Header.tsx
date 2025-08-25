"use client";

import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-5 shadow-sm bg-white sticky top-0 z-50">
      {/* Left: Logo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold bg-gradient-to-r from-teal-600 via-purple-600 to-pink-500 bg-clip-text text-transparent tracking-wide"
      >
        Voxiflow<span className="opacity-70">AI</span>
      </motion.div>

      {/* Right: Social Icons */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex gap-4"
      >
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border text-teal-600 rounded-md text-gray-600 hover:text-teal-600 hover:border-teal-600 transition-transform transform hover:scale-110"
        >
          <FiTwitter size={20} />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border text-teal-600 rounded-md text-gray-600 hover:text-teal-600 hover:border-teal-600 transition-transform transform hover:scale-110"
        >
          <FiLinkedin size={20} />
        </a>
      </motion.div>
    </header>
  );
}
