import { Building, UserCheck, Clock, Award } from "lucide-react"

export default function About() {
  const features = [
    {
      title: "מקצועיות",
      description: "צוות מומחים בתחומי הנדל״ן, המשפט והפיננסים",
      icon: Award,
    },
    {
      title: "אמינות",
      description: "עבודה שקופה והוגנת עם כל לקוח",
      icon: UserCheck,
    },
    {
      title: "זמינות",
      description: "ליווי אישי ומענה מהיר לאורך כל הדרך",
      icon: Clock,
    },
    {
      title: "ניסיון",
      description: "שנים של ניסיון בליווי עסקאות מגוונות",
      icon: Building,
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">אודות בית לוי</h2>
          <p className="text-lg text-muted-foreground">
            "בית לוי שמאות ופיננסים" הוקמה במטרה לספק ללקוחותיה את כל מעטפת השירותים הנחוצים בעולם הנדל"ן – תחת גג אחד.
          </p>
        </div>

        <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
          <p className="text-gray-700 mb-6">
            אנו מתמחים בליווי משפטי לעסקאות נדל"ן, ייעוץ משכנתאות, שמאות מקרקעין וליווי נכסי נדל"ן מכל הסוגים. החברה
            פועלת בפרויקטים פרטיים, עסקיים וציבוריים – קטנים כגדולים – בכל רחבי הארץ, מתוך מחויבות לערכים של אמינות,
            מקצועיות, זמינות גבוהה ושירות אישי מדויק.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center"
              >
                <div className="h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-navy" />
                </div>
                <h3 className="text-navy font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
