"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Clock, MapPin, Users, Award } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-dark-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600"
                  alt="Cafe Interior 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600"
                  alt="Delicious Food"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden -mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600"
                  alt="Cafe Interior 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600"
                  alt="Coffee"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-2xl"
            >
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-2" />
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years Serving</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="section-title text-left text-primary dark:text-secondary mb-4">
                About Eat And Out Cafe
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Welcome to <span className="font-bold text-primary dark:text-secondary">Eat And Out Cafe</span>, 
                your favorite destination in Mahaveer Nagar II, Kota. We pride ourselves on 
                serving freshly prepared dishes made with the finest ingredients, paired with 
                expertly brewed coffee that will awaken your senses.
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Our cafe is designed to be a warm and inviting space where friends gather, 
              families celebrate, couples create memories, and professionals find their 
              perfect work spot. With our cozy wooden interiors, soft lighting, and friendly 
              staff, we've created an atmosphere that feels like home.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Whether you're here for a quick coffee break, a leisurely brunch, a romantic 
              dinner, or a celebration with loved ones, we ensure every visit is memorable. 
              Our commitment to quality, service, and ambience makes us the go-to cafe in Kota.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-text dark:text-dark-text">Location</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mahaveer Nagar II, Kota
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-text dark:text-dark-text">Hours</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    10 AM - 11 PM Daily
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-text dark:text-dark-text">Perfect For</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    All occasions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-text dark:text-dark-text">Quality</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fresh ingredients
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
