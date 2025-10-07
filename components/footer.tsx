import Link from "next/link"
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, Sparkles } from "lucide-react"
import type { TranslationKey } from "@/lib/translations"

interface FooterProps {
  t: TranslationKey
}

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: MessageCircle,
      href: "https://wa.me/971XXXXXXXXX",
      label: "WhatsApp",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/asslyndubai",
      label: "Facebook",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/asslyndubai",
      label: "Instagram",
      gradient: "from-pink-600 via-purple-600 to-orange-500",
    },
  ]

  const quickContacts = [
    { icon: Mail, text: "info@asslyndubai.com", href: "mailto:info@asslyndubai.com" },
    { icon: Phone, text: "+971 XX XXX XXXX", href: "tel:+971XXXXXXXXX" },
    { icon: MapPin, text: "Dubai, UAE", href: "#" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/20 border-t-2 border-primary/20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <Sparkles className="relative w-8 h-8 sm:w-10 sm:h-10 text-primary animate-glow" />
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold">
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Asslyn
                </span>
                <span className="text-primary ml-2">Visit Dubai</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md font-light">
              {t.footer.tagline}
            </p>

            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
              {quickContacts.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <Icon className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="break-all">{contact.text}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-serif font-bold text-lg sm:text-xl">Quick Links</h3>
            <nav className="flex flex-col gap-2 sm:gap-3">
              {[
                { href: "#services", label: t.nav.services },
                { href: "#pricing", label: t.nav.pricing },
                { href: "#about", label: t.nav.about },
                { href: "#contact", label: t.nav.contact },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-serif font-bold text-lg sm:text-xl">{t.contact.followUs}</h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden p-3 sm:p-4 bg-card border-2 border-border hover:border-primary/50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                    aria-label={social.label}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    <div className="relative flex items-center gap-3 sm:gap-4">
                      <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${social.gradient} flex-shrink-0`}>
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {social.label}
                      </span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t-2 border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Asslyn - Visit Dubai. {t.footer.rights}
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <span>Made with</span>
              <span className="text-primary animate-pulse">♥</span>
              <span>in Dubai</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
