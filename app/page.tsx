"use client";


import HeroSection from "./components/HeroSection";
import AiAgents from "./components/AiAgents";
import CaseStudies from "./components/CaseStudies";
import Blogs from "./components/Blogs";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Hero() {
  return (
    <>
      <HeroSection />
      <AiAgents />
      <CaseStudies />
      <Blogs />
      <CallToAction />
      <Footer />
  </>
  );
}
