"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Gallery } from "@/components/gallery"
import { translations, type Language } from "@/lib/translations"

export default function GalleryPage() {
  const [currentLang, setCurrentLang] = useState<Language>("en")
  const t = translations[currentLang]

  const galleryImages = [
    "/dubai-galeri/burj-khalifa-night.jpg",
    "/dubai-galeri/dubai-marina-sunset.jpg",
    "/dubai-galeri/desert-camp.jpg",
    "/dubai-galeri/gold-souk.jpg",
    "/dubai-galeri/jumeirah-beach.jpg",
    "/dubai-galeri/dubai-fountain.jpg",
    "/dubai-galeri/palm-jumeirah-aerial.jpg",
    "/dubai-galeri/spice-souk.jpg",
    "/dubai-galeri/dubai-creek.jpg",
    "/dubai-galeri/ski-dubai.jpg",
  ]

  const galleryTitle = {
    en: "Dubai Gallery",
    tr: "Dubai Galerisi",
    ar: "معرض دبي",
  }

  return (
    <div className="min-h-screen">
      <Header t={t} currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <main className="pt-32">
        <Gallery images={galleryImages} title={galleryTitle[currentLang]} />
      </main>
      <Footer t={t} />
    </div>
  )
}
