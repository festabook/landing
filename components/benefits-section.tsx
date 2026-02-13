"use client"

import { Bell, MapPin, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function BenefitsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
          함께라면 축제 운영이 훨씬 더 쉬워져요
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 - Dark */}
          <div className="relative bg-neutral-900 rounded-3xl p-8 min-h-[240px] overflow-hidden shadow-md">
            <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed max-w-[70%]">
              학생들과 빠르게
              <br />
              공지를 통해 연락할 수 있어요
            </p>
            <div className="absolute bottom-6 right-6 opacity-30">
              <Bell className="w-24 h-24 text-white" strokeWidth={1.5} />
            </div>
          </div>

          {/* Card 2 - Medium Gray */}
          <div className="relative bg-neutral-600 rounded-3xl p-8 min-h-[240px] overflow-hidden shadow-md">
            <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed max-w-[70%]">
              부스와 주점을 쉽게 만들고
              <br />
              지도에 바로 보여줄 수 있어요
            </p>
            <div className="absolute bottom-6 right-6 opacity-30">
              <MapPin className="w-24 h-24 text-white" strokeWidth={1.5} />
            </div>
          </div>

          {/* Card 3 - Full Width Light Gray */}
          <div className="relative rounded-3xl p-8 min-h-[240px] overflow-hidden md:col-span-2 shadow-md bg-neutral-50">
            <p className="text-xl sm:text-2xl font-bold leading-relaxed max-w-[60%] text-black">
              축제를 위한 다양한 컨텐츠를
              <br />
              학생들에게 제공할 수 있어요
            </p>
            <div className="absolute bottom-6 right-6 opacity-30">
              <Sparkles className="w-28 h-28 text-black" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
