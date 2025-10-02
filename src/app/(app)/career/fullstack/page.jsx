"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function FullstackPage() {
  const data = {
    title: "Full-Stack Developer Intern",
    location: "Remote, India",
    jobType: "Internship (Full Time/Part Time options available)",
    stipend: "As per company policy / Performance based",
    description:
      "As a Full-Stack Developer Intern, you will work on both the frontend and backend features for live projects. You'll contribute to UI, API integration, and database operations while collaborating with the team to ship new features.",
    lookingFor: [
      "Pursuing or recently completed a B.Tech/BE in CS, IT, or related field.",
      "Strong knowledge of HTML, CSS, JavaScript, and React.js.",
      "Basic understanding of backend (Node.js, Express) or Python.",
      "Familiarity with databases (MySQL, MongoDB).",
      "Knowledge of REST API development and integration.",
      "Hands-on experience with Git/GitHub for version control.",
    ],
    responsibilities: [
      "Assist in developing and maintaining responsive web applications.",
      "Work on UI/UX improvements and backend logic.",
      "Support API integration and database management.",
      "Debug and test applications to ensure functionality.",
      "Collaborate with the development team to build new features.",
      "Contribute to code reviews and project workflows.",
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
            href="mailto:hr@brandandbrandz.com?subject=Application%20for%20Full-Stack%20Developer%20Intern"
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