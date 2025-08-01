import React, { useState, useEffect } from "react";

const quotes = [
  "Some-people born to survive, to live the environment.",
  "Some-people born to challenge, to choose the environment.",
  "踏空之人"
];

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-2xl mx-auto mt-20 text-center">
      <p className="italic text-lg text-gray-600">"{quotes[index]}"</p>
    </section>
  );
}

// --- File: components/Modal.tsx ---
import React, { ReactNode } from "react";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ title, onClose, children }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          ✕
        </button>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
}