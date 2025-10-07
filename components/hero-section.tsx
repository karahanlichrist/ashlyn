import { Button } from "@/components/ui/button"
import type { TranslationKey } from "@/lib/translations"
import { Sparkles } from "lucide-react"

interface HeroSectionProps {
  t: TranslationKey
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/dubai-skyline-at-sunset-with-burj-khalifa.jpg"
          alt="Dubai Skyline"
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-background/60 to-secondary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,oklch(0.12_0.02_265/0.4)_100%)]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float"
            style={{ animationDelay: "3s" }}
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-0">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-12">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-glow" />
            <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-primary">
              Premium Dubai Experience
            </span>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-glow" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold text-balance leading-[1.1] tracking-tight px-2">
            <span className="block bg-gradient-to-br from-foreground via-foreground to-primary bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-primary animate-glow px-2">
            {t.hero.subtitle}
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed font-light px-4">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-8 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full font-semibold shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-accent"
              asChild
            >
              <a href="#services">
                {t.hero.cta}
                <Sparkles className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full font-semibold border-2 border-primary/30 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#contact">{t.hero.ctaSecondary}</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 sm:gap-3 animate-bounce">
        <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-primary/50 rounded-full flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-primary rounded-full animate-pulse" />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border-r-2 border-b-2 border-primary/20 rounded-br-3xl" />
    </section>
  )
}
