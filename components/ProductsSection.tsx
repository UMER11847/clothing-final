"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// ✅ Product data (images + hotspots)
// We only keep `top` and `left` (percentages)
interface Hotspot {
  left: string // e.g. "50%"
  top: string  // e.g. "46%"
  detailImage: string
  isRightSide?: boolean
  // Mobile-specific positioning adjustments
  mobileLeft?: string // e.g. "52%" - override for mobile
  mobileTop?: string  // e.g. "48%" - override for mobile
}

interface Product {
  title: string
  image: string
  hotspots: Hotspot[]
}

const products: Record<string, Product> = {
  Hoodie: {
    title: "Hoodie",
    image: "/falcon front.webp",
    hotspots: [
      { 
        left: "50%", 
        top: "46%", 
        detailImage: "/2.webp",
        // Mobile adjustments (optional - only add if needed)
        mobileLeft: "50%", 
        mobileTop: "46%" 
      },
      { 
        left: "58%", 
        top: "50%", 
        detailImage: "/1.webp", 
        isRightSide: true,
        // Mobile adjustments (optional - only add if needed)
        mobileLeft: "65%", 
        mobileTop: "50%" 
      },
      { 
        left: "43%", 
        top: "87%", 
        detailImage: "/3.webp",
        // Mobile adjustments (optional - only add if needed)
        mobileLeft: "35%", 
        mobileTop: "83%" 
      },
      { 
        left: "69%", 
        top: "85%", 
        detailImage: "/4.webp", 
        isRightSide: true,
        // Mobile adjustments (optional - only add if needed)
        mobileLeft: "89%", 
        mobileTop: "81%" 
      },
    ],
  },
  Pants: {
    title: "Pants",
    image: "/denim front.webp",
    hotspots: [
      { 
        left: "55%", 
        top: "21%", 
        detailImage: "/33.webp",
        // Mobile adjustments (optional - only add if needed)
        // mobileLeft: "57%", 
        // mobileTop: "23%" 
      },
      { 
        left: "45%", 
        top: "10%", 
        detailImage: "/22.webp",
        // Mobile adjustments (optional - only add if needed)
        // mobileLeft: "47%", 
        // mobileTop: "12%" 
      },
      { 
        left: "45%", 
        top: "90%", 
        detailImage: "/11.webp",
        // Mobile adjustments (optional - only add if needed)
        mobileLeft: "35%", 
        mobileTop: "85%" 
      },
    ],
  },
}

