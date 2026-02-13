"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    badge: "축제 검색",
    title: "우리 학교 축제 소식,\n여기 다 모여있어요",
    description:
      "가고 싶은 학교, 일일이 찾기 힘드셨죠?\n이름만 입력하면 전국 대학 축제 정보를 빠짐없이 찾아드릴게요.",
  },
  {
    badge: "포스터&라인업",
    title: "궁금했던 라인업,\n헤매지 말고 한눈에 봐요",
    description:
      "더 이상 SNS를 헤매지 않아도 괜찮아요.\n올해는 누가 오는지, 어떤 포스터가 떴는지 홈 화면에서 편하게 확인하세요.",
  },
  {
    badge: "지도",
    title: "부스부터 푸드트럭까지,\n지도 보면서 편하게 찾아가요",
    description:
      "주점은 어디고 푸드트럭은 어디 있지?\n넓은 축제장에서 길 잃지 않도록 위치를 지도 위에 쏙 담아두었어요.",
  },
  {
    badge: "일정",
    title: "지금 진행 중인 공연,\n실시간 일정으로 바로 확인해요",
    description:
      "좋아하는 가수의 순서, 놓치면 아쉽잖아요.\n지금 공연부터 다음 순서까지 타임라인으로 미리 확인하고 축제를 마음껏 즐겨봐요.",
  },
  {
    badge: "공지사항&FAQ",
    title: "중요한 소식,\n실시간 알림으로 챙겨드려요",
    description:
      "지연이나 취소 소식, 많이 기다리셨죠?\n중요한 공지는 푸시 알림으로 톡 보내드릴게요.\n모르는 게 생기면 FAQ를 찾아주세요.",
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })
  const isImageLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Image Placeholder */}
      <div className="w-full lg:w-1/2">
        <div className="bg-muted/50 rounded-2xl aspect-[4/3] flex items-center justify-center border border-border">
          <span className="text-muted-foreground text-sm">
            이미지가 들어갈 영역
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <span className="inline-block w-fit px-4 py-1.5 bg-foreground text-background text-sm font-medium rounded-full">
          {feature.badge}
        </span>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground whitespace-pre-line leading-tight">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-24">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
