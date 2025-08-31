"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// ✅ Product data (images + hotspots)
const products = {
  Hoodie: {
    title: "Hoodie",
    image: "/falcon front.png",
    hotspots: [
      // Logo (center chest)
      { left: "50%", top: "46%", detailImage: "/2.png", mobileLeft: "50%", mobileTop: "46%" },

      // Right chest area
      { left: "67%", top: "50%", detailImage: "/1.png", mobileLeft: "67%", mobileTop: "50%" },

      // Left pocket area
      { left: "40%", top: "86%", detailImage: "/3.png", mobileLeft: "40%", mobileTop: "72%" },

      // Right pocket area
      { left: "84%", top: "85%", detailImage: "/4.png", mobileLeft: "87%", mobileTop: "69%" },
    ],
  },

  Pants: {
    title: "Pants",
    image: "/denim front.png",
    hotspots: [
      // Upper thigh
      { left: "55%", top: "21%", detailImage: "/33.png", mobileLeft: "55%", mobileTop: "33%" },

      // Waist area
      { left: "45%", top: "10%", detailImage: "/22.png", mobileLeft: "45%", mobileTop: "29%" },

      // Bottom hem
      { left: "39%", top: "90%", detailImage: "/11.png", mobileLeft: "39%", mobileTop: "72%" },
    ],
  },
}


export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState("Hoodie") // ✅ Default to Hoodie
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const getActiveDotIndex = () => {
    return Object.keys(products).indexOf(activeProduct)
  }

  return (
    <section className="flex flex-col min-h-[900px] bg-white">
      {/* Header */}
      <div className="pt-2 md:pt-4 pb-4 md:pb-6 px-4 md:px-8 text-center">
        <div className="flex items-center justify-center mb-2">
          {/* Green circular logo */}
          <div className="bg-green-500 rounded-full mr-[-10px] md:mr-[-20px] w-6 h-6 md:w-10 md:h-[40px] mt-[-15px] md:mt-[-30px]"></div>
          <h1
            className="text-3xl md:text-5xl text-black font-semibold"
            style={{
              fontFamily: "Causten, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 8vw, 65px)",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Products
          </h1>
        </div>
        <p
          className="text-sm md:text-xl text-gray-600 mt-3 md:mt-5 mb-8 md:mb-15 tracking-wide md:tracking-widest"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 300,
            fontStyle: "light",
            fontSize: "clamp(16px, 4vw, 32px)",
            lineHeight: "120%",
            letterSpacing: "0%",
          }}
        >
          Select the garment type to proceed with inspection
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Product Image Container */}
        <div className="relative rounded-3xl px-4 md:px-12 pt-8 md:pt-20 pb-8 md:pb-20 mb-8 w-[95%] bg-[rgba(240,252,243,1)] mx-auto">
          <div
            className="relative mx-auto max-w-full 
               md:w-[800px] md:h-[700px] 
               w-full h-[600px]   
               flex items-center justify-center"
          >
            <Image
              src={products[activeProduct].image || "/placeholder.svg"}
              alt={`${products[activeProduct].title} Product`}
              width={800}
              height={700}
              className="object-contain w-full h-full"
            />

            {/* Hotspots */}
            {products[activeProduct].hotspots.map((hotspot, index) => {
              const top = isMobile && hotspot.mobileTop ? hotspot.mobileTop : hotspot.top
              const left = isMobile && hotspot.mobileLeft ? hotspot.mobileLeft : hotspot.left

              return (
                <div
                  key={index}
                  className={`absolute ${activeHotspot !== null && activeHotspot !== index ? "z-0" : "z-10"}`}
                  style={{
                    left,
                    top,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <button
                    className="w-6 h-6 flex items-center justify-center"
                    onClick={() => setActiveHotspot(activeHotspot === index ? null : index)}
                  >
                    <img src="/plus.png" alt="/plus-icon" width={34} height={34} />
                  </button>

                  {/* Popup */}
                  <div
  className={`absolute ${
    activeProduct === "Hoodie" ? "left-10 top-0" : "left-5 top-5"
  } rounded-md p-[1px] z-50 transition-opacity duration-150`}
  style={{
    background: "radial-gradient(circle,rgba(37, 167, 75, 1) 50%, rgba(255, 255, 255, 1) 100%)",
    opacity: activeHotspot === index ? 1 : 0,
    pointerEvents: activeHotspot === index ? "auto" : "none",
  }}
>
  <img
    src={hotspot.detailImage || "/placeholder.svg"}
    alt="Detail"
    className="max-w-[270px] max-h-[178px] rounded-md"
  />
</div>

                </div>
              )
            })}
          </div>
        </div>

        {/* Garment Type Selector - Desktop */}
        <div className="hidden md:flex gap-4 mb-8">
          {Object.keys(products).map((product) => (
            <Button
              key={product}
              variant={activeProduct === product ? "default" : "secondary"}
              className={`px-5 py-3 rounded-md shadow-sm font-medium text-2xl transition ${
                activeProduct === product
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
              onClick={() => {
                setActiveProduct(product)
                setActiveHotspot(null)
              }}
            >
              {products[product].title}
            </Button>
          ))}
        </div>

        {/* Garment Type Selector - Mobile */}
        <div className="flex md:hidden gap-4 mb-2">
          <div className="w-[193px] h-[21px] flex gap-2 mx-auto" style={{ borderRadius: "4px" }}>
            {Object.keys(products).map((product) => (
              <Button
                key={product}
                variant={activeProduct === product ? "default" : "secondary"}
                className={`flex-1 h-full rounded-md shadow-sm font-medium text-xs transition ${
                  activeProduct === product
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
                onClick={() => {
                  setActiveProduct(product)
                  setActiveHotspot(null)
                }}
              >
                {products[product].title}
              </Button>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-1 md:mt-8 mt-2">
          <div className="md:flex md:gap-1 hidden">
            {Object.keys(products).map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === getActiveDotIndex() ? "bg-green-500" : "bg-gray-300"
                }`}
                onClick={() => {
                  const productKey = Object.keys(products)[index]
                  setActiveProduct(productKey)
                  setActiveHotspot(null)
                }}
              />
            ))}
          </div>
          <div
            className="flex md:hidden gap-1 justify-center items-center"
            style={{ width: "31.54px", height: "7.57px" }}
          >
            {Object.keys(products).map((_, index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === getActiveDotIndex() ? "bg-green-500" : "bg-gray-300"
                }`}
                onClick={() => {
                  const productKey = Object.keys(products)[index]
                  setActiveProduct(productKey)
                  setActiveHotspot(null)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
