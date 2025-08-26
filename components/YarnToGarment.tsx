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
      description: "We ensure vibrant colors and smooth finishes using high-quality dyes and advanced processing techniques.",
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
      description: "We provide high-quality garment printing with sharp details, vibrant colors, and lasting durability.",
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
      <div className="pt-8 pb-6 px-8 text-center">
        <div className="flex items-center justify-center mb-2">
          {/* Green circular logo */}
          <div className="bg-green-500 rounded-full mr-[-16px] w-8 h-[34px]"></div>
          <h1 className="text-5xl text-black font-semibold">Yarn To Garment</h1>
        </div>
        <p className="text-xl text-gray-600 mt-2 mb-4 tracking-widest">
          Transforming raw yarn into high-quality clothing
        </p>
      </div>

      {/* Main Content Section */}
       <div className="px-4 pb-0 flex justify-center items-center mb-20"> {/* mb to add white space after the section */}
        <div className="bg-green-50 rounded-[50px] pb-8 pt-16 px-4 sm:px-8 lg:px-16 max-w-screen-xl w-full">
          <div className="bg-white rounded-[60px] shadow-sm p-8 sm:p-12 lg:px-20 mx-auto max-w-5xl mb-8 border-transparent border-[13px]">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[158px]">
              {/* Left Content - Text */}
              <div className="flex-1 text-left">
                <h2 className="text-4xl sm:text-5xl text-black mb-4 leading-tight font-normal">{currentData.title}</h2>
                <p className="text-gray-700 leading-relaxed text-lg sm:text-2xl">{currentData.description}</p>
              </div>

              {/* Right Content - Image */}
              <div className="flex-shrink-0">
                <div className="rounded-[40px] overflow-hidden h-64 w-[238px]">
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
          <div className="flex items-center justify-center flex-row gap-6">
            <Button
              variant="outline"
              className="bg-green-100 border-green-200 text-green-700 hover:bg-green-200 px-6 py-2 rounded-full text-base sm:text-lg disabled:opacity-50"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Back
            </Button>

            <span className="text-gray-600 font-medium text-base sm:text-lg">{currentStep}/6</span>

            <Button
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-base sm:text-lg disabled:opacity-50"
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
