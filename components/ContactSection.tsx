import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white p-30">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-12 items-start">
          {/* Left Side - Contact Form */}
          <div className="-ml-16">
            <Card className="p-8 shadow-[8px_8px_16px_rgba(0,0,0,0.25)] px-16 pt-[54px] w-[600px] h-auto">
              <h2 className="text-gray-900 mb-8 font-bold text-xl">Leave your Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-bold text-lg">Name</label>
                    <Input placeholder="Your Name" className="bg-gray-50 border-gray-200 h-12" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-bold text-lg">Email</label>
                    <Input placeholder="Your Email" type="email" className="bg-gray-50 border-gray-200 h-12" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-bold text-lg">Subject</label>
                  <Input placeholder="Subject" className="bg-gray-50 border-gray-200 h-12" />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-bold text-lg">Message</label>
                  <Textarea
                    placeholder="Message"
                    className="bg-gray-50 border-gray-200 min-h-[160px] resize-none mx-0 flex-row mb-[34px] pb-0"
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full h-12 font-semibold text-xl"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-8 flex-1">
            <div>
              <h1 className="font-bold text-gray-900 text-5xl flex-col mb-[29px] mt-9">Contact Us</h1>
              <p className="text-gray-600 leading-relaxed text-2xl">
                We'd love to hear from you. Whether you have a question about our services, need support, our team is
                ready to help. Please reach out through the contact details below or send us a message we'll respond as
                soon as possible
              </p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-2 gap-4 px-0 pl-0 pr-0 mr-[-48px] ml-[-14px] mb-[59px]">
              <Card className="p-6 border border-gray-200 shadow-[4px_4px_8px_rgba(0,0,0,0.2)]">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2035-r9hhc2RLXgDTaYohDVNbrzifeqRNZf.png"
                      alt="Location"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1 font-bold text-lg">Office</h3>
                    <p className="text-gray-600 text-sm">1234 Fabric Lane, Karachi</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200 shadow-[4px_4px_8px_rgba(0,0,0,0.2)]">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20%284%29-EhI2fggEpkyYRRw72lB7DV7zIBAQ5k.png"
                      alt="Phone"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1 font-bold text-lg">Phone</h3>
                    <p className="text-gray-600 text-sm">+1(555) 123-4567</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200 shadow-[4px_4px_8px_rgba(0,0,0,0.2)]">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20%283%29-hM5VY3t8IIo4BvAicpq9sZb7LditPt.png"
                      alt="Clock"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1 font-bold text-lg">Work Hours</h3>
                    <p className="text-gray-600 text-sm">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200 shadow-[4px_4px_8px_rgba(0,0,0,0.2)]">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20%282%29-cSihBSCf5tGiePvN6HtN3lPvcgTqnc.png"
                      alt="Email"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1 font-bold text-lg">Email</h3>
                    <p className="text-gray-600 text-sm">contact@cloththread.example.com</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="w-full h-px bg-green-200 my-8"></div>

            {/* Social Media */}
            <div className="px-0 mx-[-93px] mt-8">
              <h3 className="text-gray-900 mb-4 px-[38px] ml-[72px] font-bold text-lg leading-[3.2rem]">
                Social Media:
              </h3>
              <div className="flex flex-row justify-end mr-[48px] space-x-4 mt-[-54px]">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5 text-green-600" />
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5 text-green-600" />
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5 text-green-600" />
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
