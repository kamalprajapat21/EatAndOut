"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { menuData, categories } from "@/data/menuData";
import { Leaf } from "lucide-react";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filteredMenu =
    selectedCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="menu"
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
            Our Signature Menu
          </h2>
          <p className="section-subtitle">
            Explore our delicious collection of food and beverages
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-gray-100 dark:bg-dark-card text-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredMenu.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="card overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {item.isVeg && (
                  <div className="absolute top-3 right-3 bg-green-500 p-1.5 rounded-full">
                    <Leaf className="h-4 w-4 text-white" />
                  </div>
                )}
                {item.isSpecial && (
                  <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
                    Special
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-heading text-lg font-bold text-text dark:text-dark-text mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary dark:text-secondary">
                    ₹{item.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors"
                  >
                    Order
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Items Message */}
        {filteredMenu.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No items found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
