"use client";

import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { toast } from "react-toastify";
import { contactFormSchema } from "@/utils/schemaValidation";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.post(
        "https://brandandbrandz-backend.onrender.com/api/contacts",
        data,
        {
          timeout: 6000,
        }
      );
      toast.success("Scheduled meeting Successfully!", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-[#005A98] text-[#030303] font-semibold",
      });
    } catch (error) {
      console.log(error);
      const isTimeout = error.code === "ECONNABORTED";
      toast.error( isTimeout ? "Network Timeout! Please try again" : "Something went wrong!", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-red-500 text-[#030303] font-semibold",
      });
    } finally {
      setLoading(false);
    }
    reset();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="text-center mb-16">
            <h1 className="font-roboto text-4xl lg:text-5xl font-bold text-[#005A98] mb-6">
              Ready to Elevate Your Brand?
            </h1>
            <p className="font-roboto text-lg lg:text-xl text-[#4B4848] max-w-4xl mx-auto leading-relaxed">
              Let's create something impactful together. Reach out and see how
              Brand & Brandz can help grow your brand through smart design,
              strategy, and execution.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-16">
            <div className="bg-white rounded-lg shadow-2xl p-8">
              <h2 className="font-roboto text-2xl font-bold text-[#030303] mb-8">
                Get in Touch — Brand & Brandz
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* First + Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-roboto text-sm font-semibold text-[#030303] mb-2">
                      First Name *
                    </label>
                    <input
                      {...register("firstName")}
                      placeholder="John"
                      className="w-full px-3 py-3 border border-gray-300 rounded-md font-roboto text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005A98] focus:border-transparent"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block font-roboto text-sm font-semibold text-[#030303] mb-2">
                      Last Name *
                    </label>
                    <input
                      {...register("lastName")}
                      placeholder="Doe"
                      className="w-full px-3 py-3 border border-gray-300 rounded-md font-roboto text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005A98] focus:border-transparent"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Business Email */}
                <div>
                  <label className="block font-roboto text-sm font-semibold text-[#030303] mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    {...register("businessEmail")}
                    placeholder="shivu@company.com"
                    className="w-full px-3 py-3 border border-gray-300 rounded-md font-roboto text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005A98] focus:border-transparent"
                  />
                  {errors.businessEmail && (
                    <p className="text-red-500 text-sm">
                      {errors.businessEmail.message}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block font-roboto text-sm font-semibold text-[#030303] mb-2">
                    Company Name *
                  </label>
                  <input
                    {...register("companyName")}
                    placeholder="Your Company Name"
                    className="w-full px-3 py-3 border border-gray-300 rounded-md font-roboto text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005A98] focus:border-transparent"
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block font-roboto text-sm font-semibold text-[#030303] mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register("phoneNumber")}
                    placeholder="+91 123-45678"
                    className="w-full px-3 py-3 border border-gray-300 rounded-md font-roboto text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005A98] focus:border-transparent"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                {/* Help Message */}
                <div>
                  <label className="block font-roboto text-sm font-semibold text-[#030303] mb-2">
                    How can we help? *
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Tell us about your IT challenges and objectives..."
                    className="w-full px-3 py-3 border border-gray-300 rounded-md font-roboto text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005A98] focus:border-transparent"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-6 py-3 rounded-md font-roboto text-lg font-semibold flex items-center justify-center gap-4 cursor-pointer transition-all 
                              ${
                                loading
                                  ? "bg-[#005A98]/60 cursor-not-allowed"
                                  : "bg-[#005A98] hover:bg-opacity-90 text-white"
                              }
                            `}
                >
                  {loading ? "Processing" : "Schedule Meeting"}
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>

            {/* Google Maps Location */}
            <div className="w-full">
              <h2 className="font-roboto text-3xl font-bold text-[#005A98] mb-6 text-center">
                Find Us Here
              </h2>
              <p className="font-roboto text-lg text-[#4B4848] mb-8 leading-relaxed text-center">
                Visit our office or get direction. We’re centrally located for
                your convenience.
              </p>

              {/* Google Maps Embed */}
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1!2d77.7655067!3d12.9844467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0fd5dc557937%3A0xea0c5cc98b0272e5!2sDaily%20Go%20-%20Events%20and%20Manpower%20Services!5e0!3m2!1sen!2sin!4v1647845123456!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brand & Brandz Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
