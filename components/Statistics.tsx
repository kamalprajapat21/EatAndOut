"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Coffee, Star, Calendar } from "lucide-react";

interface Stat {
  icon: any;
  value: number;
  suffix: string;
  label: string;
  color: string;
  bgColor: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Happy Customers",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: Coffee,
    value: 100,
    suffix: "+",
    label: "Menu Items",
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    icon: Star,
    value: 4.8,
    suffix: "★",
    label: "Google Rating",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
  },
  {
    icon: Calendar,
    value: 5,
    suffix: "+",
    label: "Years Serving",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {value % 1 !== 0 ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-primary via-secondary to-primary dark:from-dark-card dark:via-dark-bg dark:to-dark-card"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`${stat.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className={`h-10 w-10 ${stat.color}`} />
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/90 text-lg">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
