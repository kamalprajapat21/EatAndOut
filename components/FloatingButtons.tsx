"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp, Calendar } from "lucide-react";

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToReservation = () => {
    const element = document.querySelector("#reservation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919351758759?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Eat%20And%20Out%20Cafe"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-colors group relative"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
        </span>
      </motion.a>

      {/* Reserve Button - Always visible on mobile */}
      <motion.button
        onClick={scrollToReservation}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-accent hover:bg-accent/90 text-white p-4 rounded-full shadow-2xl transition-colors group relative md:hidden"
        title="Reserve Table"
      >
        <Calendar className="h-6 w-6" />
      </motion.button>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-2xl transition-colors group relative"
            title="Back to top"
          >
            <ArrowUp className="h-6 w-6" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Back to top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
