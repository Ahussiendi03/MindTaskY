import React from "react";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" relative bg-[#0F172A] text-gray-300 py-12 px-6 border-t border-indigo-900/30 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Mind<span className="text-indigo-400">Tasky</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            MindTasky helps you stay organized, focused, and motivated.
            Your personal space for mindful productivity.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex items-center flex-col">
          <h3 className="text-lg font-semibold text-white mb-1">Quick Links</h3>
          <div className="flex flex-col space-y-2">
          <a href="#home" className="hover:text-indigo-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-indigo-400 transition">
            About
          </a>
          <a href="#features" className="hover:text-indigo-400 transition">
            Features
          </a>
          <a href="#contact" className="hover:text-indigo-400 transition">
            Contact
          </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start md:items-end">
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <Twitter size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <Github size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-indigo-900/40 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MindTasky. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
