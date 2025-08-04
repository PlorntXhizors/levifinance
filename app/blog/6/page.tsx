import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrePurchaseAppraisalPage() {
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
                  <span>10 בדצמבר 2024</span>
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
                מה נותן יתרון לעשות שמאות מוקדמת לנכס לפני רכישה
              </h1>

              <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/modern-apartment-building.png"
                  alt="שמאות מקרקעין לפני רכישת נכס"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                רכישת נכס היא אחת ההחלטות הפיננסיות המשמעותיות ביותר שאנו מקבלים בחיינו. בין אם מדובר בדירה למגורים או
                בנכס להשקעה, מדובר בהשקעה של מאות אלפי או מיליוני שקלים. למרות זאת, רבים מהרוכשים מקבלים החלטות על סמך
                מידע חלקי, תחושות בטן או לחץ מצד המוכר או המתווך. במאמר זה נסביר מדוע ביצוע שמאות מקרקעין מקצועית לפני
                רכישת נכס היא אחת ההחלטות החכמות ביותר שתוכלו לקבל.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-navy">
                <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  מהי שמאות מקדמית?
                </h3>
                <p className="text-gray-700">
                  שמאות מקדמית (או שמאות לפני רכישה) היא הערכת שווי מקצועית של נכס המבוצעת על ידי שמאי מקרקעין מוסמך טרם
                  רכישתו. השמאות כוללת ניתוח מקיף של הנכס, מצבו הפיזי, המשפטי והתכנוני, וקביעת שוויו ההוגן בהתבסס על
                  נתוני שוק עדכניים ומתודולוגיות מקצועיות.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">סיכום</h2>

              <p>
                שמאות מקדמית היא כלי חיוני בתהליך רכישת נכס, המספק מידע מקצועי, אובייקטיבי ומקיף על הנכס ושוויו. ההשקעה
                הקטנה יחסית בשמאות מקדמית יכולה לחסוך סכומים משמעותיים, למנוע טעויות יקרות ולהעניק שקט נפשי בעסקה
                המשמעותית של רכישת נכס.
              </p>

              <p>
                בעולם הנדל"ן, שבו כל טעות עלולה לעלות עשרות ומאות אלפי שקלים, שמאות מקדמית היא לא מותרות - היא הכרח.
                זכרו: ידע הוא כוח, ובעסקאות נדל"ן, ידע מקצועי ואובייקטיבי הוא המפתח להצלחה.
              </p>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">מעוניינים בשמאות מקדמית לנכס?</h3>
              <p className="text-gray-700 mb-4">
                צוות השמאים המוסמכים שלנו מתמחה בביצוע שמאויות מקדמיות מקיפות ומדויקות. נשמח לסייע לכם לקבל החלטת רכישה
                מושכלת.
              </p>
              <Button asChild>
                <Link href="/#contact">צרו קשר לתיאום שמאות</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
