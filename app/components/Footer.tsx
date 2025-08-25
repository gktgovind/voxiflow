"use client";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 relative overflow-hidden border-gray-800 border-t">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Brand / Logo */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            Voxi<span className="text-indigo-500">AI</span>
          </motion.h2>
          <p className="mt-3 text-sm text-gray-400">
            Voice-first AI agents to automate customer calls and boost productivity.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-400">Careers</a></li>
            <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
            <li><a href="#" className="hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-400">Features</a></li>
            <li><a href="#" className="hover:text-indigo-400">Pricing</a></li>
            <li><a href="#" className="hover:text-indigo-400">Demo</a></li>
            <li><a href="#" className="hover:text-indigo-400">Integrations</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full rounded-l-md bg-gray-800 text-sm text-white border border-gray-700 focus:outline-none"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} VoxiAI. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 mt-4 md:mt-0">
          <a href="https://twitter.com" target="_blank" className="hover:text-indigo-400 transition">
            <FaTwitter size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-indigo-400 transition">
            <FaLinkedin size={18} />
          </a>
          <a href="https://github.com" target="_blank" className="hover:text-indigo-400 transition">
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
