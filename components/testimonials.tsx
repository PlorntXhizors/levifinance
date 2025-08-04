import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      text: "בית לוי ליוו אותי באופן מקצועי וסבלני בכל התהליך של רכישת הדירה. חסכו לי הרבה כסף בייעוץ המשכנתא והיו זמינים לכל שאלה.",
      name: "רועי כהן",
      role: "רכש דירה בחיפה",
    },
    {
      text: "קיבלתי ליווי מעולה בעסקת מכירת נכס מסחרי. הצוות המקצועי של בית לוי ידע לתת מענה לכל סוגיה משפטית וכלכלית שצצה.",
      name: "מיכל לוי",
      role: "יזמית נדל״ן",
    },
    {
      text: "שירות מקצועי ואדיב בשמאות הנכס שלנו. קיבלנו דו״ח מפורט ומדויק שעזר לנו מאוד בקבלת החלטות.",
      name: "דן ישראלי",
      role: "משקיע",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">המלצות לקוחות</h2>
          <p className="text-lg text-muted-foreground">מה לקוחותינו אומרים על השירות שלנו</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
                <div className="flex flex-col">
                  <span className="font-bold text-navy">{testimonial.name}</span>
                  <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
