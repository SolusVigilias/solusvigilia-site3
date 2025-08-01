"use client";
import { useState, useEffect } from "react";
export default function Footer() {
  return (
    <footer className="mt-32 py-12 bg-white text-center">
      <div className="space-y-4">
        <a href="https://github.com/solusvigilias" target="_blank" rel="noopener" className="block">GitHub</a>
        <form action="/api/subscribe" method="POST" className="flex justify-center gap-2">
          <input name="email" type="email" placeholder="Your email" required className="px-4 py-2 border rounded" />
          <button type="submit" className="btn-primary">Subscribe</button>
        </form>
      </div>
      <p className="mt-6 text-sm text-gray-500">© 2025 Solus Vigilias</p>
    </footer>
  );
}
