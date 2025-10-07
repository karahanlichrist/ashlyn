"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { translations, type Language } from "@/lib/translations"
import { MapPin, Users, Building2, Palmtree, ShoppingBag, Utensils } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DubaiPage() {
  const [currentLang, setCurrentLang] = useState<Language>("en")
  const t = translations[currentLang]

  const dubaiInfo = {
    en: {
      title: "Discover Dubai",
      subtitle: "The City of Gold and Innovation",
      intro:
        "Dubai is a mesmerizing blend of ancient traditions and futuristic innovation. From towering skyscrapers to golden deserts, this emirate offers experiences unlike anywhere else in the world.",
      facts: [
        { icon: MapPin, title: "Location", description: "United Arab Emirates, Arabian Peninsula" },
        { icon: Users, title: "Population", description: "Over 3.5 million residents" },
        { icon: Building2, title: "Famous For", description: "Burj Khalifa, Palm Jumeirah, Dubai Mall" },
        { icon: Palmtree, title: "Climate", description: "Sunny year-round with warm winters" },
        { icon: ShoppingBag, title: "Shopping", description: "World-class malls and traditional souks" },
        { icon: Utensils, title: "Cuisine", description: "International dining and Arabic delicacies" },
      ],
      sections: [
        {
          title: "Modern Marvels",
          content:
            "Dubai is home to the world's tallest building, the Burj Khalifa, standing at 828 meters. The city's skyline is a testament to human ambition and architectural excellence.",
        },
        {
          title: "Cultural Heritage",
          content:
            "Despite its modern facade, Dubai preserves its rich Bedouin heritage. Visit the Al Fahidi Historical District and traditional souks to experience authentic Arabian culture.",
        },
        {
          title: "Desert Adventures",
          content:
            "The Arabian Desert surrounding Dubai offers thrilling experiences from dune bashing to camel rides, providing a stark contrast to the urban landscape.",
        },
        {
          title: "Luxury & Entertainment",
          content:
            "Dubai is synonymous with luxury. From 7-star hotels to world-class shopping and entertainment, the city caters to the most discerning travelers.",
        },
      ],
    },
    tr: {
      title: "Dubai'yi Keşfedin",
      subtitle: "Altın ve İnovasyon Şehri",
      intro:
        "Dubai, antik gelenekler ve fütüristik inovasyonun büyüleyici bir karışımıdır. Yükselen gökdelenlerden altın çöllere kadar, bu emirlik dünyanın başka hiçbir yerinde olmayan deneyimler sunar.",
      facts: [
        { icon: MapPin, title: "Konum", description: "Birleşik Arap Emirlikleri, Arap Yarımadası" },
        { icon: Users, title: "Nüfus", description: "3,5 milyondan fazla sakin" },
        { icon: Building2, title: "Ünlü Olduğu", description: "Burj Khalifa, Palm Jumeirah, Dubai Mall" },
        { icon: Palmtree, title: "İklim", description: "Yıl boyunca güneşli, ılık kışlar" },
        { icon: ShoppingBag, title: "Alışveriş", description: "Dünya standartlarında AVM'ler ve geleneksel çarşılar" },
        { icon: Utensils, title: "Mutfak", description: "Uluslararası yemekler ve Arap lezzetleri" },
      ],
      sections: [
        {
          title: "Modern Harikalar",
          content:
            "Dubai, 828 metre yüksekliğiyle dünyanın en yüksek binası Burj Khalifa'ya ev sahipliği yapar. Şehrin silueti, insan hırsının ve mimari mükemmelliğin bir kanıtıdır.",
        },
        {
          title: "Kültürel Miras",
          content:
            "Modern görünümüne rağmen Dubai, zengin Bedevi mirasını korur. Otantik Arap kültürünü deneyimlemek için Al Fahidi Tarihi Bölgesi ve geleneksel çarşıları ziyaret edin.",
        },
        {
          title: "Çöl Maceraları",
          content:
            "Dubai'yi çevreleyen Arap Çölü, kum tepesi sürüşünden deve turlarına kadar heyecan verici deneyimler sunar ve kentsel manzarayla keskin bir tezat oluşturur.",
        },
        {
          title: "Lüks ve Eğlence",
          content:
            "Dubai, lüksün eş anlamlısıdır. 7 yıldızlı otellerden dünya standartlarında alışveriş ve eğlenceye kadar, şehir en seçkin gezginlere hitap eder.",
        },
      ],
    },
    ar: {
      title: "اكتشف دبي",
      subtitle: "مدينة الذهب والابتكار",
      intro:
        "دبي مزيج ساحر من التقاليد القديمة والابتكار المستقبلي. من ناطحات السحاب الشاهقة إلى الصحاري الذهبية، تقدم هذه الإمارة تجارب لا مثيل لها في أي مكان آخر في العالم.",
      facts: [
        { icon: MapPin, title: "الموقع", description: "الإمارات العربية المتحدة، شبه الجزيرة العربية" },
        { icon: Users, title: "السكان", description: "أكثر من 3.5 مليون نسمة" },
        { icon: Building2, title: "مشهورة بـ", description: "برج خليفة، نخلة جميرا، دبي مول" },
        { icon: Palmtree, title: "المناخ", description: "مشمس على مدار العام مع شتاء دافئ" },
        { icon: ShoppingBag, title: "التسوق", description: "مراكز تسوق عالمية وأسواق تقليدية" },
        { icon: Utensils, title: "المطبخ", description: "مطاعم عالمية وأطباق عربية" },
      ],
      sections: [
        {
          title: "العجائب الحديثة",
          content:
            "دبي موطن لأطول مبنى في العالم، برج خليفة، الذي يبلغ ارتفاعه 828 مترًا. أفق المدينة شهادة على الطموح البشري والتميز المعماري.",
        },
        {
          title: "التراث الثقافي",
          content:
            "على الرغم من واجهتها الحديثة، تحافظ دبي على تراثها البدوي الغني. قم بزيارة حي الفهيدي التاريخي والأسواق التقليدية لتجربة الثقافة العربية الأصيلة.",
        },
        {
          title: "مغامرات الصحراء",
          content:
            "تقدم الصحراء العربية المحيطة بدبي تجارب مثيرة من التزلج على الكثبان الرملية إلى ركوب الجمال، مما يوفر تباينًا صارخًا مع المشهد الحضري.",
        },
        {
          title: "الفخامة والترفيه",
          content:
            "دبي مرادف للفخامة. من الفنادق ذات السبع نجوم إلى التسوق والترفيه على مستوى عالمي، تلبي المدينة احتياجات المسافرين الأكثر تميزًا.",
        },
      ],
    },
  }

  const content = dubaiInfo[currentLang]

  return (
    <div className="min-h-screen">
      <Header t={t} currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              {content.title}
            </h1>
            <p className="text-2xl text-primary font-semibold mb-8">{content.subtitle}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{content.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {content.facts.map((fact, index) => {
              const Icon = fact.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-2 hover:border-primary/30"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{fact.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{fact.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.sections.map((section, index) => (
              <Card key={index} className="hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer t={t} />
    </div>
  )
}
