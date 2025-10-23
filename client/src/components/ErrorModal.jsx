import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

const ErrorModal = ({ isOpen, onClose, message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 
            rounded-2xl shadow-xl w-[90%] border border-indigo-400/70
            max-w-md p-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              <X size={20} />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded-full">
                <AlertTriangle className="text-red-600 dark:text-red-400" size={36} />
              </div>
            </div>

            <h1 className="text-center text-lg text-white/90 dark:text-gray-400 mt-2">
              {message}
            </h1>

            {/* Close button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white shadow-md transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorModal;
