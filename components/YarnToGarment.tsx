"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function YarnToGarmentPage() {
  const [currentStep, setCurrentStep] = useState(1)

  const stepData = [
    {
      title: "Knitting",
      description: "We use 100% high-quality fabric to ensure soft, durable, and comfortable knitted garments.",
      image: "/Mask group (13).png",
      alt: "Green knitted fabric texture",
    },
    {
      title: "Dyeing and Finishing",
      description:
        "We ensure vibrant colors and smooth finishes using high-quality dyes and advanced processing techniques.",
      image: "/m2.png",
      alt: "Textile dyeing process",
    },
    {
      title: "Stitched Garment",
      description: "We deliver precisely stitched garments with a focus on fit, finish, and long-lasting quality.",
      image: "/m3.png",
      alt: "Fabric cutting process",
    },
    {
      title: "Embroidery ",
      description: "We offer detailed embroidery work that adds elegance, character, and craftsmanship to every piece.",
      image: "/m4.png",
      alt: "Industrial sewing machine",
    },
    {
      title: "Printing Garment",
      description:
        "We provide high-quality garment printing with sharp details, vibrant colors, and lasting durability.",
      image: "/m5.png",
      alt: "Quality control inspection",
    },
    {
      title: "Accessories",
      description: "We offer a wide range of stylish and functional accessories to complement every garment.",
      image: "/m6.png",
      alt: "Finished knitted garment",
    },
  ]

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentData = stepData[currentStep - 1]

  return (
    <div className="h-auto bg-white">
      {/* Header Section */}
      <div className="pt-8 md:pt-8 pb-4 md:pb-6 px-4 md:px-8 text-center">
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
            Yarn To Garment
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
          Transforming raw yarn into high-quality clothing
        </p>
      </div>

      {/* Main Content Section */}
      <div className="px-2 md:px-4 pb-0 flex justify-center items-center mb-20 md:mb-40">
        <div
          className="bg-green-50 rounded-[25px] md:rounded-[50px] mx-auto w-full max-w-[95%] md:max-w-none"
          style={{
            width: "clamp(350px, 95vw, 1800px)",
            minHeight: "clamp(400px, 60vh, 600px)",
            padding: "clamp(20px, 5vw, 50px)",
          }}
        >
         <div
    className="bg-white rounded-[25px] md:rounded-[80px] mx-auto border-transparent border-[6px] md:border-[13px] w-full"
    style={{
      maxWidth: "1200px", // allow control on larger screens
      minHeight: "clamp(300px, 50vh, 300px)",
      padding: "clamp(20px, 5vw, 50px)",
    }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12 lg:gap-[120px]">
              {/* Left Content - Text */}
              <div className="flex-1 text-left md:text-left">
                <h2
                  className="text-2xl md:text-5xl lg:text-6xl text-black mb-4 md:mb-6 leading-tight md:leading-snug font-semibold"
                  style={{
                    fontFamily: "Causten, sans-serif",
                    fontWeight: 540,
                    fontSize: "clamp(28px, 7vw, 65px)",
                    lineHeight: "110%",
                    letterSpacing: "0%",
                  }}
                >
                  {currentData.title}
                </h2>
                <p
                  className="text-black md:text-gray-700 leading-relaxed text-sm md:text-xl lg:text-2xl xl:text-3xl"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 50,
                    fontSize: "clamp(14px, 4vw, 35px)",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                  }}
                >
                  {currentData.description}
                </p>
              </div>

              {/* Right Content - Image */}
              <div className="flex-shrink-0 mt-4 md:mt-0">
                <div className="rounded-[20px] md:rounded-[40px] overflow-hidden h-[200px] w-[250px] md:h-[350px] md:w-[320px] mx-auto">
                  <img
                    src={currentData.image || "/placeholder.svg"}
                    alt={currentData.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center flex-row gap-8 md:gap-20 mt-6 md:mt-10">
            <Button
              variant="outline"
              className="bg-green-100 border-green-200 text-green-700 hover:bg-green-200 
             px-6 md:px-11 py-3 md:py-6 rounded-full text-sm md:text-xl disabled:opacity-50"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Back
            </Button>

            <span className="text-gray-600 font-medium text-lg md:text-xl">{currentStep}/6</span>

            <Button
              className="bg-green-500 hover:bg-green-600 text-white 
             px-6 md:px-11 py-3 md:py-6 rounded-full text-sm md:text-xl disabled:opacity-50"
              onClick={handleNext}
              disabled={currentStep === 6}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
