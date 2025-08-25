"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Main Section */}
      <section className="relative bg-white py-20 bg-[url(https://elementorpress.com/templatekit-pro/layout45/wp-content/uploads/2022/06/service-bg-layer.png)] bg-no-repeat bg-right">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-extrabold text-gray-900 leading-tight"
            >
              Voxis <span className="text-teal-600">AI Agents</span> <br />
              Communicate With Your <br />
              Customers the Way You Would
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-lg text-gray-600 max-w-xl"
            >
              A Voice-First Agentic AI Platform That Manages the Entire Customer
              Engagement Journey Like Your Best Agent.
            </motion.p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg">
              {[
                { value: "10M+", label: "Real customer calls processed" },
                { value: "10+", label: "High-growth startups using Voxiflow" },
                { value: "300%", label: "ROI delivered through automation" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.3 }}
                >
                  <h3 className="text-6xl font-bold text-teal-600">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mt-10 flex gap-4"
            >
              <button className="px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition">
                Experience Center
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
              >
                Live Demo
              </button>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[380px] h-[400px] ">
              <Image
                src="/ai-agent.png" // 👈 यहाँ अपनी image डालना
                alt="AI Agent"
                fill
                className=""
              />
            </div>
          </motion.div>
        </div>
      </section>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex items-center justify-center w-12 h-12 "
      >
        <FiChevronDown className="w-16 h-16 text-white" />
      </motion.div>
    </div>
      {/* Modal */}
      <AnimatePresence>
        {showModal && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          >
            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-white/10 backdrop-blur-2xl border border-teal-400/30 shadow-2xl rounded-2xl p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-200 hover:text-white"
              >
               X
              </button>

              {/* AI Heading */}
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-extrabold text-center bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent"
              >
                🚀 Book Your Live AI Demo
              </motion.h2>

              {/* Subtitle */}
              <p className="text-gray-300 text-center mt-2">
                Experience how <span className="text-teal-400">Voxi AI Agents</span>  
                can transform your customer engagement.
              </p>

              {/* Form */}
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 outline-none"
                ></textarea>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(45,212,191,0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg"
                >
                  Submit Request
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
