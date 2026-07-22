"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { reviews } from "@/data/reviewsData";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      id="reviews"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-background dark:from-dark-bg dark:to-dark-card"
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
            What Our Customers Say
          </h2>
          <p className="section-subtitle">
            Real reviews from real customers
          </p>
          
          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white dark:bg-dark-card px-8 py-4 rounded-full shadow-lg mt-6"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-text dark:text-dark-text">4.8/5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Google Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Reviews Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Review Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="card p-8 md:p-12 relative"
          >
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 h-16 w-16 text-secondary/20" />

            {/* Customer Info */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-secondary">
                <Image
                  src={reviews[currentIndex].image}
                  alt={reviews[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-text dark:text-dark-text">
                  {reviews[currentIndex].name}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
              &ldquo;{reviews[currentIndex].review}&rdquo;
            </p>

            {/* Date */}
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
              {new Date(reviews[currentIndex].date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevReview}
              className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-3 bg-primary"
                      : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextReview}
              className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>

        {/* All Reviews Grid - Small Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card p-6 cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-text dark:text-dark-text">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                &ldquo;{review.review}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
