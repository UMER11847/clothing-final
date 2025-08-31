"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    title: "Design Development",
    icon: (
      <Image
        src="/Group 47.png"
        alt="Design Development"
        width={56.62} // adjust to match Figma if needed
        height={63.15}
        className="text-green-500"
        style={{
          marginTop: "-10px", // lift the image a little
        }}
      />
    ),
  },

  {
    title: "Sampling and Prototype",
    icon: (
      <Image
        src="/sewing 1.png"
        alt="Sampling and Prototype"
        width={82}
        height={82}
        className="text-green-500"
        style={{ marginTop: "-15px" }}
      />
    ),
  },
  {
    title: "Manufacturing",
    icon: (
      <Image
        src="/leather.png"
        alt="Manufacturing"
        width={65}
        height={65}
        className="text-green-500"
        style={{}} // Added style prop for custom styling
      />
    ),
  },
  {
    title: "Fabric Development and Production",
    icon: (
      <Image
        src="/fabric-pattern 1.png"
        alt="Fabric Development and Production"
        width={68}
        height={68}
        className="text-green-500
                 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] 
                 lg:w-[68px] lg:h-[68px]"
        style={{ marginTop: "-15px" }}
      />
    ),
  },
  {
    title: "Logistic Support",
    icon: (
      <Image
        src="/Vector (5).png"
        alt="Logistic Support"
        width={84}
        height={64}
        className="text-green-500"
        style={{}} // Added style prop for custom styling
      />
    ),
  },
  {
    title: "Material Sourcing",
    icon: (
      <Image
        src="/source-document 2.png"
        alt="Material Sourcing"
        width={68}
        height={68}
        className="text-green-500"
        style={{}} // Added style prop for custom styling
      />
    ),
  },
  {
    title: "Trim Accessories",
    icon: (
      <Image
        src="/cutting.png"
        alt="Trim Accessories"
        width={68}
        height={68}
        className="text-green-500"
        style={{}} // Added style prop for custom styling
      />
    ),
  },
  {
    title: "Packaging",
    icon: (
      <Image
        src="/Group 52.png"
        alt="Packaging"
        width={66.78}
        height={60}
        className="text-green-500"
        style={{}} // Added style prop for custom styling
      />
    ),
  },
  {
    title: "Tech Packs",
    icon: (
      <Image
        src="/line 1.png"
        alt="Tech Packs"
        width={80}
        height={80}
        className="text-green-500"
        style={{}} // Added style prop for custom styling
      />
    ),
  },
  {
    title: "Consultation",
    icon: (
      <Image
        src="/Vector (6).png"
        alt="Consultation"
        width={65}
        height={65}
        className="text-green-500"
        style={{}} // Added style prop for custom styling
      />
    ),
  },
]

export default function ServicesSection() {
  return (
   <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-40 py-8 lg:py-16">
{/* Mobile Heading */}
<div className="text-center pt-2 pb-2 lg:hidden">
  <div className="relative inline-block mb-4">
    {/* Green circle positioned over heading */}
    <div className="absolute -top-3 left-1 -translate-x-1/2 
                    bg-green-500 rounded-full 
                    w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] -z-10">
    </div>

    <h1
      className="text-4xl text-black font-medium"
      style={{
        fontFamily: "Causten, sans-serif",
        fontWeight: 600,
        fontSize: "30px",
        lineHeight: "100%",
      }}
    >
      Services
    </h1>
  </div>
</div>


  {/* Desktop Heading */}
  <div className="hidden lg:block pt-8 pb-6 px-8 text-center">
    <div className="flex items-center justify-center mb-2">
      {/* Green circular logo */}
      <div className="bg-green-500 rounded-full mr-[-20px] w-10 h-[40px] mt-[-30px]"></div>
      <h1
        className="text-5xl text-black font-semibold"
        style={{
          fontFamily: "Causten, sans-serif",
          fontWeight: 600,
          fontSize: "65px",
          lineHeight: "100%",
          letterSpacing: "0%",
        }}
      >
        Services
      </h1>
    </div>
  </div>

      {/* Services Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-6 justify-items-center max-w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-[1px] rounded-[10px] lg:rounded-[25px] transition-all duration-300 hover:scale-105 cursor-pointer 
            w-[165px] h-[135px] lg:w-full lg:h-auto lg:max-w-[330px]"
              style={{
                background: "linear-gradient(108.83deg, #B9B9B9 0%, rgba(102, 102, 102, 0) 98.66%)",
                boxShadow: "4px 4px 11.3px 0px #00000040",
                transition: "all 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "8px 8px 20px 0px #00000060"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "4px 4px 11.3px 0px #00000040"
              }}
            >
             <Card
  className="p-2 lg:p-4 xl:p-8 bg-white rounded-[10px] lg:rounded-[25px] w-full h-full flex flex-col justify-between"
  style={{ minHeight: "115px" }}
>
  <div className="flex justify-start mb-0 lg:mb-4 xl:mb-6">
    <div className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] lg:w-auto lg:h-auto">
      {service.icon}
    </div>
  </div>
  <h3
    className="text-gray-900 leading-tight font-sans tracking-normal font-normal
               text-sm lg:text-lg xl:text-2xl
               text-left
               -mt-1 lg:my-[-15px] xl:my-[-20px]"
  >
    {service.title}
  </h3>
</Card>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
