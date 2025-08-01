"use client";

import QuoteCarousel from "@/components/QuoteCarousel";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-20 md:py-24 text-white">
      {/* QUOTE */}
      <QuoteCarousel />

      {/* IDENTITY */}
      <section className="text-center mt-16">
        <h1 className="text-5xl md:text-6xl font-display font-bold">Solus Vigilias</h1>
        <p className="mt-4 text-lg text-gray-200">Information Structure Philosopher</p>
        <p className="mt-2 text-sm text-blue-400">
          <a href="/philosophy" className="underline">Read My Philosophy</a>
        </p>
      </section>

      {/* PROJECTS */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectCard
            title="The Birth of Moral & Society"
            description="Poetic yet rigorous exploration of ethics, consciousness, and sociogenesis."
            link="/philosophy"
          />
          <ProjectCard
            title="ESSVI Quant Model"
            description="Volatility-surface calibration & non-linear arbitrage detection."
            link="https://github.com/SolusVigilias/essvi-surface-calibration"
          />
          <ProjectCard
            title="MirrorVerse & EntropyBox"
            description="Architecture to encode, measure, and evolve cognitive/social entropy."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center">
        <a href="https://github.com/SolusVigilias" className="text-blue-400 underline">
          GitHub
        </a>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-l bg-white text-black"
          />
          <button className="btn-primary rounded-r">Subscribe</button>
        </div>
      </section>

      <footer className="mt-20 py-8 border-t border-gray-700 text-center text-sm text-gray-400">
        © 2025 <span className="font-semibold text-white">Solus Vigilias</span>
      </footer>
    </main>
  );
}

function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link?: string;
}) {
  const content = (
    <div className="bg-white/10 border border-white/20 rounded-xl shadow-sm p-6 hover:shadow-lg transition backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sm text-gray-200">{description}</p>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}