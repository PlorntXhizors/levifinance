import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight, AlertTriangle, CheckCircle, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MortgageLawPage() {
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
                <span className="bg-navy text-white px-3 py-1 rounded-full text-xs font-medium">משכנתאות</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>8 בינואר 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>7 דקות קריאה</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>נופר לוי</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                שינויים בחוק המשכנתאות 2025: מה חשוב לדעת
              </h1>

              <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/real-estate-contract-signing.png"
                  alt="שינויים בחוק המשכנתאות 2025"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                שנת 2025 מביאה איתה שינויים משמעותיים בחוק המשכנתאות שישפיעו על כל לוקחי המשכנתא בישראל. במדריך זה נסקור
                את השינויים החשובים ביותר ונסביר איך הם משפיעים עליכם.
              </p>

              <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  שינוי חשוב!
                </h3>
                <p className="text-red-700">
                  החל מינואר 2025, נכנסו לתוקף כללים חדשים לבדיקת כושר האשראי ודרישות הון עצמי מוגברות.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">השינויים העיקריים</h2>

              <h3 className="text-xl font-bold text-navy mb-3">1. בדיקת כושר אשראי מחמירה</h3>
              <p>הבנקים נדרשים כעת לבצע בדיקות ��סודיות יותר של יכולת ההחזר של הלווים. הבדיקה כוללת:</p>
              <ul className="list-disc mr-6 space-y-2">
                <li>ניתוח מעמיק של הכנסות והוצאות במשך 6 חודשים אחרונים</li>
                <li>בדיקת יציבות מקור ההכנסה</li>
                <li>חישוב יכולת החזר בתרחישי עליית ריבית</li>
                <li>בדיקת חובות קיימים ומחויבויות עתידיות</li>
              </ul>

              <h3 className="text-xl font-bold text-navy mb-3 mt-6">2. דרישות הון עצמי</h3>
              <p>שיעור ההון העצמי המינימלי עלה:</p>
              <ul className="list-disc mr-6 space-y-2">
                <li>
                  <strong>דירה ראשונה:</strong> 10% הון עצמי (עלייה מ-5%)
                </li>
                <li>
                  <strong>דירה שנייה:</strong> 25% הון עצמי (עלייה מ-20%)
                </li>
                <li>
                  <strong>דירה שלישית ומעלה:</strong> 35% הון עצמי (עלייה מ-30%)
                </li>
              </ul>

              <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-500">
                <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  יתרונות השינויים
                </h3>
                <p className="text-green-700">השינויים נועדו להגן על הלווים מפני מצוקה פיננסית ולייצב את שוק הנדל״ן.</p>
              </div>

              <h3 className="text-xl font-bold text-navy mb-3 mt-6">3. שינויים בתמהיל המשכנתא</h3>
              <p>הוגבלו האפשרויות לתמהיל משכנתא:</p>
              <ul className="list-disc mr-6 space-y-2">
                <li>מקסימום 67% ריבית משתנה (ירידה מ-75%)</li>
                <li>מינימום 33% ריבית קבועה או צמודה</li>
                <li>הגבלות על משכנתאות בלתי צמודות</li>
              </ul>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">איך השינויים משפיעים עליכם?</h2>

              <h3 className="text-xl font-bold text-navy mb-3">רוכשי דירה ראשונה</h3>
              <p>למרות העלייה בדרישות ההון העצמי, קיימות עדיין תוכניות סיוע ממשלתיות:</p>
              <ul className="list-disc mr-6 space-y-2">
                <li>מחיר למשתכן - עדיין זמין עם תנאים מועדפים</li>
                <li>הלוואות מוגדלות לזוגות צעירים</li>
                <li>תוכניות סיוע לקבוצות מיוחדות</li>
              </ul>

              <h3 className="text-xl font-bold text-navy mb-3 mt-6">משקיעים</h3>
              <p>המשקיעים יושפעו יותר מהשינויים:</p>
              <ul className="list-disc mr-6 space-y-2">
                <li>צורך בהון עצמי גבוה יותר</li>
                <li>בדיקות קפדניות יותר של כושר האשראי</li>
                <li>ריביות גבוהות יותר על נכסי השקעה</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-navy">
                <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  המלצה מקצועית
                </h3>
                <p className="text-gray-700">
                  בעקבות השינויים, חשוב יותר מתמיד לקבל ייעוץ מקצועי לפני לקיחת משכנתא. תכנון נכון יכול לחסוך לכם אלפי
                  שקלים.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">איך להתכונן?</h2>
              <ol className="list-decimal mr-6 space-y-2">
                <li>
                  <strong>צברו הון עצמי:</strong> התחילו לחסוך מוקדם יותר
                </li>
                <li>
                  <strong>ארגנו את המסמכים:</strong> הכינו תיק מסמכים מלא ומעודכן
                </li>
                <li>
                  <strong>שפרו את הפרופיל האשראי:</strong> סגרו חובות קטנים וייצבו הכנסות
                </li>
                <li>
                  <strong>קבלו ייעוץ מקצועי:</strong> עבדו עם יועץ משכנתאות מנוסה
                </li>
              </ol>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">סיכום</h2>
              <p>
                השינויים בחוק המשכנתאות מחייבים הכנה טובה יותר ותכנון מוקדם. למרות האתגרים, עדיין ניתן לקבל משכנתא
                במגוון תנאים. המפתח הוא הכנה נכונה וליווי מקצועי.
              </p>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">זקוקים לייעוץ משכנתאות?</h3>
              <p className="text-gray-700 mb-4">
                המומחים שלנו עוקבים אחר כל השינויים ויכולים לעזור לכם למצוא את התמהיל הטוב ביותר.
              </p>
              <Button asChild>
                <Link href="/#contact">קבלו ייעוץ משכנתאות</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
