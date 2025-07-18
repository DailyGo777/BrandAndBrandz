'use client'

import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    companyName: "",
    phoneNumber: "",
    helpMessage: "",
  });

  const handleInputChange = () => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="text-center mb-16">
            <h1 className="font-roboto text-4xl lg:text-5xl font-bold text-[#4A6893] mb-6">
              Ready to Elevate Your Brand?
            </h1>
            <p className="font-roboto text-lg lg:text-xl text-[#4B4848] max-w-4xl mx-auto leading-relaxed">
              Let's create something impactful together. Reach out and see how
              Brand & Brandz can help grow your brand through smart design,
              strategy, and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="bg-white rounded-lg shadow-2xl p-8">
              <h2 className="font-roboto text-2xl font-bold text-[#030303] mb-8">
                Get in Touch — Brand & Brandz
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block font-roboto text-sm font-semibold text-[#030303] mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="w-full px-3 py-3 border border-gray-300 rounded-md font-roboto text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4A6893] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block font-roboto text-sm font-semibold text-[#030303] mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="w-full px-3 py-3 border border-gray-300 rounded-md font-roboto text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4A6893] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="businessEmail"
                    className="block font-roboto text-sm font-semibold text-[#030303] mb-2"
                  >
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    placeholder="Shivu@company.com"
                    className="w-full px-3 py-3 border border-gray-300 rounded-md font-roboto text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4A6893] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block font-roboto text-sm font-semibold text-[#030303] mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                    className="w-full px-3 py-3 border border-gray-300 rounded-md font-roboto text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4A6893] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block font-roboto text-sm font-semibold text-[#030303] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+91 123-45678"
                    className="w-full px-3 py-3 border border-gray-300 rounded-md font-roboto text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4A6893] focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="helpMessage"
                    className="block font-roboto text-sm font-semibold text-[#030303] mb-2"
                  >
                    How can we help? *
                  </label>
                  <textarea
                    id="helpMessage"
                    name="helpMessage"
                    value={formData.helpMessage}
                    onChange={handleInputChange}
                    placeholder="Tell us about your IT challenges and objectives..."
                    rows={4}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md font-roboto text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4A6893] focus:border-transparent resize-vertical"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4A6893] text-white px-6 py-3 rounded-md font-roboto text-lg font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center gap-4"
                >
                  Schedule Meeting
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-roboto text-3xl font-bold text-black mb-6">
                Let's Connect
              </h2>
              <p className="font-roboto text-lg text-[#4B4848] mb-12 leading-relaxed">
                Our enterprise IT specialists are ready to help you solve
                complex technology challenges and accelerate your business
                growth.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-4">
                  <div className="bg-[#4A6893] rounded-2xl p-4 flex-shrink-0">
                    <Phone size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-roboto text-lg font-bold text-black mb-1">
                      Phone
                    </h3>
                    <p className="font-roboto text-lg text-[#4B4848]">
                      9353857575
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#4A6893] rounded-2xl p-4 flex-shrink-0">
                    <Mail size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-roboto text-lg font-bold text-black mb-1">
                      Email
                    </h3>
                    <p className="font-roboto text-lg text-[#4B4848]">
                      sales@B&B.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#4A6893] rounded-2xl p-4 flex-shrink-0">
                    <MapPin size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-roboto text-lg font-bold text-black mb-1">
                      Office
                    </h3>
                    <p className="font-roboto text-sm text-[#4B4848] leading-relaxed">
                      #304,Medi Mallsandsra,Hoskote
                      <br />
                      Taluk, Bengaluru-560067
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#4A6893] rounded-2xl p-4 flex-shrink-0">
                    <Clock size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-roboto text-lg font-bold text-black mb-1">
                      Business Hours
                    </h3>
                    <p className="font-roboto text-lg text-[#4B4848] leading-relaxed">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      24/7 Emergency Support Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
