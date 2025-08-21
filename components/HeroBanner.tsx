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
            width={200}
            height={60}
            className="h-12 w-auto"
          />
        </div>
        <p className="text-gray-700 italic text-lg">Sustainably Stitched, Ethically Made</p>
      </header>

      <div className="relative w-full flex-1 flex">
        <Image
          src="/Mask group (12).png"
          alt="Premium t-shirts on concrete floor"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

        <div className="absolute right-40 top-1/2 -translate-y-1/2 max-w-sm">
          <div className="text-white mb-6">
            <h1 className=" text-5xl font-extrabold md:text-4xl font-black leading-tight mb-1 whitespace-nowrap">
              Blanks Coming Soon<span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-1"></span>
            </h1>
            <h1 className="text-3xl md:text-4xl font-black leading-tight mb-3 whitespace-nowrap">Early Signup</h1>
          </div>

          <div className="relative">
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
