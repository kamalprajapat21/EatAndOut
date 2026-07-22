"use client";

import { motion } from "framer-motion";
import { Coffee, Pizza, Heart, Wifi } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Coffee,
    title: "Freshly Brewed Coffee",
    description: "Premium quality coffee beans roasted to perfection",
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    icon: Pizza,
    title: "Delicious Food",
    description: "Wide variety of cuisines made with fresh ingredients",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
  },
  {
    icon: Heart,
    title: "Cozy Ambience",
    description: "Warm and inviting atmosphere perfect for any occasion",
    color: "text-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
  },
  {
    icon: Wifi,
    title: "Free WiFi & Seating",
    description: "Comfortable seating with high-speed internet access",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="why-choose-us"
      ref={ref}
      className="py-20 bg-background dark:bg-dark-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-primary dark:text-secondary">
            Why Choose Us
          </h2>
          <p className="section-subtitle">
            Discover what makes Eat And Out Cafe special
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card text-center group cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  className={`${feature.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className={`h-10 w-10 ${feature.color}`} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-text dark:text-dark-text mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
