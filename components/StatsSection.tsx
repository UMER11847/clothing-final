export default function StatsSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 my-2.5 py-4 sm:py-6 md:py-[22px]">
      {/* Mobile Layout - 2x2 grid in green box */}
      <div className="block lg:hidden">
        <div className="w-full max-w-[345px] sm:max-w-[400px] h-auto min-h-[142px] mx-auto bg-green-50 rounded-[10px] p-4 sm:p-6">
          <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-4 sm:gap-y-6 h-full">
            {/* Top row */}
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">100+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Sewing Machine</div>
            </div>

            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">100k</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Garment Per Month</div>
            </div>

            {/* Bottom row */}
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">21</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Contracted Brand for Manufacturing</div>
            </div>

            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">•</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Certifications</div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - 4-column horizontal layout */}
      <div className="hidden lg:block">
        <div className="max-w-6xl mx-auto">
          <div className="bg-green-50 my-[17px] mx-[-320px] rounded-[50px] py-[105px] px-0">
            <div className="grid grid-cols-4 gap-8 text-center w-auto tracking-normal leading-7 mx-[143px] my-[-19px]">
              {/* Sewing Machine */}
              <div className="space-y-2">
                <div className="text-5xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600 font-medium mx-0 leading-[4.45rem] text-2xl">Sewing Machine</div>
              </div>

              {/* Garment Per Month */}
              <div className="space-y-2">
                <div className="text-5xl font-bold text-gray-900">100k</div>
                <div className="text-gray-600 font-medium leading-[4.5rem] text-2xl">Garment Per Month</div>
              </div>

              {/* Contracted Brand */}
              <div className="space-y-2">
                <div className="text-5xl font-bold text-gray-900">21</div>
                <div className="text-gray-600 font-medium text-balance text-2xl py-[18px] leading-7">
                  Contracted Brand for Manufacturing
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <div className="text-5xl font-bold text-green-50">.</div>
                <div className="text-gray-600 font-medium leading-[4.5rem] text-2xl">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
