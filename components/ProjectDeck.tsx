"use client";
import type { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  excerpt: string;
  cta: ReactNode;
  children: ReactNode;
}
import ProjectCard from "./ProjectCard";

export default function ProjectDeck() {
  return (
    <section id="deck" className="mt-24 text-center">
      <h4 className="text-2xl font-semibold mb-8">Featured Projects</h4>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 overflow-x-auto">
        <ProjectCard
          title="The Birth of Moral & Society"
          excerpt="Poetic yet rigorous exploration of ethics, consciousness, and sociogenesis."
          cta={<a href="/papers/society_moral.pdf" download className="btn-primary">Download PDF</a>}
        >
          <p className="text-sm text-gray-700 leading-relaxed">
            Based on the uploaded manuscript, this work argues that moral codes emerge as compression artifacts of societal information networks…
          </p>
        </ProjectCard>
        <ProjectCard
          title="ESSVI Quant Model"
          excerpt="Volatility-surface calibration & non-linear arbitrage detection."
          cta={<a href="https://github.com/solusvigilias/essvi" target="_blank" className="btn-primary">View on GitHub</a>}
        >
          <p className="text-sm text-gray-700">
            Implements Gatheral’s SVI with entropy-box tweaks…
          </p>
        </ProjectCard>
        <ProjectCard
          title="MirrorVerse & EntropyBox"
          excerpt="Architecture to encode, measure, and evolve cognitive/social entropy."
          cta={<a href="https://forms.gle/your-waitlist" target="_blank" className="btn-primary">Join Wait-list</a>}
        >
          <p className="text-sm text-gray-700">
            Public code & paper are under peer review. Sign up to get early access to the alpha sandbox & white-paper.
          </p>
        </ProjectCard>
      </div>
    </section>
  );
}