export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState("Hoodie")
  const [activeHotspot, setActiveHotspot] = useState<number>(0)
  const [isMobile, setIsMobile] = useState(false)

  // Reset active hotspot when product changes
  useEffect(() => {
    setActiveHotspot(0)
  }, [activeProduct])

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      // Treat 768px, ~1024px and ~1440px as mobile-like for hotspot alignment
      const width = window.innerWidth
      const approximately = (value: number, target: number, tolerance: number) => Math.abs(value - target) <= tolerance
      const useAdjusted = width <= 768 || approximately(width, 1024, 32) || approximately(width, 1440, 32)
      setIsMobile(useAdjusted)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Calculate responsive hotspot positioning
  const getHotspotStyle = (hotspot: Hotspot) => {
    // Use mobile-specific positioning if on mobile and available, otherwise use default
    const leftValue = (isMobile && hotspot.mobileLeft) ? hotspot.mobileLeft : hotspot.left
    const topValue = (isMobile && hotspot.mobileTop) ? hotspot.mobileTop : hotspot.top
    
    const leftPercent = parseFloat(leftValue)
    const topPercent = parseFloat(topValue)
    
    return {
      left: `${leftPercent}%`,
      top: `${topPercent}%`,
      transform: "translate(-50%, -50%)",
      position: "absolute" as const,
    }
  }

  // ✅ Popup positioning logic
  const getPopupPosition = (hotspot: Hotspot) => {
    if (hotspot.isRightSide) {
      return "right-2 sm:right-4 md:right-6 top-0"
    }

    return activeProduct === "Hoodie"
      ? "left-8 sm:left-10 md:left-12 top-0"
      : "left-4 sm:left-6 md:left-8 top-4 sm:top-6 md:top-8"
  }

  const getActiveDotIndex = () => {
    return Object.keys(products).indexOf(activeProduct)
  }

  return (
    <section className="flex flex-col min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] bg-white">
      {/* Header */}
      <div className="pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 md:px-8 text-center">
        <div className="flex items-center justify-center mb-2 sm:mb-4">
          <div className="bg-green-500 rounded-full mr-[-8px] sm:mr-[-12px] md:mr-[-16px] w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mt-[-12px] sm:mt-[-16px] md:mt-[-20px] lg:mt-[-30px]"></div>
          <h1
            className="text-black font-semibold"
            style={{
              fontFamily: "Causten, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(28px, 6vw, 65px)",
              lineHeight: "100%",
            }}
          >
            Products
          </h1>
        </div>
        <p
          className="text-gray-600 mt-3 sm:mt-4 md:mt-6 mb-6 sm:mb-8 md:mb-12 tracking-wide"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(14px, 3vw, 32px)",
            lineHeight: "120%",
          }}
        >
          Select the garment type to proceed with inspection
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        {/* Product Image Container */}
        <div className="relative rounded-2xl sm:rounded-3xl px-4 sm:px-8 md:px-12 pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-6 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-20 mb-6 sm:mb-8 w-full max-w-[95%] bg-[rgba(240,252,243,1)] mx-auto">
          <div className="relative mx-auto max-w-full w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] flex items-center justify-center">
            <div 
              className="relative w-full h-full flex items-center justify-center"
              style={{
                aspectRatio: '800/700', // Maintain the original image aspect ratio
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={products[activeProduct].image}
                  alt={`${products[activeProduct].title} Product`}
                  width={800}
                  height={700}
                  className="object-contain w-full h-full"
                  priority
                  quality={90}
                />

                {/* Hotspots */}
                {products[activeProduct].hotspots.map((hotspot, index) => {
                  const popupPosition = getPopupPosition(hotspot)
                  const isActive = activeHotspot === index
                  const hotspotStyle = getHotspotStyle(hotspot)

                  return (
                    <div
                      key={`${activeProduct}-${index}`}
                      className={`${isActive ? "z-20" : "z-10"}`}
                      style={hotspotStyle}
                    >
                      <button
                        className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center transition-transform hover:scale-110"
                        onClick={() => setActiveHotspot(isActive ? -1 : index)}
                      >
                        <Image
                          src="/plus.png"
                          alt="plus-icon"
                          width={40}
                          height={40}
                          className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                        />
                      </button>

                      {/* Popup */}
                      <div
                        className={`absolute ${popupPosition} rounded-md p-[1px] z-50 transition-all duration-300 ease-in-out`}
                        style={{
                          background:
                            "radial-gradient(circle,rgba(37, 167, 75, 1) 50%, rgba(255, 255, 255, 1) 100%)",
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? "scale(1)" : "scale(0.95)",
                          pointerEvents: isActive ? "auto" : "none",
                        }}
                      >
                        <Image
                          src={hotspot.detailImage}
                          alt="Detail"
                          width={270}
                          height={178}
                          className="max-w-[200px] sm:max-w-[240px] md:max-w-[270px] max-h-[120px] sm:max-h-[150px] md:max-h-[178px] rounded-md object-cover"
                          quality={85}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Garment Type Selector - Desktop */}
        <div className="hidden md:flex gap-4 mb-8">
          {Object.keys(products).map((product) => (
            <Button
              key={product}
              variant={activeProduct === product ? "default" : "secondary"}
              className={`px-5 py-3 rounded-md shadow-sm font-medium text-xl lg:text-2xl transition ${
                activeProduct === product
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
              onClick={() => setActiveProduct(product)}
            >
              {products[product].title}
            </Button>
          ))}
        </div>

        {/* Garment Type Selector - Mobile */}
        <div className="flex md:hidden gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div
            className="w-full max-w-[200px] sm:max-w-[240px] h-10 sm:h-12 flex gap-2 mx-auto"
            style={{ borderRadius: "4px" }}
          >
            {Object.keys(products).map((product) => (
              <Button
                key={product}
                variant={activeProduct === product ? "default" : "secondary"}
                className={`flex-1 h-full rounded-md shadow-sm font-medium text-sm sm:text-base transition ${
                  activeProduct === product
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
                onClick={() => setActiveProduct(product)}
              >
                {products[product].title}
              </Button>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-1 mt-2 sm:mt-4 md:mt-8">
          <div className="md:flex md:gap-1 hidden">
            {Object.keys(products).map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === getActiveDotIndex()
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
                onClick={() => {
                  const productKey = Object.keys(products)[index]
                  setActiveProduct(productKey)
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
                  index === getActiveDotIndex()
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
                onClick={() => {
                  const productKey = Object.keys(products)[index]
                  setActiveProduct(productKey)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
