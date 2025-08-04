import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight, CheckCircle, AlertTriangle, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function InvestmentPropertyChecklist() {
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
                  <span>25 בדצמבר 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>8 דקות קריאה</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>נופר לוי</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                3 דברים שחייבים לבדוק לפני שקונים דירה להשקעה
              </h1>

              <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/luxury-apartment-interior.png"
                  alt="בדיקות לפני רכישת דירה להשקעה"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                השקעה בנדל"ן היא אחת הדרכים הפופולריות והבטוחות יחסית לבניית הון ויצירת הכנסה פסיבית. אולם, רכישת דירה
                להשקעה דורשת בדיקה מעמיקה ומקצועית כדי להבטיח תשואה אופטימלית וצמצום סיכונים. במאמר זה נתמקד בשלושה
                היבטים קריטיים שחובה לבדוק לפני רכישת דירה להשקעה.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-navy">
                <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  מדוע בדיקות מקדימות הן קריטיות?
                </h3>
                <p className="text-gray-700">
                  על פי נתוני רשות המיסים, כ-15% מהמשקיעים בנדל"ן מוכרים את הנכס תוך שנתיים מהרכישה בשל טעויות בבחירת
                  הנכס. בדיקות מקדימות יסודיות יכולות למנוע הפסדים משמעותיים ולהבטיח השקעה מוצלחת לטווח ארוך.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. בדיקת כדאיות כלכלית ותשואה צפויה</h2>

              <p>
                הבדיקה הכלכלית היא אבן היסוד של כל השקעת נדל"ן. בדיקה זו צריכה להיות מקיפה ולהתחשב בכל ההיבטים הפיננסיים
                של העסקה:
              </p>

              <h3 className="text-xl font-bold text-navy mb-3">חישוב תשואה שוטפת</h3>
              <p>
                התשואה השוטפת מחושבת על ידי חלוקת ההכנסה השנתית נטו (לאחר הוצאות) במחיר הרכישה הכולל (כולל מיסים, שיפוץ
                ועלויות נלוות):
              </p>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 my-4">
                <p className="font-bold text-center">תשואה שוטפת = (הכנסה שנתית נטו ÷ עלות רכישה כוללת) × 100%</p>
              </div>

              <p>
                <strong>דוגמה מספרית:</strong> דירה שעלותה הכוללת 1.5 מיליון ₪ (כולל מס רכישה, שיפוץ ועלויות עו"ד) מניבה
                הכנסה חודשית של 5,000 ₪. בניכוי הוצאות שוטפות של 500 ₪ לחודש, ההכנסה השנתית נטו היא 54,000 ₪. התשואה
                השוטפת היא: (54,000 ÷ 1,500,000) × 100% = 3.6%.
              </p>

              <h3 className="text-xl font-bold text-navy mb-3">בדיקת עלויות נלוות</h3>
              <p>יש לקחת בחשבון את כל העלויות הנלוות לרכישה ולהחזקת הנכס:</p>

              <ul className="list-disc mr-6 space-y-2">
                <li>
                  <strong>מס רכישה:</strong> עבור משקיעים, שיעור המס נע בין 8% ל-10% ממחיר הנכס (נכון לשנת 2024)
                </li>
                <li>
                  <strong>עלויות שיפוץ והתאמה:</strong> לעיתים קרובות נדרשת השקעה נוספת להשמשת הנכס להשכרה
                </li>
                <li>
                  <strong>ארנונה ותחזוקה שוטפת:</strong> עלויות שיש לקחת בחשבון בתקופות שבהן הנכס אינו מושכר
                </li>
                <li>
                  <strong>דמי ניהול:</strong> אם מעסיקים חברת ניהול נכסים (בד"כ 5%-10% מדמי השכירות)
                </li>
                <li>
                  <strong>מס הכנסה:</strong> על הכנסות משכירות (בהתאם למסלול המיסוי שנבחר)
                </li>
              </ul>

              <div className="bg-yellow-50 p-6 rounded-lg border-r-4 border-yellow-500 my-6">
                <h4 className="font-bold text-navy mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  טיפ מקצועי
                </h4>
                <p>
                  בחנו את מסלולי המיסוי השונים על הכנסות משכירות: מסלול פטור (עד תקרה מסוימת), מסלול 10% או מסלול מס
                  שולי. התייעצו עם רואה חשבון לבחירת המסלול האופטימלי עבורכם בהתאם לנסיבות האישיות שלכם.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. בדיקת מצב משפטי ותכנוני</h2>

              <p>
                בדיקת המצב המשפטי והתכנוני של הנכס היא קריטית להבטחת השקעה בטוחה. טעויות בתחום זה עלולות להוביל לעלויות
                בלתי צפויות משמעותיות ואף לאובדן ההשקעה כולה.
              </p>

              <h3 className="text-xl font-bold text-navy mb-3">בדיקת זכויות ורישום</h3>

              <ul className="list-disc mr-6 space-y-2">
                <li>
                  <strong>נסח טאבו:</strong> יש לוודא שהנכס רשום על שם המוכר, ולבדוק אם קיימים שעבודים, משכנתאות או
                  עיקולים
                </li>
                <li>
                  <strong>הסכמי שיתוף:</strong> במקרה של בעלות משותפת, יש לבדוק הסכמי שיתוף קיימים
                </li>
                <li>
                  <strong>זכויות בנייה:</strong> בדיקת זכויות בנייה נוספות שעשויות להגדיל את ערך הנכס בעתיד
                </li>
                <li>
                  <strong>היתרי בנייה:</strong> וידוא שכל התוספות והשינויים בנכס נעשו בהיתר כדין
                </li>
              </ul>

              <h3 className="text-xl font-bold text-navy mb-3 mt-6">בדיקת תב"ע ותוכניות עתידיות</h3>

              <p>תכנית בניין עיר (תב"ע) והתוכניות העתידיות באזור יכולות להשפיע דרמטית על ערך הנכס. יש לבדוק:</p>

              <ul className="list-disc mr-6 space-y-2">
                <li>
                  <strong>תוכניות פיתוח:</strong> פרויקטי תשתית, תחבורה או מסחר שעשויים להעלות את ערך הנכס
                </li>
                <li>
                  <strong>תוכניות בנייה:</strong> האם מתוכננים פרויקטים חדשים שעלולים להגדיל את ההיצע ולהוריד מחירים
                </li>
                <li>
                  <strong>שינויי ייעוד:</strong> האם יש תוכניות לשינוי ייעוד הקרקע באזור
                </li>
                <li>
                  <strong>התחדשות עירונית:</strong> תוכניות פינוי-בינוי או תמ"א 38 שעשויות להשפיע על הנכס
                </li>
              </ul>

              <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-500 my-6">
                <h4 className="font-bold text-navy mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  המלצה מקצועית
                </h4>
                <p>
                  מומלץ להיעזר בשמאי מקרקעין מוסמך לביצוע בדיקה מקיפה של המצב התכנוני. שמאי יכול לזהות הזדמנויות והגבלות
                  שאינן גלויות לעין, ולהעריך את השפעתן על ערך הנכס בטווח הקצר והארוך.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. בדיקת פוטנציאל השכרה וביקוש באזור</h2>

              <p>
                גם אם הנכס במצב מצוין ובמחיר אטרקטיבי, ללא ביקוש להשכרה לא תוכלו להפיק ממנו תשואה. בדיקת פוטנציאל ההשכרה
                היא קריטית להצלחת ההשקעה.
              </p>

              <h3 className="text-xl font-bold text-navy mb-3">ניתוח שוק ההשכרה המקומי</h3>

              <ul className="list-disc mr-6 space-y-2">
                <li>
                  <strong>מחירי שכירות:</strong> בדיקת מחירי השכירות הממוצעים לנכסים דומים באזור
                </li>
                <li>
                  <strong>זמן השכרה ממוצע:</strong> כמה זמן לוקח להשכיר נכס דומה באזור
                </li>
                <li>
                  <strong>שיעור תפוסה:</strong> האם יש ביקוש יציב לאורך השנה או שיש תקופות "מתות"
                </li>
                <li>
                  <strong>פרופיל השוכרים:</strong> סטודנטים, משפחות, עובדים זרים - כל קהל יעד דורש התאמות שונות
                </li>
              </ul>

              <h3 className="text-xl font-bold text-navy mb-3 mt-6">גורמים המשפיעים על הביקוש</h3>

              <p>יש לבחון גורמים שמשפיעים על הביקוש להשכרה באזור:</p>

              <ul className="list-disc mr-6 space-y-2">
                <li>
                  <strong>נגישות לתחבורה:</strong> קרבה לתחנות רכבת, כבישים ראשיים ותחבורה ציבורית
                </li>
                <li>
                  <strong>מוסדות חינוך:</strong> קרבה לבתי ספר, אוניברסיטאות ומכללות
                </li>
                <li>
                  <strong>מרכזי תעסוקה:</strong> קרבה לאזורי תעשייה, משרדים ומרכזי מסחר
                </li>
                <li>
                  <strong>שירותים ומסחר:</strong> נגישות לקניות, בידור ושירותים
                </li>
                <li>
                  <strong>מגמות דמוגרפיות:</strong> האם האוכלוסייה באזור גדלה או מצטמצמת
                </li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
                <h4 className="font-bold text-navy mb-3">כלים לבדיקת פוטנציאל השכרה:</h4>
                <ul className="list-disc mr-6 space-y-2">
                  <li>ניתוח מודעות השכרה באתרי נדל"ן</li>
                  <li>שיחות עם מתווכים מקומיים</li>
                  <li>בדיקת דוחות שוק של חברות נדל"ן</li>
                  <li>סקירת תוכניות פיתוח עירוניות</li>
                  <li>שיחות עם תושבים מקומיים ובעלי עסקים באזור</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">סיכום</h2>

              <p>
                רכישת דירה להשקעה היא החלטה משמעותית שדורשת בדיקה מקיפה ומקצועית. שלושת התחומים שסקרנו - כדאיות כלכלית,
                מצב משפטי ותכנוני, ופוטנציאל השכרה - הם הבסיס לכל השקעת נדל"ן מוצלחת.
              </p>

              <p>
                חשוב לזכור שהשקעה בנדל"ן היא מרתון ולא ספרינט. קחו את הזמן לבצע את כל הבדיקות הנדרשות, והיעזרו באנשי
                מקצוע - שמאי מקרקעין, עורך דין המתמחה בנדל"ן ויועץ מס - כדי להבטיח השקעה מוצלחת לטווח ארוך.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-navy my-6">
                <h4 className="font-bold text-navy mb-2">זכרו:</h4>
                <p>
                  השקעה מוצלחת בנדל"ן מתחילה בבדיקות מקדימות יסודיות. הזמן והמשאבים שתשקיעו בשלב זה יחסכו לכם כסף רב
                  וכאבי ראש בעתיד, ויגדילו משמעותית את סיכויי ההצלחה של ההשקעה.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">צריכים עזרה בבחירת נכס להשקעה?</h3>
              <p className="text-gray-700 mb-4">
                צוות המומחים שלנו יכול לסייע לכם בכל שלבי ההשקעה - מבדיקות מקדימות ועד לסיום העסקה.
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
