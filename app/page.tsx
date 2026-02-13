"use client"

import { useCallback, useEffect } from "react"
import confetti from "canvas-confetti"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PartnersSection } from "@/components/partners-section"
import { FeaturesSection } from "@/components/features-section"
import { BenefitsSection } from "@/components/benefits-section"
import { StatsSection } from "@/components/stats-section"
import { ContactSection } from "@/components/contact-section"
import { OnboardingFlowSection } from "@/components/onboarding-flow-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const openContactForm = useCallback(() => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdv_2dx6Gbp64sbCpgzniP7aKOPrEmAMzk5s-nenF6Tblhy2Q/viewform?usp=dialog",
      "_blank",
      "noopener,noreferrer",
    )
  }, [])

  useEffect(() => {
    let isActive = true
    const timeouts: number[] = []

    const fire = () => {
      if (!isActive) return
      const base = {
        spread: 92,
        startVelocity: 70,
        gravity: 0.65,
        ticks: 320,
      }
      confetti({ ...base, particleCount: 140, angle: 70, origin: { x: 0.02, y: 0.75 } })
      confetti({ ...base, particleCount: 110, angle: 82, origin: { x: 0.18, y: 0.78 } })
      confetti({ ...base, particleCount: 110, angle: 98, origin: { x: 0.82, y: 0.78 } })
      confetti({ ...base, particleCount: 140, angle: 110, origin: { x: 0.98, y: 0.75 } })
    }

    fire()

    return () => {
      isActive = false
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId))
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Header onOpenContactForm={openContactForm} />
      <HeroSection onOpenContactForm={openContactForm} />
      <PartnersSection />
      <FeaturesSection />
      <BenefitsSection />
      <StatsSection />
      <ContactSection onOpenContactForm={openContactForm} />
      <OnboardingFlowSection onOpenContactForm={openContactForm} />
      <CTASection />
      <Footer />
    </main>
  )
}
