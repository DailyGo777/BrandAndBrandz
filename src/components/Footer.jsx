import {
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Instagram
} from "lucide-react";
import bandbLogo from "../../public/BandBLogo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#005A98] py-16 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Image src={bandbLogo} alt="bandblogo" />
            <p className="[font-family:var(--font-sans)] text-text-light text-lg leading-relaxed max-w-md">
              Empowering brands with smart, scalable solutions.
              <br />
              Your trusted partner in creativity, strategy, and digital growth.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-8">
              <a
                href="#"
                className="text-text-light hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-text-light hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-1">
            <h3 className="[font-family:var(--font-sans)] font-bold text-white text-lg mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="[font-family:var(--font-sans)] text-text-light text-base hover:text-white transition-colors"
                >
                  Branding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="[font-family:var(--font-sans)] text-text-light text-base hover:text-white transition-colors"
                >
                  Creative Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="[font-family:var(--font-sans)] text-text-light text-base hover:text-white transition-colors"
                >
                  Website Design & Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="[font-family:var(--font-sans)] text-text-light text-base hover:text-white transition-colors"
                >
                  IT Consulting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="[font-family:var(--font-sans)] text-text-light text-base hover:text-white transition-colors"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="[font-family:var(--font-sans)] text-text-light text-base hover:text-white transition-colors"
                >
                  Manpower Solution
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h3 className="[font-family:var(--font-sans)] font-bold text-white text-lg mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-white flex-shrink-0" />
                <span className="[font-family:var(--font-sans)] text-text-light text-base">
                  85500 00895 , 93538 57575
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-white flex-shrink-0" />
                <span className="[font-family:var(--font-sans)] text-text-light text-base">
                  contact@brandandbrandz.com{" "}
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-white flex-shrink-0 mt-0.5" />
                <span className="[font-family:var(--font-sans)] text-text-light text-sm leading-5">
                  1st floor, palmarcade, horamavu main road, kalkere, bengaluru
                  - 560043
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Copyright */}
            <p className="[font-family:var(--font-sans)] text-text-light text-base">
              © 2025 NAMMURA TECH WORKFORCE PVT LTD. All rights reserved.{" "}
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#"
                className="[font-family:var(--font-sans)] text-text-light text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="[font-family:var(--font-sans)] text-text-light text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="[font-family:var(--font-sans)] text-text-light text-sm hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
