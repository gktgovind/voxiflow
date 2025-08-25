"use client";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";

export default function CallToAction() {
  return (
    <section className="relative bg-[url(https://themeadapt.com/tf/dexai/assets/img/images/main_shape.png)] bg-cover bg-center py-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md shadow-lg"
        >
          <FiPhoneCall className="text-white text-3xl" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Start automating your <br /> customer calls today
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-lg text-white/90 max-w-2xl mx-auto"
        >
          Boost productivity, improve customer experience, and save time with our AI-powered call automation.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-8 py-3 rounded-xl text-lg font-semibold bg-white text-indigo-600 shadow-lg hover:shadow-xl transition">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-xl text-lg font-semibold border border-white text-white hover:bg-white/10 transition">
            Schedule Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
