"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { roles, careerCards } from "@/utils/data";
import Script from "next/script";
import { jsonLd } from "@/utils/jsonLD";

const tabs = [
  { key: "all", label: "All" },
  { key: "marketing", label: "Marketing" },
  { key: "business", label: "Business Development" },
  { key: "fullstack", label: "Full-Stack Development" },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredRoles =
    activeTab === "all" ? roles : roles.filter((r) => r.tag === activeTab);

  return (
    <>
      <Script
        id="jsonld-client"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <Header />

        {/* Hero */}
        <section className="bg-white">
          <div className="w-full min-h-[calc(100vh-5rem)] flex justify-center items-center flex-col gap-6 px-4 pt-8">
            <h2 className="text-[#005A98] text-2xl md:text-3xl font-semibold text-center">
              Unlock your success
            </h2>
            <h1 className="text-center font-bold font-roboto text-[#005A98] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Make an Impact in Your Career!
            </h1>
            <p className="w-full lg:w-2/3 text-center text-[#1e1e1e] text-lg sm:text-xl md:text-xl lg:text-2xl">
              Join passionate professionals dedicated to growth and community
              impact. Here, your career drives meaningful change, shapes a
              sustainable future, and redefines possibilities.
            </p>
            <a href="#open-positions" aria-label="Jump to open positions">
              <button className="text-center w-48 h-12 font-bold text-white bg-[#005A98] rounded-xl text-lg cursor-pointer shadow hover:bg-[#004878]">
                View Open Roles
              </button>
            </a>
          </div>
          <div className="px-4 lg:px-20 pb-16">
            <div className="w-full flex flex-col justify-center items-center p-2 gap-y-4">
              <h3 className="text-2xl md:text-4xl font-bold text-[#005A98] mb-4 text-center">
                Why Join Us
              </h3>
              <h4 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] leading-snug mb-3 text-center">
                Experience a workplace that values your
                <span className="text-[#005A98]"> creativity</span>,
                <span className="text-[#005A98]"> growth</span> and
                <span className="text-[#005A98]"> impact</span>.
              </h4>
              <p className="text-[#1E1E1E] max-w-3xl mb-8 text-center">
                At BrandandBrandz, we create an environment where ideas thrive,
                careers grow, and work makes real impact.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {careerCards.map((card) => (
                <div
                  key={card.id}
                  className="p-5 border rounded-xl shadow-sm hover:shadow transition bg-white flex flex-col lg:flex-row items-center gap-6"
                >
                  {/* Text Section */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center lg:items-start items-center">
                    <h5 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                      {card.title}
                    </h5>
                    <p className="text-[#4B4848] mb-4 flex lg:items-start lg:text-start text-center items-center">
                      {card.description}
                    </p>
                  </div>

                  {/* Image Section */}
                  <div className="flex justify-center w-full lg:w-1/2">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      width={200}
                      height={200}
                      className="w-60 h-60 rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="px-4 lg:px-20 py-12">
          <div className="text-center mb-8">
            <p className="text-[#1E1E1E] font-semibold">NOW HIRING</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005A98] mb-2">
              Open Positions Available
            </h2>
            <p className="text-[#1E1E1E]">
              "Join BrandandBrandz to shape ideas, drive innovation, and grow
              with a passionate team."
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`font-medium cursor-pointer ${
                  activeTab === t.key
                    ? "text-[#005A98] border-b-2 border-[#005A98]"
                    : "text-[#1E1E1E] hover:text-[#005A98]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Role cards */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredRoles.map((r) => (
              <div
                key={r.id}
                className="flex items-center justify-between bg-white border rounded-xl shadow-md px-6 py-5"
              >
                <div>
                  <h3 className="text-[#005A98] text-xl font-semibold">
                    {r.title}
                  </h3>
                  <p className="text-[#4B4848]">{r.type}</p>
                </div>
                <Link
                  href={`/career/${r.tag}`}
                  aria-label={`View details for ${r.title}`}
                >
                  <span className="inline-block border border-[#005A98] text-[#005A98] px-5 py-2 rounded-lg hover:bg-[#005A98] hover:text-white transition">
                    Details
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
