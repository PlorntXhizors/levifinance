"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function Blog() {
  const { t } = useLanguage()

  const articles = [
    {
      id: 1,
      title: "מדריך למשקיעים: איך לבחור נכס השקעה רווחי",
      excerpt:
        "כל מה שצריך לדעת על השקעה בנדל״ן - מבחירת המיקום ועד לחישוב התשואה הצפויה. טיפים מעשיים למשקיעים מתחילים ומנוסים.",
      image: "/real-estate-growth-chart.png",
      author: "נופר לוי",
      date: "15 בינואר 2025",
      readTime: "5",
      category: "השקעות",
    },
    {
      id: 2,
      title: "שינויים בחוק המשכנתאות 2025: מה חשוב לדעת",
      excerpt:
        "סקירה מקיפה של השינויים החדשים בחוק המשכנתאות ואיך הם משפיעים על לוקחי המשכנתא. הכנו עבורכם מדריך מעודכן לכל הפרטים החשובים.",
      image: "/real-estate-contract-signing.png",
      author: "נופר לוי",
      date: "8 בינואר 2025",
      readTime: "7",
      category: "משכנתאות",
    },
    {
      id: 3,
      title: "טעויות נפוצות בעסקאות נדל״ן ואיך להימנע מהן",
      excerpt:
        "רשימת הטעויות הנפוצות ביותר שעושים קונים ומוכרים בעסקאות נדל״ן, וכיצד ליווי מקצועי יכול לחסוך לכם כסף וצרות מיותרות.",
      image: "/financial-advisor-meeting.png",
      author: "נופר לוי",
      date: "2 בינואר 2025",
      readTime: "6",
      category: "ליווי משפטי",
    },
  ]

  const displayedArticles = articles.slice(0, 3)

  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{t.blog.title}</h2>
          <p className="text-lg text-muted-foreground">{t.blog.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article) => (
            <Card
              key={article.id}
              className="border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-navy text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>
                      {article.readTime} {t.blog.readTime}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl text-navy leading-tight hover:text-accent transition-colors">
                  <Link href={`/blog/${article.id}`}>{article.title}</Link>
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</CardDescription>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{article.author}</span>
                  </div>

                  <Button variant="ghost" size="sm" className="group/btn" asChild>
                    <Link href={`/blog/${article.id}`}>
                      <span>{t.blog.readMore}</span>
                      <ArrowLeft className="h-4 w-4 mr-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              {t.blog.viewAll}
              <ArrowLeft className="h-4 w-4 mr-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
