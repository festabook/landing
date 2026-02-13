"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function PartnersSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="py-24 bg-background">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-14">
          2025년 9월 첫 만남 이후, 5개 대학교와 함께 했어요
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="h-16 sm:h-20 rounded-xl border border-dashed border-muted-foreground/40 bg-muted/20 flex items-center justify-center text-xs sm:text-sm text-muted-foreground"
            >
              로고 예정
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
