"use client";

import React from "react";
import { Paintbrush, CodeXml, Laptop } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
  const cardVariants = {
    initial: {},
    hover: {},
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 20, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <section className="pb-20 bg-white">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <h2 className="lg:text-4xl text-3xl text-[#005A98] font-bold text-center">
          Our Core Services
        </h2>
        <h3 className="lg:text-2xl text-lg text-black font-semibold text-center">
          End-to-end solutions designed to expand your brand’s reach and
          influence.
        </h3>
      </div>
      <div className="w-full p-12 flex lg:flex-row flex-col justify-evenly items-center gap-6 text-black">
        <motion.div
          className="w-full lg:w-1/4 h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <Paintbrush
              color="white"
              size={32}
              className="bg-[#005A98] w-12 h-12 rounded-md p-1"
            />
          </motion.div>
          <h3 className="text-[#005A98] lg:text-xl text-lg font-semibold text-center">
            Creative Design & Branding
          </h3>
          <p className="text-[#4B4848] text-md text-center">
            Logos, UI/UX, and visual assets that define and elevate your brand.
          </p>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/4 h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <CodeXml
              color="white"
              size={32}
              className="bg-[#005A98] w-12 h-12 rounded-md p-1"
            />
          </motion.div>
          <h3 className="text-[#005A98] lg:text-xl text-lg font-semibold text-center">
            Website Design & Development
          </h3>
          <p className="text-[#4B4848] text-md text-center">
            Responsive, fast-loading websites and landing pages built to
            perform.
          </p>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/4 h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <Laptop
              color="white"
              size={32}
              className="bg-[#005A98] w-12 h-12 rounded-md p-1"
            />
          </motion.div>
          <h3 className="text-[#005A98] lg:text-xl text-lg font-semibold text-center">
            Digital Marketing
          </h3>
          <p className="text-[#4B4848] text-md text-center">
            SEO, Social Media, Ads & Email strategies that drive traffic and
            sales.
          </p>
        </motion.div>
      </div>
      <div className="flex justify-center items-center">
        <Link href={"/service"} aria-label="Go to service page to know our services">
          <button className="lg:w-50 lg:h-16 w-44 h-12 text-white bg-[#005A98] font-bold lg:text-xl text-lg rounded-md text-center cursor-pointer">
            View All Services
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
