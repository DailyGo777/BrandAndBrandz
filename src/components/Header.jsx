'use client'

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-bruno text-[#4A6893] text-4xl">B&B</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="font-carlito text-2xl text-[#4A6893] font-bold hover:text-bb-blue transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-carlito text-2xl text-[#1E1E1E] hover:text-bb-blue transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="font-carlito text-2xl text-[#1E1E1E] hover:text-bb-blue transition-colors"
            >
              Services
            </a>
            <a
              href="#work"
              className="font-carlito text-2xl text-[#1E1E1E] hover:text-bb-blue transition-colors"
            >
              Work
            </a>
            <a
              href="#clients"
              className="font-carlito text-2xl text-[#1E1E1E] hover:text-bb-blue transition-colors"
            >
              Clients
            </a>
            <a
              href="#team"
              className="font-carlito text-2xl text-[#1E1E1E] hover:text-bb-blue transition-colors"
            >
              Our Team
            </a>
            <a
              href="#faq"
              className="font-carlito text-2xl text-[#1E1E1E] hover:text-bb-blue transition-colors"
            >
              FAQ
            </a>
            <button className="bg-[#4A6893] text-white px-4 py-3.5 rounded-xl font-carlito text-2xl font-bold hover:bg-opacity-90 transition-all">
              Contact Us
            </button>
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
              <a
                href="#home"
                className="font-carlito text-xl text-[#4A6893] font-bold hover:text-bb-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="font-carlito text-xl text-[#1E1E1E] hover:text-bb-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="font-carlito text-xl text-[#1E1E1E] hover:text-bb-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#work"
                className="font-carlito text-xl text-[#1E1E1E] hover:text-bb-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </a>
              <a
                href="#clients"
                className="font-carlito text-xl text-[#1E1E1E] hover:text-bb-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Clients
              </a>
              <a
                href="#team"
                className="font-carlito text-xl text-[#1E1E1E] hover:text-bb-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </a>
              <a
                href="#faq"
                className="font-carlito text-xl text-[#1E1E1E] hover:text-bb-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <button className="bg-[#4A6893] text-white px-4 py-3 rounded-xl font-carlito text-xl font-bold hover:bg-opacity-90 transition-all w-fit">
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
