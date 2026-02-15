"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function PartnersSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })
  const festivals = [
    {
      university: "안산대학교",
      festival: "2025 안산대학교 석학제 : BLUEMOON",
    },
    {
      university: "우석대학교",
      festival: "2025 우석대학교 대동제 Next Page : 기대와 펼쳐질 이야기",
    },
    {
      university: "차 의과학대학교",
      festival: "2025 차 의과학대학교 현암제 : 월야청춘(月夜靑春)",
    },
    {
      university: "한서대학교",
      festival: "2025 한서대학교 자미원 대동제 : Green Light",
    },
    {
      university: "강릉원주대학교",
      festival: "2025 Make a Wish : 유성에 담은 소원",
    },
  ]

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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 items-center">
          {festivals.map(({ university, festival }) => (
            <div
              key={university}
              className="min-h-24 sm:min-h-28 px-2 flex flex-col items-center justify-center text-center"
            >
              <p className="text-xl sm:text-xl font-semibold text-foreground">{university}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
