"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type Partner = {
  university: string
  logoBasePath: string
  logoExt?: "png" | "jpg" | "jpeg" | "webp"
}

function PartnerLogoCard({ partner }: { partner: Partner }) {
  const candidates = useMemo(
    () =>
      partner.logoExt
        ? [`${partner.logoBasePath}.${partner.logoExt}`]
        : [
            `${partner.logoBasePath}.png`,
            `${partner.logoBasePath}.jpg`,
            `${partner.logoBasePath}.jpeg`,
            `${partner.logoBasePath}.webp`,
          ],
    [partner.logoBasePath, partner.logoExt],
  )
  const [imageIndex, setImageIndex] = useState(0)
  const imageSrc = candidates[imageIndex]
  const isFailed = imageIndex >= candidates.length

  return (
    <div className="w-full h-16 sm:h-20">
      <div className="w-full h-full overflow-hidden">
        {isFailed ? (
          <div className="w-full h-full bg-muted/30 rounded-lg" />
        ) : (
          <Image
            src={imageSrc}
            alt={`${partner.university} 로고`}
            width={500}
            height={180}
            className="w-full h-full object-contain"
            onError={() => setImageIndex((prev) => prev + 1)}
          />
        )}
      </div>
    </div>
  )
}

export function PartnersSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })
  const partners: Partner[] = [
    {
      university: "안산대학교",
      logoBasePath: "/images/universities/ansan",
    },
    {
      university: "우석대학교",
      logoBasePath: "/images/universities/woosuk",
      logoExt: "jpg",
    },
    {
      university: "차 의과학대학교",
      logoBasePath: "/images/universities/cha",
    },
    {
      university: "한서대학교",
      logoBasePath: "/images/universities/hanseo",
    },
    {
      university: "강릉원주대학교",
      logoBasePath: "/images/universities/gwnu",
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
          {partners.map((partner) => (
            <div key={partner.university} className="w-full">
              <PartnerLogoCard partner={partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
