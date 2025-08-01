"use client";

import React, { useState, ReactNode } from "react";
import Modal from "./Modal";


interface ProjectCardProps {
  title: string;
  excerpt: string;
  cta: ReactNode;
  children: ReactNode;
}

export default function ProjectCard({ title, excerpt, cta, children }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer border bg-white border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition text-left"
      >
        <h5 className="font-bold text-lg mb-2">{title}</h5>
        <p className="text-sm text-gray-600">{excerpt}</p>
      </div>
      {open && (
        <Modal onClose={() => setOpen(false)} title={title}>
          {children}
          <div className="mt-6 text-right">{cta}</div>
        </Modal>
      )}
    </>
  );
}
