import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#0F172A] text-white py-24 px-6 overflow-hidden"
    >
      {/* Background glowing shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <motion.div
      initial= {{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }} 
      className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Have a question, feedback, or just want to say hi?  
          We’d love to hear from you — your thoughts help shape the future of{" "}
          <span className="text-indigo-400 font-semibold">PrionTask</span>.
        </p>

        {/* Contact Form */}
        <form className="bg-[#1E293B]/60 backdrop-blur-md border border-indigo-900/30 shadow-[0_0_25px_rgba(99,102,241,0.15)] hover:shadow-[0_0_35px_rgba(99,102,241,0.3)] rounded-2xl max-w-2xl mx-auto p-8 text-left transition-all duration-300">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full p-3 rounded-lg bg-[#0F172A]/60 border border-indigo-900/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-[#0F172A]/60 border border-indigo-900/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full p-3 rounded-lg bg-[#0F172A]/60 border border-indigo-900/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 py-3 rounded-full font-semibold text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
