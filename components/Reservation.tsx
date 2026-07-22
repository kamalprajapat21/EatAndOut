"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Clock, Users, MessageSquare, CheckCircle } from "lucide-react";

const reservationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  guests: z.string().min(1, "Please select number of guests"),
  message: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data: ReservationFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Reservation Data:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="reservation"
      ref={ref}
      className="py-20 bg-background dark:bg-dark-bg"
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
            Reserve Your Table
          </h2>
          <p className="section-subtitle">
            Book your spot and enjoy an unforgettable dining experience
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 flex items-center gap-4"
            >
              <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-800 dark:text-green-300 text-lg">
                  Reservation Confirmed!
                </h3>
                <p className="text-green-700 dark:text-green-400">
                  We've received your reservation. We'll contact you shortly to confirm.
                </p>
              </div>
            </motion.div>
          )}

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 md:p-12"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-text dark:text-dark-text mb-2">
                  Full Name *
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card text-text dark:text-dark-text focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-text dark:text-dark-text mb-2">
                  Phone Number *
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card text-text dark:text-dark-text focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text dark:text-dark-text mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Date *
                  </label>
                  <input
                    {...register("date")}
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card text-text dark:text-dark-text focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text dark:text-dark-text mb-2">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Time *
                  </label>
                  <input
                    {...register("time")}
                    type="time"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card text-text dark:text-dark-text focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                  )}
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-medium text-text dark:text-dark-text mb-2">
                  <Users className="inline h-4 w-4 mr-1" />
                  Number of Guests *
                </label>
                <select
                  {...register("guests")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card text-text dark:text-dark-text focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select guests</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                  <option value="10+">10+ Guests</option>
                </select>
                {errors.guests && (
                  <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
                )}
              </div>

              {/* Special Message */}
              <div>
                <label className="block text-sm font-medium text-text dark:text-dark-text mb-2">
                  <MessageSquare className="inline h-4 w-4 mr-1" />
                  Special Requests (Optional)
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Any special requirements or dietary restrictions?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card text-text dark:text-dark-text focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-lg font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? "Submitting..." : "Reserve Your Table"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
