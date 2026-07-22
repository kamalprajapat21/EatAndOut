"use client";

import { motion } from "framer-motion";
import { Coffee, Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Heart } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const openingHours = [
  { day: "Monday - Friday", hours: "10:00 AM - 11:00 PM" },
  { day: "Saturday - Sunday", hours: "10:00 AM - 11:00 PM" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary dark:bg-dark-card text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-white/70">
                Get updates on special offers, new menu items, and events
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8 text-secondary" />
              <div>
                <h3 className="text-xl font-heading font-bold">Eat And Out</h3>
                <p className="text-sm text-white/70">Cafe</p>
              </div>
            </div>
            <p className="text-white/70 mb-4">
              Your favorite destination for great food, coffee, and memorable moments
              in Mahaveer Nagar II, Kota.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919351758759"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              {openingHours.map((schedule) => (
                <li key={schedule.day}>
                  <p className="text-white/90 font-medium">{schedule.day}</p>
                  <p className="text-white/70 text-sm">{schedule.hours}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Mahaveer Nagar II, Kota, Rajasthan 324005
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+919351758759"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  +91 9351758759
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@eatandoutcafe.com"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  info@eatandoutcafe.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Eat And Out Cafe. All rights reserved.
            </p>
            <p className="text-white/70 text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in Kota
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
