"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  const stats = [
    {
      value: "5+",
      description: "festabook과 함께한 대학 수",
      bgClass: "bg-neutral-100",
      textClass: "text-neutral-900",
      descClass: "text-neutral-600",
    },
    {
      value: "2,000+",
      description: "festabook과 함께한 학생 수",
      bgClass: "bg-neutral-800",
      textClass: "text-white",
      descClass: "text-neutral-300",
    },
    {
      value: "400+",
      description: "festabook과 함께한 부스, 주점, 플레이스 수",
      bgClass: "bg-neutral-600",
      textClass: "text-white",
      descClass: "text-neutral-200",
    },
    {
      value: "15+",
      description: "festabook이 축제와 함께한 시간",
      bgClass: "bg-neutral-900",
      textClass: "text-white",
      descClass: "text-neutral-400",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
          함께 쌓아온 소중한 기록들이에요       
        </h2>

        {/* Stats Grid */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* First Row - 1:2 ratio */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div
              className={`${stats[0].bgClass} rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] shadow-md sm:col-span-1`}
            >
              <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${stats[0].textClass}`}>
                {stats[0].value}
              </h3>
              <p className={`text-base sm:text-lg mt-4 ${stats[0].descClass}`}>
                {stats[0].description}
              </p>
            </div>
            
            <div
              className={`${stats[1].bgClass} rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] shadow-md sm:col-span-2`}
            >
              <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${stats[1].textClass}`}>
                {stats[1].value}
              </h3>
              <p className={`text-base sm:text-lg mt-4 ${stats[1].descClass}`}>
                {stats[1].description}
              </p>
            </div>
          </div>

          {/* Second Row - 3:2 ratio */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-6">
            <div
              className={`${stats[2].bgClass} rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] shadow-md sm:col-span-3`}
            >
              <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${stats[2].textClass}`}>
                {stats[2].value}
              </h3>
              <p className={`text-base sm:text-lg mt-4 ${stats[2].descClass}`}>
                {stats[2].description}
              </p>
            </div>
            <div
              className={`${stats[3].bgClass} rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] shadow-md sm:col-span-2`}
            >
              <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${stats[3].textClass}`}>
                {stats[3].value}
              </h3>
              <p className={`text-base sm:text-lg mt-4 ${stats[3].descClass}`}>
                {stats[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
