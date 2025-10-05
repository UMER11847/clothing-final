"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Hotspot {
  left: string
  top: string
  detailImage: string
  isRightSide?: boolean
  mobileLeft?: string
  mobileTop?: string
}

interface Product {
  title: string
  image: string
  hotspots: Hotspot[]
}

const pantsProduct: Product = {
  title: "Pants",
  image: "/denim front.webp",
  hotspots: [
    { 
      left: "55%", 
      top: "21%", 
      detailImage: "/33.webp",
      mobileLeft: "55%", 
      mobileTop: "32%" 
    },
    { 
      left: "45%", 
      top: "10%", 
      detailImage: "/22.webp",
      mobileLeft: "45%", 
      mobileTop: "25%" 
    },
    { 
      left: "45%", 
      top: "90%", 
      detailImage: "/11.webp",
      mobileLeft: "35%", 
      mobileTop: "72%" 
    },
  ],
}

export default function PantsSection() {
  const [activeHotspot, setActiveHotspot] = useState<number>(-1)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth
      const approximately = (value: number, target: number, tolerance: number) =>
        Math.abs(value - target) <= tolerance
      const useAdjusted = width <= 768 || approximately(width, 1024, 32) || approximately(width, 1440, 32)
      setIsMobile(useAdjusted)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Close active hotspot when clicking outside the section
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const sectionEl = sectionRef.current
      if (!sectionEl) return
      const targetNode = event.target as Node | null
      if (targetNode && sectionEl.contains(targetNode)) return
      setActiveHotspot(-1)
    }
    document.addEventListener("click", handleDocumentClick)
    return () => document.removeEventListener("click", handleDocumentClick)
  }, [])

  const getHotspotStyle = (hotspot: Hotspot) => {
    const leftValue = isMobile && hotspot.mobileLeft ? hotspot.mobileLeft : hotspot.left
    const topValue = isMobile && hotspot.mobileTop ? hotspot.mobileTop : hotspot.top

    return {
      left: leftValue,
      top: topValue,
      transform: "translate(-50%, -50%)",
      position: "absolute" as const,
    }
  }

  const getPopupPosition = (hotspot: Hotspot) => {
    return hotspot.isRightSide
      ? "right-2 sm:right-4 md:right-6 top-0"
      : "left-4 sm:left-6 md:left-8 top-4 sm:top-6 md:top-8"
  }

  return (
    <section
      ref={sectionRef}
      className="flex flex-col min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] bg-white"
    >
      {/* Header */}
      <div className="pt-6 md:pt-10 pb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-green-500 rounded-full mr-[-12px] w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mt-[-16px] md:mt-[-20px]"></div>
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

      {/* Product Display */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl bg-[rgba(240,252,243,1)] w-full max-w-[95%] mx-auto flex items-center justify-center">
          <div 
            className="relative w-full h-[75vh] sm:h-[560px] md:h-[680px] lg:h-[760px] xl:h-[860px] flex items-center justify-center"
          >
            <div className="relative w-full h-full" onClick={() => setActiveHotspot(-1)}>
              <Image
                src={pantsProduct.image}
                alt={`${pantsProduct.title} Product`}
                width={800}
                height={700}
                className="object-contain w-full h-full"
                priority
                quality={90}
              />

              {/* Hotspots */}
              {pantsProduct.hotspots.map((hotspot, index) => {
                const popupPosition = getPopupPosition(hotspot)
                const isActive = activeHotspot === index
                const hotspotStyle = getHotspotStyle(hotspot)

                return (
                  <div key={`pants-${index}`} className={`${isActive ? "z-20" : "z-10"}`} style={hotspotStyle}>
                    <button
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center transition-transform hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveHotspot(isActive ? -1 : index)
                      }}
                    >
                      <Image
                        src="/plus.png"
                        alt="plus-icon"
                        width={40}
                        height={40}
                        className="w-full h-full"
                      />
                    </button>

                    {/* Popup */}
                    <div
                      onClick={(e) => e.stopPropagation()}
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
                        className="max-w-[240px] md:max-w-[270px] max-h-[150px] md:max-h-[178px] rounded-md object-cover"
                        quality={85}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Single Pants Button */}
       <div className="flex justify-center mt-8 mb-6">
          <Button
            variant="default"
            className="px-4 py-2 rounded-md shadow-sm font-medium text-base sm:text-lg md:text-xl lg:text-2xl bg-green-500 hover:bg-green-600 text-white min-w-[100px] sm:min-w-[140px]"
          >
            Pants
          </Button>
        </div>
      </div>
    </section>
  )
}
