import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { careerContent } from "@/utils/data";
import { JobApplyForm } from "./JobApplyForm";

export async function generateStaticParams() {
  return careerContent.map((job) => ({
    tag: job.tag,
  }));
}

export default function CareerDetails({ params }) {
  const data = careerContent.find((job) => job.tag === params.tag);

  if (!data) {
    return <div className="p-10 text-center">Role not found</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="px-4 py-10">
        <div className="w-full max-w-3xl mx-auto">
          <div className="flex items-start justify-between mb-6">
            <Link href="/career" className="text-sm text-[#005A98] hover:underline">
              &larr; Back
            </Link>
            <span className="text-xs bg-[#E6F0F7] text-[#005A98] px-3 py-1 rounded-full">
              Apply Now
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#005A98] mb-4">
            {data.title}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#1E1E1E] mb-8">
            <div><span className="font-semibold">Location:</span> {data.location}</div>
            <div><span className="font-semibold">Job Type:</span> {data.jobType}</div>
            <div><span className="font-semibold">Stipend:</span> {data.stipend}</div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2 text-[#005A98]">Job Description</h2>
            <p className="text-[#4B4848]">{data.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2 text-[#005A98]">Who We’re Looking For</h2>
            <ul className="list-disc pl-5 space-y-1 text-[#4B4848]">
              {data.lookingFor.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-2 text-[#005A98]">Your Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-1 text-[#4B4848]">
              {data.responsibilities.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <JobApplyForm jobTitle={data.title} />
        </div>
      </section>
      <Footer />
    </main>
  );
}

