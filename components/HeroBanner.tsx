"use client"

import { useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Mail, ArrowRight } from "lucide-react"
import emailjs from "emailjs-com"

export default function HeroBanner() {
  const [email, setEmail] = useState("")

  const sendEmail = () => {
    if (!email) {
      alert("Please enter an email address")
      return
    }

    emailjs
      .send(
        "service_7k8wrv6",
        "template_s87l1pp",
        {
          user_email: email,
          from_name: "Website Signup",
          from_email: email,
          subject: "New Early Signup",
          message: "A user subscribed with email: " + email,
        },
        "n9Oj-NpM3MhhR5xLH",
      )
      .then(() => {
        alert("Email sent successfully!")
        setEmail("")
      })
      .catch((err) => {
        console.error("Failed to send email:", err)
        alert("Something went wrong. Try again.")
      })
  }

  return (
    <div className="w-full flex flex-col">
             {/* Desktop Header */}
       <header className="bg-white py-4 text-center hidden lg:block">
        <div className="flex justify-center">
          <Image src="/Group 14.png" alt="Cloth Thread" width={300} height={90} className="h-18 w-auto" />
        </div>
        <p
          className="mt-4 leading-none whitespace-nowrap text-black italic"
          style={{
            fontFamily: "Causten, sans-serif",
            fontWeight: 490,
            fontSize: "30px",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Sustainably Stitched, Ethically Made
        </p>
      </header>

             {/* Mobile Layout - Top Section (White Background) */}
       <div className="md:hidden bg-white py-6 px-4 text-center">
         <div className="flex justify-center mb-4">
           <Image src="/Group 14.png" alt="Cloth Thread" width={120} height={54} className="object-contain" />
         </div>
         <p
           className="text-black italic"
           style={{
             fontFamily: "Causten, sans-serif",
             fontWeight: 490,
             fontSize: "16px",
             lineHeight: "100%",
             letterSpacing: "0%",
           }}
         >
           Sustainably Stitched, Ethically Made
         </p>
       </div>

       {/* Mobile Layout - Bottom Section (Image Background) */}
       <div className="md:hidden relative w-full h-[400px]">
        {/* Background Image */}
        <Image
          src="/Mask group (12).png"
          alt="Premium t-shirts on concrete floor"
          width={500}
          height={400}
          className="w-full h-full object-cover"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-end px-4 z-10">
          <div className="mb-3" style={{ textAlign: 'left', maxWidth: '270px', marginRight: '35px' }}>
                         <h1
               className="text-white mb-1"
               style={{
                 fontFamily: "Causten, sans-serif",
                 fontWeight: 900,
                 fontSize: "37px",
                 lineHeight: "77%",
                 letterSpacing: "0%",
                 width: "250px",
                 transform: "rotate(0deg)",
                 whiteSpace: "nowrap",
               }}
             >
               Blanks Coming
             </h1>
             <h1
               className="text-white mb-1"
               style={{
                 fontFamily: "Causten, sans-serif",
                 fontWeight: 900,
                 fontSize: "37px",
                 lineHeight: "77%",
                 letterSpacing: "0%",
                 width: "250px",
                 transform: "rotate(0deg)",
               }}
             >
               Soon
               <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-1"></span>
             </h1>
             <h2
               className="text-white mb-0"
               style={{
                 fontFamily: "Causten, sans-serif",
                 fontWeight: 600,
                 fontSize: "40px",
                 lineHeight: "100%",
                 letterSpacing: "0%",
                 width: "240px",
                 height: "48px",
                 textAlign: "center",
                 transform: "rotate(0deg)",
                 whiteSpace: "nowrap",
               }}
             >
               Early Signup
             </h2>
          </div>

          {/* Email Input Field */}
          <div className="relative w-full max-w-[240px]" style={{ marginRight: '39px' }}>
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400 z-10" />
                         <Input
               type="email"
               placeholder="Enter your email address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="pl-8 pr-8 h-9 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 w-full text-xs"
               style={{ borderRadius: "6px" }}
             />
            <button
              onClick={sendEmail}
              className="absolute right-2 top-1/2 -translate-y-1/2 
               flex items-center justify-center 
               w-5 h-5 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
            >
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
                 </div>
       </div>

               {/* Tablet Layout - Medium Screens (768px - 1023px) */}
        <div className="hidden md:block lg:hidden">
          {/* Tablet Header */}
          <div className="bg-white py-6 px-6 text-center">
            <div className="flex justify-center mb-4">
              <Image src="/Group 14.png" alt="Cloth Thread" width={180} height={81} className="object-contain" />
            </div>
            <p
              className="text-black italic"
              style={{
                fontFamily: "Causten, sans-serif",
                fontWeight: 490,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Sustainably Stitched, Ethically Made
            </p>
          </div>

          {/* Tablet Banner Section */}
          <div className="relative w-full h-[500px]">
         {/* Background Image */}
         <Image
           src="/Mask group (12).png"
           alt="Premium t-shirts on concrete floor"
           width={1024}
           height={500}
           className="w-full h-full object-cover"
           priority
         />

         {/* Overlay Content */}
         <div className="absolute inset-0 flex flex-col justify-center items-end px-8 z-10">
           <div className="mb-6" style={{ textAlign: 'left', maxWidth: '320px', marginRight: '24px' }}>
             <h1
               className="text-white mb-2"
               style={{
                 fontFamily: "Causten, sans-serif",
                 fontWeight: 900,
                 fontSize: "42px",
                 lineHeight: "100%",
                 letterSpacing: "-2px",
               }}
             >
               Blanks Coming
             </h1>
             <h1
               className="text-white mb-2"
               style={{
                 fontFamily: "Causten, sans-serif",
                 fontWeight: 900,
                 fontSize: "42px",
                 lineHeight: "100%",
                 letterSpacing: "-2px",
               }}
             >
               Soon
               <span className="inline-block w-3 h-3 bg-green-500 rounded-full ml-2"></span>
             </h1>
             <h2
               className="text-white mb-4"
               style={{
                 fontFamily: "Causten, sans-serif",
                 fontWeight: 900,
                 fontSize: "28px",
                 lineHeight: "100%",
                 letterSpacing: "-1px",
               }}
             >
               Early Signup
             </h2>
           </div>

           {/* Email Input Field */}
           <div className="relative w-full max-w-[320px]" style={{ marginLeft: '0' }}>
             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
             <Input
               type="email"
               placeholder="Enter your email address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="pl-12 pr-12 h-14 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 w-full text-base"
               style={{ borderRadius: "8px" }}
             />
             <button
               onClick={sendEmail}
               className="absolute right-3 top-1/2 -translate-y-1/2 
                flex items-center justify-center 
                w-8 h-8 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
             >
               <ArrowRight className="h-5 w-5" />
             </button>
                       </div>
          </div>
        </div>
        </div>

        {/* Desktop Main Banner Section */}
       <div className="relative w-full h-[600px] flex overflow-hidden hidden lg:block">
        {/* Desktop Background Image */}
        <Image
          src="/Mask group (12).png"
          alt="Premium t-shirts on concrete floor"
          width={1920}
          height={1000}
          className="w-full h-full object-cover"
          priority
        />

                 {/* Desktop Content */}
         <div className="absolute right-8 sm:right-12 md:right-20 top-1/2 -translate-y-1/2 max-w-4xl">
           <div className="text-white mb-8">
            <h1
              className="leading-none whitespace-nowrap text-white"
              style={{
                fontFamily: "Causten, sans-serif",
                fontWeight: 900,
                fontSize: "65px",
                lineHeight: "110%",
                letterSpacing: "-3px",
              }}
            >
              Blanks Coming Soon
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-1"></span>
            </h1>
            <h1
              className="leading-none whitespace-nowrap text-white"
              style={{
                fontFamily: "Causten, sans-serif",
                fontWeight: 900,
                fontSize: "65px",
                lineHeight: "110%",
                letterSpacing: "-3px",
              }}
            >
              Early Signup
            </h1>
          </div>

                     <div className="relative max-w-sm">
             <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
             <Input
               type="email"
               placeholder="Enter your email address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="pl-10 pr-12 py-4 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 w-full"
             />
            <button
              onClick={sendEmail}
              className="absolute right-2 top-1/2 -translate-y-1/2 
               flex items-center justify-center 
               w-8 h-8 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
