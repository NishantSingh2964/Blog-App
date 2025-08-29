// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center py-4 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Markdown Blog. Built with 💙 using React & Tailwind CSS.
      </p>
    </footer>
  );
}
