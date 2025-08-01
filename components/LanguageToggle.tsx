"use client";
import { Dispatch, SetStateAction } from "react";

export default function LanguageToggle({
  lang,
  setLang,
}: {
  lang: "zh" | "en";
  setLang: Dispatch<SetStateAction<"zh" | "en">>;
}) {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <button
        className={`px-4 py-2 rounded ${
          lang === "zh"
            ? "bg-blue-600 text-white"
            : "bg-white text-black border border-gray-300"
        }`}
        onClick={() => setLang("zh")}
      >
        中文原文
      </button>
      <button
        className={`px-4 py-2 rounded ${
          lang === "en"
            ? "bg-blue-600 text-white"
            : "bg-white text-black border border-gray-300"
        }`}
        onClick={() => setLang("en")}
      >
        English
      </button>
    </div>
  );
}