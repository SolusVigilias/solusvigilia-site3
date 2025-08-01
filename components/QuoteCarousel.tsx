"use client";

import { useState, useEffect } from "react";

const quotes = [
  "Some-people born to survive, to live the environment.",
  "Some-people born to challenge, to choose the environment.",
  "Some-people born to be creative, to stay truthful in the environment.",
  "踏空之人",
];

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-4xl mx-auto mt-20 px-6 text-center">
      <p className="text-2xl md:text-3xl font-display italic text-white transition-opacity duration-700 ease-in-out">
        “{quotes[index]}”
      </p>
    </section>
  );
}