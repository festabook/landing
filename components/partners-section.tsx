"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type Partner = {
  university: string
  logoBasePath: string
  logoExt?: "png" | "jpg" | "jpeg" | "webp"
  textOnly?: boolean
}

function PartnerLogoCard({ partner }: { partner: Partner }) {
  if (partner.textOnly) {
    return (
      <div className="w-full h-10 sm:h-14 lg:h-20 flex items-center justify-center rounded-lg bg-muted/20 px-2">
        <span className="text-sm sm:text-lg lg:text-lg font-semibold text-foreground text-center">
          {partner.university}
        </span>
      </div>
    )
  }

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
    <div className="w-full h-10 sm:h-14 lg:h-20">
      <div className="w-full h-full overflow-hidden">
        {isFailed ? (
          <div className="w-full h-full bg-muted/30 rounded-lg" />
        ) : (
          <Image
            src={imageSrc}
            alt={`${partner.university} 로고`}
            width={500}
            height={180}
            className="mx-auto w-auto h-full max-w-full object-contain"
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
      textOnly: true,
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

        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-8 lg:max-w-none lg:grid lg:grid-cols-5 lg:gap-x-8 lg:gap-y-12">
          {partners.map((partner) => (
            <div key={partner.university} className="w-[42%] max-w-[220px] lg:w-full lg:max-w-none">
              <PartnerLogoCard partner={partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
