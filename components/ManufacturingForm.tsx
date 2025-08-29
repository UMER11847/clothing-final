"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Download } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ManufacturingForm() {
  const [formData, setFormData] = useState({
    imageUrl: "",
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    phoneNumber: "",
    website: "",
    businessName: "",
    businessCategory: [] as string[],
    applyingFor: [] as string[],
  })

  const [isDragOver, setIsDragOver] = useState(false)
  const [selectedCountryCode, setSelectedCountryCode] = useState({
    code: "+92",
    flag: "",
    name: "Pakistan",
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const countryCodes = [
    { code: "+1", flag: "🇺🇸", name: "United States" },
    { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+91", flag: "🇮🇳", name: "India" },
    { code: "+92", flag: "", name: "Pakistan" },
    { code: "+86", flag: "🇨🇳", name: "China" },
    { code: "+81", flag: "🇯🇵", name: "Japan" },
    { code: "+49", flag: "🇩🇪", name: "Germany" },
    { code: "+33", flag: "🇫🇷", name: "France" },
    { code: "+39", flag: "🇮🇹", name: "Italy" },
    { code: "+34", flag: "🇪🇸", name: "Spain" },
    { code: "+7", flag: "🇷🇺", name: "Russia" },
    { code: "+55", flag: "🇧🇷", name: "Brazil" },
    { code: "+52", flag: "🇲🇽", name: "Mexico" },
    { code: "+61", flag: "🇦🇺", name: "Australia" },
    { code: "+27", flag: "🇿🇦", name: "South Africa" },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (field: "businessCategory" | "applyingFor", value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: checked ? [...prev[field], value] : prev[field].filter((item) => item !== value),
    }))
  }

  const handleCountryCodeSelect = (country: (typeof countryCodes)[0]) => {
    setSelectedCountryCode(country)
    setIsDropdownOpen(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      const file = files[0]
      if (file.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file)
        handleInputChange("imageUrl", imageUrl)
        console.log("[v0] Image dropped:", file.name)
      }
    }
  }

  // ✅ EmailJS submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const templateParams = {
      imageUrl: formData.imageUrl,
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      country: formData.country,
      phoneNumber: `${selectedCountryCode.code} ${formData.phoneNumber}`,
      website: formData.website,
      businessName: formData.businessName,
      businessCategory: formData.businessCategory.join(", "),
      applyingFor: formData.applyingFor.join(", "),
    }

    emailjs
      .send("service_7k8wrv6", "template_vt0wn58", templateParams, "n9Oj-NpM3MhhR5xLH")
      .then(() => {
        alert("✅ Form submitted successfully!")
        setFormData({
          imageUrl: "",
          email: "",
          firstName: "",
          lastName: "",
          country: "",
          phoneNumber: "",
          website: "",
          businessName: "",
          businessCategory: [],
          applyingFor: [],
        })
      })
      .catch((err) => {
        console.error("EmailJS Error:", err)
        alert("❌ Something went wrong. Please try again.")
      })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const file = files[0]
      if (file.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file)
        handleInputChange("imageUrl", imageUrl)
        console.log("[v0] Image uploaded:", file.name)
      }
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full">
        {/* Header */}
        <div className="pt-8 pb-6 px-8 text-center">
        <div className="flex items-center justify-center mb-2">
          {/* Green circular logo */}
          <div className="bg-green-500 rounded-full mr-[-20px] w-10 h-[40px] mt-[-30px]"></div>
          <h1 className="text-5xl text-black font-semibold"
          style={{
                fontFamily: "Causten, sans-serif",
                fontWeight: 600,
                fontSize: "65px",
                lineHeight: "200%",
                letterSpacing: "0%",
              }}>Apply For Manufacturing</h1>
        </div>
      </div>

        <form onSubmit={handleSubmit} className="px-4 pb-8 space-y-8">
          {/* Image Upload Section */}
          <div
            className={`bg-green-50 text-center transition-colors ${
              isDragOver ? "bg-green-50 border-2 border-green-400 border-dashed" : ""
            }`}
            style={{
              width: "1175px",
              height: "121px",
              maxWidth: "100%",
              borderRadius: "5px",
              opacity: 1,
              backgroundColor: isDragOver ? "#D4F4D4" : "#E8F5E8",
              margin: "0 auto",
              padding: "20px",
            }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex items-center justify-between mb-6">
              <Input
                placeholder="Type or paste your image URL here"
                value={formData.imageUrl}
                onChange={(e) => handleInputChange("imageUrl", e.target.value)}
                className="flex-1 bg-transparent border-none text-gray-600 placeholder:text-gray-600 focus:outline-none focus:ring-0 shadow-none py-0 my-[25px]"
                style={{
                  width: "433px",
                  height: "38px",
                  maxWidth: "100%",
                  opacity: 1,
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "25px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                }}
              />
              <div
                className="flex items-center gap-2"
                style={{
                  width: "266px",
                  height: "38px",
                  maxWidth: "100%",
                  opacity: 1,
                }}
              >
                <span
                  className="text-black"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "25px",
                    lineHeight: "100%",
                    letterSpacing: "0px",
                  }}
                >
                  or upload and image
                </span>
                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Download className="w-4 h-4 text-white" />
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              </div>
            </div>
          </div>

          <div className="text-center py-4">
            <p
              className="text-gray-600"
              style={{
                width: "505px",
                height: "30px",
                maxWidth: "100%",
                opacity: 1,
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0px",
                margin: "0 auto",
              }}
            >
              {isDragOver ? "Drop your image here!" : "or drag and drop an image anywhere on the page"}
            </p>
          </div>

          {/* Form Fields */}
          <div className="max-w-[1730px] mx-auto space-y-6">
            <Input
              placeholder="Your Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full h-[85px] rounded-[5px] border border-gray-200 bg-gray-100 opacity-100  px-[31px] text-gray-400 placeholder:text-gray-400"
              style={{
                width: "1730px",
                maxWidth: "100%",
                fontFamily: "Causten",
                fontWeight: 500,
                fontSize: "36px",
                lineHeight: "120%",
                letterSpacing: "0%",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="h-[85px] rounded-[5px] border border-gray-200 bg-gray-100 opacity-100  px-[31px] text-gray-400 placeholder:text-gray-400"
                style={{
                  width: "985px",
                  maxWidth: "100%",
                  fontFamily: "Causten",
                  fontWeight: 500,
                  fontSize: "36px",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                }}
              />
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="h-[85px] rounded-[5px] border border-gray-200 bg-gray-100 opacity-100 px-[31px]  text-gray-400 placeholder:text-gray-400"
                style={{
                  width: "985px",
                  maxWidth: "100%",
                  fontFamily: "Causten",
                  fontWeight: 500,
                  fontSize: "36px",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                }}
              />
            </div>

            <Input
              placeholder="Country"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              className="w-full h-[85px] rounded-[5px] border border-gray-200 bg-gray-100 opacity-100  px-[31px] text-gray-400 placeholder:text-gray-400"
              style={{
                width: "1730px",
                maxWidth: "100%",
                fontFamily: "Causten",
                fontWeight: 500,
                fontSize: "36px",
                lineHeight: "120%",
                letterSpacing: "0%",
              }}
            />

            <div className="relative mx-4">
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex items-center gap-2 z-20  flex-row">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 hover:bg-gray-200 rounded px-1 py-1 transition-colors"
                >
                  {selectedCountryCode.flag.startsWith("http") ? (
                    <img
                      src={selectedCountryCode.flag || "/placeholder.svg"}
                      alt={`${selectedCountryCode.name} Flag`}
                      className="w-10 h-7 rounded-sm object-cover"
                    />
                  ) : (
                    <span className="text-lg">{selectedCountryCode.flag}</span>
                  )}
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto z-30">
                    {countryCodes.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => handleCountryCodeSelect(country)}
                        className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100 text-left"
                      >
                        {country.flag.startsWith("http") ? (
                          <img
                            src={country.flag || "/placeholder.svg"}
                            alt={`${country.name} Flag`}
                            className="w-8 h-6 rounded-sm object-cover"
                          />
                        ) : (
                          <span className="text-lg">{country.flag}</span>
                        )}
                        <span className="text-sm font-medium">{country.code}</span>
                        <span className="text-sm text-gray-600">{country.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Input
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className="w-full h-[85px] rounded-[5px] border border-gray-200 bg-gray-100 opacity-100 overflow-hidden  text-gray-400 placeholder:text-gray-400 pl-[90px]"
                style={{
                  // width: "1730px",
                  // maxWidth: "100%",
                  fontFamily: "Causten",
                  fontWeight: 500,
                  fontSize: "36px",
                  lineHeight: "120%",
                  
                }}
              />
            </div>

            <Input
              placeholder="Official website or any social media account"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
              className="w-full h-[85px] rounded-[5px] border border-gray-200 bg-gray-100 opacity-100  px-[31px] text-gray-400 placeholder:text-gray-400"
              style={{
                width: "1730px",
                maxWidth: "100%",
                fontFamily: "Causten",
                fontWeight: 500,
                fontSize: "36px",
                lineHeight: "120%",
                letterSpacing: "0%",
              }}
            />
          </div>

          {/* Business Name Section */}
          <div className="max-w-[1730px] mx-auto space-y-6">
            <label className="font-medium text-gray-900 py-0 text-3xl leading-8 mx-[40px] my-0 px-0.5 flex-row">
              Business Name
            </label>
            <Input
              placeholder="Business Name"
              value={formData.businessName}
              onChange={(e) => handleInputChange("businessName", e.target.value)}
              className="w-full h-[85px] rounded-[5px] border border-gray-200 bg-gray-100 opacity-100  px-[31px] text-gray-400 placeholder:text-gray-400"
              style={{
                width: "1730px",
                maxWidth: "100%",
                fontFamily: "Causten",
                fontWeight: 500,
                fontSize: "36px",
                lineHeight: "150%",
                letterSpacing: "0%",
              }}
            />
          </div>

          {/* Business Category Section */}
          <div className="space-y-3 w-auto h-auto mx-[86px]">
            <label className="font-medium text-gray-900 leading-[4.05rem] text-4xl">Your Category of Business</label>
            <div className="space-y-2">
              {["Retailer/Brand", "Wholesale Blanks", "Screen Printer"].map((category) => (
                <div key={category} className="flex items-center space-x-2 h-[49px]">
                  <Checkbox
                    id={category}
                    checked={formData.businessCategory.includes(category)}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange("businessCategory", category, checked as boolean)
                    }
                    className="w-8 h-8 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                  />
                  <label htmlFor={category} className="text-gray-700 text-4xl">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Applying For Section */}
          <div className="space-y-3 mx-[86px]">
            <label className="font-medium text-gray-900 leading-[3.75rem] text-4xl">I am Applying for a:</label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="wholesale-blanks"
                  checked={formData.applyingFor.includes("Wholesale Blanks")}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("applyingFor", "Wholesale Blanks", checked as boolean)
                  }
                  className="w-8 h-8 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                />
                <label htmlFor="wholesale-blanks" className="text-gray-700 text-4xl">
                  Wholesale Blanks
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium border border-gray-200 text-4xl rounded-[5px] mx-[5%]"
            style={{
              width: "1730px",
              height: "85px",
              maxWidth: "100%",
              opacity: 1,
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}
