"use client"
import { useState } from "react"
import emailjs from "emailjs-com"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        "service_7k8wrv6",
        "template_s87l1pp",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "n9Oj-NpM3MhhR5xLH",
      )
      .then(
        () => {
          setLoading(false)
          setSuccess("Message sent successfully! ✅")
          setFormData({ name: "", email: "", subject: "", message: "" })
        },
        (error) => {
          console.error("FAILED...", error)
          setLoading(false)
          setSuccess("Failed to send message ❌. Try again!")
        },
      )
  }

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-md mx-auto md:max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6 lg:flex-1">
            <div>
              {/* Mobile Heading */}
              <div className="block lg:hidden text-center pt-2 pb-4 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <div className="relative flex items-center justify-center">
                    <h1
                      className="text-black z-10 font-medium"
                      style={{
                        fontFamily: "Causten, sans-serif",
                        fontWeight: 600,
                        fontSize: "clamp(24px, 6vw, 32px)",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      Contact Us
                    </h1>
                    <span className="absolute left-[-8px] sm:left-[-10px] top-[-8px] sm:top-[-10px] z-0">
                      <div className="bg-green-500 rounded-full w-6 h-6 sm:w-7 sm:h-7"></div>
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop Heading */}
              <h1 className="hidden lg:block font-bold text-gray-900 text-2xl md:text-5xl mb-4 md:mb-[29px] text-left">
                Contact Us
              </h1>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-left">
                We'd love to hear from you. Whether you have a question about our services, need support, our team is
                ready to help. Please reach out through the contact details below or send us a message we'll respond as
                soon as possible
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-[59px]">
              <Card className="p-3 sm:p-4 md:p-6 border border-gray-200 shadow-sm md:shadow-[4px_4px_8px_rgba(0,0,0,0.2)] rounded-[5px] md:rounded-lg">
                <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2035-r9hhc2RLXgDTaYohDVNbrzifeqRNZf.png"
                      alt="Office"
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                    />
                  </div>
                                     <div className="flex-1 min-w-0">
                     <h3 className="text-gray-900 font-bold text-xs sm:text-sm md:text-lg md:mb-1">Office</h3>
                     <p className="text-gray-600 text-xs sm:text-sm md:text-base break-words overflow-hidden">Korangi brocs chorangi</p>
                   </div>
                </div>
              </Card>

              <Card className="p-3 sm:p-4 md:p-6 border border-gray-200 shadow-sm md:shadow-[4px_4px_8px_rgba(0,0,0,0.2)] rounded-[5px] md:rounded-lg">
                <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20%284%29-EhI2fggEpkyYRRw72lB7DV7zIBAQ5k.png"
                      alt="Phone"
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                    />
                  </div>
                                     <div className="flex-1 min-w-0">
                     <h3 className="text-gray-900 font-bold text-xs sm:text-sm md:text-lg md:mb-1">Phone</h3>
                     <p className="text-gray-600 text-xs sm:text-sm md:text-base break-words overflow-hidden">+923344700033</p>
                   </div>
                </div>
              </Card>

              <Card className="p-3 sm:p-4 md:p-6 border border-gray-200 shadow-sm md:shadow-[4px_4px_8px_rgba(0,0,0,0.2)] rounded-[5px] md:rounded-lg">
                <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20%283%29-hM5VY3t8IIo4BvAicpq9sZb7LditPt.png"
                      alt="Work Hours"
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                    />
                  </div>
                                     <div className="flex-1 min-w-0">
                     <h3 className="text-gray-900 font-bold text-xs sm:text-sm md:text-lg md:mb-1">Work Hours</h3>
                     <p className="text-gray-600 text-xs sm:text-sm md:text-base break-words overflow-hidden">9:00 AM - 6:00 PM</p>
                   </div>
                </div>
              </Card>

              <Card className="p-3 sm:p-4 md:p-6 border border-gray-200 shadow-sm md:shadow-[4px_4px_8px_rgba(0,0,0,0.2)] rounded-[5px] md:rounded-lg">
                <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20%282%29-cSihBSCf5tGiePvN6HtN3lPvcgTqnc.png"
                      alt="Email"
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                    />
                  </div>
                                     <div className="flex-1 min-w-0">
                     <h3 className="text-gray-900 font-bold text-xs sm:text-sm md:text-lg md:mb-1">Email</h3>
                     <p className="text-gray-600 text-xs sm:text-sm md:text-base break-words overflow-hidden">smshayan954@gmail.com</p>
                   </div>
                </div>
              </Card>
            </div>

            {/* Desktop Social Media */}
            <div className="hidden lg:block">
              <div className="w-full h-px bg-green-200 my-8"></div>
              <div className="text-left md:px-0 md:mx-[-93px] md:mt-8">
                <h3 className="text-gray-900 mb-4 font-bold text-sm md:text-lg md:px-[38px] md:ml-[72px] md:leading-[3.2rem]">
                  Social Media:
                </h3>
                <div className="flex justify-start space-x-3 md:flex-row md:justify-end md:mr-[48px] md:space-x-4 md:mt-[-54px]">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                    <Twitter className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                    <Facebook className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                    <Instagram className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-2 lg:order-1 lg:-ml-16">
            <Card className="p-4 sm:p-6 md:p-8 shadow-lg md:shadow-[8px_8px_16px_rgba(0,0,0,0.25)] rounded-[10px] w-full max-w-[345px] mx-auto lg:max-w-none lg:w-[500px] xl:w-[600px] min-h-[400px] sm:min-h-[452px] lg:h-auto">
              <h2 className="text-gray-900 mb-4 sm:mb-6 md:mb-8 font-bold text-lg md:text-xl text-left">Leave your Message</h2>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-bold text-sm md:text-lg">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="bg-gray-50 border-gray-200 h-10 md:h-12 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-bold text-sm md:text-lg">Email</label>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      type="email"
                      className="bg-gray-50 border-gray-200 h-10 md:h-12 text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-bold text-sm md:text-lg">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="bg-gray-50 border-gray-200 h-10 md:h-12 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-bold text-sm md:text-lg">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="bg-gray-50 border-gray-200 min-h-[120px] md:min-h-[160px] resize-none text-sm"
                    required
                  />
                </div>

                {success && (
                  <p className={`text-sm ${success.includes("success") ? "text-green-600" : "text-red-600"}`}>
                    {success}
                  </p>
                )}

                <div className="flex justify-center lg:justify-end pt-2">
                  <Button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full h-10 md:h-12 font-semibold text-sm md:text-xl w-full lg:w-auto"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>

        {/* Mobile Social Media */}
        <div className="lg:hidden mt-8">
          <div className="w-full h-px bg-green-200 my-6"></div>
          <div className="text-left">
            <h3 className="text-gray-900 mb-4 font-bold text-sm">Social Media:</h3>
            <div className="flex justify-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4 text-green-600" />
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4 text-green-600" />
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4 text-green-600" />
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                <Instagram className="w-4 h-4 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
