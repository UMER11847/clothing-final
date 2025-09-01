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
        width={56.62}
        height={63.15}
        className="text-green-500 w-full h-auto max-w-full object-contain"
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
        className="text-green-500 w-full h-auto max-w-full object-contain"
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
        className="text-green-500 w-full h-auto max-w-full object-contain"
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
        className="text-green-500 w-full h-auto max-w-full object-contain"
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
        className="text-green-500 w-full h-auto max-w-full object-contain"
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
        className="text-green-500 w-full h-auto max-w-full object-contain"
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
        className="text-green-500 w-full h-auto max-w-full object-contain"
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
        className="text-green-500 w-full h-auto max-w-full object-contain"
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
        className="text-green-500 w-full h-auto max-w-full object-contain"
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
        className="text-green-500 w-full h-auto max-w-full object-contain"
      />
    ),
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-40 py-8 lg:py-16">
      {/* Mobile Heading */}
      <div className="text-center pt-2 pb-4 lg:hidden">
        <div className="relative inline-block mb-4">
          <div className="absolute -top-3 left-1 -translate-x-1/2 
                        bg-green-500 rounded-full 
                        w-7 h-7 sm:w-9 sm:h-9 -z-10">
          </div>
          <h1
            className="text-black font-medium"
            style={{
              fontFamily: "Causten, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(24px, 6vw, 30px)",
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
          <div className="bg-green-500 rounded-full mr-[-20px] w-10 h-[40px] mt-[-30px]"></div>
          <h1
            className="text-black font-semibold"
            style={{
              fontFamily: "Causten, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(48px, 8vw, 65px)",
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 justify-items-center max-w-full w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-[1px] rounded-[10px] lg:rounded-[25px] transition-all duration-300 hover:scale-105 cursor-pointer 
                w-full max-w-[165px] sm:max-w-[180px] lg:max-w-[220px] xl:max-w-[280px]"
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
                className="p-3 sm:p-4 lg:p-6 xl:p-8 bg-white rounded-[10px] lg:rounded-[25px] w-full h-full flex flex-col justify-between min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] overflow-hidden"
              >
                <div className="flex justify-start mb-2 sm:mb-3 lg:mb-4 xl:mb-6 w-full">
                  <div className={`flex-shrink-0 overflow-hidden ${
                    index === 1 ? 'w-14 h-14 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-18 xl:h-18' : 'w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16'
                  }`}>
                    {service.icon}
                  </div>
                </div>
                <h3
                  className="text-gray-900 leading-tight font-sans tracking-normal font-normal
                           text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl
                           text-left break-words"
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
