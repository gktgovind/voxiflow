"use client";
import { motion } from "framer-motion";
import { FiPlay, FiPause, FiCalendar } from "react-icons/fi";
import { useRef, useState } from "react";
import Image from "next/image";

const useCases = [
    {
        title: "Customer Support",
        category: "E-commerce",
        lang: "English",
        desc: "Handle customer inquiries and resolve issues efficiently",
        img: "/avatars/testi_avatar01.png",
        audio: "/audio/sample1.mp3",
    },
    {
        title: "Lead Qualification",
        category: "Real Estate",
        lang: "Hindi",
        desc: "Qualify potential buyers and schedule property viewings",
        img: "/avatars/testi_avatar02.png",
        audio: "/audio/sample1.mp3",
    },
    {
        title: "Appointment Booking",
        category: "Healthcare",
        lang: "English",
        desc: "Schedule appointments and manage patient calendars",
        img: "/avatars/testi_avatar03.png",
        audio: "/audio/sample1.mp3",
    },
    {
        title: "Travel Assistant",
        category: "Travel",
        lang: "English",
        desc: "Help customers find flights, hotels, and packages",
        img: "/avatars/testi_avatar04.png",
        audio: "/audio/sample1.mp3",
    },
    {
        title: "Food Ordering",
        category: "Hospitality",
        lang: "Hindi",
        desc: "Take customer orders and confirm delivery time",
        img: "/avatars/testi_avatar05.png",
        audio: "/audio/sample1.mp3",
    },
    {
        title: "Banking Queries",
        category: "Finance",
        lang: "English",
        desc: "Answer account-related questions securely",
        img: "/avatars/testi_avatar06.png",
        audio: "/audio/sample1.mp3",
    },
];

export default function UseCases() {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

    const handlePlayPause = (index: number) => {
        const audio = audioRefs.current[index];
        if (!audio) return;

        if (playingIndex === index) {
            audio.pause();
            setPlayingIndex(null);
        } else {
            audioRefs.current.forEach((a, i) => {
                if (a && i !== index) a.pause();
            });
            audio.play();
            setPlayingIndex(index);
        }
    };

    return (
        <section className="py-16 bg-[url(https://themeadapt.com/tf/dexai/assets/img/images/main_shape.png)] bg-cover bg-center text-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-6xl font-bold mb-3">
                    Try the AI Agent Yourself
                </h2>
                <p className="mb-10">Explore different use cases and hear how our AI agents handle real customer interactions</p>
                {/* Grid of 6 cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                    {useCases.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[url(https://aizenius-nextjs.vercel.app/assets/images/shape/shape-17.png)] bg-cover rounded-2xl p-3 shadow-lg border border-gray-800 flex flex-col items-center relative"
                        >
                         
                            {/* Avatar */}
                          <Image
  src={item.img}
  alt={item.title}
  width={64}   // pixel value (same as w-16)
  height={64}  // pixel value (same as h-16)
  className="w-16 h-16 rounded-full mb-4 object-cover"
/>

                            {/* Title */}
                            <h3 className="text-lg font-semibold">{item.title}</h3>

                            {/* Tags */}
                            <div className="flex gap-2 mt-2 mb-3">
                                <span className="px-3 py-1 text-xs bg-teal-900/40 text-teal-400 rounded-full">
                                    {item.category}
                                </span>
                                <span className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">
                                    {item.lang}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-100 font-bold text-sm mb-4">{item.desc}</p>

                            {/* Play Button */}
                            <motion.button
                                onClick={() => handlePlayPause(i)}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-600 hover:bg-teal-500 transition relative overflow-hidden"
                            >
                                {playingIndex === i ? (
                                    <FiPause className="text-white text-1xl" />
                                ) : (
                                    <FiPlay className="text-white text-1xl" />
                                )}
                            </motion.button>

                            {/* Full Width Equalizer */}
                            {playingIndex === i && (
                                <div className="absolute bottom-0 left-0 w-full h-8  rounded-b-2xl flex items-end justify-center gap-[4px] overflow-hidden">
                                    {Array.from({ length: 40 }).map((_, bar) => (
                                        <motion.div
                                            key={bar}
                                            className="w-[3px] bg-teal-400 rounded"
                                            animate={{
                                                height: ["20%", "80%", "30%", "70%", "40%"],
                                            }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: bar * 0.05,
                                            }}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Hidden Audio */}
                            <audio
                                ref={(el) => {
                                    audioRefs.current[i] = el;
                                }}
                                src={item.audio}
                                onEnded={() => setPlayingIndex(null)}
                            />
                        </motion.div>
                    ))}
                </div>
                <button className=" px-5 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-semibold transition mt-5">
                    <FiCalendar className="text-lg inline-block me-2 -mt-1" />
                    Schedule Live Demo
                </button>
            </div>
        </section>
    );
}
