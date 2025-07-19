import React from "react";
import img from "../../public/about.svg";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative py-20 bg-[#4A6893]">
      <div className="hidden lg:block absolute top-0 left-0 w-full h-40 overflow-hidden pointer-events-none z-0">
        <svg
          width="600"
          height="600"
          className="absolute top-[-120px] left-[-120px]"
        >
          <circle
            cx="100"
            cy="100"
            r="140"
            stroke="gray"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r="160"
            stroke="gray"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r="180"
            stroke="gray"
            strokeWidth="6"
            fill="none"
          />
        </svg>
      </div>

      <div className="flex justify-center items-center gap-4 mb-16">
        <h1 className="text-4xl font-bold text-white">Who We Are</h1>
      </div>
      <div className="px-12 flex lg:flex-row flex-col justify-center items-stretch gap-12">
        <div className="w-full lg:w-1/2">
          <Image
            src={img}
            alt="Who we are"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-between text-white">
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
          <button className="px-4 py-2 bg-[#4A6893] lg:w-60 w-50 text-white lg:text-lg text-md font-semibold rounded hover:bg-gray-100 hover:text-black transition border-2 border-white">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
