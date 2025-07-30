"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { review } from "@/utils/data";

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % review.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, review.length]);

  const getPosition = (index) => {
    const total = review.length;
    return (index - currentSlide + total) % total;
  };

  return (
    <section className="pb-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#005A98] mb-6">
          Our Reviews & Recognition
        </h1>
        <h3 className="text-2xl lg:text-4xl text-gray-800 max-w-5xl mx-auto leading-relaxed">
          Acknowledged by industry leaders for our commitment to excellence.
        </h3>

        <div
          className="relative flex items-center justify-center h-[400px]"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel Cards */}
          {review.map((item, index) => {
            const position = getPosition(index);
            let className = "absolute transition-all duration-700 ease-in-out";
            let zIndex = 10;
            let transform = "";
            let scale = "scale-90";
            let opacity = "opacity-70";

            if (position === 0) {
              transform = "-translate-x-[160%]";
            } else if (position === 1) {
              scale = "scale-100";
              opacity = "opacity-100";
              zIndex = 30;
            } else if (position === 2) {
              transform = "translate-x-[160%]";
            } else {
              return null; // hide other cards
            }

            return (
              <div
                key={index}
                className={`${className} transform ${transform} ${scale} ${opacity} hover:border-2 hover:border-[#005A98] hover:shadow-lg rounded-md`}
                style={{ zIndex }}
              >
                <div className="bg-white w-80 h-auto rounded-xl p-6 shadow-lg flex flex-col items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                  <h3 className="text-xl font-semibold text-[#005A98]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    "{item.description}"
                  </p>
                  <Image
                    src={item.rating}
                    alt="rating"
                    width={120}
                    height={24}
                  />
                </div>
              </div>
            );
          })}

          {/* Dots */}
          <div className="absolute bottom-0 flex justify-center gap-3 mt-8">
            {review.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 h-3 bg-[#005A98]"
                    : "w-3 h-3 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
