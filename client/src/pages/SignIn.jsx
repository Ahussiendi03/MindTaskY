import React from "react";
import { useState } from "react";
import { LogIn } from "lucide-react";
import axios from "axios";
import LoginSuccessModal from "../components/LoginSuccessModal";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/signin", { 
                email,
                password,
            }, {
                withCredentials: true,
            });
            localStorage.setItem("token", res.data.token);
            setShowSuccessModal(true);

            console.log("Sign-in successful:", res.data);
        } catch (error) {
            console.error("Error during sign-in:", error);
            console.log(error.response?.data?.message || "Server error");
        }
    };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 flex items-center justify-center">
      {/* Glassmorphism Container */}
        <div className=" bg-white/10 border border-white/40 p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">
            {/* Header */}
            <div className="flex flex-col items-center mb-8">
            <LogIn size={40} className="text-indigo-400 mb-3" />
            <h1 className="text-4xl font-bold text-white mb-2">
                Welcome To <br></br><span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400
                bg-clip-text text-transparent font-extrabold">MindTaskY</span>
            </h1>
            <p className="text-gray-400 text-sm">
                Sign in to continue your productivity journey.
            </p>
            </div>

            {/* Form */}
            <form onClick={handleSubmit} className="flex flex-col space-y-5">
            <div className="text-left">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
                </label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            <LoginSuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />

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
