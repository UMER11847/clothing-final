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


  const getActiveDotIndex = () => {
    const productKeys = Object.keys(products);
    return productKeys.indexOf(activeProduct);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/new-manufacturing-bg.png)",
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-center pt-8 md:pt-4 px-4 md:px-8">
            <Image
              src="/images/cloththread-logo.png"
              alt="ClothThread Logo"
              width={120}
              height={36}
              className="object-contain md:w-[200px] md:h-[65px]"
            />

            {/* Navigation */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Menu */}
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center gap-1 md:gap-2 text-white text-base md:text-lg font-medium hover:opacity-80 transition-opacity"
                >
                  Menu
                  <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                </button>
                {menuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      About Us
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Services
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Contact
                    </a>
                  </div>
                )}
              </div>

              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="flex items-center gap-1 md:gap-2 text-white text-base md:text-lg font-medium hover:opacity-80 transition-opacity"
                >
                  Search
                  <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                </button>
                {searchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-20">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-end justify-center min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-140px)] pb-35 md:pb-25 px-4">
            <Button
              onClick={() => window.open("/manufacturing", "_blank")}
              className="px-4 py-4 md:px-6 md:py-7 text-lg md:text-3xl font-semibold text-white border-0 hover:opacity-90 transition-opacity flex items-center gap-2 md:gap-4 rounded-lg md:rounded-lg"
              style={{
                background: "linear-gradient(135deg, #25A74B 0%, #99E8B0 100%)",
              }}
            >
              Apply for Manufacturing
              <Image
                src="/images/arrow-icon.png"
                alt="Arrow"
                width={20}
                height={20}
                className="object-contain md:w-[25px] md:h-[25px]"
              />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <HeroBanner />
      </div>
      <div>
        <ServicesSection />
      </div>
      <div>
        <YarnToGarment />
      </div>
      <div>
        <ProductsSection />
      </div>
      <div>
        <StatsSection />
      </div>

      {/* Contact Section */}
<section>
  <ContactSection />
</section>
 

    </div>
    
  );
}
