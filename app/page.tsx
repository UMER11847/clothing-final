"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronDown, Plus } from "lucide-react"
import { useState } from "react"
import ContactSection from "@/components/ContactSection"
import ProductShow from "@/components/ProductShowcase"


export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState("T-Shirt")

  const products = {
    "T-Shirt": {
      title: "T-Shirt",
      image: "/black-t-shirt-represent.png",
      hotspots: [
        { left: "500px", top: "120px" }, // collar area
        { left: "350px", top: "200px" }, // chest logo area
        { left: "200px", top: "300px" }, // left side
        { left: "400px", top: "300px" }, // right side
      ],
    },
    Hoodie: {
      title: "Hoodie",
      image: "/images/hoodie-product.png",
      hotspots: [
        { left: "580px", top: "300px" }, // hood area
        { left: "520px", top: "400px" }, // chest area
        { left: "330px", top: "510px" }, // left sleeve
        { left: "650px", top: "450px" }, // right sleeve
      ],
    },

    
    Pants: {
      title: "Pants",
      image: "/black-pants-trousers.png",
      hotspots: [
        { left: "300px", top: "150px" }, // waist area
        { left: "250px", top: "250px" }, // left pocket
        { left: "350px", top: "250px" }, // right pocket
        { left: "300px", top: "350px" }, // bottom hem
      ],
    },
  }

  const getActiveDotIndex = () => {
    const productKeys = Object.keys(products)
    return productKeys.indexOf(activeProduct)
  }

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
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex justify-between items-center pt-4 px-8">
            <Image
              src="/images/cloththread-logo.png"
              alt="ClothThread Logo"
              width={150}
              height={45}
              className="object-contain"
            />

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              {/* Menu Dropdown */}
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

              {/* Search Dropdown */}
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

          {/* Hero Section */}
          <div className="flex items-end justify-center min-h-[calc(100vh-140px)] pb-20">
            <Button
              className="px-8 py-4 text-lg font-semibold text-white border-0 hover:opacity-90 transition-opacity flex items-center gap-3"
              style={{
                background: "linear-gradient(135deg, #25A74B 0%, #99E8B0 100%)",
              }}
            >
              Apply for Manufacturing
              <Image src="/images/arrow-icon.png" alt="Arrow" width={16} height={16} className="object-contain" />
            </Button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Products Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="relative flex items-center">
                <div className="w-6 h-6 rounded-full absolute -left-2 z-0" style={{ backgroundColor: "#1EAD4C" }}></div>
                <h2
                  className="text-4xl font-bold relative z-10 pl-4"
                  style={{ color: "#000000", fontFamily: "Inter, Helvetica, Arial, sans-serif" }}
                >
                  Products
                </h2>
              </div>
            </div>
            <p className="text-lg text-gray-600">Select the garment type to proceed with inspection</p>
          </div>

          {/* Dynamic Product Section */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">{products[activeProduct].title}</h3>

            {/* Product Image with Hotspots */}
            <div className="relative inline-block w-full">
              <div
                className="relative rounded-lg py-8 mx-auto"
                style={{
                  backgroundColor: "#99E8B026",
                  width: "100%",
                  maxWidth: "1200px",
                  paddingLeft: "200px",
                  paddingRight: "200px",
                }}
              >
                <Image
                  src={products[activeProduct].image || "/placeholder.svg"}
                  alt={`${products[activeProduct].title} Product`}
                  width={600}
                  height={400}
                  className="object-contain mx-auto"
                />

                {/* Dynamic Hotspots */}
                {products[activeProduct].hotspots.map((hotspot, index) => (
                  <button
                    key={index}
                    className="absolute w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    style={{ left: hotspot.left, top: hotspot.top, transform: "translate(-50%, -50%)" }}
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Navigation */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => setActiveProduct("T-Shirt")}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  activeProduct === "T-Shirt" ? "bg-green-500 text-white" : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                T-Shirt
              </button>
              <button
                onClick={() => setActiveProduct("Hoodie")}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  activeProduct === "Hoodie" ? "bg-green-500 text-white" : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Jacket
              </button>
              <button
                onClick={() => setActiveProduct("Pants")}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  activeProduct === "Pants" ? "bg-green-500 text-white" : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Pants
              </button>
            </div>

            {/* Functional Pagination Dots */}
            <div className="flex items-center justify-center gap-2">
              {Object.keys(products).map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === getActiveDotIndex() ? "bg-green-500" : "bg-gray-300"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
       {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
