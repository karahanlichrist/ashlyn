import type { TranslationKey } from "@/lib/translations"
import { Award, Users, Clock, Shield } from "lucide-react"

interface AboutSectionProps {
  t: TranslationKey
}

export function AboutSection({ t }: AboutSectionProps) {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      value: "5+",
      label: "Years Experience",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Satisfaction Rate",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Customer Support",
      gradient: "from-orange-500 to-amber-500",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
              <img
                src="/dubai-burj-al-arab-luxury-hotel.jpg"
                alt="Dubai Luxury"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-2xl shadow-2xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif">5+</div>
                <div className="text-xs sm:text-sm font-medium tracking-wider uppercase">Years</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-block mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-primary">
                  About Us
                </span>
                <div className="h-px w-full bg-gradient-to-r from-primary to-transparent mt-2" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6 text-balance leading-tight">
                {t.about.title}
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-pretty font-light text-muted-foreground">
                {t.about.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="group relative p-4 sm:p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.gradient} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>

                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-serif mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                      {stat.value}
                    </div>

                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>

                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 rounded-2xl transition-all duration-300" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
