"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Menu from "@/components/Menu";
import TodaysSpecials from "@/components/TodaysSpecials";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Loading from "@/components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading />}
      </AnimatePresence>

      {!isLoading && (
        <main className="min-h-screen">
          <Navbar />
          <Hero />
          <WhyChooseUs />
          <TodaysSpecials />
          <Menu />
          <Gallery />
          <About />
          <Statistics />
          <Reviews />
          <Reservation />
          <Contact />
          <Footer />
          <FloatingButtons />
        </main>
      )}
    </>
  );
}
