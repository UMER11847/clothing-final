"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
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

  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")

  const [isDragOver, setIsDragOver] = useState(false)
  const [selectedCountryCode, setSelectedCountryCode] = useState({
    code: "+92",
    flag: "",
    name: "Pakistan",
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

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

  const convertFileToBase64 = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const base64String = e.target?.result as string
      // Do NOT inject base64 into form field; keep it only for preview
      setFormData((prev) => ({ ...prev, imageUrl: "" }))
      setImagePreview(base64String)
      setUploadedFile(file)
    }
    reader.readAsDataURL(file)
  }

  // Clear imageUrl whenever a real file is selected to prevent large variables
  useEffect(() => {
    if (uploadedFile) {
      setFormData((prev) => ({ ...prev, imageUrl: "" }))
      // Also clear the DOM field value if present (HMR can keep stale values)
      if (formRef.current) {
        const imgInput = formRef.current.querySelector('input[name="imageUrl"]') as HTMLInputElement | null
        if (imgInput) imgInput.value = ""
      }
    }
  }, [uploadedFile])

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
        convertFileToBase64(file)
        console.log("[v0] Image dropped:", file.name)

        // Populate the hidden file input so sendForm attaches it
        if (fileInputRef.current) {
          try {
            const dataTransfer = new DataTransfer()
            dataTransfer.items.add(file)
            fileInputRef.current.files = dataTransfer.files
          } catch (err) {
            console.warn("Could not set input files via DataTransfer", err)
          }
        }
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

    const serviceId = "service_7k8wrv6"
    const templateId = "template_vt0wn58"
    const publicKey = "n9Oj-NpM3MhhR5xLH"

    const onSuccess = () => {
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
      setUploadedFile(null)
      setImagePreview("")
    }

    const onError = (err: any) => {
      console.error("EmailJS Error:", err)
      if (err?.status) console.error("Status:", err.status)
      if (err?.text) console.error("Text:", err.text)
      alert("❌ Something went wrong. Please try again.")
    }

    // If a file is uploaded, use sendForm to send it as an attachment
    if (uploadedFile && formRef.current) {
      // Ensure large base64 (if any) is not submitted as a variable
      const imgInput = formRef.current.querySelector('input[name="imageUrl"]') as HTMLInputElement | null
      let originalName = ""
      if (imgInput) {
        if (imgInput.value) imgInput.value = ""
        originalName = imgInput.getAttribute("name") || ""
        if (originalName) imgInput.removeAttribute("name")
      }

      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(onSuccess)
        .catch(onError)
        .finally(() => {
          if (imgInput && originalName) imgInput.setAttribute("name", originalName)
        })
      return
    }

    // Otherwise, send simple params (e.g., when user pasted an image URL)
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(onSuccess).catch(onError)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const file = files[0]
      if (file.type.startsWith("image/")) {
        convertFileToBase64(file)
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
        <div className="pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 md:px-8 text-center">
          <div className="flex items-center justify-center mb-2 sm:mb-4">
            <div className="bg-green-500 rounded-full mr-[-8px] sm:mr-[-12px] md:mr-[-16px] w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mt-[-12px] sm:mt-[-16px] md:mt-[-20px] lg:mt-[-30px]"></div>
            <h1
              className="text-black font-semibold"
              style={{
                fontFamily: "Causten, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(24px, 5vw, 65px)",
                lineHeight: "200%",
                letterSpacing: "0%",
              }}
            >
              Apply For Manufacturing
            </h1>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data" className="px-4 sm:px-6 md:px-8 pb-8 space-y-4 sm:space-y-6 md:space-y-8">
          {/* Image Upload Section */}
          <div
            className={`bg-green-50 text-center transition-colors ${
              isDragOver ? "bg-green-50 border-2 border-green-400 border-dashed" : ""
            }`}
            style={{
              width: "100%",
              maxWidth: "1175px",
              height: "auto",
              minHeight: "80px",
              borderRadius: "5px",
              opacity: 1,
              backgroundColor: isDragOver ? "#D4F4D4" : "#E8F5E8",
              margin: "0 auto",
              padding: "15px 20px",
            }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 sm:mb-6">
              <Input
                placeholder="Type or paste your image URL here"
                value={formData.imageUrl}
                onChange={(e) => handleInputChange("imageUrl", e.target.value)}
                name="imageUrl"
                className="flex-1 bg-transparent border-none text-gray-600 placeholder:text-gray-600 focus:outline-none focus:ring-0 shadow-none py-0 text-sm sm:text-base"
                style={{
                  width: "100%",
                  maxWidth: "433px",
                  height: "auto",
                  minHeight: "38px",
                  opacity: 1,
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 3vw, 25px)",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                }}
              />
              <div
                className="flex items-center gap-2 flex-shrink-0"
                style={{
                  width: "auto",
                  maxWidth: "266px",
                  height: "38px",
                  opacity: 1,
                }}
              >
                <span
                  className="text-black text-sm sm:text-base"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "clamp(12px, 2.5vw, 25px)",
                    lineHeight: "100%",
                    letterSpacing: "0px",
                  }}
                >
                  or upload and image
                </span>
                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" name="my_file" />
              </div>
            </div>
          </div>

          {/* Drag and drop text */}
          <div className="text-center py-2 sm:py-3 md:py-4">
            <p
              className="text-gray-600 text-sm sm:text-base px-4"
              style={{
                width: "100%",
                maxWidth: "505px",
                height: "auto",
                opacity: 1,
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "clamp(12px, 2.5vw, 20px)",
                lineHeight: "100%",
                letterSpacing: "0px",
                margin: "0 auto",
              }}
            >
              {isDragOver ? "Drop your image here!" : "or drag and drop an image anywhere on the page"}
            </p>
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="max-w-[1175px] mx-auto px-4 sm:px-6 md:px-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Image Preview</h3>
                <div className="flex items-center gap-4">
                  <img
                    src={imagePreview}
                    alt="Selected image preview"
                    className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">{uploadedFile?.name || "Selected image"}</p>
                    <p className="text-xs text-gray-500">{uploadedFile ? (uploadedFile.size / 1024 / 1024).toFixed(2) : "0"} MB</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview("")
                      setUploadedFile(null)
                      setFormData((prev) => ({ ...prev, imageUrl: "" }))
                      if (fileInputRef.current) fileInputRef.current.value = ""
                    }}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Form Fields */}
          <div className="max-w-[1730px] mx-auto space-y-4 sm:space-y-6">
            <Input
              placeholder="Your Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              name="email"
              className="w-full h-[50px] sm:h-[60px] md:h-[70px] lg:h-[85px] rounded-[5px] border border-gray-200 bg-gray-100 opacity-100 px-4 sm:px-6 md:px-[31px] text-gray-400 placeholder:text-gray-400"
              style={{
                width: "100%",
                fontFamily: "Causten",
                fontWeight: 500,
                fontSize: "clamp(16px, 3vw, 36px)",
                lineHeight: "120%",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                name="firstName"
                className="h-[50px] sm:h-[60px] md:h-[70px] lg:h-[85px] rounded-[5px] border border-gray-200 bg-gray-100 opacity-100 px-4 sm:px-6 md:px-[31px] text-gray-400 placeholder:text-gray-400"
                style={{
                  width: "100%",
                  fontFamily: "Causten",
                  fontWeight: 500,
                  fontSize: "clamp(16px, 3vw, 36px)",
                  lineHeight: "120%",
                }}
              />
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                name="lastName"
                className="h-[50px] sm:h-[60px] md:h-[70px] lg:h-[85px] rounded-[5px] border border-gray-200 bg-gray-100 opacity-100 px-4 sm:px-6 md:px-[31px] text-gray-400 placeholder:text-gray-400"
                style={{
                  width: "100%",
                  fontFamily: "Causten",
                  fontWeight: 500,
                  fontSize: "clamp(16px, 3vw, 36px)",
                  lineHeight: "120%",
                }}
              />
            </div>

            <Input
              placeholder="Country"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              name="country"
              className="w-full h-[50px] sm:h-[60px] md:h-[70px] lg:h-[85px] rounded-[5px] border border-gray-200 bg-gray-100 opacity-100 px-4 sm:px-6 md:px-[31px] text-gray-400 placeholder:text-gray-400"
              style={{
                width: "100%",
                fontFamily: "Causten",
                fontWeight: 500,
                fontSize: "clamp(16px, 3vw, 36px)",
                lineHeight: "120%",
              }}
            />

            {/* Phone Number Input */}
            <div className="relative">
              <div className="absolute left-3 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 flex items-center gap-2 z-20 flex-row">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 sm:gap-2 hover:bg-gray-200 rounded px-1 py-1 transition-colors"
                >
                  {selectedCountryCode.flag.startsWith("http") ? (
                    <img
                      src={selectedCountryCode.flag || "/placeholder.svg"}
                      alt={`${selectedCountryCode.name} Flag`}
                      className="w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-6 lg:w-10 lg:h-7 rounded-sm object-cover"
                    />
                  ) : (
                    <span className="text-sm sm:text-base md:text-lg">{selectedCountryCode.flag}</span>
                  )}
                  <svg
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 sm:w-56 md:w-64 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto z-30">
                    {countryCodes.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => handleCountryCodeSelect(country)}
                        className="w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 hover:bg-gray-100 text-left"
                      >
                        {country.flag.startsWith("http") ? (
                          <img
                            src={country.flag || "/placeholder.svg"}
                            alt={`${country.name} Flag`}
                            className="w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-6 rounded-sm object-cover"
                          />
                        ) : (
                          <span className="text-sm sm:text-base md:text-lg">{country.flag}</span>
                        )}
                        <span className="text-xs sm:text-sm font-medium">{country.code}</span>
                        <span className="text-xs sm:text-sm text-gray-600">{country.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Input
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                name="phoneNumberRaw"
                className="w-full h-[50px] sm:h-[60px] md:h-[70px] lg:h-[85px] rounded-[5px] border border-gray-200 bg-gray-100 opacity-100 overflow-hidden text-gray-400 placeholder:text-gray-400 pl-[60px] sm:pl-[70px] md:pl-[80px] lg:pl-[90px]"
                style={{
                  fontFamily: "Causten",
                  fontWeight: 500,
                  fontSize: "clamp(16px, 3vw, 36px)",
                  lineHeight: "120%",
                }}
              />
            </div>

            <Input
              placeholder="Official website or any social media account"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
              name="website"
              className="w-full h-[50px] sm:h-[60px] md:h-[70px] lg:h-[85px] rounded-[5px] border border-gray-200 bg-gray-100 opacity-100 px-4 sm:px-6 md:px-[31px] text-gray-400 placeholder:text-gray-400"
              style={{
                width: "100%",
                fontFamily: "Causten",
                fontWeight: 500,
                fontSize: "clamp(16px, 3vw, 36px)",
                lineHeight: "120%",
                letterSpacing: "0%",
              }}
            />
          </div>

          {/* Business Name Section */}
          <div className="max-w-[1730px] mx-auto space-y-4 sm:space-y-6">
            <label className="font-medium text-gray-900 py-0 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-8 mx-4 sm:mx-6 md:mx-[40px] my-0 px-0.5 flex-row block">
              Business Name
            </label>
            <Input
              placeholder="Business Name"
              value={formData.businessName}
              onChange={(e) => handleInputChange("businessName", e.target.value)}
              name="businessName"
              className="w-full h-[50px] sm:h-[60px] md:h-[70px] lg:h-[85px] rounded-[5px] border border-gray-200 bg-gray-100 opacity-100 px-4 sm:px-6 md:px-[31px] text-gray-400 placeholder:text-gray-400"
              style={{
                width: "100%",
                fontFamily: "Causten",
                fontWeight: 500,
                fontSize: "clamp(16px, 3vw, 36px)",
                lineHeight: "150%",
                letterSpacing: "0%",
              }}
            />
          </div>

          {/* Business Category Section */}
          <div className="space-y-3 w-auto h-auto mx-4 sm:mx-6 md:mx-[86px]">
            <label className="font-medium text-gray-900 leading-[2rem] sm:leading-[2.5rem] md:leading-[3rem] lg:leading-[4.05rem] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl block">
              Your Category of Business
            </label>
            <div className="space-y-2 sm:space-y-3">
              {["Retailer/Brand", "Wholesale Blanks", "Screen Printer"].map((category) => (
                <div key={category} className="flex items-center space-x-2 h-[30px] sm:h-[35px] md:h-[40px] lg:h-[49px]">
                  <Checkbox
                    id={category}
                    checked={formData.businessCategory.includes(category)}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange("businessCategory", category, checked as boolean)
                    }
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                  />
                  <label htmlFor={category} className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Applying For Section */}
          <div className="space-y-3 mx-4 sm:mx-6 md:mx-[86px]">
            <label className="font-medium text-gray-900 leading-[2rem] sm:leading-[2.5rem] md:leading-[3rem] lg:leading-[3.75rem] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl block">
              I am Applying for a:
            </label>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="wholesale-blanks"
                  checked={formData.applyingFor.includes("Wholesale Blanks")}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("applyingFor", "Wholesale Blanks", checked as boolean)
                  }
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                />
                <label htmlFor="wholesale-blanks" className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl">
                Manufacturing 
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium border border-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-[5px] mx-0 md:mx-[5%] w-full md:w-auto"
            style={{
              width: "100%",
              maxWidth: "1730px",
              height: "50px",
              minHeight: "50px",
              opacity: 1,
            }}
          >
            Submit
          </Button>

          {/* Hidden fields for values not directly on inputs */}
          <input type="hidden" name="businessCategory" value={formData.businessCategory.join(", ")} />
          <input type="hidden" name="applyingFor" value={formData.applyingFor.join(", ")} />
          <input type="hidden" name="selectedDialCode" value={selectedCountryCode.code} />
          <input type="hidden" name="phoneNumber" value={`${selectedCountryCode.code} ${formData.phoneNumber}`} />
        </form>
      </div>
    </div>
  )
}
