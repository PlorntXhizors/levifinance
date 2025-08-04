import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, GraduationCap } from "lucide-react"
import Image from "next/image"

export default function Team() {
  const teamMembers = [
    {
      name: "נופר לוי",
      title: "מייסדת ומנכ״לית",
      description: 'בעלת תואר ראשון במשפטים, תואר שני במשפטים, תואר שני במנהל עסקים שמאות מקרקעין וניהול נדל"ן',
      image: "/placeholder.svg?height=300&width=300&text=נופר+לוי",
      email: "nofarlevi2603@gmail.com",
      phone: "055-649-296",
      specialties: ["דיני נדל״ן", "עסקאות מקרקעין", "ליווי משפטי"],
      education: "תואר ראשון LL.B, תואר ראשון LL.M, תואר שני M.B.A",
    },
    {
      name: "קובי לוי",
      title: "מנהל פרויקטים ומתווך עסקאות נדל״ן",
      description: "מתווך נדל״ן מוסמך ומנהל פרויקטים מנוסה המתמחה בליווי עסקאות נדל״ן מורכבות וניהול פרויקטי בנייה.",
      image: "/placeholder.svg?height=300&width=300&text=קובי+לוי",
      email: "kobi.levi@beitlevi.co.il",
      phone: "054-123-4567",
      specialties: ["תיווך נדל״ן", "ניהול פרויקטים", "ליווי עסקאות"],
      education: "הכשרה לניהול פרוייקטים, רישיון תיווך נדל״ן",
    },
    {
      name: "לין לוי",
      title: "שותפה ויועצת משפטית",
      description: "יועצת משכנתאות וכלכלנית עם נסיון עשיר בתחום וגם בליווי פרויקטים נדלן.",
      image: "/placeholder.svg?height=300&width=300&text=לין+לוי",
      email: "lin.levi@beitlevi.co.il",
      phone: "052-987-6543",
      specialties: ["שמאות מקרקעין", "ייעוץ משכנתאות", "ניהול פרויקטים"],
      education: "תואר ראשון בכלכלה, רישיון שמאי מקרקעין",
    },
  ]

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">הצוות שלנו</h2>
          <p className="text-lg text-muted-foreground">
            צוות מומחים מנוסה ומקצועי שמביא איתו שנים של ניסיון בתחומי הנדל״ן, המשפט והפיננסים
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="absolute top-0 right-0 h-2 w-20 gold-gradient"></div>
              <CardHeader>
                <div className="flex items-start gap-6">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-navy mb-1">{member.name}</CardTitle>
                    <p className="text-accent font-semibold mb-2">{member.title}</p>
                    <CardDescription className="text-muted-foreground">{member.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      התמחויות
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span key={i} className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy mb-1">השכלה</h4>
                    <p className="text-sm text-gray-600">{member.education}</p>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-navy hover:text-accent transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>אימייל</span>
                    </a>
                    <a
                      href={`tel:${member.phone.replace(/-/g, "")}`}
                      className="flex items-center gap-2 text-sm text-navy hover:text-accent transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span>טלפון</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <a href="#contact">צרו קשר עם הצוות</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
