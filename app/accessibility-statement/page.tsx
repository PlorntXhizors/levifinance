import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-4xl">
        <Button asChild className="mb-8">
          <Link href="/" className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            חזרה לדף הבית
          </Link>
        </Button>

        <h1 className="text-3xl font-bold mb-6">הצהרת נגישות</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            אנו ב״בית לוי שמאות ופיננסים״ מאמינים כי לכל אדם מגיעה הזכות לקבל מידע ושירותים באופן שווה. אנו מחויבים
            להנגיש את האתר שלנו בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות (התשנ״ח-1998) ולתקנות שהותקנו מכוחו.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">מה עשינו כדי להנגיש את האתר?</h2>
          <ul className="list-disc mr-6 space-y-2">
            <li>התאמנו את האתר לתקן הישראלי (ת״י 5568) לנגישות תכנים באינטרנט ברמת AA.</li>
            <li>
              הוספנו אפשרויות להתאמת הממשק לפי צרכי המשתמש, כולל שינוי גודל טקסט, ניגודיות, הדגשת קישורים וכותרות.
            </li>
            <li>וידאנו שהאתר נגיש למקלדת ולקוראי מסך.</li>
            <li>הקפדנו על ניגודיות צבעים טובה בין הטקסט לרקע.</li>
            <li>הוספנו תיאורי תמונות (alt text) לכל התמונות באתר.</li>
            <li>בנינו את האתר בצורה רספונסיבית המתאימה לכל מכשיר.</li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-3">כיצד להשתמש בתפריט הנגישות?</h2>
          <p>
            בפינה הימנית התחתונה של האתר תוכלו למצוא כפתור עם סמל הנגישות. לחיצה על הכפתור תפתח את תפריט הנגישות המאפשר:
          </p>
          <ul className="list-disc mr-6 space-y-2">
            <li>שינוי גודל הטקסט באתר</li>
            <li>הפעלת מצב ניגודיות גבוהה</li>
            <li>הדגשת קישורים</li>
            <li>הדגשת כותרות</li>
            <li>מעבר למצב שחור-לבן</li>
            <li>הגדלת סמן העכבר</li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-3">מצאתם בעיית נגישות?</h2>
          <p>
            אנו משקיעים מאמצים רבים להנגיש את האתר, אך ייתכן שחלקים מסוימים עדיין אינם נגישים מספיק. אם נתקלתם בבעיית
            נגישות באתר, נשמח לקבל מכם משוב:
          </p>
          <ul className="list-disc mr-6 space-y-2">
            <li>טלפון: 055-649-296</li>
            <li>אימייל: nofarlevi2603@gmail.com</li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-3">רכז נגישות</h2>
          <p>
            רכז הנגישות מטעם החברה הוא נופר לוי. ניתן לפנות אליו בטלפון 055-649-296 או באימייל nofarlevi2603@gmail.com.
          </p>

          <p className="mt-8 text-sm text-gray-500">הצהרת הנגישות עודכנה לאחרונה בתאריך: 12 במאי, 2025</p>
        </div>
      </div>
    </div>
  )
}
