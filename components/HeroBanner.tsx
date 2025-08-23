import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function HeroBanner() {
  return (
    <div className="h-screen w-full flex flex-col">
      <header className="bg-white py-8 text-center flex-shrink-0">
        <div className="flex justify-center mb-2">
          <Image
            src="/Group 14.png"
            alt="Cloth Thread"
            width={300}
            height={90}
            className="h-18 w-auto"
          />
        </div>
        <p className="font-white leading-none mb-1 whitespace-nowrap text-black italic"
              style={{
                fontFamily: "Causten, sans-serif",
                fontWeight: 490,
                fontSize: "30px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}>Sustainably Stitched, Ethically Made</p>
      </header>

      <div className="relative w-full flex-1 flex">
        <Image
          src="/Mask group (12).png"
          alt="Premium t-shirts on concrete floor"
          width={1920}
          height={1000}
          className="w-full h-full object-contain"
          priority
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 max-w-4xl">
          <div className="text-white mb-6">
            <h1
              className="font-white leading-none mb-1 whitespace-nowrap text-white"
              style={{
                fontFamily: "Causten, sans-serif",
                fontWeight: 900,
                fontSize: "55px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Blanks Coming Soon<span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-1"></span>
            </h1>
            <h1
              className="font-black leading-none mb-3 whitespace-nowrap text-white"
              style={{
                fontFamily: "Causten, sans-serif",
                fontWeight: 900,
                fontSize: "55px",
                lineHeight: "100%",
                letterSpacing: "0%",
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
              className="pl-10 py-3 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
