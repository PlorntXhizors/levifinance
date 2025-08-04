import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowLeft, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "מדריך למשקיעים: איך לבחור נכס השקעה רווחי",
      excerpt:
        "כל מה שצריך לדעת על השקעה בנדל״ן - מבחירת המיקום ועד לחישוב התשואה הצפויה. טיפים מעשיים למשקיעים מתחילים ומנוסים.",
      image: "/real-estate-growth-chart.png",
      author: "נופר לוי",
      date: "15 בינואר 2025",
      readTime: "5 דקות קריאה",
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
      readTime: "7 דקות קריאה",
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
      readTime: "6 דקות קריאה",
      category: "ליווי משפטי",
    },
    {
      id: 4,
      title: "3 דברים שחייבים לבדוק לפני שקונים דירה להשקעה",
      excerpt:
        "בדיקות קריטיות שיכולות להבדיל בין השקעה מוצלחת לכישלון יקר. מדריך מקיף לבדיקות הכרחיות לפני רכישת נכס להשקעה.",
      image: "/luxury-apartment-interior.png",
      author: "נופר לוי",
      date: "25 בדצמבר 2024",
      readTime: "8 דקות קריאה",
      category: "השקעות",
    },
    {
      id: 5,
      title: "איך לנהל עסקת נדל״ן בראש של שמאי/ת מקרקעין",
      excerpt:
        "גישה מקצועית לניהול עסקאות נדל״ן מנקודת המבט של שמאי מקרקעין. כלים וטכניקות להערכה נכונה ולקבלת החלטות מושכלות.",
      image: "/modern-real-estate-office.png",
      author: "נופר לוי",
      date: "18 בדצמבר 2024",
      readTime: "9 דקות קריאה",
      category: "שמאות מקרקעין",
    },
    {
      id: 6,
      title: "מה נותן יתרון לעשות שמאות מוקדמת לנכס לפני רכישה",
      excerpt:
        "היתרונות המשמעותיים של ביצוע הערכת שווי מקצועית לפני רכישת נכס. כיצד שמאות מוקדמת יכולה לחסוך כסף ולמנוע טעויות יקרות.",
      image: "/modern-apartment-building.png",
      author: "נופר לוי",
      date: "10 בדצמבר 2024",
      readTime: "7 דקות קריאה",
      category: "שמאות מקרקעין",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container">
          <Button asChild className="mb-8">
            <Link href="/" className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              חזרה לדף הבית
            </Link>
          </Button>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">המדריכים שלנו</h1>
            <p className="text-lg text-muted-foreground">מאמרים ומדריכים מקצועיים בתחומי הנדל״ן, המשכנתאות והשמאות</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
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
                      <span>{article.readTime}</span>
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
                        <span>קרא עוד</span>
                        <ArrowLeft className="h-4 w-4 mr-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
