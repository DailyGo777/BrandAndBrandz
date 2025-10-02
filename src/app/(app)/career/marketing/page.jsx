"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function MarketingPage() {
  const data = {
    title: "Marketing Intern",
    location: "Remote, India",
    jobType: "Internship (Full Time/Part Time options available)",
    stipend: "As per company policy / Performance based",
    description:
      "We're looking for a marketing intern who’s eager to learn and contribute to brand growth. You'll support campaigns, content development, and research. The internship provides hands-on experience in brand communication, market research, and performance marketing.",
    lookingFor: [
      "Pursuing or recently completed an MBA, PGDM, or related field in Marketing/Business/PR.",
      "Strong communication, presentation, and stakeholder management skills.",
      "Passion for creativity in campaigns and content.",
      "Basic knowledge of social media, SEO, Google Analytics, LinkedIn & CRM tools is a plus.",
      "Strategic thinker with problem-solving abilities and a growth mindset.",
    ],
    responsibilities: [
      "Assist in planning and executing digital and social media marketing campaigns.",
      "Support in preparing marketing collateral, proposals, and case studies.",
      "Conduct market and competitor research to identify new opportunities.",
      "Coordinate with the sales team for lead generation initiatives.",
      "Track performance metrics and help optimize campaigns.",
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="px-4 py-10">
        <div className="w-full max-w-3xl mx-auto">
          <div className="flex items-start justify-between mb-6">
            <Link href="/career" className="text-sm text-[#005A98] hover:underline">
              &larr; Back
            </Link>
            <span className="text-xs bg-[#E6F0F7] text-[#005A98] px-3 py-1 rounded-full">Apply Now</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#005A98] mb-4">{data.title}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#1E1E1E] mb-8">
            <div><span className="font-semibold">Location:</span> {data.location}</div>
            <div><span className="font-semibold">Job Type:</span> {data.jobType}</div>
            <div><span className="font-semibold">Stipend:</span> {data.stipend}</div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#1E1E1E] mb-2">Job Description</h2>
            <p className="text-[#4B4848]">{data.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#1E1E1E] mb-2">Who We’re Looking For</h2>
            <ul className="list-disc pl-5 space-y-1 text-[#4B4848]">
              {data.lookingFor.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-lg font-semibold text-[#1E1E1E] mb-2">Your Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-1 text-[#4B4848]">
              {data.responsibilities.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <a
            href="mailto:hr@brandandbrandz.com?subject=Application%20for%20Marketing%20Intern"
            className="block w-full text-center bg-[#005A98] text-white px-6 py-3.5 rounded-full font-semibold hover:bg-[#004878]"
          >
            Apply Now
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}