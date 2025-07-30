import React from "react";
import { Lightbulb, Rocket, Trophy } from "lucide-react";
import Link from "next/link";

const Card = () => {
  return (
    <section className="py-20 bg-white">
      <div className="w-full p-12 flex lg:flex-row flex-col justify-evenly items-center gap-6 text-black">
        <div className="w-full lg:w-1/4 h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4">
          <Lightbulb color="black" size={40} />
          <h3 className="text-[#005A98] lg:text-xl text-lg font-semibold text-center">
            Ready to Lead the Market?
          </h3>
          <p className="text-[#4B4848] text-md text-center">
            Let’s craft your next big move. Request a proposal and let’s grow,
            together.
          </p>
          <Link href={"/contact"}>
            <button className="w-50 h-12 bg-[#005A98] text-[#F9F9F9] rounded-md text-lg cursor-pointer">
              Request Proposal
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-1/4  h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4">
          <Rocket color="black" size={40} />
          <h3 className="text-[#005A98] lg:text-xl text-lg font-semibold text-center">
            Brands That Break Through
          </h3>
          <p className="text-[#4B4848] text-md text-center">
            We don’t just build brands we craft success stories that leave a
            mark.
          </p>
          <Link href={"/about"}>
            <button className="w-50 h-12 bg-[#005A98] text-[#F9F9F9] rounded-md text-lg cursor-pointer">
              Learn More
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-1/4 h-full flex flex-col justify-center items-center gap-6 border-2 border-blue-200 rounded-md shadow-xl p-4">
          <Trophy color="black" size={40} />
          <h3 className="text-[#005A98] lg:text-xl text-lg font-semibold text-center">
            Total Brand Solutions
          </h3>
          <p className="text-[#4B4848] text-md text-center">
            From strategy to execution everything your brand needs, under one
            roof.
          </p>
          <Link href={"/client"}>
            <button className="w-50 h-12 bg-[#005A98] text-[#F9F9F9] rounded-md text-lg cursor-pointer">
              Visit Our Work
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
