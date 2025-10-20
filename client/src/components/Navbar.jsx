import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#0F172A] text-white sticky w-full top-0 z-50 border-b border-indigo-900/40 shadow-[0_2px_20px_rgba(99,102,241,0.1)] transition-all duration-300">
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        <a href="/#home" className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          <span className="text-white">Mind</span>TaskY
        </a>

        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {["Home", "Features", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`/#${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="text-white group-hover:text-indigo-400 transition">
                  {item}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/signin"
            className="text-sm font-medium border border-indigo-500/70 text-indigo-300 hover:text-white px-4 py-2 rounded-full hover:bg-indigo-600/30 transition-all duration-300"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 px-4 py-2 rounded-full text-sm font-semibold shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed w-full bg-[#1E1B4B]/90 backdrop-blur-xl border-t border-indigo-900/40 px-6 pb-6 space-y-4 text-center">
          {["Home", "Features", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-300 hover:text-indigo-400 transition mt-2"
            >
              {item}
            </a>
          ))}

          <div className="pt-4 space-y-3">
            <a
              href="/signin"
              className="block text-center border border-indigo-500/70 text-indigo-300 py-2 rounded-full font-semibold hover:bg-indigo-600/30 hover:text-white transition-all duration-300"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="block text-center bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 py-2 rounded-full font-semibold shadow-[0_0_10px_rgba(99,102,241,0.4)] transition-all duration-300"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
