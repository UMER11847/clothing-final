"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

// ✅ Product data (images + hotspots)
const products = {
  "T-Shirt": {
    title: "T-Shirt",
    image: "/images/tshirt.png",
    hotspots: [
      { left: "25%", top: "20%", detailImage: "/images/tshirt-detail1.png" },
      { left: "60%", top: "30%", detailImage: "/images/tshirt-detail2.png" },
    ],
  },
  "Hoodie": {
    title: "Hoodie",
    image: "/786.png",
    hotspots: [
     { left: "680px", top: "266px", detailImage: "/2.png" },
        { left: "630px", top: "355px", detailImage: "/1.png" },
        { left: "430px", top: "470px", detailImage: "/4.png" },
        { left: "750px", top: "440px", detailImage: "/3.png" },
    ],
  },
  "Pants": {
    title: "Pants",
    image: "/images/pants.png",
    hotspots: [
      { left: "40%", top: "45%", detailImage: "/images/pants-detail1.png" },
      { left: "55%", top: "60%", detailImage: "/images/pants-detail2.png" },
    ],
  },
}

export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState("T-Shirt")
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)

  const getActiveDotIndex = () => {
    return Object.keys(products).indexOf(activeProduct)
  }

  return (
    <section className="flex flex-col min-h-[600px] bg-white">
      {/* Header */}
      <div className="text-center pt-[6px] pb-[4px]">
        <div className="flex items-center justify-center mb-4">
          {/* Green circular logo */}
           <div className="bg-green-500 rounded-full mt-[-28px] mr-[-19px] w-8 h-[34px]"></div>
          <h1 className="text-5xl text-black font-semibold">Products</h1>
        </div>
        <p className="text-xl text-gray-600 mt-[-12px] mb-[13px] tracking-widest">
          Select the garment type to proceed with inspection
        </p>
      </div> 

    

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Product Image Container */}
        <div className="relative rounded-3xl p-12 mb-8 w-full mx-4 bg-[rgba(240,252,243,1)]">
          <div className="relative w-full flex justify-center items-center min-h-[500px]">
            <Image
              src={products[activeProduct].image || "/placeholder.svg"}
              alt={`${products[activeProduct].title} Product`}
              width={600}
              height={500}
              className="object-contain max-h-[600px] mx-auto"
            />

            {/* Hotspots */}
            {products[activeProduct].hotspots.map((hotspot, index) => (
              <div
                key={index}
                className={`absolute ${activeHotspot !== null && activeHotspot !== index ? "z-0" : "z-10"}`}
                style={{
                  left: hotspot.left,
                  top: hotspot.top,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <button
                  className="w-6 h-6  flex items-center justify-center"
                  onClick={() =>
                    setActiveHotspot(activeHotspot === index ? null : index)
                  }
                >
                    <img 
                    src="/plus.png"
                    alt="/plus-icon"
                    width={34}
                    height={34}
                    />
                  {/* <Plus size={16} className="text-green-500" /> */}
                </button>

                {/* Popup for Hoodie only */}
                {activeProduct === "Hoodie" &&
                  activeHotspot === index &&
                  hotspot.detailImage && (
                    <div className="absolute left-10 top-0 rounded-md p-[1px] z-50"
      style={{
        background: "radial-gradient(circle,rgba(37, 167, 75, 1) 50%, rgba(255, 255, 255, 1) 100%)",
      }}>
                      <img
                        src={hotspot.detailImage}
                        alt="Detail"
                        className="max-w-[270px] max-h-[178px] rounded-md "
                      />
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>

        {/* Garment Type Selector */}
        <div className="flex gap-4 mb-8">
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




        {/* Pagination Dots */}
        <div className="flex gap-1 mt-9">
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
                setActiveHotspot(null)
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
