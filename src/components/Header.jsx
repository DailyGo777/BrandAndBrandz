"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import bandbLogo from "../../public/BandBLogo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center w-25 h-25 lg:w-50 lg:h-50">
            <Link href={"/"}>
              <Image src={bandbLogo} alt="bandblogo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href={"/"}
              className="font-carlito text-2xl text-[#1E1E1E] hover:text-[#005A98] transition-colors"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="font-carlito text-2xl text-[#1E1E1E] hover:text-[#005A98] transition-colors"
            >
              About
            </Link>
            <Link
              href={"/service"}
              className="font-carlito text-2xl text-[#1E1E1E] hover:text-[#005A98] transition-colors"
            >
              Services
            </Link>
            <Link
              href={"/team"}
              className="font-carlito text-2xl text-[#1E1E1E] hover:text-[#005A98] transition-colors"
            >
              Our Team
            </Link>
            <Link
              href={"/client"}
              className="font-carlito text-2xl text-[#1E1E1E] hover:text-[#005A98] transition-colors"
            >
              Clients
            </Link>
            <Link
              href={"/contact"}
              className="bg-[#005A98] text-white px-4 py-3.5 rounded-xl font-carlito text-2xl font-bold hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href={"/"}
                className="font-carlito text-2xl text-[#1E1E1E] hover:text-[#005A98] transition-colors"
              >
                Home
              </Link>
               <Link
                href={"/"}
                className="font-carlito text-2xl text-[#1E1E1E] hover:text-[#005A98] transition-colors"
              >
                About
              </Link>
              <Link
                href={"/service"}
                className="font-carlito text-2xl text-[#1E1E1E] hover:text-[#005A98] transition-colors"
              >
                Services
              </Link>
              <Link
                href={"/team"}
                className="font-carlito text-2xl text-[#1E1E1E] hover:text-[#005A98] transition-colors"
              >
                Our Team
              </Link>
              <Link
                href={"/client"}
                className="font-carlito text-2xl text-[#1E1E1E] hover:text-[#005A98] transition-colors"
              >
                Clients
              </Link>
              <Link
                href={"/contact"}
                className="bg-[#005A98] text-white px-4 py-3 rounded-xl font-carlito text-xl font-bold hover:bg-opacity-90 transition-all w-fit"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
