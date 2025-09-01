"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/ContactSection";
import YarnToGarment from "@/components/YarnToGarment";
import HeroBanner from "@/components/HeroBanner";
import ProductsSection from "@/components/ProductsSection";
import ManufacturingForm from "@/components/ManufacturingForm";
import ServicesSection from "@/components/ServicesSection"
import StatsSection from "@/components/StatsSection"

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState("T-Shirt");

  // 🔥 Now track activeHotspot index (not image string)
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
            <Image
              src="/main.webp"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
              priority
            />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10">
          {/* Navigation Header */}
          <div className="flex justify-between items-center pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6 md:px-8">
            <Image
              src="/images/cloththread-logo.png"
              alt="ClothThread Logo"
              width={120}
              height={36}
              className="object-contain w-[100px] h-[30px] sm:w-[120px] sm:h-[36px] md:w-[200px] md:h-[65px]"
            />

            {/* Navigation */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {/* Menu */}
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center gap-1 sm:gap-2 text-white text-sm sm:text-base md:text-lg font-medium hover:opacity-80 transition-opacity"
                >
                  Menu
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                {menuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-lg py-2 z-20">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm sm:text-base">
                      Products
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm sm:text-base">
                      Yarn to Garment
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm sm:text-base">
                      Services
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm sm:text-base">
                      Contact
                    </a>
                  </div>
                )}
              </div>

              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="flex items-center gap-1 sm:gap-2 text-white text-sm sm:text-base md:text-lg font-medium hover:opacity-80 transition-opacity"
                >
                  Search
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                {searchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 sm:w-64 bg-white rounded-lg shadow-lg p-4 z-20">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex items-end justify-center min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-140px)] md:min-h-[calc(100vh-160px)] pb-25 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8">
            <Button
              onClick={() => window.open("/manufacturing", "_blank")}
              className="px-5 py-4 sm:px-5 sm:py-4 md:px-6 md:py-7 text-base sm:text-xl md:text-3xl font-semibold text-white border-0 hover:opacity-90 transition-opacity flex items-center gap-2 sm:gap-3 md:gap-4 rounded-lg"
              style={{
                background: "linear-gradient(135deg, #25A74B 0%, #99E8B0 100%)",
              }}
            >
              Apply for Manufacturing
              <Image
                src="/images/arrow-icon.webp"
                alt="Arrow"
                width={20}
                height={20}
                className="object-contain w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px]"
              />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Content Sections */}
      <div className="w-full">
        <HeroBanner />
      </div>
      <div className="w-full">
        <ServicesSection />
      </div>
      <div className="w-full">
        <YarnToGarment />
      </div>
      <div className="w-full">
        <ProductsSection />
      </div>
      <div className="w-full">
        <StatsSection />
      </div>

      {/* Contact Section */}
      <section className="w-full">
        <ContactSection />
      </section>
    </div>
  );
}
