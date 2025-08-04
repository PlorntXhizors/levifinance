import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight, XCircle, Shield, AlertTriangle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RealEstateMistakesPage() {
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
                <span className="bg-navy text-white px-3 py-1 rounded-full text-xs font-medium">ליווי משפטי</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>2 בינואר 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>6 דקות קריאה</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>נופר לוי</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                טעויות נפוצות בעסקאות נדל״ן ואיך להימנע מהן
              </h1>

              <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/financial-advisor-meeting.png"
                  alt="טעויות נפוצות בעסקאות נדל״ן"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                עסקאות נדל״ן הן מהמורכבות והמשמעותיות ביותר שאנו עושים בחיינו. טעות אחת יכולה לעלות אלפי שקלים ולגרום
                לבעיות משפטיות ופיננסיות. במדריך זה נסקור את הטעויות הנפוצות ביותר ונלמד איך להימנע מהן.
              </p>

              <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  זהירות!
                </h3>
                <p className="text-red-700">
                  הטעויות הבאות עלולות לעלות לכם עשרות אלפי שקלים. קריאה זהירה יכולה לחסוך לכם כסף רב.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">הטעויות הנפוצות ביותר</h2>

              <div className="space-y-8">
                <div className="border-r-4 border-red-400 pr-6">
                  <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6 text-red-500" />
                    טעות #1: אי ביצוע בדיקות יסודיות
                  </h3>
                  <p className="mb-3">
                    <strong>הטעות:</strong> רכישת נכס ללא בדיקת מהנדס, בדיקת זכויות בטאבו.
                  </p>
                  <p className="mb-3">
                    <strong>המחיר:</strong> גילוי בעיות מבניות, חובות נסתרים או בעיות משפטיות לאחר הרכישה.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-700">
                      <strong>הפתרון:</strong> בצעו תמיד בדיקת מהנדס מוסמך, בדקו זכויות בטאבו ודרשו אישור על מצב חובות
                      ועד הבית.
                    </p>
                  </div>
                </div>

                <div className="border-r-4 border-red-400 pr-6">
                  <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6 text-red-500" />
                    טעות #2: חתימה על הסכם ללא עורך דין
                  </h3>
                  <p className="mb-3">
                    <strong>הטעות:</strong> חתימה על הסכם מכר או הסכם זכויות ללא ליווי משפטי מקצועי.
                  </p>
                  <p className="mb-3">
                    <strong>המחיר:</strong> סעיפים לא הוגנים, חוסר הגנה במקרה של הפרת הסכם, או אי הבנת המחויבויות.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-700">
                      <strong>הפתרון:</strong> עבדו תמיד עם עורך דין מנוסה בנדל״ן שיבדוק ויתאים את ההסכם לטובתכם.
                    </p>
                  </div>
                </div>

                <div className="border-r-4 border-red-400 pr-6">
                  <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6 text-red-500" />
                    טעות #3: אי הבנת המיסוי
                  </h3>
                  <p className="mb-3">
                    <strong>הטעות:</strong> אי הכרת חובות המס הכרוכות ברכישה או מכירה של נכס.
                  </p>
                  <p className="mb-3">
                    <strong>המחיר:</strong> תשלום מיסים גבוהים מהנדרש או קנסות על אי דיווח נכון.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-700">
                      <strong>הפתרון:</strong> קבלו ייעוץ מיסוי מקצועי לפני העסקה וודאו שאתם מכירים את כל החובות.
                    </p>
                  </div>
                </div>

                <div className="border-r-4 border-red-400 pr-6">
                  <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6 text-red-500" />
                    טעות #4: בחירת משכנתא לא מתאימה
                  </h3>
                  <p className="mb-3">
                    <strong>הטעות:</strong> לקיחת משכנתא ללא השוואת תנאים או בחירת תמהיל לא מתאים.
                  </p>
                  <p className="mb-3">
                    <strong>המחיר:</strong> תשלום עשרות אלפי שקלים מיותרים לאורך שנות המשכנתא.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-700">
                      <strong>הפתרון:</strong> עבדו עם יועץ משכנתאות מקצועי שיבנה עבורכם תמהיל מותאם אישית.
                    </p>
                  </div>
                </div>

                <div className="border-r-4 border-red-400 pr-6">
                  <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6 text-red-500" />
                    טעות #5: אי ביצוע שמאות מקצועית
                  </h3>
                  <p className="mb-3">
                    <strong>הטעות:</strong> רכישה או מכירה ללא הערכת שווי מקצועית של הנכס.
                  </p>
                  <p className="mb-3">
                    <strong>המחיר:</strong> תשלום יתר או מכירה במחיר נמוך מהשווי האמיתי.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-700">
                      <strong>הפתרון:</strong> בצעו שמאות מקצועית לפני כל עסקה כדי לוודא שאתם משלמים או מקבלים מחיר
                      הוגן.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-navy mt-8">
                <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  איך ליווי מקצועי מונע טעויות?
                </h3>
                <p className="text-gray-700">
                  ליווי מקצועי מקיף כולל עורך דין, יועץ משכנתאות ושמאי מקצועי. הם יכולים לזהות בעיות מוקדם, לנהל משא
                  ומתן ולוודא שהעסקה מתבצעת בצורה הטובה ביותר עבורכם.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">רשימת בדיקות חובה</h2>
              <p>לפני כל עסקת נדל״ן, ודאו שביצעתם את הבדיקות הבאות:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-navy mb-2">בדיקות טכניות</h4>
                  <ul className="list-disc mr-4 space-y-1 text-sm">
                    <li>בדיקת מהנדס מוסמך</li>
                    <li>בדיקת מערכות חשמל ואינסטלציה</li>
                    <li>בדיקת איטום ובידוד</li>
                    <li>בדיקת מצב המעלית</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-navy mb-2">בדיקות משפטיות</h4>
                  <ul className="list-disc mr-4 space-y-1 text-sm">
                    <li>בדיקת זכויות בטאבו</li>
                    <li>בדיקת עיקולים ומשכנתאות</li>
                    <li>בדיקת תוכניות בנייה</li>
                    <li>בדיקת חובות ועד הבית</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">סיכום</h2>
              <p>
                עסקאות נדל״ן מורכבות ודורשות ידע מקצועי. הטעויות הנפוצות יכולות לעלות יקר, אך ניתן להימנע מהן בקלות עם
                הכנה נכונה וליווי מקצועי. השקעה בליווי מקצועי תחסוך לכם כסף רב ותבטיח עסקה בטוחה ומוצלחת.
              </p>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">זקוקים לליווי מקצועי?</h3>
              <p className="text-gray-700 mb-4">
                אנו מציעים ליווי מלא לעסקאות נדל״ן - משפטי, פיננסי ושמאי. צרו קשר לייעוץ ללא התחייבות.
              </p>
              <Button asChild>
                <Link href="/#contact">קבלו ליווי מקצועי</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
