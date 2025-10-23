import React, { useState } from "react";
import { UserPlus, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../components/SuccessModal.";
import ErrorModal from "../components/ErrorModal";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [SuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [ShowErrorModal, setErrorModal] = useState({ open: false, message: "" });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [profilePicture, setProfilePicture] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle file selection
  const handleFileChange = (e) => setProfilePicture(e.target.files[0]);

  // 🧾 Submit form (Step 2)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!profilePicture) return setError("Profile picture is required");
    if (password !== confirmPassword) return setError("Passwords do not match");

    // Create FormData for file + text data
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePicture", profilePicture);

    try {
      // 🔗 Make request to backend
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      setSuccessModalOpen(true);
      console.log("User registered:", res.data);

        setTimeout(() => {
          navigate("/signin");
        }, 1500);
    } catch (err) {
     
      const errorMessage = err.response?.data?.message ||"Please try again.";
      console.log("Backend message:", errorMessage);
      setErrorModal({open: true, message: errorMessage}); 
    }
  };

  // Go to step 2
  const nextStep = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !profilePicture) {
      setError("Please fill out all fields in step 1.");
      return;
    }
    setError("");
    setStep(2);
  };

  // Go back to step 1
  const prevStep = (e) => {
    e.preventDefault();
    setStep(1);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 flex items-center justify-center px-6">
      <div className="bg-white/10 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-2xl w-full max-w-lg">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <UserPlus size={36} className="text-indigo-400 mb-3" />
          <h1 className="text-2xl font-bold text-white">
            Create Your{" "}
            <span className="font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              PrionTask
            </span>{" "}
            Account
          </h1>
          <p className="text-gray-400 text-sm mt-1">Step {step} of 2</p>
        </div>

        <ErrorModal
        isOpen={ShowErrorModal.open}
        onClose={() => setErrorModal({ open: false, message: "" })}
        message={ShowErrorModal.message}
      />
        <SuccessModal
          isOpen={SuccessModalOpen}
          onClose={() => setSuccessModalOpen(false)}
        />

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
            <div className="w-12 h-[2px] bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400"></div>
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-700 text-white focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-700 text-white focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-700 text-white focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-700 text-white focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-700 text-white focus:ring-2 focus:ring-indigo-400"
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
