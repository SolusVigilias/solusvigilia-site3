import React from "react";
import Hero from "../components/Hero";
import QuoteCarousel from "../components/QuoteCarousel";
import ProjectDeck from "../components/ProjectDeck";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FDFDFB] to-[#F6F4F1] text-gray-900">
      {/* Navbar can be added here */}
      <Hero />
      <QuoteCarousel />
      <ProjectDeck />
      <Footer />
    </main>
  );
}