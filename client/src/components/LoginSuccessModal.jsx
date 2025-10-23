import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoginSuccessModal = ({ isOpen, onClose, userName }) => {
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
          {/* Modal Container */}
          <motion.div
            className="bg-gradient-to-br from-indigo-950
            via-indigo-900 to-indigo-950 text-white p-8 rounded-3xl 
            shadow-2xl max-w-md w-full relative border border-indigo-600"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >

            {/* Success Icon */}
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 size={64} className="text-green-400 mb-3" />
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Welcome Back!
              </h2>

              <p className="text-gray-300 text-sm mb-6">
                {userName
                  ? `Hello, ${userName}! You have successfully logged in.`
                  : "You have successfully logged in to your account."}
              </p>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginSuccessModal;
