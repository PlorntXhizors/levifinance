import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight, TrendingUp, MapPin, Calculator } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function InvestmentGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <Button asChild className="mb-8">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              חזרה למדריכים
            </Link>
          </Button>

          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="bg-navy text-white px-3 py-1 rounded-full text-xs font-medium">השקעות</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>15 בינואר 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>5 דקות קריאה</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>נופר לוי</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                מדריך למשקיעים: איך לבחור נכס השקעה רווחי
              </h1>

              <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <Image src="/real-estate-growth-chart.png" alt="מדריך השקעה בנדל״ן" fill className="object-cover" />
              </div>
            </div>

            <div className="text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                השקעה בנדל״ן נחשבת לאחת ההשקעות הבטוחות והרווחיות ביותר, אך בחירת הנכס הנכון דורשת ידע, תכנון ובדיקות
                מעמיקות. במדריך זה נסקור את השלבים החשובים ביותר לבחירת נכס השקעה מוצלח.
              </p>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4 flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                שלב 1: בחירת המיקום
              </h2>
              <p>
                המיקום הוא הגורם החשוב ביותר בהשקעה בנדל״ן. חפשו אזורים עם פוטנציאל צמיחה, קרבה לתחבורה ציבורית, מוסדות
                חינוך איכותיים ומרכזי תעסוקה. אזורים בפיתוח או שכונות שעוברות התחדשות עירונית מציעים לרוב פוטנציאל עליית
                ערך גבוה.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-navy">
                <h3 className="font-bold text-navy mb-2">טיפ מקצועי:</h3>
                <p className="text-gray-700">
                  בדקו תוכניות פיתוח עתידיות באזור - פרויקטי תשתית, קווי רכבת קלה או מרכזי מסחר חדשים יכולים להעלות
                  משמעותית את ערך הנכס.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4 flex items-center gap-2">
                <Calculator className="h-6 w-6" />
                שלב 2: חישוב התשואה הצפויה
              </h2>
              <p>לפני רכישת נכס השקעה, חשוב לחשב את התשואה הצפויה. התשואה מורכבת משני מרכיבים עיקריים:</p>

              <ul className="list-disc mr-6 space-y-2">
                <li>
                  <strong>תשואה שוטפת:</strong> הכנסה חודשית משכירות מול ההשקעה הכוללת
                </li>
                <li>
                  <strong>תשואת הון:</strong> עליית ערך הנכס לאורך זמן
                </li>
              </ul>

              <p>נוסחה בסיסית לחישוב תשואה שוטפת: (שכירות שנתית ÷ מחיר הנכס) × 100 = אחוז תשואה שנתית</p>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4 flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                שלב 3: בדיקת מצב הנכס והזכויות
              </h2>
              <p>לפני חתימה על הסכם, חיוני לבצע בדיקות יסודיות:</p>

              <ul className="list-disc mr-6 space-y-2">
                <li>בדיקת מהנדס - מצב המבנה, מערכות החשמל והאינסטלציה</li>
                <li>בדיקת זכויות בטאבו - וודאו שאין עיקולים או משכנתאות</li>
                <li>בדיקת תוכניות בנייה - האם יש אפשרות להרחבה או שיפוץ</li>
                <li>בדיקת ועד הבית - גובה האגרות והחובות הקיימים</li>
              </ul>

              <div className="bg-yellow-50 p-6 rounded-lg border-r-4 border-accent">
                <h3 className="font-bold text-navy mb-2">חשוב לזכור:</h3>
                <p className="text-gray-700">
                  השקעה בנדל״ן היא השקעה ארוכת טווח. התאזרו בסבלנות ואל תצפו לתשואות מיידיות. השוק הנדל״ן עובר מחזורים,
                  והמפתח להצלחה הוא בחירה נכונה וסבלנות.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">סיכום</h2>
              <p>
                השקעה מוצלחת בנדל״ן דורשת מחקר יסודי, תכנון פיננסי נכון וליווי מקצועי. אנו ב״בית לוי״ מציעים ליווי מלא
                למשקיעים - מבדיקת הנכס ועד לסיום העסקה. צרו איתנו קשר לייעוץ אישי ומקצועי.
              </p>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">מעוניינים בליווי מקצועי?</h3>
              <p className="text-gray-700 mb-4">
                צוות המומחים שלנו יכול לסייע לכם בכל שלבי ההשקעה - מבחירת הנכס ועד לסיום העסקה.
              </p>
              <Button asChild>
                <Link href="/#contact">צרו קשר לייעוץ</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
