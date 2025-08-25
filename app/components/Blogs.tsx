"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    title: "How AI is Transforming Travel",
    desc: "Discover how artificial intelligence is reshaping the future of travel experiences.",
    img: "/blogs/blog1.jpg",
    date: "Aug 18, 2025",
  },
  {
    title: "Top 10 Pilgrimage Destinations",
    desc: "A curated list of must-visit spiritual places that inspire inner peace.",
    img: "/blogs/blog2.jpg",
    date: "Aug 15, 2025",
  },
  {
    title: "Why Personalization Matters",
    desc: "Learn why personalized travel packages drive customer satisfaction.",
    img: "/blogs/blog3.jpg",
    date: "Aug 10, 2025",
  },
  {
    title: "The Future of E-Commerce",
    desc: "Insights into how digital solutions empower global businesses.",
    img: "/blogs/blog1.jpg",
    date: "Aug 8, 2025",
  },
  {
    title: "Tips for Hassle-Free Bookings",
    desc: "Step-by-step tips to make your next trip booking smoother than ever.",
    img: "/blogs/blog2.jpg",
    date: "Aug 5, 2025",
  },
  {
    title: "Sustainable Travel Insights",
    desc: "Why eco-friendly travel is the new norm and how to adapt.",
    img: "/blogs/blog3.jpg",
    date: "Aug 2, 2025",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Insights & Stories
          </h2>
          <p className="text-gray-600 mt-2">
            Stay updated with the latest blogs, guides, and stories.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-60">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-sm text-emerald-600 font-medium">
                  {blog.date}
                </span>
                <h3 className="text-lg font-semibold mt-2 text-gray-900 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {blog.desc}
                </p>
                <button className="mt-auto text-emerald-600 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
