export default function StatsSection() {
  return (
    <section className="w-full px-4 my-2.5 py-[22px]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-green-50 my-[17px] mx-[-320px] rounded-[50px] py-[105px] px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center w-auto tracking-normal leading-7 mx-[143px] my-[-19px]">
            {/* Sewing Machine */}
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-gray-900">100+</div>
              <div className="text-gray-600 font-medium mx-0 leading-[4.45rem] text-2xl">Sewing Machine</div>
            </div>

            {/* Garment Per Month */}
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-gray-900">100k</div>
              <div className="text-gray-600 text-sm font-medium leading-[4.5rem] md:text-2xl">Garment Per Month</div>
            </div>

            {/* Contracted Brand */}
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-gray-900">21</div>
              <div className="text-gray-600 font-medium text-balance text-2xl py-[18px] leading-7">
                Contracted Brand for Manufacturing
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-green-50">.</div>
              <div className="text-gray-600 text-sm font-medium leading-[4.5rem] md:text-2xl">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
