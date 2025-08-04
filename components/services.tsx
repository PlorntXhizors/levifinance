import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Home, ScaleIcon as Scales, LineChart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      title: "ייעוץ משכנתאות",
      description:
        "בחירה נכונה במשכנתא יכולה לחסוך לכם מאות אלפי שקלים. אנחנו נבנה עבורכם תמהיל חכם, ננהל מו״מ עם הבנקים – ואתם תיהנו מראש שקט.",
      icon: Calculator,
      features: ["תמהיל משכנתא מותאם אישית", "ניהול מו״מ עם הבנקים", "חיסכון של עשרות אלפי שקלים"],
    },
    {
      title: "שמאות מקרקעין",
      description:
        "דו״ח שמאי מקצועי ומדויק – המפתח לעסקה בטוחה. עם ניסיון רב והיכרות עמוקה עם השטח, אנחנו כאן כדי להעריך את הנכס באמת.",
      icon: Scales,
      features: ["הערכות שווי מהימנות", "חוות דעת לבית משפט", "בדיקות זכויות ותוכניות"],
    },
    {
      title: "ליווי משפטי בעסקאות נדל״ן",
      description:
        "רוכשים או מוכרים דירה? בעסקה עם יזם? אנחנו נדאג לכל ההיבטים המשפטיים – חוזים, בדיקות, רישום, מיסוי ועוד.",
      icon: Home,
      features: ["ניסוח ובדיקת הסכמי מכר", "טיפול בהיבטי מיסוי", "רישום בטאבו"],
    },
    {
      title: "ליווי נכסי נדל״ן",
      description:
        "מהשקעה בדירה ועד ניהול פרויקטים – אנו מציעים ליווי מקצועי למשקיעים, חברות ויזמים, כולל ניתוח כדאיות, בדיקות זכויות, תכנון וניהול.",
      icon: LineChart,
      features: ["ניתוחים כלכליים", "תכנון אסטרטגי", "בדיקות שמאיות מקדימות"],
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">השירותים שלנו</h2>
          <p className="text-lg text-muted-foreground">שירותים מקצועיים. תוצאה מדויקת.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="absolute top-0 right-0 h-2 w-20 gold-gradient"></div>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between group" asChild>
                  <Link href="#contact">
                    <span>קבל ייעוץ ראשוני</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="#contact">לתיאום פגישה</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
