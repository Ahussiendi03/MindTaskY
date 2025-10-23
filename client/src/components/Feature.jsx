import React from "react";
import { ListTodo, Target, Clock, BarChart3 } from "lucide-react";
import { motion, spring } from "framer-motion";

const Feature = () => {
  const features = [
    {
      icon: <ListTodo size={40} className="text-indigo-400" />,
      title: "Task Management",
      description:
        "Add, edit, and organize all your daily tasks in one simple dashboard to keep your day structured and productive.",
    },
    {
      icon: <Target size={40} className="text-indigo-400" />,
      title: "Priority Levels",
      description:
        "Assign priorities to each task so you can focus on what’s most important and finish key goals first.",
    },
    {
      icon: <Clock size={40} className="text-indigo-400" />,
      title: "Reminders & Deadlines",
      description:
        "Stay on schedule with smart reminders and deadlines that help you never miss an important activity again.",
    },
    {
      icon: <BarChart3 size={40} className="text-indigo-400" />,
      title: "Progress Tracking",
      description:
        "Visualize your progress and celebrate small wins as you complete tasks and move closer to your goals.",
    },
  ];

  return (
    <section
      id="features"
      className="relative bg-[#0F172A] text-white py-24 px-6 flex flex-col items-center overflow-hidden"
    >
      {/* Subtle background glow orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text"
      >
        Key Features
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-gray-400 text-center max-w-2xl mb-16"
      >
        Everything you need to stay focused, productive, and organized — all in
        one app built to empower your daily workflow.
      </motion.p>

      {/* Feature Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            initial={{ capacity: 0, y: 50 }}
            whileInView={{ capacity: 1, y: 0 }}
            transition={{ duration: 0, delay: index * 0.2 }}
            key={index}
            className="group bg-[#1E293B]/60 backdrop-blur-md p-8 rounded-2xl border border-indigo-900/30 hover:border-indigo-500/50 duration-500 shadow-[0_0_10px_rgba(99,102,241,0.15)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:-translate-y-2"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-all duration-300">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
