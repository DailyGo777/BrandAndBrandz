"use client";

import React, { useEffect, useRef } from "react";
import img from "../../public/about_img_2.svg";
import Image from "next/image";
import Link from "next/link";
import { imageVariant, contentVariant } from "@/utils/animation";
import { motion, useAnimation, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section className="relative py-20 bg-[#005A98]" ref={ref}>
      <div className="flex justify-center items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold text-white">Who We Are</h2>
      </div>
      <div className="px-12 flex lg:flex-row flex-col justify-center items-stretch gap-12">
        <motion.div
          className="w-full lg:w-1/2"
          variants={imageVariant}
          initial="hidden"
          animate={controls}
        >
          <Image
            src={img}
            alt="Team of Brand and Brandz working together on a marketing project"
            className="w-full h-auto object-cover rounded-md"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-between text-white"
          variants={contentVariant}
          initial="hidden"
          animate={controls}
        >
          <h3 className="text-3xl font-bold mb-4">
            Building Brands Through Vision, Strategy & Design
          </h3>
          <p className="mb-4 text-lg">
            At Brand & Brandz, we combine creative ideas with smart strategy to
            help brands grow faster and stand out. As your growth partner, we
            deliver tailored solutions that increase visibility, engagement, and
            real results.
          </p>
          <p className="mb-4 text-lg">
            With 100+ experts across digital, design and offline media, we turn
            ideas into impact and businesses into market leaders.
          </p>
          <h5 className="text-xl font-medium mb-6">
            Creative minds. Strategic thinking. Real growth.
          </h5>
          <Link href={"/about"} aria-label="Go to About page to learn more about us">
            <button className="px-4 py-2 bg-[#005A98] lg:w-60 w-50 text-white lg:text-lg text-md font-semibold rounded hover:bg-gray-100 hover:text-black transition border-2 border-white cursor-pointer">
              Learn More About Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
