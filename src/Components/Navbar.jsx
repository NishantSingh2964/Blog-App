import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItemClasses = (path) =>
    `px-4 py-2 rounded-md transition-all duration-300 transform font-medium
     ${
       pathname === path
         ? "bg-white text-blue-700 scale-105 shadow-md"
         : "text-white hover:bg-white hover:text-blue-700 hover:scale-105 hover:shadow-lg"
     }`;

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-white">
          <Link to="/" className="hover:opacity-90 transition duration-300">
            Markdown Blog 📝
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-4">
          <Link to="/" className={navItemClasses("/")}>
            Home
          </Link>
          <Link to="/create" className={navItemClasses("/create")}>
            Create Post
          </Link>
          <Link to="/all-posts" className={navItemClasses("/all-posts")}>
            View Posts
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-4 px-6">
          <Link
            to="/"
            className={navItemClasses("/")}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/create"
            className={navItemClasses("/create")}
            onClick={() => setIsOpen(false)}
          >
            Create Post
          </Link>
          <Link
            to="/all-posts"
            className={navItemClasses("/all-posts")}
            onClick={() => setIsOpen(false)}
          >
            View Posts
          </Link>
        </div>
      </div>
    </nav>
  );
}
