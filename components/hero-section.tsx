"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type HeroSectionProps = {
  onOpenContactForm?: () => void
}

export function HeroSection({ onOpenContactForm }: HeroSectionProps) {
  return (
    <section className="pt-36 pb-20 sm:pt-46 sm:pb-30 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(180deg,#171717_0%,#0f0f0f_20%,#0c0c0c_50%,#0f0f0f_80%,#171717_100%)] mb-8 sm:mb-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-8">
          우리 학교 축제,
          <br />
          이제 한 곳에서 만나요
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-12 max-w-xl mx-auto">
          축제의 모든 정보를 한 곳에 모아,
          <br />
          학생회와 학생 모두 즐거운 축제를 만들어가요.
        </p>

        {/* CTA Button */}
        <Button
          type="button"
          size="lg"
          className="bg-white text-neutral-900 hover:bg-neutral-200 font-medium text-base px-8 py-4 rounded-xl gap-2 group shadow-md"
          onClick={onOpenContactForm}
        >
          무료로 시작하기
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>

      </div>
    </section>
  );
}
