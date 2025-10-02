"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const tabs = [
  { key: "all", label: "All" },
  { key: "marketing", label: "Marketing" },
  { key: "business", label: "Business Development" },
  { key: "fullstack", label: "Full-Stack Development" },
];

const roles = [
  {
    id: 1,
    title: "Marketing",
    type: "Intern",
    tag: "marketing",
  },
  {
    id: 2,
    title: "Business Development Intern",
    type: "Intern",
    tag: "business",
  },
  {
    id: 3,
    title: "Full-Stack Developer Intern",
    type: "Intern",
    tag: "fullstack",
  },
];

export default function Page() {
  return (
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
            Join passionate professionals dedicated to growth and community impact.
            Here, your career drives meaningful change, shapes a sustainable future,
            and redefines possibilities.
          </p>
          <a href="#open-positions" aria-label="Jump to open positions">
            <button className="text-center w-48 h-12 font-bold text-white bg-[#005A98] rounded-xl text-lg cursor-pointer shadow hover:bg-[#004878]">
              View Open Roles
            </button>
          </a>
        </div>

        {/* Why Join Us */}
    
{/* Why Join Us */}
{/* Why Join Us */}
{/* Why Join Us */}
<div className="px-4 lg:px-20 pb-16">
  <h3 className="text-2xl md:text-3xl font-bold text-[#005A98] mb-4">Why Join Us</h3>
  <h4 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] leading-snug mb-3">
    Experience a workplace that values your
    <span className="text-[#005A98]"> creativity</span>,
    <span className="text-[#005A98]"> growth</span> and
    <span className="text-[#005A98]"> impact</span>.
  </h4>
  <p className="text-[#1E1E1E] max-w-3xl mb-8">
    At BrandandBrandz, we create an environment where ideas thrive, careers grow, and work makes real impact.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {/* Card 1 */}
    <div className="p-5 border rounded-xl shadow-sm hover:shadow transition bg-white flex gap-4 items-center">
      <div className="flex-1">
        <h5 className="text-lg font-semibold text-[#1E1E1E] mb-2">Advance with Clear Growth Opportunities</h5>
        <p className="text-[#4B4848] mb-4">
          Accelerate your career with structured learning, mentorship, and well-defined paths to leadership. We provide abundant opportunities to help you reach your full potential.
        </p>
      </div>
      <div className="relative w-32 h-40 md:w-40 md:h-52 flex-shrink-0">
        <Image src="/carrerimg/Advance.png" alt="Growth Opportunities" fill className="object-contain rounded-md" />
      </div>
    </div>
    {/* Card 2 */}
    <div className="p-5 border rounded-xl shadow-sm hover:shadow transition bg-white flex gap-4 items-center">
      <div className="flex-1">
        <h5 className="text-lg font-semibold text-[#1E1E1E] mb-2">Exciting, Impactful Projects</h5>
        <p className="text-[#4B4848] mb-4">
          Work on challenging and meaningful projects that push your creativity and deliver real impact for brands across industries.
        </p>
      </div>
      <div className="relative w-32 h-40 md:w-40 md:h-52 flex-shrink-0">
        <Image src="/carrerimg/Exicting.png" alt="Exciting Projects" fill className="object-contain rounded-md" />
      </div>     
    </div>
    {/* Card 3 */}
    <div className="p-5 border rounded-xl shadow-sm hover:shadow transition bg-white flex gap-4 items-center">
      <div className="flex-1">
        <h5 className="text-lg font-semibold text-[#1E1E1E] mb-2">Creative & Flexible Work Environment</h5>
        <p className="text-[#4B4848] mb-4">
          Enjoy a dynamic workplace that encourages creativity and innovation, with flexible work options designed to support both productivity and balance.
        </p>
      </div>
      <div className="relative w-32 h-60d:w-40 md:h-52 flex-shrink-0">
        <Image src="/carrerimg/growth.png" alt="Flexible Work" fill className="object-contain rounded-md" />
      </div>
    </div>
    {/* Card 4 */}
    <div className="p-5 border rounded-xl shadow-sm hover:shadow transition bg-white flex gap-4 items-center">
      <div className="flex-1">
        <h5 className="text-lg font-semibold text-[#1E1E1E] mb-2">Collaborative Team Culture</h5>
        <p className="text-[#4B4848] mb-4">
          Join a collaborative, diverse team where every voice and idea shapes the future.
        </p>
      </div>
      <div className="relative w-32 h-40 md:w-40 md:h-52 flex-shrink-0">
        <Image src="/carrerimg/collaborative.png" alt="Collaborative Culture" fill className="object-contain rounded-md" />
      </div>
    </div>
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
            "Join BrandandBrandz to shape ideas, drive innovation, and grow with a passionate team."
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          {tabs.map((t) => (
            <button key={t.key} className="text-[#1E1E1E] hover:text-[#005A98] font-medium">
              {t.label}
            </button>
          ))}
        </div>

        {/* Role cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {roles.map((r) => (
            <div key={r.id} className="flex items-center justify-between bg-white border rounded-xl shadow-md px-6 py-5">
              <div>
                <h3 className="text-[#005A98] text-xl font-semibold">{r.title}</h3>
                <p className="text-[#4B4848]">{r.type}</p>
              </div>
              <Link href={`/career/${r.tag}`} aria-label={`View details for ${r.title}`} className="cursor-pointer">
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
  );
}
