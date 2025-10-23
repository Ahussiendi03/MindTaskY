import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, X } from "lucide-react";

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-slate-900 border border-indigo-600/70 
            dark:bg-gray-900 rounded-2xl p-6 w-[90%] max-w-md text-center
            shadow-[0_2px_20px_rgba(99,102,241,0.1)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              <X size={20} />
            </button>

            {/* Icon */}
            <div className="mx-auto mb-4 flex items-center justify-center bg-red-100 dark:bg-red-900/40 w-16 h-16 rounded-full">
              <LogOut className="text-red-600 dark:text-red-400" size={28} />
            </div>

            {/* Text */}
            <h2 className="text-lg font-semibold text-white/80 dark:text-white">
              Confirm Logout
            </h2>
            <p className="text-white/80 dark:text-gray-400 mt-2">
              Are you sure you want to log out of your account?
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl border border-indigo-600/70 
                hover:bg-indigo-400/70 dark:hover:bg-gray-800
                text-white/80 dark:text-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={onLogout}
                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white shadow-md transition"
              >
                Logout
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoutModal;
