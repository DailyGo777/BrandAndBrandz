"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { clients } from "@/utils/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { popUpVariant } from "@/utils/animation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Head from "next/head";

const page = () => {
  const [columns, setColumns] = useState(4);
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();

  // Responsive columns detection
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) setColumns(2);
      else if (width < 768) setColumns(2);
      else if (width < 1024) setColumns(3);
      else setColumns(4);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Chunk array into rows
  const chunkedClients = [];
  for (let i = 0; i < clients.length; i += columns) {
    chunkedClients.push(clients.slice(i, i + columns));
  }

  return (
    <>
      <Head>
        <title>Our Clients | Brand & Brandz</title>
        <meta
          name="description"
          content="Explore the brands and startups that trust Brand & Brandz for exceptional design and marketing solutions."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Our Clients | Brand & Brandz" />
        <meta
          property="og:description"
          content="Discover our valued clients and how we've helped them grow through innovative design and marketing."
        />
        <meta property="og:url" content="https://brandandbrandz.com/client" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://brandandbrandz.com/client" />
      </Head>
      <main className="min-h-screen bg-white">
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
              Our Valued Clients & Partners
            </h1>
            <p className="w-full lg:w-2/3 text-center text-[#1e1e1e] text-lg sm:text-xl md:text-xl lg:text-2xl">
              From rising startups to global brands, we’re proud to partner with
              visionary businesses that trust us to bring their ideas to life.
              Their success is our greatest reward.
            </p>
          </motion.div>
          <div className="w-full bg-[#005A98] flex flex-col justify-center items-center gap-8 py-16 px-4">
            <h2 className="text-center font-bold font-roboto text-white lg:text-4xl text-3xl">
              Trusted by the Best{" "}
            </h2>
            <p className="w-full lg:w-1/2 text-center text-white text-lg">
              A glimpse of the standout brands that trust Brand & Brandz to
              craft, elevate, and grow their visual identity and marketing
              presence.
            </p>
          </div>
          <div className="flex flex-col items-center gap-12 pt-12">
            {chunkedClients.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex gap-8 ${
                  row.length < columns ? "justify-center" : "justify-center"
                } w-full flex-wrap`}
              >
                {row.map((client, idx) => (
                  <div
                    key={idx}
                    className="w-60 h-36 bg-white border border-gray-200 rounded-lg shadow-sm flex justify-center items-center p-4 hover:shadow-md transition"
                  >
                    <Image
                      src={client.image}
                      alt={`Client logo ${idx}`}
                      width={300}
                      height={300}
                      className="object-contain max-h-full"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
          <Footer />
      </main>
    </>
  );
};

export default page;
