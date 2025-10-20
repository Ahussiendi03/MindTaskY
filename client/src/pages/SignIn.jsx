import React from "react";
import { LogIn } from "lucide-react";

const SignIn = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 flex items-center justify-center">
      {/* Glassmorphism Container */}
        <div className=" bg-white/5 border border-white/5 p-10 rounded-3xl shadow-2xl w-full max-w-md text-center ">
            {/* Header */}
            <div className="flex flex-col items-center mb-8">
            <LogIn size={40} className="text-indigo-400 mb-3" />
            <h1 className="text-3xl font-bold text-white mb-2">
                Welcome Back to <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400
                bg-clip-text text-transparent font-extrabold">MindTaskY</span>
            </h1>
            <p className="text-gray-400 text-sm">
                Sign in to continue your productivity journey.
            </p>
            </div>

            {/* Form */}
            <form className="flex flex-col space-y-5">
            <div className="text-left">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
                </label>
                <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500 transition"
                />
            </div>

            <div className="text-left">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
                </label>
                <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500 transition"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl shadow-lg transition"
            >
                Sign In
            </button>
            </form>

            {/* Additional Links */}
            <div className="mt-6 text-gray-400 text-sm">
            <p>
                Don’t have an account?{" "}
                <a href="/signup" className="text-indigo-400 hover:underline">
                Sign Up
                </a>
            </p>
            </div>
        </div>
    </section>
  );
};

export default SignIn;
