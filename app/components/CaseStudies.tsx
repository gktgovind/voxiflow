"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FiArrowRight } from "react-icons/fi";

const caseStudies = [
  {
    id: 1,
    icon: "🏢",
    title: "PropTech Solutions",
    highlight: "Reduced call volumes by 70%",
    desc: "Automated property inquiries and lead qualification for a leading real estate platform.",
    stats: ["70% call reduction", "3x faster response", "95% satisfaction"],
    tag: "Real Estate",
  },
  {
    id: 2,
    icon: "🏥",
    title: "HealthCare Connect",
    highlight: "Improved patient satisfaction by 40%",
    desc: "Streamlined appointment scheduling and health inquiries for medical practices.",
    stats: ["40% satisfaction boost", "24/7 availability", "85% automation"],
    tag: "Healthcare",
  },
  {
    id: 3,
    icon: "💻",
    title: "TechSupport Pro",
    highlight: "Cut support costs by 60%",
    desc: "Automated tier-1 technical support and troubleshooting for software companies.",
    stats: ["60% cost reduction", "2min avg resolution", "90% first-call fix"],
    tag: "Technology",
  },
  {
    id: 4,
    icon: "✈️",
    title: "TravelAssist AI",
    highlight: "Boosted booking conversions by 35%",
    desc: "Personalized travel planning with AI-driven recommendations.",
    stats: ["35% higher bookings", "Instant responses", "99% accuracy"],
    tag: "Travel",
  },
  {
    id: 5,
    icon: "🏦",
    title: "FinServe Bot",
    highlight: "Reduced loan processing time by 50%",
    desc: "Automated application handling and KYC verification.",
    stats: ["50% faster approvals", "Fraud detection AI", "Seamless onboarding"],
    tag: "Finance",
  },
  {
    id: 6,
    icon: "🛍️",
    title: "ShopSmart AI",
    highlight: "Increased upsell revenue by 25%",
    desc: "Smart product recommendations for e-commerce platforms.",
    stats: ["25% higher AOV", "1-click checkout", "Real-time suggestions"],
    tag: "E-commerce",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl font-bold text-center text-[#111827] mb-14">
          See How Others Did It
        </h2>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 }, // 👈 Desktop पर 3 card दिखेंगे
          }}
        >
          {caseStudies.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white mb-10 rounded-2xl shadow-sm hover:shadow-lg transition-all p-6 border border-gray-100 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-emerald-50 text-emerald-600 font-medium">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-emerald-600 font-medium text-lg mb-3">
                  {item.highlight}
                </p>
                <p className="text-gray-600 mb-4">{item.desc}</p>

                <ul className="space-y-1 text-gray-700 mb-6">
                  {item.stats.map((stat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                      {stat}
                    </li>
                  ))}
                </ul>

                <button className="mt-auto border border-emerald-600 rounded text-center  items-center p-2 text-emerald-600 font-semibold hover:gap-3 transition-all">
                  Read More <FiArrowRight className="inline-block" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
