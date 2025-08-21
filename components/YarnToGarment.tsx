// "use client"

// import { useState, useEffect, useCallback, useRef } from "react"

// const scrollSections = [
//   {
//     title: "Knitting",
//     description: "We use 100% high-quality fabric to ensure soft, durable, and comfortable knitted garments.",
//     image: "/m1.png",
//     alt: "Close-up of high-quality knitted fabric texture",
//   },
//   {
//     title: "Dyeing and Finishing",
//     description:
//       "We ensure vibrant colors and smooth finishes using high-quality dyes and advanced processing techniques.",
//     image: "/m2.png",
//     alt: "Hands working with teal colored yarn in crafting process",
//   },
//   {
//     title: "Stitched Garment",
//     description: "We deliver precisely stitched garments with a focus on fit, finish, and long-lasting quality.",
//     image:
//       "/m3.png",
//     alt: "Green t-shirts hanging on wooden hangers showing quality garment construction",
//   },
//   {
//     title: "Embroidery",
//     description: "We offer detailed embroidery work that adds elegance, character, and craftsmanship to every piece.",
//     image: "/m4.png",
//     alt: "Embroidered military-style jacket with artistic details",
//   },
//   {
//     title: "Printing Garment",
//     description: "We provide high-quality garment printing with sharp details, vibrant colors, and lasting durability.",
//     image: "/m5.png",
//     alt: "White t-shirt with red geometric mandala print design",
//   },
//   {
//     title: "Accessories",
//     description: "We offer a wide range of stylish and functional accessories to complement every garment.",
//     image: "/m6.png",
//     alt: "Stack of folded denim jeans in various blue shades",
//   },
// ]

// interface YarnToGarmentProps {
//   onSectionComplete?: (direction: "up" | "down") => void
// }

// export default function YarnToGarment({ onSectionComplete }: YarnToGarmentProps) {
//   const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
//   const [isScrolling, setIsScrolling] = useState(false)
//   const [isHovering, setIsHovering] = useState(false)
//   const [isCentered, setIsCentered] = useState(false)
//   const containerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           // Consider centered when at least 80% of the component is visible
//           setIsCentered(entry.intersectionRatio >= 0.8)
//         })
//       },
//       {
//         threshold: [0.8], // Trigger when 80% visible
//         rootMargin: "-10% 0px -10% 0px", // Add some margin for better centering detection
//       },
//     )

//     if (containerRef.current) {
//       observer.observe(containerRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   const throttledScrollHandler = useCallback(
//     (deltaY: number) => {
//       if (isScrolling || !isHovering || !isCentered) return

//       if (deltaY > 0 && currentSectionIndex === scrollSections.length - 1) {
//         // At last section, scrolling down - move to next main section
//         onSectionComplete?.("down")
//         return
//       }

//       if (deltaY < 0 && currentSectionIndex === 0) {
//         // At first section, scrolling up - move to previous main section
//         onSectionComplete?.("up")
//         return
//       }

//       setIsScrolling(true)

//       if (deltaY > 0 && currentSectionIndex < scrollSections.length - 1) {
//         setCurrentSectionIndex((prev) => prev + 1)
//       } else if (deltaY < 0 && currentSectionIndex > 0) {
//         setCurrentSectionIndex((prev) => prev - 1)
//       }

//       setTimeout(() => setIsScrolling(false), 400)
//     },
//     [currentSectionIndex, isScrolling, isHovering, isCentered, onSectionComplete],
//   )

//   useEffect(() => {
//     let wheelTimeout: NodeJS.Timeout

//     const handleWheel = (e: WheelEvent) => {
//       if (isHovering && isCentered && !(e.deltaY > 0 && currentSectionIndex === scrollSections.length - 1)) {
//         e.preventDefault()
//       }

//       clearTimeout(wheelTimeout)
//       wheelTimeout = setTimeout(() => {
//         throttledScrollHandler(e.deltaY)
//       }, 20)
//     }

//     window.addEventListener("wheel", handleWheel, { passive: false })

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (isScrolling || !isHovering || !isCentered) return

//       if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
//         if (currentSectionIndex < scrollSections.length - 1) {
//           e.preventDefault()
//           throttledScrollHandler(1)
//         }
//       } else if (e.key === "ArrowUp" || e.key === "PageUp") {
//         e.preventDefault()
//         if (currentSectionIndex > 0) {
//           throttledScrollHandler(-2)
//         }
//       }
//     }

//     window.addEventListener("keydown", handleKeyDown)

