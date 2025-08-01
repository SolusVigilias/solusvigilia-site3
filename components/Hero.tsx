"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto text-center mt-16 space-y-6">
      <blockquote className="italic text-xl md:text-2xl text-gray-600">
        “To compress the universe is to design its next dimension.”
      </blockquote>
      <h2 className="text-5xl font-extrabold tracking-tight text-black">
        Solus Vigilias
      </h2>
      <h3 className="text-lg text-gray-500">
        Information Structure Philosopher
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <button data-target="#deck" className="btn-primary">
          Featured Work
        </button>
        <a href="/library" className="btn-outline">
          Full Library
        </a>
      </div>
    </section>
  );
}