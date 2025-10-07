"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { translations, type Language } from "@/lib/translations"

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>("en")
  const t = translations[currentLang]

  return (
    <div className="min-h-screen">
      <Header t={t} currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <main>
        <HeroSection t={t} />
        <ServicesSection t={t} />
        <PricingSection t={t} />
        <AboutSection t={t} />
        <ContactSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
