import React, { useState, useEffect } from "react";
import { Menu, X, LogOutIcon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoutModal from "./LogoutModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Check token whenever location changes
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setShowLogoutModal(false);
    navigate("/signin");
  };

  // Scroll-based active link highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // offset for navbar height
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-[#0F172A] text-white sticky w-full top-0 z-50 border-b border-indigo-900/40 
    shadow-[0_2px_20px_rgba(99,102,241,0.1)] transition-all duration-300 px-5">
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/#home"
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          <span className="text-white">Prion</span>Task
        </a>

        {/* Logged out view */}
        {!isLoggedIn ? (
          <>
            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-8 text-sm font-medium">
              {["Home", "Features", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase()}`}
                    className={`relative group ${
                      activeSection === item.toLowerCase()
                        ? "text-indigo-400"
                        : "text-white"
                    } transition`}
                  >
                    <span className="group-hover:text-indigo-400 transition">
                      {item}
                    </span>
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 ${
                        activeSection === item.toLowerCase()
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Auth buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/signin"
                className="px-5 py-2 text-sm font-semibold text-white hover:text-indigo-400 transition border-2 border-indigo-400 rounded-full"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 px-5 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300"
              >
                Sign Up
              </Link>
            </div>
          </>
        ) : (
          // Logged in view (logout only)
          <div className="items-center space-x-4">
            <button
              onClick={() => setShowLogoutModal(true)}
              className="border-2 border-red-500 hover:bg-red-700 px-6 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300"
            >
              <LogOutIcon size={16} className="inline mb-[3px]"></LogOutIcon>{" "}
              Logout
            </button>
          </div>
        )}

        <LogoutModal
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onLogout={handleLogout}
        />

        {/* Mobile toggle button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && !isLoggedIn && (
        <div className="md:hidden fixed w-full bg-[#1E1B4B]/90 backdrop-blur-xl border-t border-indigo-900/40 px-6 pb-6 space-y-4 text-center">
          {["Home", "Features", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className={`block py-2 font-medium ${
                activeSection === item.toLowerCase()
                  ? "text-indigo-400"
                  : "text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex justify-center space-x-4">
            <Link
              to="/signin"
              className="text-white hover:text-indigo-400 border-2 border-indigo-400"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 px-4 py-2 rounded-full text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}

      {/* Mobile logout */}
      {isOpen && isLoggedIn && (
        <div className="md:hidden fixed w-full bg-[#1E1B4B]/90 backdrop-blur-xl border-t border-indigo-900/40 px-6 pb-6 text-center">
          <button
            onClick={() => {
              setIsOpen(false);
              handleLogout();
            }}
            className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-full font-semibold shadow-md transition-all duration-300"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
