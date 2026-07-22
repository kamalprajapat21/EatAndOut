"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 9351758759",
    link: "tel:+919351758759",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@eatandoutcafe.com",
    link: "mailto:info@eatandoutcafe.com",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Mahaveer Nagar II, Kota, Rajasthan 324005",
    link: "https://maps.google.com/?q=Mahaveer+Nagar+II+Kota+Rajasthan",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sun: 10:00 AM - 11:00 PM",
    link: null,
  },
];

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    link: "https://instagram.com/eatandoutcafe",
    color: "hover:text-pink-600",
  },
  {
    icon: Facebook,
    name: "Facebook",
    link: "https://facebook.com/eatandoutcafe",
    color: "hover:text-blue-600",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    link: "https://wa.me/919351758759",
    color: "hover:text-green-600",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-white dark:bg-dark-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-primary dark:text-secondary">
            Get In Touch
          </h2>
          <p className="section-subtitle">
            We&apos;d love to hear from you. Visit us or reach out anytime!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-secondary/10 p-4 rounded-xl group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-6 w-6 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text dark:text-dark-text text-lg mb-1">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <h3 className="font-bold text-text dark:text-dark-text text-lg mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`bg-gray-100 dark:bg-dark-card p-4 rounded-xl transition-colors ${social.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[500px]"
          >
            <div className="card p-0 overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.363687474832!2d75.82486995!3d25.1828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9b5f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sMahaveer%20Nagar%2C%20Kota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
