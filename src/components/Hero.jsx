'use client'

import React from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { popUpVariant } from "@/utils/animation";

const Hero = () => {
 const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="relative bg-white overflow-hidden lg:p-0 p-4" ref={ref}>
      <div className="flex h-screen flex-col lg:flex-row justify-center items-center gap-8 text-center">
        <motion.div
          className="w-full lg:w-2/3 flex flex-col justify-center items-center gap-12"
          variants={popUpVariant}
          initial="hidden"
          animate={controls}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#005A98]">
            Your Strategic Growth Partner in Premium Marketing
          </h1>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black">
            We don’t just run campaigns — we help your business grow.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={"/contact"} aria-label="Go to Contact page to elevate your brand">
              <button className="px-6 py-2 bg-[#005A98] text-white text-lg font-bold rounded-md cursor-pointer">
                Let’s Elevate Your Brand
              </button>
            </Link>
            <Link href={"/service"} aria-label="Go to Service page to access our services">
              <button className="px-6 py-2 border border-[#005A98] text-[#005A98] text-lg font-bold rounded-md cursor-pointer">
                Our Services
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
