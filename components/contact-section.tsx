"use client"

import Link from "next/link"
import { ArrowRight, Mail, MessageCircle, FileText, ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type ContactSectionProps = {
  onOpenContactForm?: () => void
}

export function ContactSection({ onOpenContactForm }: ContactSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 bg-background">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
          우리 학교도 시작해볼까요?
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Card */}
          <div className="bg-neutral-900 rounded-3xl overflow-hidden">
            <div className="p-8 sm:p-12 flex flex-col justify-center h-full">
              <span className="inline-block px-4 py-2 bg-neutral-800 text-neutral-300 text-sm font-medium rounded-full w-fit mb-6">
                문의하기
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                우리 팀과
                <br />
                연락해보세요
              </h3>
              
              {/* Contact Links */}
              <div className="space-y-4 mt-4">
                <Link 
                  href="https://linktr.ee/festabook?ltsid=f75568b2-3bfa-40e1-84ef-26936ea83d87"
                  target="_blank"
                  className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Linktree</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link 
                  href="mailto:festabook2025@gmail.com"
                  className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5" />
                  <span>festabook2025@gmail.com</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link 
                  href="https://pf.kakao.com/_Axbnkn"
                  target="_blank"
                  className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>카카오톡 채널</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <button 
                  type="button"
                  className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
                  onClick={onOpenContactForm}
                >
                  <FileText className="w-5 h-5" />
                  <span>도입 문의 폼</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          </div>

          {/* App Download Card */}
          <div className="bg-neutral-100 rounded-3xl overflow-hidden">
            <div className="p-8 sm:p-12 flex flex-col justify-start h-full">
              <span className="inline-block px-4 py-2 bg-neutral-200 text-neutral-600 text-sm font-medium rounded-full w-fit mb-6">
                앱 다운로드
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight mb-6">
                지금 바로
                <br />
                festabook을 만나보세요
              </h3>
              
              {/* Download Links */}
              <div className="flex flex-col items-start gap-4 mt-4">
                <Link 
                  href="https://play.google.com/store/apps/details?id=com.daedan.festabook"
                  target="_blank"
                  className="inline-flex w-[220px] sm:w-[220px] max-w-full h-[72px] shrink-0 items-center gap-3 px-7 py-4 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-neutral-400">Download on the</div>
                    <div className="text-sm font-semibold">Google Play Store</div>
                  </div>
                </Link>
                <Link 
                  href="https://apps.apple.com/kr/app/%ED%8E%98%EC%8A%A4%ED%83%80%EB%B6%81-festabook/id6752591661"
                  target="_blank"
                  className="inline-flex w-[220px] sm:w-[220px] max-w-full h-[72px] shrink-0 items-center gap-3 px-7 py-4 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-neutral-400">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
