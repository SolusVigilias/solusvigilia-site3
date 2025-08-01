"use client";

import { useEffect, useState } from "react";
import matter from "gray-matter";
import LanguageToggle from "@/components/LanguageToggle";

export default function PhilosophyPage() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const [poem, setPoem] = useState<{ title: string; sections: { title: string; body: string }[] }>({
    title: "",
    sections: [],
  });

  useEffect(() => {
    fetch(`/poems/poem.${lang}.md`)
      .then((res) => res.text())
      .then((text) => {
        const { content, data } = matter(text);
        const sections = content
          .split(/^([一二三四五六七八九十I]+)\s*$/gm)
          .filter((s) => s.trim() !== "");
        const parsed = [];
        for (let i = 0; i < sections.length; i += 2) {
          parsed.push({
            title: sections[i].trim(),
            body: sections[i + 1]?.trim() || "",
          });
        }
        setPoem({ title: data.title || "Poem", sections: parsed });
      });
  }, [lang]);

  return (
    <main className="max-w-3xl mx-auto py-20 px-6 text-white">
      <h1 className="text-4xl font-display mb-12 text-center">{poem.title}</h1>
      <LanguageToggle lang={lang} setLang={setLang} />
      <div className="space-y-16">
        {poem.sections.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">{section.title}</h2>
            <div className="whitespace-pre-line text-lg text-gray-200 leading-relaxed space-y-1">
              {section.body.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}