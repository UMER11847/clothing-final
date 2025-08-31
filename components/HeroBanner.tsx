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
      <header className="bg-white py-4 text-center md:block hidden">
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

      <div className="relative w-full min-h-[600px] md:min-h-[600px] max-md:min-h-[330px] flex overflow-hidden">
        <Image
          src="/Mask group (12).png"
          alt="Premium t-shirts on concrete floor"
          width={1920}
          height={1000}
          className="w-full h-full object-cover md:block hidden"
          priority
        />

        <Image
          src="/Mask group (12).png"
          alt="Premium t-shirts on concrete floor"
          width={500}
          height={286}
          className="md:hidden absolute object-cover w-full"
          style={{
            height: "286px",
            top: "80px",
            left: "0px",
          }}
          priority
        />

        <div className="md:hidden absolute" style={{ top: "20px", left: "50%", transform: "translateX(-50%)" }}>
          <Image src="/Group 14.png" alt="Cloth Thread" width={82} height={37} className="object-contain" />
        </div>

        <p
          className="md:hidden absolute text-black italic text-center"
          style={{
            fontFamily: "Causten, sans-serif",
            fontWeight: 490,
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0%",
            width: "316px",
            height: "17px",
            top: "63px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Sustainably Stitched, Ethically Made
        </p>

        <div className="absolute right-20 top-1/2 -translate-y-1/2 max-w-4xl md:block hidden">
          <div className="text-white mb-6">
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
              className="pl-10 pr-12 py-6 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 w-full"
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

        <h1
          className="md:hidden absolute text-white"
          style={{
            fontFamily: "Causten, sans-serif",
            fontWeight: 900,
            fontSize: "32px",
            lineHeight: "100%",
            letterSpacing: "-1px",
            width: "250px",
            height: "56px",
            top: "160px",
            left: "150px",
          }}
        >
          Blanks Coming Soon
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-1"></span>
        </h1>

        <h1
          className="md:hidden absolute text-white"
          style={{
            fontFamily: "Causten, sans-serif",
            fontWeight: 900,
            fontSize: "32px",
            lineHeight: "100%",
            letterSpacing: "-1px",
            width: "219px",
            height: "48px",
            top: "230px",
            left: "152px",
          }}
        >
          Early Signup
        </h1>

        <div
          className="md:hidden absolute"
          style={{
            width: "225px",
            height: "25px",
            top: "285px",
            left: "152px",
          }}
        >
          <div className="relative w-full h-full">
            <Mail className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400 z-10" />
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-6 pr-8 h-full bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 w-full text-xs"
              style={{ borderRadius: "1px" }}
            />
            <button
              onClick={sendEmail}
              className="absolute right-1 top-1/2 -translate-y-1/2 
               flex items-center justify-center 
               w-5 h-5 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
            >
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
