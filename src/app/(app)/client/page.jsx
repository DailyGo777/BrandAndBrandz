"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { clients } from "@/utils/data";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = () => {
  const [columns, setColumns] = useState(4); 

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
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-20 bg-gray-50">
        <div className="w-full flex flex-center items-center flex-col gap-8 px-4 pb-20">
          <h1 className="text-center font-bold font-roboto text-[#005A98] lg:text-4xl text-3xl">
            Our Valued Clients & Partners
          </h1>
          <p className="w-full lg:w-2/3 text-center text-[#1e1e1e] text-lg">
            From rising startups to global brands, we’re proud to partner with
            visionary businesses that trust us to bring their ideas to life.
            Their success is our greatest reward.
          </p>
        </div>
        <div className="w-full bg-[#005A98] flex flex-col justify-center items-center gap-8 py-8 px-4">
          <h2 className="text-center font-bold font-roboto text-white lg:text-4xl text-3xl">
            Trusted by the Best{" "}
          </h2>
          <p className="w-full lg:w-1/2 text-center text-white text-lg">
            A glimpse of the standout brands that trust Brand & Brandz to craft,
            elevate, and grow their visual identity and marketing presence.
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
    </div>
  );
};

export default page;
