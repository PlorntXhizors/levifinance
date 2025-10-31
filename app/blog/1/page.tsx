"use client"

import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight, TrendingUp, MapPin, Calculator } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function InvestmentGuidePage() {
  const { language } = useLanguage()
  const t = translations[language].blog
  const article = t.articles[1]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <Button asChild className="mb-8">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              {t.backToGuides}
            </Link>
          </Button>

          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="bg-navy text-white px-3 py-1 rounded-full text-xs font-medium">
                  {t.categories[article.category]}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>
                    {article.readTime} {t.readTime}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{t.author}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">{article.title}</h1>

              <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <Image src="/real-estate-growth-chart.png" alt={article.imageAlt} fill className="object-cover" />
              </div>
            </div>

            <div className="text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">{article.intro}</p>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4 flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                {article.sections.location.title}
              </h2>
              <p>{article.sections.location.content}</p>

              <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-navy">
                <h3 className="font-bold text-navy mb-2">{language === "he" ? "טיפ מקצועי:" : "Professional Tip:"}</h3>
                <p className="text-gray-700">{article.sections.location.tip}</p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4 flex items-center gap-2">
                <Calculator className="h-6 w-6" />
                {article.sections.returns.title}
              </h2>
              <p>{article.sections.returns.content}</p>

              <ul className="list-disc mr-6 space-y-2">
                {article.sections.returns.items.map((item, i) => (
                  <li key={i}>
                    <strong>{item.split(":")[0]}:</strong> {item.split(":")[1]}
                  </li>
                ))}
              </ul>

              <p>{article.sections.returns.formula}</p>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4 flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                {article.sections.inspection.title}
              </h2>
              <p>{article.sections.inspection.content}</p>

              <ul className="list-disc mr-6 space-y-2">
                {article.sections.inspection.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="bg-yellow-50 p-6 rounded-lg border-r-4 border-accent">
                <h3 className="font-bold text-navy mb-2">
                  {language === "he" ? "חשוב לזכור:" : "Important to Remember:"}
                </h3>
                <p className="text-gray-700">{article.sections.inspection.reminder}</p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">{language === "he" ? "סיכום" : "Summary"}</h2>
              <p>{article.summary}</p>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">{article.cta.title}</h3>
              <p className="text-gray-700 mb-4">{article.cta.description}</p>
              <Button asChild>
                <Link href="/#contact">{article.cta.button}</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
