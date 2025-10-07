import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Crown, Star } from "lucide-react"
import type { TranslationKey } from "@/lib/translations"

interface PricingSectionProps {
  t: TranslationKey
}

export function PricingSection({ t }: PricingSectionProps) {
  const packages = [
    {
      name: t.services.visa.title,
      price: t.pricing.contact,
      features: ["Tourist Visa Processing", "Express Service Available", "Document Assistance", "24/7 Support"],
      popular: false,
    },
    {
      name: t.services.jetski.title,
      price: t.pricing.contact,
      features: [
        "30-60 Minute Sessions",
        "Professional Instructor",
        "Safety Equipment Included",
        "Photo Package Available",
      ],
      popular: false,
    },
    {
      name: t.services.yacht.title,
      price: t.pricing.contact,
      features: ["Private Yacht Charter", "Professional Crew", "Refreshments Included", "Flexible Duration"],
      popular: true,
    },
    {
      name: t.services.safari.title,
      price: t.pricing.contact,
      features: ["Dune Bashing", "Camel Riding", "BBQ Dinner", "Traditional Entertainment"],
      popular: false,
    },
    {
      name: t.services.car.title,
      price: t.pricing.contact,
      features: ["Luxury Vehicle", "Professional Chauffeur", "Custom Itinerary", "All Attractions Covered"],
      popular: false,
    },
  ]

  return (
    <section
      id="pricing"
      className="py-24 lg:py-40 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-primary">Pricing</span>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent mt-2" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed font-light">{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative flex flex-col hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
                pkg.popular
                  ? "border-primary shadow-xl shadow-primary/20 scale-105"
                  : "border-border hover:border-primary/30"
              } bg-card/50 backdrop-blur-sm`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-accent text-primary-foreground px-6 py-2 rounded-bl-2xl flex items-center gap-2 shadow-lg">
                  <Crown className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-wider uppercase">Most Popular</span>
                </div>
              )}

              <CardHeader className="space-y-4 pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30">
                  <Star className="w-8 h-8 text-primary" />
                </div>

                <CardTitle className="text-2xl font-serif font-semibold">{pkg.name}</CardTitle>

                <CardDescription className="text-3xl font-bold text-primary mt-4 font-serif">
                  {pkg.price}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col space-y-6">
                <ul className="space-y-4 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <div className="p-1 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <span className="text-sm leading-relaxed font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
                      : "hover:scale-105"
                  }`}
                  variant={pkg.popular ? "default" : "outline"}
                  asChild
                >
                  <a href="#contact">{t.pricing.bookNow}</a>
                </Button>
              </CardContent>

              <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/10 rounded-bl-3xl" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
