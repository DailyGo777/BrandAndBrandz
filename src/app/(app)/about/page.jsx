"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import bandbLogo from "../../../../public/BandBLogo.svg";
import img from "../../../../public/about_img_1.svg";
import { Eye, Target } from "lucide-react";
import { values } from "@/utils/data";
import Link from "next/link";
import {
  popUpVariant,
  imageVariant,
  contentVariant,
  popUpFromCenter,
} from "@/utils/animation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { jsonLd } from "@/utils/jsonLD";
import Script from "next/script";

const page = () => {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();
  const { ref: imgRef, controls: imgControls } = useScrollAnimation();
  const { ref: logoRef, controls: logoControls } = useScrollAnimation();
  const { ref: cardRef, controls: cardControls } = useScrollAnimation();

  return (
    <>
      <Script
        id="jsonld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <Header />
        <section className="min-h-screen py-20 bg-white">
          <motion.div
            className="w-full min-h-[60vh] flex justify-center items-center flex-col gap-8 px-4 pb-20"
            ref={heroRef}
            variants={popUpVariant}
            initial="hidden"
            animate={heroControls}
          >
            <Image
              src={bandbLogo}
              alt="Brand and Brandz Logo"
              className="lg:h-[200px] lg:w-[200px]"
              loading="lazy"
            />
            <h1 className="text-center font-bold font-roboto text-[#005A98] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              About Brand & Brandz
            </h1>
            <p className="w-full lg:w-2/3 text-center text-[#1e1e1e] text-lg sm:text-xl md:text-xl lg:text-2xl">
              We turn bold ideas into strong brands through clear design, smart
              stroytelling, and purposeful creativity.
            </p>
          </motion.div>
          <div
            className="p-12 flex lg:flex-row flex-col justify-center items-stretch gap-12 bg-[#005A98]"
            ref={imgRef}
          >
            <motion.div
              className="w-full lg:w-1/2"
              variants={imageVariant}
              initial="hidden"
              animate={imgControls}
            >
              <Image
                src={img}
                alt="Team working on brand strategy"
                className="w-full h-auto object-cover rounded-md"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2 flex flex-col justify-between text-white gap-6 lg:gap-0"
              variants={contentVariant}
              initial="hidden"
              animate={imgControls}
            >
              <h2 className="text-start font-semibold font-roboto text-white text-xl lg:text-2xl">
                Our Essence
              </h2>
              <h3 className="text-start font-bolld font-roboto text-white text-3xl lg:text-4xl">
                Bold Creativity. Clear Strategy. Real Results.
              </h3>
              <p className="text-start text-white text-lg">
                At Brand & Brandz, we turn ideas into powerful brand visuals and
                experiences. We mix design, strategy, and storytelling to help
                businesses grow and stand out.
              </p>
              <p className="text-start text-white text-lg">
                From logos to campaigns, everything we create is made to connect
                with people and get results.
              </p>
              <p className="text-start text-white text-lg">
                Let’s create something meaningful — together.
              </p>
              <Link href={"/service"}>
                <button className="text-center w-52 h-12 font-bold text-[#005A98] bg-white border-1 border-white rounded-lg p-2 text-lg cursor-pointer">
                  Explore Our Services
                </button>
              </Link>
            </motion.div>
          </div>
          <div
            className="w-full flex flex-col lg:flex-row justify-center items-center p-8 lg:p-16 gap-8"
            ref={logoRef}
          >
            <motion.div
              className="w-full lg:w-2/3 flex flex-col justify-start items-start p-4 border-1 border-grey-800 rounded-md gap-4 shadow-lg"
              variants={imageVariant}
              initial="hidden"
              animate={logoControls}
            >
              <div className="flex flex-row justify-center items-center gap-4">
                <Eye color="#005A98" size={30} />
                <h2 className="text-xl md:text-3xl text-[#005A98] font-semibold">
                  Our Mission
                </h2>
              </div>
              <p className="text-black text-md md:text-lg">
                To transform bold ideas into unforgettable brand experiences —
                through powerful design, smart strategy, and results that
                matter.
              </p>
            </motion.div>
            <motion.div
              className="w-full lg:w-2/3 flex flex-col justify-start items-start p-4 border-1 border-grey-800 rounded-md gap-4 shadow-lg"
              variants={contentVariant}
              initial="hidden"
              animate={logoControls}
            >
              <div className="flex flex-row justify-center items-center gap-4">
                <Target color="#005A98" size={30} />
                <h2 className="text-xl md:text-3xl text-[#005A98] font-semibold">
                  Our Vision
                </h2>
              </div>
              <p className="text-black text-md md:text-lg">
                To be the creative force behind India’s most admired brands —
                where imagination meets impact, and design drives growth.
              </p>
            </motion.div>
          </div>
          <div className="p-8 gap-8 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-[#005A98] text-center">
              Our Core Values
            </h2>
            <p className="text-lg text-black text-center">
              The principles that guide our work, our partnerships and our
              culture.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:px-12"
              ref={cardRef}
              initial="hidden"
              animate={cardControls}
            >
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col justify-center items-center gap-4 p-4 border-1 border-[#4B4848] hover:border-[#005A98] rounded-lg shadow-lg"
                  variants={popUpFromCenter}
                  custom={idx}
                >
                  {value.logo}
                  <h2 className="text-2xl font-semibold text-[#005A98] text-center">
                    {value.title}
                  </h2>
                  <p className="text-[#4B4848] text-lg text-center">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="w-full flex flex-col justify-center items-center bg-[#005A98] p-8 gap-12">
            <h2 className="text-3xl font-bold text-center">
              Let's Build Your Brand's Future, Together.
            </h2>
            <div>
              <p className="text-lg text-center">
                Ready to elevate your brand with Brand & Brandz?
              </p>
              <p className="text-lg text-center">
                Let’s talk about your vision we’re here to bring it to life.
              </p>
            </div>
            <Link
              href={"/contact"}
              aria-label="Go to contact page to contact us"
            >
              <button className="text-center w-62 h-12 border-1 bg-white text-[#005A98] border-[#005A98] cursor-pointer p-2 rounded-lg text-lg ">
                Start the Conversation
              </button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default page;
