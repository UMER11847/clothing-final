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

  const products = {
    "T-Shirt": {
      title: "T-Shirt",
      image: "",
      hotspots: [
        { left: "500px", top: "120px" },
        { left: "350px", top: "200px" },
        { left: "200px", top: "300px" },
        { left: "400px", top: "300px" },
      ],
    },
    Hoodie: {
      title: "Hoodie",
      image: "/images/hoodie-product.png",
      hotspots: [
        { left: "580px", top: "300px", detailImage: "/2.png" },
        { left: "520px", top: "400px", detailImage: "/1.png" },
        { left: "330px", top: "510px", detailImage: "/4.png" },
        { left: "650px", top: "450px", detailImage: "/3.png" },
      ],
    },
    Pants: {
      title: "Pants",
      image: "",
      hotspots: [
        { left: "300px", top: "150px" },
        { left: "250px", top: "250px" },
        { left: "350px", top: "250px" },
        { left: "300px", top: "350px" },
      ],
    },
  };

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
          <div className="flex justify-between items-center pt-4 px-8">
            <Image
              src="/images/cloththread-logo.png"
              alt="ClothThread Logo"
              width={150}
              height={45}
              className="object-contain"
            />

            {/* Navigation */}
            <div className="flex items-center gap-3">
              {/* Menu */}
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center gap-2 text-white text-lg font-medium hover:opacity-80 transition-opacity"
                >
                  Menu
                  <ChevronDown className="w-4 h-4" />
                </button>
                {menuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      About Us
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Contact
                    </a>
                  </div>
                )}
              </div>

              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="flex items-center gap-2 text-white text-lg font-medium hover:opacity-80 transition-opacity"
                >
                  Search
                  <ChevronDown className="w-4 h-4" />
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

          {/* Hero CTA */}
          <div className="flex items-end justify-center min-h-[calc(100vh-140px)] pb-25">
            <Button
              onClick={() => window.open("/manufacturing", "_blank")}
              className="px-6 py-7 text-3xl font-semibold text-white border-0 hover:opacity-90 transition-opacity flex items-center gap-4"
              style={{
                background: "linear-gradient(135deg, #25A74B 0%, #99E8B0 100%)",
              }}
            >
              Apply for Manufacturing
              <Image
                src="/images/arrow-icon.png"
                alt="Arrow"
                width={25}
                height={25}
                className="object-contain"
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
      <ContactSection />
    </div>
  );
}
