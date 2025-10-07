"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Waves, Ship, Palmtree, Car, ArrowRight } from "lucide-react"
import type { TranslationKey } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface ServicesSectionProps {
  t: TranslationKey
}

export function ServicesSection({ t }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    {
      icon: Plane,
      title: t.services.visa.title,
      description: t.services.visa.description,
      image: "/dubai-visa-passport-travel-documents.jpg",
      gradient: "from-blue-500/20 to-purple-500/20",
      details:
        "Complete visa processing service with document assistance, application tracking, and express options available.",
    },
    {
      icon: Waves,
      title: t.services.jetski.title,
      description: t.services.jetski.description,
      image: "/jetski-adventure-in-dubai-waters.jpg",
      gradient: "from-cyan-500/20 to-blue-500/20",
      details:
        "30-60 minute sessions with professional instructors, safety equipment included, and stunning Dubai Marina views.",
    },
    {
      icon: Ship,
      title: t.services.yacht.title,
      description: t.services.yacht.description,
      image: "/luxury-yacht-in-dubai-marina.jpg",
      gradient: "from-indigo-500/20 to-cyan-500/20",
      details:
        "Private yacht charters for 2-50 guests, catering options, water sports equipment, and sunset cruise packages.",
    },
    {
      icon: Palmtree,
      title: t.services.safari.title,
      description: t.services.safari.description,
      image: "/desert-safari-dubai-sand-dunes-sunset.jpg",
      gradient: "from-orange-500/20 to-amber-500/20",
      details: "Dune bashing, camel rides, BBQ dinner, traditional shows, henna painting, and stargazing experiences.",
    },
    {
      icon: Car,
      title: t.services.car.title,
      description: t.services.car.description,
      image: "/luxury-car-tour-dubai-city.jpg",
      gradient: "from-slate-500/20 to-zinc-500/20",
      details: "Premium vehicles, professional chauffeurs, customizable routes, and VIP access to major attractions.",
    },
  ]

  const handleLearnMore = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    // Scroll to contact section
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-primary">
              Our Services
            </span>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent mt-2" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6 text-balance bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent px-2">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed font-light px-4">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group relative hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden border-2 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
              >
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} to-transparent opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 p-3 sm:p-4 bg-primary/90 backdrop-blur-sm rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary-foreground" />
                  </div>

                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                </div>

                <CardHeader className="space-y-2 sm:space-y-3 p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl font-serif font-semibold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <CardDescription className="text-sm sm:text-base leading-relaxed font-light">
                    {service.description}
                  </CardDescription>

                  <Button
                    variant="ghost"
                    onClick={() => handleLearnMore(service.title)}
                    className="group/btn w-full justify-between text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 text-sm sm:text-base"
                  >
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>

                <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-r-2 border-b-2 border-primary/10 group-hover:border-primary/30 transition-colors duration-500" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
