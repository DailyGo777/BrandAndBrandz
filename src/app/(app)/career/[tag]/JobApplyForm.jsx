'use client';

import { useState } from "react";
import ApplicationForm from "@/services/applicationForm";

export function JobApplyForm({ jobTitle }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="block w-full text-center bg-[#005A98] text-white px-6 py-3.5 rounded-full font-semibold hover:bg-[#004878] cursor-pointer"
      >
        Apply Now
      </button>

      {showForm && (
        <ApplicationForm
          jobTitle={jobTitle}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
