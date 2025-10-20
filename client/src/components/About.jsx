import React from "react";
import ToDo from "../images/to-do-list.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0F172A] text-white py-24 px-6 overflow-hidden"
    >

      <div className="absolute top-10 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>


      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center md:justify-end">
          <div className="bg-[#1E293B]/60 border border-indigo-900/30 backdrop-blur-lg rounded-3xl shadow-[0_0_25px_rgba(99,102,241,0.2)] p-6 hover:shadow-[0_0_35px_rgba(99,102,241,0.4)] hover:scale-105 transition-transform duration-500">
            <img
              src={ToDo}
              alt="MindTasky productivity illustration"
              className="w-72 md:w-96 rounded-2xl drop-shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About MindTasky
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            <span className="text-indigo-400 font-extrabold">MindTasky</span> is your modern productivity companion — 
            a space to capture tasks, assign priorities, and stay in control of your daily flow. 
            It’s not just a task manager — it’s a mindset enhancer.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Built for creators, students, and professionals alike, MindTasky blends functionality
            with focus. It turns your goals into manageable actions and helps you stay aligned with your purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/signup"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 px-8 py-3 rounded-full font-semibold text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="border border-indigo-500/70 text-indigo-300 hover:text-white hover:bg-indigo-600/20 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
