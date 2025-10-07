import type React from "react"
import type { Metadata } from "next"
import { Cinzel, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import "./globals.css"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Asslyn - Visit Dubai | Luxury Dubai Tourism & Travel Services",
  description:
    "Experience Dubai with Asslyn. Premium visa services, yacht tours, desert safari, jetski adventures, and luxury car tours. Your gateway to Dubai.",
  keywords: "Dubai tourism, Dubai visa, yacht tour Dubai, desert safari, jetski Dubai, Dubai travel",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${dmSans.variable} ${cinzel.variable} antialiased`}>
        <LoadingScreen />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
