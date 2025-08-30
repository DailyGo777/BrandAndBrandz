"use client";
import React, { useState, useEffect } from "react";
import {
  BrainCog,
  CalendarSync,
  Rocket,
  Video,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselItems = [
    {
      title: "Growth-Driven Execution",
      description: "Every campaign is built to deliver ROI and scale.",
      icon: <Rocket size={40} color="#005A98" />,
    },
    {
      title: "Full-Funnel Solutions",
      description: "From brand awareness to conversion we cover it all.",
      icon: <Video size={40} color="#005A98" />,
    },
    {
      title: "Deep Market Understanding",
      description: "Industry insights + audience analysis = smarter moves.",
      icon: <BrainCog size={40} color="#005A98" />,
    },
    {
      title: "Automation That Works",
      description: "Save times, boost efficiency with AI driven workflows.",
      icon: <CalendarSync size={40} color="#005A98" />,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <section className="pb-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#005A98] mb-6">
            Why Brands Choose Brand & Brandz
          </h2>
          <p className="text-2xl lg:text-4xl text-gray-800 max-w-5xl mx-auto leading-relaxed">
            We're not just service providers we're growth enablers combining
            creativity, strategy, and AI to deliver results that matter.
          </p>
        </div>

        <div
          className="relative h-[320px] flex items-center justify-center"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={24} className="text-[#005A98]" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={24} className="text-[#005A98]" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            {carouselItems.map((item, index) => {
              const total = carouselItems.length;
              const pos = (index - currentSlide + total) % total;

              let transformClass = "";
              let zIndex = 10;
              let scale = "scale-90";
              let rotate = "";
              let translateX = "";

              if (pos === 0) {
                translateX = "-translate-x-[160%]";
                rotate = "rotate-0";
              } else if (pos === 1) {
                scale = "scale-105";
                rotate = "rotate-0";
                zIndex = 30;
              } else if (pos === 2) {
                translateX = "translate-x-[160%]";
                rotate = "rotate-0";
              } else {
                return null;
              }

              transformClass = `${translateX} ${scale} ${rotate}`;

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-in-out transform ${transformClass}`}
                  style={{ zIndex }}
                >
                  <div className="bg-[#005A98] w-80 h-64 rounded-xl text-white shadow-xl flex flex-col items-center justify-center p-6">
                    <div className="bg-white p-3 rounded-full mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/90 text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-0 flex justify-center gap-3 mt-8">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-12 h-3 bg-[#005A98] shadow-lg"
                    : "w-3 h-3 bg-blue-300 hover:bg-blue-400"
                }`}
                aria-label="Current Slide"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
