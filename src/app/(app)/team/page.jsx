"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { teams } from "@/utils/data";
import { motion } from "framer-motion";
import { popUpVariant } from "@/utils/animation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const page = () => {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();

  function TeamCard({ title, sub_title, description, image, logo }) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 text-center max-w-xs">
        <img
          src={image}
          alt={title}
          className="w-full mx-auto mb-4 rounded-lg object-cover"
        />
        <h3 className="text-xl font-semibold text-[#005A98]">{title}</h3>
        <p className="text-sm text-gray-600 font-medium mb-2">{sub_title}</p>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="flex justify-center">{logo}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="min-h-screen py-20 bg-gray-50">
        <motion.div
          className="w-full min-h-[60vh] flex justify-center items-center flex-col gap-8 px-4 pb-20"
          ref={heroRef}
          variants={popUpVariant}
          initial="hidden"
          animate={heroControls}
        >
          <h1 className="text-center font-bold font-roboto text-[#005A98] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Meet Our Creative Force{" "}
          </h1>
          <p className="w-full lg:w-2/3 text-center text-[#1e1e1e] text-lg sm:text-xl md:text-xl lg:text-2xl">
            A passionate team of strategists, designers, and marketers driven to
            bring your brand to life.
          </p>
        </motion.div>
        <div className="w-full bg-[#005A98] flex flex-col justify-center items-center gap-8 py-16 px-4">
          <h2 className="text-center font-bold font-roboto text-white lg:text-4xl text-3xl">
            The Creative Minds Powering Your Brand Success
          </h2>
          <p className="w-full lg:w-1/2 text-center text-white text-lg">
            A dynamic team blending strategy, creativity, and expertise to
            deliver innovative, results-driven solutions.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
            {teams.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-12">
            {/* First row (3 items) */}
            <div className="grid grid-cols-3 gap-8">
              {teams.slice(0, 3).map((member, index) => (
                <TeamCard key={index} {...member} />
              ))}
            </div>

            {/* Second row (4 items) */}
            <div className="grid grid-cols-4 gap-8">
              {teams.slice(3).map((member, index) => (
                <TeamCard key={index + 3} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
