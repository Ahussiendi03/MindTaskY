import React from "react";
import { CheckCircle2, Link, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SuccessModal = ({ isOpen, onClose, message }) => {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Content */}
          <motion.div
            className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 text-white p-8 rounded-3xl shadow-2xl max-w-md w-full relative border border-indigo-700/30"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              <X size={20} />
            </button>

            {/* Success Icon */}
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 size={60} className="text-green-400 mb-3" />
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Success!
              </h2>
              <p className="text-gray-300 text-sm mb-6">
                {message || "Your account has been created successfully."}
              </p>

              <button
                onClick={() => {
                  onClose();
                  navigate("/signin");
                }}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
