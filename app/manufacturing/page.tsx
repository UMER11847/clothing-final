"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import ManufacturingForm from "@/components/ManufacturingForm"

export default function ManufacturingPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      {/* Top Menu (matches page gray background) */}
      <div className="w-full bg-gray-50 flex justify-end items-center py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8">
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-1 sm:gap-2 text-black text-sm sm:text-base md:text-lg font-medium hover:opacity-80 transition-opacity"
          >
            Menu
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          {menuOpen && (
            <div className="absolute top-full right-0 mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-lg py-2 z-20">
              <a href="/#products" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm sm:text-base">
                Products
              </a>
              <a href="/#yarn-to-garments" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm sm:text-base">
                Yarn to Garment
              </a>
              <a href="/#services" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm sm:text-base">
                Services
              </a>
              <a href="/#contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm sm:text-base">
                Contact
              </a>
            </div>
          )}
        </div>
      </div>

      <ManufacturingForm />
    </div>
  )
}
