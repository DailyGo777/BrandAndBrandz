"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { services } from "@/utils/data";

const page = () => {
  const whatsappNumber = "918550000895";

  const handleEnquire = (serviceName) => {
    const message = `Hi, I would like to know about the "${serviceName}" service.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-20 bg-gray-50">
        <div className="w-full flex flex-center items-center flex-col gap-8 px-4 pb-20">
          <h1 className="text-center font-bold font-roboto text-[#005A98] lg:text-4xl text-3xl">
            Our Marketing Services
          </h1>
          <p className="w-full lg:w-2/3 text-center text-[#1e1e1e] text-lg">
            At Brand & Brandz, we deliver creative, impactful marketing
            solutions that help your brand stand out, connect with your
            audience, and grow faster. Let’s turn your vision into results that
            matter.
          </p>
        </div>
        <div className="w-full bg-[#005A98] flex flex-col justify-center items-center gap-8 py-8 px-4">
          <h2 className="text-center font-bold font-roboto text-white lg:text-4xl text-3xl">
            Find the Perfect Solution
          </h2>
          <p className="w-full lg:w-1/2 text-center text-white text-lg">
            Explore our services by category or name to discover what fits your
            brand best tailored solutions made just for you.
          </p>
        </div>
        <div className="flex justify-end mb-6 p-4">
          <select className="border px-4 py-2 rounded-md text-[#005A98] bg-white shadow">
            <option className="text-black bg-white">All Services</option>
          </select>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-2 lg:px-20 lg:py-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg flex flex-col justify-between hover:shadow-xl transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
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
              {/* Centered Button */}
              <div className="flex justify-center pb-4">
                <button
                  onClick={() => handleEnquire(service.title)}
                  className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
