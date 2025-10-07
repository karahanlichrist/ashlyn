"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle, Send } from "lucide-react"
import type { TranslationKey } from "@/lib/translations"

interface ContactSectionProps {
  t: TranslationKey
}

export function ContactSection({ t }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@asslyndubai.com",
      href: "mailto:info@asslyndubai.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 XX XXX XXXX",
      href: "tel:+971XXXXXXXXX",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dubai, UAE",
      href: "#",
      gradient: "from-red-500 to-orange-500",
    },
  ]

  const socialLinks = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/971XXXXXXXXX",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/asslyndubai",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/asslyndubai",
      gradient: "from-pink-600 via-purple-600 to-orange-500",
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 lg:py-40 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-primary">Get In Touch</span>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent mt-2" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed font-light">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <Card className="border-2 hover:border-primary/30 transition-all duration-300 bg-card/50 backdrop-blur-sm shadow-xl">
            <CardHeader className="space-y-2">
              <CardTitle className="text-3xl font-serif font-bold">Send us a message</CardTitle>
              <CardDescription className="text-base">We'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Input
                    placeholder={t.contact.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 text-base border-2 focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder={t.contact.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 text-base border-2 focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="tel"
                    placeholder={t.contact.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 text-base border-2 focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder={t.contact.message}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="text-base border-2 focus:border-primary resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  {t.contact.send}
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-2 hover:border-primary/30 transition-all duration-300 bg-card/50 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-bold">{t.contact.info}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 border-2 border-transparent hover:border-primary/20"
                    >
                      <div
                        className={`p-3 bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg mb-1">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.value}</div>
                      </div>
                    </a>
                  )
                })}
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 transition-all duration-300 bg-card/50 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-bold">{t.contact.followUs}</CardTitle>
                <CardDescription>Connect with us on social media</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex-1 p-6 bg-gradient-to-br ${social.gradient} rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl flex flex-col items-center justify-center gap-3`}
                        aria-label={social.label}
                      >
                        <Icon className="h-8 w-8 text-white" />
                        <span className="text-xs font-semibold text-white tracking-wider uppercase">
                          {social.label}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
