"use client"

import { Check } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type OnboardingFlowSectionProps = {
  onOpenContactForm?: () => void
}

export function OnboardingFlowSection({ onOpenContactForm }: OnboardingFlowSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="pt-16 sm:pt-20 pb-24 px-4 sm:px-8 bg-background">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto rounded-3xl px-6 py-12 sm:px-10 sm:py-14 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-center text-neutral-900 leading-tight">
           신청은 3분이면 충분해요
        </h3>
        <p className="mt-5 text-lg sm:text-xl font-semibold text-center text-neutral-600">
          하루 안에 빠르게 확인해 드릴게요
        </p>

        <div className="mt-12 sm:mt-14 overflow-x-auto">
          <div className="mx-auto flex w-max min-w-full items-center justify-center gap-5 sm:gap-8 whitespace-nowrap">
            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <Check className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
              </div>
              <span className="text-lg sm:text-xl font-bold text-neutral-900">신청</span>
            </div>

            <div className="h-[2px] w-10 sm:w-14 shrink-0 bg-neutral-300" />

            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <Check className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
              </div>
              <span className="text-lg sm:text-xl font-bold text-neutral-900">하루 내 심사 완료</span>
            </div>

            <div className="h-[2px] w-10 sm:w-14 shrink-0 bg-neutral-300" />

            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <Check className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
              </div>
              <span className="text-lg sm:text-xl font-bold text-neutral-900">앱에서 확인</span>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-neutral-900 text-white text-sm sm:text-base font-semibold hover:bg-neutral-800 transition-colors shadow-md"
            onClick={onOpenContactForm}
          >
            하루만에 등록하기
          </button>
        </div>
      </div>
    </section>
  )
}
