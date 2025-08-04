import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AppraiserMindsetPage() {
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
                <span className="bg-navy text-white px-3 py-1 rounded-full text-xs font-medium">שמאות מקרקעין</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>18 בדצמבר 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>9 דקות קריאה</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>נופר לוי</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                איך לנהל עסקת נדל״ן בראש של שמאי/ת מקרקעין
              </h1>

              <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/modern-real-estate-office.png"
                  alt="חשיבה כמו שמאי מקרקעין"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                שמאי מקרקעין מוסמך הוא מומחה בהערכת שווי נכסים, אך הידע והכלים שבהם הוא משתמש יכולים לשרת כל אדם המעורב
                בעסקת נדל"ן. אימוץ "ראש של שמאי" בעת רכישה או מכירת נכס יכול להוביל להחלטות מושכלות יותר ולתוצאות
                פיננסיות טובות יותר. במאמר זה נחשוף את הכלים, השיקולים והגישות שמנחים שמאי מקרקעין מקצועי, ונראה כיצד
                ניתן ליישם אותם בעסקאות נדל"ן פרטיות.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-navy">
                <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  מהי שמאות מקרקעין?
                </h3>
                <p className="text-gray-700">
                  שמאות מקרקעין היא תחום מקצועי העוסק בהערכת שווי נכסי נדל"ן. שמאי מקרקעין מוסמך בישראל הוא בעל רישיון
                  ממשרד המשפטים, לאחר שעמד בדרישות השכלה, התמחות ובחינות מחמירות. השמאי מסתמך על מתודולוגיות מקצועיות,
                  ניתוח נתונים ומידע שוק כדי להעריך את שווי הנכס בצורה אובייקטיבית ומדויקת ככל האפשר.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">עקרונות היסוד בחשיבה שמאית</h2>

              <h3 className="text-xl font-bold text-navy mb-3">1. אובייקטיביות וניתוח מבוסס נתונים</h3>
              <p>
                שמאי מקרקעין מתבסס על נתונים ועובדות, לא על תחושות בטן או רגשות. בעת בחינת נכס, הוא אוסף מידע מקיף על:
              </p>

              <ul className="list-disc mr-6 space-y-2">
                <li>
                  <strong>עסקאות השוואה:</strong> מחירי עסקאות דומות שבוצעו לאחרונה באזור
                </li>
                <li>
                  <strong>מאפייני הנכס:</strong> גודל, מצב פיזי, תכנון, גיל המבנה וכדומה
                </li>
                <li>
                  <strong>מיקום:</strong> ניתוח מיקרו ומאקרו של הסביבה והשפעתה על ערך הנכס
                </li>
                <li>
                  <strong>מצב תכנוני:</strong> זכויות בנייה, ייעוד קרקע, מגבלות תכנוניות
                </li>
                <li>
                  <strong>מצב משפטי:</strong> זכויות קנייניות, שעבודים, הסכמים מיוחדים
                </li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
                <h4 className="font-bold text-navy mb-3">כיצד ליישם:</h4>
                <p>
                  לפני קבלת החלטה על רכישה או מכירה, אספו נתונים על עסקאות דומות באזור. השתמשו במאגרי מידע זמינים כמו
                  אתר רשות המיסים (מידע על עסקאות), אתרי נדל"ן ומידע מלשכת רישום המקרקעין. הימנעו מהחלטות המבוססות על
                  "תחושות" או "הזדמנויות שלא יחזרו".
                </p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">סיכום</h2>

              <p>
                אימוץ "ראש של שמאי" בעסקאות נדל"ן מאפשר קבלת החלטות מושכלות יותר, המבוססות על נתונים אובייקטיביים ולא על
                רגשות. הגישה השמאית מספקת כלים מקצועיים לניתוח עסקאות, הערכת שווי נכסים וזיהוי הזדמנויות והסיכונים
                הכרוכים בהן.
              </p>

              <p>
                אמנם לא כל אחד יכול להיות שמאי מקרקעין מוסמך, אך כל אחד יכול לאמץ את עקרונות החשיבה השמאית: הסתמכות על
                נתונים, ניתוח מעמיק, בדיקות יסודיות וראייה ארוכת טווח. בעסקאות משמעותיות, כדאי תמיד להיעזר בשמאי מקרקעין
                מוסמך, שיכול לספק חוות דעת מקצועית ואובייקטיבית.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-navy my-6">
                <h4 className="font-bold text-navy mb-2">זכרו:</h4>
                <p>
                  בעולם הנדל"ן, החלטות מושכלות מבוססות על נתונים ולא על תחושות בטן. אימוץ גישה מקצועית ואובייקטיבית,
                  בדומה לזו של שמאי מקרקעין, יכול לחסוך לכם כסף רב ולהוביל לעסקאות מוצלחות יותר.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">זקוקים לשירותי שמאות מקצועיים?</h3>
              <p className="text-gray-700 mb-4">
                צוות השמאים המוסמכים שלנו יכול לסייע לכם בהערכת שווי נכסים, בדיקות לפני רכישה וליווי עסקאות נדל"ן.
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
