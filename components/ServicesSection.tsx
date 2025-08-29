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
      width={56.62}   // adjust to match Figma if needed
      height={63.15}
      className="text-green-500"
      style={{
        marginTop: "-10px",           // lift the image a little
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
        className="text-green-500"
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
    <section className="w-full px-40 sm:px-6 lg:px-8 py-16">
            <div className="text-center pt-[6px] pb-[4px]">
        <div className="flex items-center justify-center mb-15">
          {/* Green circular logo */}
           <div className="bg-green-500 rounded-full mt-[-40px] mr-[-25px] w-10 h-[40px]"></div>
          <h1 className="text-4xl text-black font-medium"
          style={{
                fontFamily: "Causten, sans-serif",
                fontWeight: 600,
                fontSize: "65px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}>Services</h1>
        </div>
      </div> 
      {/* Services Grid */}
     <div className="flex justify-center">
  <div className="grid grid-cols-5 gap-6 justify-items-center">
    {services.map((service, index) => (
      <div
        key={index}
        className="p-[1px] rounded-[25px] transition-all duration-300 hover:scale-105 cursor-pointer"
        style={{
          background:
            "linear-gradient(108.83deg, #B9B9B9 0%, rgba(102, 102, 102, 0) 98.66%)",
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
          className="p-8 text-left bg-white py-[45px] rounded-[25px]"
          style={{
            width: "330px",
            height: "218px",
          }}
        >
          <div className="flex justify-start mb-6">{service.icon}</div>
          <h3 className="text-gray-900 leading-tight font-sans tracking-normal my-[-20px] font-normal text-2xl">
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
