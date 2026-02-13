"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle, Github, Star } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto space-y-6 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Contact CTA Card */}
        <Link 
          href="https://pf.kakao.com/_Axbnkn"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative overflow-hidden bg-neutral-100 rounded-3xl p-7 sm:p-12 min-h-[200px] flex items-start sm:items-center shadow-md">
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3 leading-tight">
                <span>축제가 더 빛날 수 있게 festabook이 함께할게요</span>
                <ArrowRight className="ml-2 inline-block w-5 h-5 sm:w-7 sm:h-7 align-middle transition-transform group-hover:translate-x-2" />
              </h3>
              <p className="text-neutral-600 text-base sm:text-base">
                망설이지 말고 지금 바로 경험해 보세요
              </p>
            </div>
            {/* Decorative Icon */}
            <div className="hidden sm:block absolute right-10 top-1/2 -translate-y-1/2 opacity-30 transition-transform duration-300 group-hover:translate-x-2">
              <MessageCircle className="w-36 h-36 lg:w-40 lg:h-40 text-neutral-400" strokeWidth={1.5} />
            </div>
          </div>
        </Link>

        {/* GitHub Star CTA Card */}
        <a 
          href="https://github.com/festabook"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative overflow-hidden bg-neutral-800 rounded-3xl p-7 sm:p-12 min-h-[200px] flex items-start sm:items-center shadow-md">
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                <span>스타를 눌러 festabook의 이웃이 되어주세요</span>
                <Star className="ml-2 inline-block w-5 h-5 sm:w-7 sm:h-7 align-middle text-yellow-400 fill-yellow-400 transition-transform duration-300 group-hover:translate-x-2" />
              </h3>
              <p className="text-neutral-400 text-base sm:text-base">
                스타 버튼을 통해 festabook 성장을 응원해 주세요
              </p>
            </div>
            {/* GitHub Logo */}
            <div className="hidden sm:block absolute right-10 top-1/2 -translate-y-1/2 opacity-30 transition-transform duration-300 group-hover:translate-x-2">
              <Github className="w-36 h-36 lg:w-40 lg:h-40 text-neutral-600" strokeWidth={1} />
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
