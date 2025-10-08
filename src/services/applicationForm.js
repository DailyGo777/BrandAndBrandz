"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { applicationFormSchema } from "@/utils/schemaValidation";
import api from "./api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ApplicationForm({ jobTitle, onClose }) {
  const internship_type = jobTitle;
  const router = useRouter();
  const [loading, setLoading] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(applicationFormSchema),
  });

 const onSubmit = async (data) => {
  try {
    setLoading(true);
    const formData = new FormData();
    formData.append("full_name", data.full_name);
    formData.append("phone_number", data.phone_number);
    formData.append("email_address", data.email_address);
    formData.append("educational_qualification", data.educational_qualification);
    formData.append("location", data.location);
    formData.append("current_year_or_graduation_year", data.current_year_or_graduation_year);
    formData.append("portfolio_link", data.portfolio_link);
    formData.append("why_internship", data.why_internship);
    formData.append("prior_experience", data.prior_experience);
    formData.append("internship_type", internship_type);

    if (data.resume_file && data.resume_file[0]) {
      formData.append("resume_file", data.resume_file[0]);
    }

    await api.post("/apply", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      timeout: 6000,
    });

    router.push("/career");

    toast.success("Application Form Submitted!", {
      position: "bottom-left",
      autoClose: 3000,
    });
  } catch (error) {
    console.error(error);
    if(error.timeout){
      toast.error("Server Timeout! Please Try Again", {
      position: "bottom-left",
      autoClose: 3000,
    });
    }
    toast.error("Internal Server Error!", {
      position: "bottom-left",
      autoClose: 3000,
    });
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="fixed inset-0 flex items-start justify-center bg-black/50 z-50 overflow-auto p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black cursor-pointer"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-[#005A98] mb-4">
          Apply for {jobTitle}
        </h2>

        <form
          className="text-black space-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Full Name */}
          <div>
            <label htmlFor="full_name">Full Name</label>
            <input
              id="full_name"
              {...register("full_name")}
              placeholder="Full Name"
              className="border p-2 rounded w-full"
            />
            <p className="text-red-500 text-sm">{errors.full_name?.message}</p>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone_number">Phone Number</label>
            <input
              id="phone_number"
              {...register("phone_number")}
              placeholder="Phone Number"
              className="border p-2 rounded w-full"
            />
            <p className="text-red-500 text-sm">
              {errors.phone_number?.message}
            </p>
          </div>

          {/* email_address */}
          <div>
            <label htmlFor="email_address">Email</label>
            <input
              id="email_address"
              {...register("email_address")}
              placeholder="email_address Address"
              className="border p-2 rounded w-full"
            />
            <p className="text-red-500 text-sm">{errors.email_address?.message}</p>
          </div>

          {/* educational_qualification */}
          <div>
            <label htmlFor="education">Education Qualification</label>
            <input
              id="education"
              {...register("educational_qualification")}
              placeholder="Educational educational_qualification"
              className="border p-2 rounded w-full"
            />
            <p className="text-red-500 text-sm">
              {errors.educational_qualification?.message}
            </p>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              {...register("location")}
              placeholder="Location"
              className="border p-2 rounded w-full"
            />
            <p className="text-red-500 text-sm">{errors.location?.message}</p>
          </div>

          {/* Graduation Year */}
          <div>
            <label htmlFor="current_year_or_graduation_year">Graduation Year</label>
            <input
              id="current_year_or_graduation_year"
              {...register("current_year_or_graduation_year")}
              placeholder="Graduation Year"
              className="border p-2 rounded w-full"
            />
            <p className="text-red-500 text-sm">
              {errors.current_year_or_graduation_year?.message}
            </p>
          </div>

          {/* resume_file */}
          <div className="col-span-2">
            <label htmlFor="resume_file">Resume / CV Upload (PDF/Doc)</label>
            <input
              id="resume_file"
              type="file"
              {...register("resume_file")}
              className="border p-2 rounded w-full"
              accept=".pdf,.docx"
            />
            <p className="text-red-500 text-sm">{errors.resume_file?.message}</p>
          </div>

          {/* portfolio_link */}
          <div className="col-span-2">
            <label htmlFor="link">Portfolio / GitHub / LinkedIn Link</label>
            <input
              id="link"
              {...register("portfolio_link")}
              placeholder="Portfolio / GitHub / LinkedIn Link"
              className="border p-2 rounded w-full"
            />
            <p className="text-red-500 text-sm">{errors.portfolio_link?.message}</p>
          </div>

          {/* Why Internship */}
          <div className="col-span-2">
            <label htmlFor="why">Why do you want this internship?</label>
            <textarea
              id="why"
              {...register("why_internship")}
              placeholder="Why do you want this internship?"
              className="border p-2 rounded w-full"
              rows="3"
            ></textarea>
            <p className="text-red-500 text-sm">
              {errors.why_internship?.message}
            </p>
          </div>

          {/* prior_experience */}
          <div className="col-span-2">
            <label htmlFor="prior_experience">Any Prior Experience / Projects</label>
            <textarea
              id="prior_experience"
              {...register("prior_experience")}
              placeholder="Any Prior Experience / Projects?"
              className="border p-2 rounded w-full"
              rows="2"
            ></textarea>
            <p className="text-red-500 text-sm">{errors.prior_experience?.message}</p>
          </div>

          {/* Submit */}

          <div className="flex justify-center items-center">
            <button
            disabled={loading}
              type="submit"
              className="w-40 bg-[#005A98] text-white py-2 rounded hover:bg-[#004878] transition cursor-pointer"
            >
              {loading ? "Processing..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
