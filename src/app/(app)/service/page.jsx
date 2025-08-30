"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState, useRef } from "react";
import { services } from "@/utils/data";
import { motion } from "framer-motion";
import { popUpVariant } from "@/utils/animation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Script from "next/script";
import { jsonLd } from "@/utils/jsonLD";

const page = () => {
  const [imageIndexes, setImageIndexes] = useState(
    Array(services.length).fill(0)
  );
  const timersRef = useRef({});
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();

  const startImageTransition = (index) => {
    if (timersRef.current[index]) return;
    timersRef.current[index] = setInterval(() => {
      setImageIndexes((prev) => {
        const newIndexes = [...prev];
        newIndexes[index] = (newIndexes[index] + 1) % 4;
        return newIndexes;
      });
    }, 1500);
  };

  const stopImageTransition = (index) => {
    clearInterval(timersRef.current[index]);
    delete timersRef.current[index];
    setImageIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[index] = 0;
      return newIndexes;
    });
  };

  const whatsappNumber = "918550000895";

  const handleEnquire = (serviceName) => {
    const message = `Hi, I would like to know about the "${serviceName}" service.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Script
        id="jsonld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <Header />

        <section className="min-h-screen py-20 bg-gray-50">
          {/* Hero Section */}
          <motion.div
            className="w-full min-h-[60vh] flex justify-center items-center flex-col gap-8 px-4 pb-20"
            ref={heroRef}
            variants={popUpVariant}
            initial="hidden"
            animate={heroControls}
          >
            <h1 className="text-center font-bold font-roboto text-[#005A98] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Our Marketing Services
            </h1>
            <p className="w-full lg:w-2/3 text-center text-[#1e1e1e] text-lg sm:text-xl md:text-xl lg:text-2xl">
              At Brand & Brandz, we deliver creative, impactful marketing
              solutions that help your brand stand out, connect with your
              audience, and grow faster. Let’s turn your vision into results
              that matter.
            </p>
          </motion.div>

          {/* Filter Section */}
          <div className="w-full bg-[#005A98] flex flex-col justify-center items-center gap-8 py-16 px-4">
            <h2 className="text-center font-bold font-roboto text-white lg:text-4xl text-3xl">
              Find the Perfect Solution
            </h2>
            <p className="w-full lg:w-1/2 text-center text-white text-lg">
              Explore our services by category or name to discover what fits
              your brand best — tailored solutions made just for you.
            </p>
          </div>

          {/* Filter Dropdown */}
          <div className="flex justify-end mb-6 p-4">
            <select className="border px-4 py-2 rounded-md text-[#005A98] bg-white shadow">
              <option className="text-black bg-white">All Services</option>
              {/* Future: add mapped service categories here */}
            </select>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-2 lg:px-20 lg:py-8">
            {services.map((service, index) => {
              const images = [
                service.image1,
                service.image2,
                service.image3,
                service.image4,
              ];
              return (
                <div
                  key={index}
                  className="border rounded-lg shadow-lg flex flex-col justify-between hover:shadow-xl transition duration-300"
                  onMouseEnter={() => startImageTransition(index)}
                  onMouseLeave={() => stopImageTransition(index)}
                >
                  <img
                    src={images[imageIndexes[index]]}
                    alt={`Visual for ${service.title} service by Brand & Brandz`}
                    className="w-full h-60 object-cover mb-4 rounded-md transition-all duration-500"
                  />
                  <div className="flex-1 px-6">
                    <h3 className="text-lg font-bold mb-3 text-black">
                      {service.title}
                    </h3>
                    <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
                      {service.details.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center pb-4">
                    <button
                      onClick={() => handleEnquire(service.title)}
                      aria-label="Enqiure us about our services"
                      className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default page;
