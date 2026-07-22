"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { specialItems } from "@/data/menuData";
import { Star, Award } from "lucide-react";

export default function TodaysSpecials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="specials"
      ref={ref}
      className="py-20 bg-gradient-to-b from-background to-white dark:from-dark-bg dark:to-dark-card"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Star className="h-8 w-8 text-accent fill-accent" />
            <h2 className="section-title text-primary dark:text-secondary mx-4">
              Today&apos;s Specials
            </h2>
            <Star className="h-8 w-8 text-accent fill-accent" />
          </div>
          <p className="section-subtitle">
            Chef&apos;s handpicked recommendations just for you
          </p>
        </motion.div>

        {/* Specials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specialItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="relative card overflow-hidden group cursor-pointer"
            >
              {/* Chef's Recommendation Badge */}
              <div className="absolute top-4 left-4 z-10 bg-accent text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Award className="h-4 w-4" />
                <span className="text-sm font-bold">Chef&apos;s Pick</span>
              </div>

              {/* Image */}
              <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-2xl font-bold text-text dark:text-dark-text">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-accent fill-accent"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-through mr-2">
                      ₹{Math.round(item.price * 1.2)}
                    </span>
                    <span className="text-3xl font-bold text-accent">
                      ₹{item.price}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg"
                  >
                    Order Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Limited Time Offer Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-accent to-red-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
            Limited Time Offer!
          </h3>
          <p className="text-lg opacity-90">
            Get 20% off on all today&apos;s specials. Valid until stocks last!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