//     return () => {
//       window.removeEventListener("wheel", handleWheel)
//       window.removeEventListener("keydown", handleKeyDown)
//       clearTimeout(wheelTimeout)
//     }
//   }, [throttledScrollHandler, currentSectionIndex, isScrolling, isHovering, isCentered])

//   return (
//     <div
//       ref={containerRef}
//       className="h-screen overflow-hidden bg-gray-50"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       <div className="max-w-4xl mx-auto h-full flex flex-col">
//         {/* Header Section */}
//         <div className="text-center py-8 px-4 flex-shrink-0">
//           <div className="flex items-center justify-center mb-4">
//             <div className="absolute -translate-x-48 -translate-y-1/3 w-8 h-8 bg-green-500 rounded-full mr-1 z-0"></div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 z-10">Yarn To Garment</h1>
//           </div>
//           <p className="text-gray-600 text-lg md:text-xl">Transforming raw yarn into high-quality clothing</p>
//           {isCentered && isHovering && (
//             <p className="text-green-600 text-sm mt-2 opacity-75">Scroll to explore more</p>
//           )}
//         </div>

//         <div className="flex-1 relative px-4">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="bg-green-100 rounded-3xl p-12 w-full max-w-3xl">
//               <div
//                 className={`bg-white rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 shadow-lg transition-all duration-500 ease-out ${
//                   currentSectionIndex === 0
//                     ? "opacity-100 transform translate-y-0"
//                     : "opacity-0 transform -translate-y-4"
//                 }`}
//               >
//                 <div className="flex-1">
//                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{scrollSections[0].title}</h2>
//                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">{scrollSections[0].description}</p>
//                 </div>
//                 <div className="flex-shrink-0">
//                   <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-md">
//                     <img
//                       src={scrollSections[0].image || "/placeholder.svg"}
//                       alt={scrollSections[0].alt}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {scrollSections.slice(1).map((section, index) => {
//             const sectionIndex = index + 1
//             const isActive = currentSectionIndex === sectionIndex
//             const isPast = currentSectionIndex > sectionIndex

//             let transform = "translateY(100%) scale(0.95)"
//             let opacity = 0
//             let zIndex = 1

//             if (isActive) {
//               transform = "translateY(0%) scale(1)"
//               opacity = 1
//               zIndex = 10
//             } else if (isPast) {
//               transform = "translateY(-100%) scale(0.95)"
//               opacity = 0
//               zIndex = 1
//             }

//             return (
//               <div
//                 key={sectionIndex}
//                 className="absolute inset-0 flex items-center justify-center"
//                 style={{
//                   transform,
//                   opacity,
//                   zIndex,
//                   transition: "all 500ms cubic-bezier(0.23, 1, 0.32, 1)",
//                 }}
//               >
//                 <div className="bg-green-100 rounded-3xl p-12 w-full max-w-3xl">
//                   <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 shadow-lg w-full">
//                     {sectionIndex === 2 ? (
//                       <>
//                         <div className="flex-1">
//                           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
//                           <p className="text-gray-700 text-base md:text-lg leading-relaxed">{section.description}</p>
//                         </div>
//                         <div className="flex-shrink-0">
//                           <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-md">
//                             <img
//                               src={section.image || "/placeholder.svg"}
//                               alt={section.alt}
//                               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                             />
//                           </div>
//                         </div>
//                       </>
//                     ) : sectionIndex % 2 === 0 ? (
//                       <>
//                         <div className="flex-shrink-0">
//                           <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-md">
//                             <img
//                               src={section.image || "/placeholder.svg"}
//                               alt={section.alt}
//                               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                             />
//                           </div>
//                         </div>
//                         <div className="flex-1">
//                           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
//                           <p className="text-gray-700 text-base md:text-lg leading-relaxed">{section.description}</p>
//                         </div>
//                       </>
//                     ) : (
//                       <>
//                         <div className="flex-1">
//                           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
//                           <p className="text-gray-700 text-base md:text-lg leading-relaxed">{section.description}</p>
//                         </div>
//                         <div className="flex-shrink-0">
//                           <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-md">
//                             <img
//                               src={section.image || "/placeholder.svg"}
//                               alt={section.alt}
//                               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                             />
//                           </div>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"

