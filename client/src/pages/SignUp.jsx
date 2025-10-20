import React, { useState } from "react";
import { UserPlus, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const SignUp = () => {
  const [step, setStep] = useState(1);

  const nextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep(1);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 flex items-center justify-center px-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl w-full max-w-lg">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-6">
                <UserPlus size={36} className="text-indigo-400 mb-3" />
                <h1 className="text-2xl font-bold text-white">
                    Create Your <span className="font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">MindTaskY</span> Account
                </h1>
                <p className="text-gray-400 text-sm mt-1">Step {step} of 2</p>
            </div>

            {/* Step Indicator */}
            <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
                <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                    step >= 1
                    ? "bg-indigo-500 text-white"
                    : "bg-indigo-950 text-gray-500 border border-gray-700"
                }`}
                >
                1
                </div>
                <div className="w-10 h-[2px] bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400"></div>
                <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                    step === 2
                    ? "bg-indigo-500 text-white"
                    : "bg-indigo-950 text-gray-500 border border-gray-700"
                }`}
                >
                2
                </div>
            </div>
            </div>

            {/* Step 1 – Basic Info */}
            {step === 1 && (
            <form onSubmit={nextStep} className="space-y-4">
                <div>
                <label className="block text-sm text-gray-300 mb-2">
                    First Name
                </label>
                <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-700 text-white focus:ring-2 focus:ring-indigo-400 placeholder-gray-500 transition"
                />
                </div>

                <div>
                <label className="block text-sm text-gray-300 mb-2">
                    Last Name
                </label>
                <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-700 text-white focus:ring-2 focus:ring-indigo-400 placeholder-gray-500 transition"
                />
                </div>

                <div>
                <label className="block text-sm text-gray-300 mb-2">
                    Profile Picture
                </label>
                <input
                    type="file"
                    className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full 
                    file:border-0 file:text-sm file:font-semibold file:bg-indigo-500 
                    file:text-white hover:file:bg-indigo-600 transition"
                />
                </div>

                <div className="flex justify-end mt-5">
                <button
                    type="submit"
                    className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                    Next <ArrowRight size={16} />
                </button>
                </div>
            </form>
            )}

            {/* Step 2 – Account Details */}
            {step === 2 && (
            <form className="space-y-4">
                <div>
                <label className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-700 text-white focus:ring-2 focus:ring-indigo-400 placeholder-gray-500 transition"
                />
                </div>

                <div>
                <label className="block text-sm text-gray-300 mb-2">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="••••••••"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-700 text-white focus:ring-2 focus:ring-indigo-400 placeholder-gray-500 transition"
                />
                </div>

                <div>
                <label className="block text-sm text-gray-300 mb-2">
                    Confirm Password
                </label>
                <input
                    type="password"
                    placeholder="••••••••"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-700 text-white focus:ring-2 focus:ring-indigo-400 placeholder-gray-500 transition"
                />
                </div>

                <div className="flex justify-between mt-5">
                <button
                    onClick={prevStep}
                    className="flex items-center gap-2 border border-indigo-500 text-indigo-400 px-5 py-3 rounded-xl font-semibold hover:bg-indigo-500/20 transition"
                >
                    <ArrowLeft size={16} /> Back
                </button>

                <button
                    type="submit"
                    className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                    Create Account <CheckCircle2 size={16} />
                </button>
                </div>
            </form>
            )}

            {/* Footer */}
            <div className="text-gray-400 text-sm text-center mt-6">
                Already have an account?{" "}
                <a href="/signin" className="text-indigo-400 hover:underline">
                    Sign In
                </a>
            </div>
        </div>
    </section>
  );
};

export default SignUp;
