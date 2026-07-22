"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Coffee } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("#home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Coffee className={`h-8 w-8 ${isScrolled ? "text-primary" : "text-white"}`} />
            <div className="flex flex-col">
              <span
                className={`text-xl font-heading font-bold ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                Eat And Out
              </span>
              <span
                className={`text-xs ${
                  isScrolled ? "text-secondary" : "text-white/80"
                }`}
              >
                Cafe
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  isScrolled ? "text-text dark:text-dark-text" : "text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "hover:bg-white/10"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className={`h-5 w-5 ${isScrolled ? "text-text" : "text-white"}`} />
              ) : (
                <Sun className={`h-5 w-5 ${isScrolled ? "text-dark-text" : "text-white"}`} />
              )}
            </button>

            {/* Reserve Table Button */}
            <motion.button
              onClick={() => scrollToSection("#reservation")}
              className="btn-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Table
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isScrolled ? "text-text dark:text-dark-text" : "text-white"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                isScrolled ? "text-text dark:text-dark-text" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-bg border-t dark:border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-2 text-text dark:text-dark-text hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => scrollToSection("#reservation")}
                className="btn-accent w-full"
              >
                Reserve Table
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