const scrollSections = [
  {
    title: "Knitting",
    description: "We use 100% high-quality fabric to ensure soft, durable, and comfortable knitted garments.",
    image: "/m1.png",
    alt: "Close-up of high-quality knitted fabric texture",
  },
  {
    title: "Dyeing and Finishing",
    description:
      "We ensure vibrant colors and smooth finishes using high-quality dyes and advanced processing techniques.",
    image: "/m2.png",
    alt: "Hands working with teal colored yarn in crafting process",
  },
  {
    title: "Stitched Garment",
    description: "We deliver precisely stitched garments with a focus on fit, finish, and long-lasting quality.",
    image: "/m3.png",
    alt: "Green t-shirts hanging on wooden hangers showing quality garment construction",
  },
  {
    title: "Embroidery",
    description: "We offer detailed embroidery work that adds elegance, character, and craftsmanship to every piece.",
    image: "/m4.png",
    alt: "Embroidered military-style jacket with artistic details",
  },
  {
    title: "Printing Garment",
    description: "We provide high-quality garment printing with sharp details, vibrant colors, and lasting durability.",
    image: "/m5.png",
    alt: "White t-shirt with red geometric mandala print design",
  },
  {
    title: "Accessories",
    description: "We offer a wide range of stylish and functional accessories to complement every garment.",
    image: "/m6.png",
    alt: "Stack of folded denim jeans in various blue shades",
  },
]

interface YarnToGarmentProps {
  onSectionComplete?: (direction: "up" | "down") => void
}

export default function YarnToGarment({ onSectionComplete }: YarnToGarmentProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const whiteBoxRef = useRef<HTMLDivElement>(null)
  const lastMouseX = useRef<number | null>(null)
  const lastMoveTime = useRef(0)
  const moveThrottle = 400 // milliseconds - increased from 200 to 400
  const moveThreshold = 100 // minimum mouse movement distance - increased from 50 to 100

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const now = Date.now()
      if (now - lastMoveTime.current < moveThrottle) {
        return
      }

      if (lastMouseX.current === null) {
        lastMouseX.current = e.clientX
        return
      }

      const deltaX = e.clientX - lastMouseX.current

      if (Math.abs(deltaX) < moveThreshold) {
        return
      }

      lastMoveTime.current = now
      lastMouseX.current = e.clientX

      if (deltaX > 0) {
        // Moving right - go to next
        if (currentSectionIndex < scrollSections.length - 1) {
          setCurrentSectionIndex((prev) => prev + 1)
        }
      } else if (deltaX < 0) {
        // Moving left - go to previous
        if (currentSectionIndex > 0) {
          setCurrentSectionIndex((prev) => prev - 1)
        }
      }
    },
    [currentSectionIndex],
  )

  const handleMouseLeave = useCallback(() => {
    lastMouseX.current = null
  }, [])

  const goToNext = () => {
    if (currentSectionIndex < scrollSections.length - 1) {
      setCurrentSectionIndex((prev) => prev + 1)
    }
  }

  const goToPrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => prev - 1)
    }
  }

  const currentSection = scrollSections[currentSectionIndex]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="text-center py-8 px-4">
        <div className="flex items-center justify-center mb-2 relative">
          <div className="absolute -translate-x-35 -translate-y-1/3 w-8 h-8 bg-green-500 rounded-full mr-1 z-0"></div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 z-10">Yarn To Garment</h1>
        </div>
        <p className="text-gray-600 text-lg md:text-xl mb-1">Transforming raw yarn into high-quality clothing</p>
      </div>

      <div className="flex-1 flex items-center justify-center px-7">
        <div
          className="rounded-[2rem] px-6 md:px-20 pt-20 md:pt-24 pb-6 md:pb-8 w-full"
          style={{ backgroundColor: "#99E8B026" }}
        >
          <div
            ref={whiteBoxRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-white rounded-[2rem] shadow-md px-6 py-8 md:py-10 max-w-4xl mx-auto mb-6 cursor-pointer"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{currentSection.title}</h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">{currentSection.description}</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden shadow-md">
                  <img
                    src={currentSection.image || "/placeholder.svg"}
                    alt={currentSection.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <button
              onClick={goToPrevious}
              disabled={currentSectionIndex === 0}
              className="px-6 py-2 bg-green-500 text-white rounded-full font-medium transition-all duration-200 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>

            <div className="text-gray-600 font-medium mx-4">
              {currentSectionIndex + 1}/{scrollSections.length}
            </div>

            <button
              onClick={goToNext}
              disabled={currentSectionIndex === scrollSections.length - 1}
              className="px-6 py-2 bg-green-500 text-white rounded-full font-medium transition-all duration-200 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
