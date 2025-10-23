import React from "react";
import book from "../images/book.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative text-white min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${book})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#0F172A]/70"></div>

      <div className="absolute top-10 left-0 w-80 h-80 bg-indigo-400/25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl py-3 md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg"
        >
          Organize Smarter with PrionTask
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }} // Start: hidden and moved down
          whileInView={{ opacity: 1, y: 0 }} // Animate when visible
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth motion
          className="text-base md:text-lg text-gray-400 max-w-2xl mb-10"
        >
          Simplify your workflow and stay on top of your goals add your tasks,
          set priorities, and track progress all in one sleek, intuitive
          platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 300,
          }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/signup"
            className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 hover:opacity-90 px-8 py-3 rounded-full font-semibold text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="border border-indigo-500/70 text-indigo-300 hover:bg-indigo-600/20 hover:border-indigo-400 px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>

        <div className="mt-16 text-gray-500 text-sm tracking-wide">
          <p> Plan. Prioritize. Perform. — The PrionTask Way.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
